import { NextFunction, Request, Response } from 'express';
import { AppError } from '../utils/Errors/AppError';
import { Roles, TPermission } from '../constants/Roles';
import { verifyRoles } from '../utils/verifyRoles';

/** this middleware assume that the user already loggend in it will raise an error and stop immediately the resquest with a 400 status */
const verifyRolesMiddleware =
    (wantedPermissions: TPermission[]) =>
        (req: any, _res: Response, next: NextFunction) => {

            const userRoles: number[] | undefined = req.jwt.roles;
            if (!userRoles) {
                return next(
                    new AppError(
                        'NOT_AUTHORIZED',
                        'Veuillez vérifier que vous utilisez ce middleware après le middleware de validation du jeton JWT',
                        true,
                    ),
                );
            }

            // Parcourir chaque permission demandée
            for (const permission of wantedPermissions) {
                // Vérifier chaque rôle de l'utilisateur
                for (const roleId of userRoles) {
                    const rolePermissions = Roles[roleId];
                    if (!rolePermissions) {
                        return next(
                            new AppError(
                                'ROLE_NOT_FOUND',
                                `Le rôle avec l'ID ${roleId} n'a pas été trouvé.`,
                                true,
                            ),
                        );
                    }
                }
            }

            const res = verifyRoles(userRoles, wantedPermissions);

            if (!res) {
                return next(
                    new AppError(
                        'NOT_AUTHORIZED',
                        `Vous ne possedez pas toutes les permissions requises`,
                        true,
                    ),
                );
            }

            // Si toutes les vérifications réussissent, passer à l'étape suivante
            next();
        };

export { verifyRolesMiddleware };
