const { dbGetFullUsers } = require('../../middlewares/clientUserInfor');
const { isTokenValid } = require('../../middlewares/createToken');
const { dbUserInforByID } = require('../../middlewares/queryDB');
class UsersInforController {
    getFullUsersInfor = async (req, res) => {
        const users = await dbGetFullUsers();
        console.log(users.rows);
        res.json(users.rows);
    };

    userProfile = async (req, res) => {
        if (!isTokenValid(req, res)) {
            return res.json({
                message: 'Unauthorized',
            });
        }
        const token = req.headers.authorization.slice(7);
        const [header, payload, signature] = token.split('.');
        const payloadData = atob(payload);
        const userid = JSON.parse(payloadData);
        const user = await dbUserInforByID(userid.subj);
        return res.json(user);
    };
}

module.exports = new UsersInforController();
