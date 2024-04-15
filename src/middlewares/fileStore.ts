import multer from 'multer';
import { NextFunction, Request, Response } from 'express';
import slugify from 'slugify';
import { AppError } from '../utils/Errors/AppError';

const storage = multer.diskStorage({
    destination: function(_req, _file, cb) {
        cb(null, 'public/images');
    },
    filename: function(_req, file, cb) {
        cb(null, Date.now() + '-' + slugify(file.originalname.toLowerCase()));
    },
});

const upload = multer({ storage: storage });

const uploadSingle = (fieldName: string) => (req: Request, res: Response, next: NextFunction) => {
    upload.single(fieldName)(req, res, (err) => {
        console.log('here');
        if (err instanceof multer.MulterError) {
            // Erreur multer (par exemple, dépassement de la limite de fichier)
            return res.status(400).json({ msg: 'Une erreur de téléchargement de fichier s\'est produite.', err });
        } else if (err) {
            // Autre erreur
            return res.status(500).json({
                msg: 'Une erreur s\'est produite lors du téléchargement de fichier.',
                err,
            });
        }
        next();
    });
};
const uploadM = (req: Request, res: Response, next: NextFunction) => {
    upload.fields([
        { name: 'thumbnail', maxCount: 1 }, // Un seul fichier pour le champ "thumbnail"
        { name: 'images', maxCount: 10 }, // Jusqu'à 10 fichiers pour le champ "images"
    ])(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // Erreur multer (par exemple, dépassement de la limite de fichier)
            return res.status(400).json({ msg: 'Une erreur de téléchargement de fichier s\'est produite.', err });
        } else if (err) {
            // Autre erreur
            return res.status(500).json({
                msg: 'Une erreur s\'est produite lors du téléchargement de fichier.',
                err,
            });
        }
        next();
    });
};

const hydradeBody = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body = JSON.parse(req.body.body);
        console.log(req.body);
        if (!req.body.update) req.body.update = {};

        const files = req.files as { [fieldname: string]: Express.Multer.File[] };
        if (files) {
            Object.keys(files).forEach(key => {
                if (files) {
                    if (files[key].length > 1 || key.endsWith('s')) {
                        req.body[key] = files[key].map(file => {
                            return `${process.env.API_URI}/${file.path}`;
                        });
                        req.body.update[key] = files[key].map(file => {
                            return `${process.env.API_URI}/${file.path}`;
                        });
                    } else if (files[key].length === 1) {
                        req.body[key] = `${process.env.API_URI}/${files[key][0].path}`;
                        req.body.update[key] = `${process.env.API_URI}/${files[key][0].path}`;
                    }
                }
            });
        } else if (req.file) {
            req.body[req.file.fieldname] = `${process.env.API_URI}/${req.file.path}`;
            req.body.update[req.file.fieldname] = `${process.env.API_URI}/${req.file.path}`;
        }

        next();
    } catch (err: any) {
        if (err.name === 'SyntaxError') {
            console.log('err');
            return next(new AppError('BAD_ENTRY', `body is not provided or inconsitent, it should be a valid JSON string`, true));
        }
        next(new AppError('ERROR', `Unknow expection when uploading file`, false));
    }
};


export { upload, uploadM, hydradeBody, uploadSingle };

// app.post('/upload', upload.fields([
//     { name: 'thumbnail', maxCount: 1 }, // Un seul fichier pour le champ "thumbnail"
//     { name: 'images', maxCount: 10 }    // Jusqu'à 10 fichiers pour le champ "images"
//   ]), (req, res) => {
//     // `req.files` contient les informations sur les fichiers téléchargés
//     console.log('Fichier thumbnail téléchargé:', req.files['thumbnail'][0]);
//     console.log('Fichiers images téléchargés:', req.files['images']);

//     // Réponse au client
//     res.send('Fichiers téléchargés avec succès.');
//   });

// const MonComposant = () => {
//     const [thumbnail, setThumbnail] = useState(null);
//     const [images, setImages] = useState([]);

//     const handleSubmit = async (event) => {
//       event.preventDefault();

//       const formData = new FormData();
//       formData.append('thumbnail', thumbnail);

//       images.forEach((image) => {
//         formData.append('images', image);
//       });

//       try {
//         const response = await axios.post('URL_de_votre_endpoint', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         console.log('Réponse du serveur:', response.data);
//       } catch (error: any) {
//         console.error('Erreur lors de l\'envoi du formulaire:', error);
//       }
//     };

//     const handleThumbnailChange = (event) => {
//       setThumbnail(event.target.files[0]);
//     };

//     const handleImagesChange = (event) => {
//       setImages([...event.target.files]);
//     };

//     return (
//       <form onSubmit={handleSubmit}>
//         <label>
//           Thumbnail:
//           <input type="file" onChange={handleThumbnailChange} />
//         </label>
//         <br />
//         <label>
//           Images:
//           <input type="file" multiple onChange={handleImagesChange} />
//         </label>
//         <br />
//         <button type="submit">Envoyer</button>
//       </form>
//     );
//   };

//   export default MonComposant;
