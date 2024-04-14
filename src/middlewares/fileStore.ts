import multer from 'multer';
import { NextFunction, Request, Response } from 'express';
import slugify from 'slugify';

const storage = multer.diskStorage({
    destination: function(_req, _file, cb) {
        cb(null, 'public/images');
    },
    filename: function(_req, file, cb) {
        cb(null, Date.now() + '-' + slugify(file.originalname.toLowerCase()));
    },
});

const upload = multer({ storage: storage });
const uploadM = (req, res, next) => {
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
    req.body = JSON.parse(req.body.body);
    if (!req.body.update) req.body.update = {};

    if (req.files) {
        Object.keys(req.files).forEach(key => {
            if (req.files) {
                if (req.files[key].length > 1 || key.endsWith('s')) {
                    req.body[key] = req.files[key].map(file => {
                        return `${process.env.API_URI}/${file.path}`;
                    });
                    req.body.update[key] = req.files[key].map(file => {
                        return `${process.env.API_URI}/${file.path}`;
                    });
                } else if (req.files[key].length === 1) {
                    req.body[key] = `${process.env.API_URI}/${req.files[key][0].path}`;
                    req.body.update[key] = `${process.env.API_URI}/${req.files[key][0].path}`;
                }
            }
        });
    } else if (req.file) {
        req.body[req.file.fieldname] = `${process.env.API_URI}/${req.file.path}`;
        req.body.update[req.file.fieldname] = `${process.env.API_URI}/${req.file.path}`;
    }

    next();
};


export { upload, uploadM, hydradeBody };

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
//       } catch (error) {
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
