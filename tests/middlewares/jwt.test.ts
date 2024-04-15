import { describe, it, expect, vi } from 'vitest';
import Request from 'supertest';
import httpMocks from 'node-mocks-http';
import { app } from '../../src/appInit';
import { authToken } from '../../src/middlewares/jwt';
import { NextFunction } from 'express';

describe('JWT Middleware', () => {
    it('should', async () => {
        // get a real response from the register api with token
        const user = {
            email: 'brightefoo@gmail.com',
            password: 'brightkyefoo',
        };
        const res = await Request(app).post('api/v1/users/auth/login').send(user);

        const req = httpMocks.createRequest({
            headers: { Authorization: `Bearer ${res.body.token}` },
        });
        const resp = httpMocks.createResponse();
        const nextObj: { fn: NextFunction } = {
            fn: (route?: string) => {
            },
        };
        const spy = vi.spyOn(nextObj, 'fn');

        await authToken(req, resp, <NextFunction>spy.getMockImplementation());

        expect(nextObj.fn()).toHaveBeenCalled();
    });
});