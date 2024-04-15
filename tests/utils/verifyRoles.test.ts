import { expect, it, describe } from 'vitest';
import { verifyRoles } from '../../src/utils/verifyRoles';
import { TPermission } from '../../src/constants/Roles';

describe('verify roles', () => {
    it('It sould return true if roles matches', () => {
        const userRoles = [1, 2, 3];
        const wantedRoles: TPermission[] = [{
            obj: 'products',
            permissions: ['create'],
        }, {
            obj: 'categories',
            permissions: ['create'],
        }];
        const res = verifyRoles(userRoles, wantedRoles);
        expect(res).toBe(true);
    });

    it('It sould return false if roles doesnt matches', () => {
        const userRoles = [1];
        const wantedRoles: TPermission[] = [{
            obj: 'products',
            permissions: ['create'],
        }];
        const res = verifyRoles(userRoles, wantedRoles);
        expect(res).toBe(false);
    });

    it('It sould return true if empty roles', () => {
        const userRoles: any[] = [];
        const wantedRoles: TPermission[] = [{
            obj: 'products',
            permissions: ['create'],
        }];
        const res = verifyRoles(userRoles, wantedRoles);
        expect(res).toBe(false);
    });

    it('It sould return true if diferent roles provided matches', () => {
        const userRoles = [1, 2];
        const wantedRoles: TPermission[] = [{
            obj: 'products',
            permissions: ['create'],
        }, {
            obj: 'users',
            permissions: ['create'],
        }];
        const res = verifyRoles(userRoles, wantedRoles);
        expect(res).toBe(true);
    });

    it('It sould return false if diferent roles provided doesnt matches', () => {
        const userRoles = [1];
        const wantedRoles: TPermission[] = [{
            obj: 'products',
            permissions: ['create'],
        }, {
            obj: 'users',
            permissions: ['create'],
        }];
        const res = verifyRoles(userRoles, wantedRoles);
        expect(res).toBe(false);
    });
});