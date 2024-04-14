const possiblesPermissions = ['create', 'read', 'update', 'delete'] as const;

const possiblesObjs = ['users', 'products', 'categories'] as const;

type TPermission = {
    obj: (typeof possiblesObjs)[number];
    permissions: (typeof possiblesPermissions)[number][];
};

type TRoles = {
    [key: number]: TPermission[];
};

const roles: TRoles = {
    1: [
        {
            obj: 'users',
            permissions: ['create', 'read', 'update', 'delete'],
        },
    ],
    2: [
        {
            obj: 'products',
            permissions: ['create', 'read', 'update', 'delete'],
        },
    ],
    3: [
        {
            obj: 'categories',
            permissions: ['create', 'read', 'update', 'delete'],
        },
    ],
};

export { roles as Roles, TPermission, TRoles };
