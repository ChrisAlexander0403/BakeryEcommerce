import { NextFunction, Request, Response, Router } from "express";
import UserAlreadyExistsError from "../../../../domain/exceptions/user/UserAlreadyExistsError";
import UserNotFoundError from "../../../../domain/exceptions/user/UserNotFoundError";
import userRouter from "./user.routes";

const router = Router();

// router.use("/services", servicesRouter);
// router.use("/customers", customerRouter);
// router.use("/subscriptions", subscriptionRouter);

router.use("/users", userRouter);

router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    
    //#region 
    // User errors ------------------------------------------------
    if (err instanceof UserNotFoundError) {
        res.status(404).json({
            message: err.message
        });
    }

    else if (err instanceof UserAlreadyExistsError) {
        res.status(400).json({
            message: err.message
        });
    }
    //#endregion

    else {
        // next(err);
        console.log(err);
        res.status(500).json({
            error: "Something went wrong"
        });
    }
});

// router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    
// });

export default router;