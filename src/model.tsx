export interface ILoginData {
    username: string;
    password: string;
}; 

export interface IAuthContext {
    isAuth: boolean,
    login: () => void,
    logout: () => void
};

export interface IActionParams {
    request: object,
    params: object
};

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export type validateFunctionType = (value: string) => boolean;

export enum Mode {
    SignIn = "Sign In",
    SignUp = "Sign Up"
};

export interface IContextMenuItem {
    title: string,
    isVisible: boolean,
    clickHandler: () => void
}