const { Permission, RolePermission } = require("../models");

exports.checkPermission = () => {
  return async (req, res, next) => {


    try {
      const method = req.method;

      const routePath = req.route?.path;
      const baseUrl = req.baseUrl;

      if (!routePath) {
        return res.status(500).json({
          message: "Route path not found"
        });
      }

      const url = (baseUrl + routePath).replace(/\/$/, "");

      const permission = await Permission.findOne({
        where: {
          method,
          url
        }
      });

      if (!permission) {
        return res.status(403).json({
          message: `Permission not found for ${method} ${url}`
        });
      }

      const rolePermission = await RolePermission.findOne({
        where: {
          role_id: req.user.role_id,
          permission_id: permission.id
        }
      });

      if (!rolePermission) {
        return res.status(403).json({
          message: "Forbidden: Access denied"
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};