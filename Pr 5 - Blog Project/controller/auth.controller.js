

exports.loginpage = async (req, res) => {
    try {
        return res.render('login');
    } catch (error) {
        console.log(error);

    }
}
exports.dashboardpage = async (req, res) => {
    try {
        return res.render('dashboard')
    } catch (error) {
        console.log(error);
    }
}

