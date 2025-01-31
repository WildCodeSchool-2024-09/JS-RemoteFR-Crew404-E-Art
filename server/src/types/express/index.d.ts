// to make the file a module and avoid the TypeScript error
export type {};

declare global {
  namespace Express {
    export interface Request {
      /* ************************************************************************* */
      // Add your custom properties here, for example:
      //
      // user?: { ... }
      /* ************************************************************************* */
      // Add user property to Request
      user?: {
        id: number;
        name: string;
        email: string;
        password: string;
        role_id?: number;
      };

      // Add oeuvre property to Request
      oeuvre?: {
        id: number;
        image: string;
        title: string;
        dimension: string;
        description: string;
        year: number;
        medium: string;
      };
    }
  }
}
