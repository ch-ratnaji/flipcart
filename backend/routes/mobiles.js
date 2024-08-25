

import { Router } from "express";




import { getAll, get } from "../data/mobile.js";


const router = Router();




router.get("/", async (req, res, next) => {
  try {
    const mobiles = await getAll();
    
      res.json({ mobiles: mobiles });
    
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const mobile = await get(req.params.id);
    res.json({ mobile: mobile });
  } catch (error) {
    next(error);
  }
});



export default router;
