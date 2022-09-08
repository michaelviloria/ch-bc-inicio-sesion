export const getHome = (req, res) => {
	res.render("home", { name: req.session.name });
};

// Login
export const getLogin = (req, res) => {
	if (req.isAuthenticated()) {
		const { username } = req.user;
		res.render("home", { username });
	} else res.render("login");
};

export const postLogin = (req, res) => {
	const { username } = req.user;
	res.render("home", { username });
};

export const getFailLogin = (req, res) => res.render("failLogin");

// Singup
export const getSignup = (req, res) => res.render("signup");

export const postSignup = (req, res) => {
	const { username } = req.user;
	res.render("home", { username });
};

export const getFailSignup = (req, res) => res.render("failSignup");

// Logout
export const getLogout = (req, res) => {
	req.logout((error) => {
		if (error) next(error);
	});
	res.redirect("/login");
};

export const failRoute = (req, res) => res.status(404).render("routing-error");
