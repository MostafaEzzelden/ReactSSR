/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_USERS = exports.FETCH_USERS = 'fetch_users';
var fetchUsers = exports.fetchUsers = function fetchUsers() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return api.get('/users');

                        case 2:
                            res = _context.sent;


                            dispatch({
                                type: FETCH_USERS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x, _x2, _x3) {
            return _ref.apply(this, arguments);
        };
    }();
};

var FETCH_TODOS = exports.FETCH_TODOS = 'fetch_todos';
var fetchTodos = exports.fetchTodos = function fetchTodos() {
    return function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return api.get('/todos');

                        case 2:
                            res = _context2.sent;

                            dispatch({
                                type: FETCH_TODOS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, undefined);
        }));

        return function (_x4, _x5, _x6) {
            return _ref2.apply(this, arguments);
        };
    }();
};

var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';
var fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {
    return function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            _context3.next = 2;
                            return api.get('/users/me');

                        case 2:
                            res = _context3.sent;

                            dispatch({
                                type: FETCH_CURRENT_USER,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, undefined);
        }));

        return function (_x7, _x8, _x9) {
            return _ref3.apply(this, arguments);
        };
    }();
};

var FETCH_ADMINS = exports.FETCH_ADMINS = 'fetch_admins';
var fetchAdmins = exports.fetchAdmins = function fetchAdmins() {
    return function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            _context4.next = 2;
                            return api.get('/admins');

                        case 2:
                            res = _context4.sent;


                            dispatch({
                                type: FETCH_ADMINS,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, undefined);
        }));

        return function (_x10, _x11, _x12) {
            return _ref4.apply(this, arguments);
        };
    }();
};

var LOGOUT_USER = exports.LOGOUT_USER = 'logout_user';
var logout = exports.logout = function logout() {
    return function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(dispatch, getState, api) {
            var res;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            _context5.next = 2;
                            return api.delete('/users/me/token');

                        case 2:
                            res = _context5.sent;


                            dispatch({
                                type: LOGOUT_USER,
                                payload: res
                            });

                        case 4:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, undefined);
        }));

        return function (_x13, _x14, _x15) {
            return _ref5.apply(this, arguments);
        };
    }();
};

var TOGGLE_LOGIN_FORM = exports.TOGGLE_LOGIN_FORM = 'toggle_login_form';

var setLoginForm = exports.setLoginForm = function setLoginForm(status) {
    return {
        type: TOGGLE_LOGIN_FORM,
        status: status
    };
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _App = __webpack_require__(21);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(25);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _RegisterPage = __webpack_require__(26);

var _RegisterPage2 = _interopRequireDefault(_RegisterPage);

var _UsersListPage = __webpack_require__(27);

var _UsersListPage2 = _interopRequireDefault(_UsersListPage);

var _NotFoundPage = __webpack_require__(28);

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _TodosListPage = __webpack_require__(29);

var _TodosListPage2 = _interopRequireDefault(_TodosListPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({}, _HomePage2.default, {
        path: '/',
        exact: true
    }), _extends({}, _RegisterPage2.default, {
        path: '/register'
    }), _extends({}, _TodosListPage2.default, {
        path: '/todos'
    }), _extends({}, _UsersListPage2.default, {
        path: '/users'
    }), _extends({}, _NotFoundPage2.default)]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _mongoose = __webpack_require__(5);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _validator = __webpack_require__(44);

var _validator2 = _interopRequireDefault(_validator);

var _jsonwebtoken = __webpack_require__(45);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _lodash = __webpack_require__(11);

var _lodash2 = _interopRequireDefault(_lodash);

var _bcryptjs = __webpack_require__(46);

var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserSchema = new _mongoose2.default.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: _validator2.default.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    age: {
        type: Number,
        default: null
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
}, {
    usePushEach: true
});

UserSchema.methods.toJSON = function () {
    var userObject = this.toObject();
    return _lodash2.default.pick(userObject, ['_id', 'email', 'username']);
};

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = _jsonwebtoken2.default.sign({
        _id: user._id.toHexString(),
        access: access
    }, process.env.APP_KEY).toString();

    user.tokens.push({
        access: access,
        token: token
    });
    return user.save().then(function () {
        return token;
    });
};

UserSchema.methods.removeToken = function (token) {
    var user = this;
    return user.update({
        $pull: {
            tokens: {
                token: token
            }
        }
    });
};

UserSchema.statics.findByToken = function (token) {
    var User = this;
    var decoded;
    try {
        decoded = _jsonwebtoken2.default.verify(token, process.env.APP_KEY);
    } catch (e) {
        return Promise.reject();
    }
    return User.findOne({
        '_id': decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'
    });
};

UserSchema.statics.findByCredentials = function (email, password) {
    var User = this;
    return User.findOne({
        email: email
    }).then(function (user) {
        if (!user) {
            return Promise.reject();
        }
        return new Promise(function (resolve, reject) {
            // Use bcrypt.compare to compare password and user.password
            _bcryptjs2.default.compare(password, user.password, function (err, res) {
                if (res) {
                    resolve(user);
                } else {
                    reject();
                }
            });
        });
    });
};

UserSchema.pre('save', function (next) {
    var user = this;
    if (user.isModified('password')) {
        _bcryptjs2.default.genSalt(10, function (err, salt) {
            _bcryptjs2.default.hash(user.password, salt, function (err, hash) {
                user.password = hash;
                next();
            });
        });
    } else {
        next();
    }
});

var User = _mongoose2.default.model('User', UserSchema);

exports.User = User;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(14);

var _express = __webpack_require__(15);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(4);

var _bodyParser = __webpack_require__(16);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = __webpack_require__(17);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cookieSession = __webpack_require__(18);

var _cookieSession2 = _interopRequireDefault(_cookieSession);

var _config = __webpack_require__(19);

var _config2 = _interopRequireDefault(_config);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(30);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(33);

var _createStore2 = _interopRequireDefault(_createStore);

var _mongoose = __webpack_require__(40);

var _todoRoutes = __webpack_require__(41);

var _todoRoutes2 = _interopRequireDefault(_todoRoutes);

var _userRoutes = __webpack_require__(43);

var _userRoutes2 = _interopRequireDefault(_userRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());

// app.use(cookieParser());

app.use((0, _cookieSession2.default)({
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    keys: [process.env.COOKIE_KEY],
    name: "_token"
}));

app.use(_express2.default.static('public'));

(0, _todoRoutes2.default)(app);

(0, _userRoutes2.default)(app);

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)(req, res);
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        // console.log(route.loadData ? route.loadData.toString() : null)
        return route.loadData ? route.loadData(store) : null;
    }).map(function (promise) {
        if (promise) {
            return new Promise(function (resolve, reject) {
                promise.then(function (value) {
                    resolve(value);
                }).catch(resolve);
            });
        }
    });

    Promise.all(promises).then(function (val) {
        var context = {};
        var content = (0, _renderer2.default)(req, store, context);

        if (context.url) {
            return res.redirect(301, context.url);
        }

        if (context.notFound) {
            res.status(404);
        }
        res.send(content);
    });
});

app.listen(process.env.PORT, function () {
    console.log('Listening on prot ' + process.env.PORT);
});

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("cookie-session");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
    var config = __webpack_require__(20);
    var envConfig = config[env];
    Object.keys(envConfig).forEach(function (key) {
        return process.env[key] = envConfig[key];
    });
}

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {"test":{"PORT":3001,"MONGODB_URI":"mongodb://localhost:27017/ReactSSR","APP_KEY":"LZJXhzd3R5Lzssvd/dLm5tYF+PrI3g62yYcFaGKWj+E=","COOKIE_KEY":"LZJXhzd3R5Lzssvd/dLm5tYF+PrI3g62yYcFaGKWj+E=","JWT_ACCESS_TOKEN":"auth"},"development":{"PORT":3001,"MONGODB_URI":"mongodb://localhost:27017/ReactSSR","APP_KEY":"LZJXhzd3R5Lzssvd/dLm5tYF+PrI3g62yYcFaGKWj+E=","COOKIE_KEY":"LZJXhzd3R5Lzssvd/dLm5tYF+PrI3g62yYcFaGKWj+E=","JWT_ACCESS_TOKEN":"auth"}}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(4);

var _Header = __webpack_require__(22);

var _Header2 = _interopRequireDefault(_Header);

var _actions = __webpack_require__(1);

var _LoginFormModal = __webpack_require__(23);

var _LoginFormModal2 = _interopRequireDefault(_LoginFormModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes),
        _react2.default.createElement(_LoginFormModal2.default, null)
    );
};

exports.default = {
    component: App,
    loadData: function loadData(_ref2) {
        var dispatch = _ref2.dispatch;
        return dispatch((0, _actions.fetchCurrentUser)());
    }

};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'nav-wrapper' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/', className: 'brand-logo' },
                        'SSR'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'right' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/todos' },
                                'Todos'
                            )
                        ),
                        this.props.auth.user ? _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'a',
                                { href: '/', onClick: this.props.logout.bind(this) },
                                'Logout'
                            )
                        ) : _react2.default.createElement(
                            'span',
                            null,
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'javascript:void(0);', onClick: this.props.setLoginForm.bind(this, true) },
                                    'Login'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouterDom.Link,
                                    { to: '/register' },
                                    'Register'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

;

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
    logout: _actions.logout,
    setLoginForm: _actions.setLoginForm
})(Header);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactBootstrap = __webpack_require__(24);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_Component) {
    _inherits(LoginForm, _Component);

    function LoginForm(props) {
        _classCallCheck(this, LoginForm);

        var _this = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this, props));

        _this.handleHide = _this.handleHide.bind(_this);
        return _this;
    }

    _createClass(LoginForm, [{
        key: 'handleHide',
        value: function handleHide() {
            console.log(this);
            this.props.setLoginForm(false);
        }
    }, {
        key: 'render',
        value: function render() {
            var tooltip = _react2.default.createElement(
                _reactBootstrap.Tooltip,
                { id: 'modal-tooltip' },
                'wow.'
            );

            return _react2.default.createElement(
                _reactBootstrap.Modal,
                {
                    show: this.props.loginFormStatus,
                    onHide: this.handleHide,
                    'aria-labelledby': 'contained-modal-title',
                    bsSize: 'small'
                },
                _react2.default.createElement(
                    _reactBootstrap.Modal.Header,
                    { closeButton: true },
                    _react2.default.createElement(
                        _reactBootstrap.Modal.Title,
                        { id: 'contained-modal-title' },
                        'Contained Modal'
                    )
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Body,
                    null,
                    'Elit est explicabo ipsum',
                    _react2.default.createElement(
                        _reactBootstrap.OverlayTrigger,
                        { overlay: tooltip },
                        _react2.default.createElement(
                            'a',
                            { href: '#tooltip' },
                            'tooltip'
                        )
                    ),
                    ' ',
                    'eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.'
                ),
                _react2.default.createElement(
                    _reactBootstrap.Modal.Footer,
                    null,
                    _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.handleHide },
                        'Close'
                    )
                )
            );
        }
    }]);

    return LoginForm;
}(_react.Component);

function mapStateToProps(state) {
    return {
        loginFormStatus: state.auth.loginFormStatus
    };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, {
    setLoginForm: _actions.setLoginForm
})(LoginForm);

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    { className: 'center-align', style: { marginTop: '200px' } },
    _react2.default.createElement(
      'h3',
      null,
      'Welcome'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Check out these awesome features'
    )
  );
};

exports.default = {
  component: Home
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
				value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reduxForm = __webpack_require__(8);

var _reactHelmet = __webpack_require__(3);

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
				_inherits(Register, _Component);

				function Register(props) {
								_classCallCheck(this, Register);

								var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

								_this.state = {
												resError: null
								};
								_this.onSubmit = _this.onSubmit.bind(_this);
								return _this;
				}

				_createClass(Register, [{
								key: 'onSubmit',
								value: function onSubmit(data) {
												var _this2 = this;

												this.setState({ resError: null });
												_axios2.default.post('/api/users', data).then(function (res) {
																if (res.data.hasOwnProperty('errors') || res.data.hasOwnProperty('errmsg')) {
																				_this2.setState({ resError: res.data.hasOwnProperty('errmsg') ? 'This Email already exists' : 'Server Error Please try agin' });
																				// this.props.destroy()
																} else {
																				window.location.href = "/";
																}
												});
								}
				}, {
								key: 'head',
								value: function head() {
												return _react2.default.createElement(
																_reactHelmet.Helmet,
																null,
																_react2.default.createElement(
																				'title',
																				null,
																				'Company | Register'
																),
																_react2.default.createElement('meta', { property: 'og:title', content: 'Register' })
												);
								}
				}, {
								key: 'render',
								value: function render() {
												var _this3 = this;

												var _props = this.props,
												    handleSubmit = _props.handleSubmit,
												    submitSucceeded = _props.submitSucceeded;

												return _react2.default.createElement(
																'div',
																{ className: 'container' },
																_react2.default.createElement(
																				'div',
																				{ className: 'row' },
																				this.head(),
																				_react2.default.createElement(
																								'form',
																								{ ref: function ref(instance) {
																																return _this3.form = instance;
																												}, onSubmit: handleSubmit(this.onSubmit) },
																								_react2.default.createElement(
																												'h3',
																												null,
																												'Register'
																								),
																								_react2.default.createElement(_reduxForm.Field, {
																												name: 'username',
																												type: 'text',
																												component: renderField,
																												label: 'Username'
																								}),
																								_react2.default.createElement(_reduxForm.Field, {
																												name: 'email',
																												type: 'email',
																												component: renderField,
																												label: 'Email'
																								}),
																								this.state.resError && _react2.default.createElement(
																												'span',
																												{ className: 'red-text text-darken-4' },
																												this.state.resError
																								),
																								_react2.default.createElement(_reduxForm.Field, {
																												name: 'age',
																												type: 'number',
																												component: renderField,
																												label: 'Age'
																								}),
																								_react2.default.createElement(_reduxForm.Field, {
																												name: 'password',
																												type: 'password',
																												component: renderField,
																												label: 'Password'
																								}),
																								_react2.default.createElement(_reduxForm.Field, {
																												name: 'repassword',
																												type: 'password',
																												component: renderField,
																												label: 'RE-Password'
																								}),
																								_react2.default.createElement(
																												'div',
																												null,
																												_react2.default.createElement(
																																'button',
																																{
																																				type: 'submit',
																																				disabled: false,
																																				className: 'btn waves-effect waves-light' },
																																'Register'
																												)
																								)
																				)
																)
												);
								}
				}]);

				return Register;
}(_react.Component);

function mapStateToProps(state) {
				return {};
}

var renderField = function renderField(_ref) {
				var input = _ref.input,
				    label = _ref.label,
				    type = _ref.type,
				    _ref$meta = _ref.meta,
				    touched = _ref$meta.touched,
				    error = _ref$meta.error,
				    warning = _ref$meta.warning;
				return _react2.default.createElement(
								'div',
								{ className: 'form-group ' + (touched && (error && " red-text text-darken-4" || warning && " has-warning")) },
								_react2.default.createElement(
												'label',
												null,
												label
								),
								_react2.default.createElement(
												'div',
												null,
												_react2.default.createElement('input', _extends({}, input, { placeholder: label, type: type, className: 'form-control' })),
												_react2.default.createElement(
																'div',
																{ className: 'text-help' },
																touched && (error && _react2.default.createElement(
																				'span',
																				{ className: 'red-text text-darken-4' },
																				error
																) || warning && _react2.default.createElement(
																				'span',
																				{ className: 'orange-text text-darken-4' },
																				warning
																))
												)
								)
				);
};

var validate = function validate(values) {
				var errors = {};
				if (!values.username) errors.username = 'Required';else if (values.username.length < 6) errors.username = 'Must be 6 characters or than';

				if (!values.email) errors.email = 'Required';else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) errors.email = 'Invalid email address';

				if (!values.age) errors.age = 'Required';else if (isNaN(Number(values.age))) errors.age = 'Must be a number';else if (Number(values.age) < 18) errors.age = 'Sorry, you must be at least 18 years old';

				if (!values.password) errors.password = 'Required';else if (values.password.length < 5) errors.password = 'Must be 6 characters or than';

				if (!values.repassword) errors.repassword = 'Required';else if (values.password.length > 0 && values.password !== values.repassword) errors.repassword = 'RE-Password does not match';

				return errors;
};

var warn = function warn(values) {
				var warnings = {};
				if (values.age < 19) warnings.age = 'Hmm, you seem a bit young...';
				if (values.password && values.password.length < 7) warnings.password = 'Password is Weak...';
				return warnings;
};

Register = (0, _reduxForm.reduxForm)({
				form: 'syncValidationUser',
				validate: validate,
				warn: warn
})(Register);

exports.default = {
				component: (0, _reactRedux.connect)(mapStateToProps, {})(Register)
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersList = function (_Component) {
    _inherits(UsersList, _Component);

    function UsersList() {
        _classCallCheck(this, UsersList);

        return _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));
    }

    _createClass(UsersList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchUsers();
        }
    }, {
        key: 'renderUsers',
        value: function renderUsers() {
            return this.props.users.map(function (user) {
                return _react2.default.createElement(
                    'li',
                    { key: user.id },
                    user.name
                );
            });
        }
    }, {
        key: 'head',
        value: function head() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    this.props.users.length + ' Users Loaded'
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: 'Users App' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.head(),
                'Here\'s a big list of users:',
                _react2.default.createElement(
                    'ul',
                    null,
                    this.renderUsers()
                )
            );
        }
    }]);

    return UsersList;
}(_react.Component);

function mapStateToProps(state) {
    return {
        users: state.users
    };
}

function loadData(store) {
    return store.dispatch((0, _actions.fetchUsers)());
}

exports.default = {
    loadData: loadData,
    component: (0, _reactRedux.connect)(mapStateToProps, {
        fetchUsers: _actions.fetchUsers
    })(UsersList)
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage(_ref) {
    var _ref$staticContext = _ref.staticContext,
        staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;


    staticContext.notFound = true;

    return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
            "div",
            { className: "row" },
            _react2.default.createElement(
                "div",
                { className: "col s12 center-align", style: { marginTop: '200px' } },
                _react2.default.createElement(
                    "h3",
                    null,
                    "Ooops, Route not found."
                )
            )
        )
    );
};

exports.default = {
    component: NotFoundPage
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _reactHelmet = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TodosList = function (_Component) {
  _inherits(TodosList, _Component);

  function TodosList() {
    _classCallCheck(this, TodosList);

    return _possibleConstructorReturn(this, (TodosList.__proto__ || Object.getPrototypeOf(TodosList)).apply(this, arguments));
  }

  _createClass(TodosList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchTodos();
    }
  }, {
    key: 'renderTodos',
    value: function renderTodos() {
      return this.props.todos.map(function (todo) {
        return _react2.default.createElement(
          'li',
          { key: todo._id },
          todo.text
        );
      });
    }
  }, {
    key: 'head',
    value: function head() {
      return _react2.default.createElement(
        _reactHelmet.Helmet,
        null,
        _react2.default.createElement(
          'title',
          null,
          this.props.todos.length + ' Todos Loaded'
        ),
        _react2.default.createElement('meta', { property: 'og:title', content: 'Todos App' })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      // console.log(this.props.auth)
      return _react2.default.createElement(
        'div',
        null,
        this.head(),
        _react2.default.createElement(
          'ul',
          null,
          this.renderTodos()
        )
      );
    }
  }]);

  return TodosList;
}(_react.Component);

function mapStateToProps(state) {
  return {
    todos: state.todos,
    auth: state.auth
  };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchTodos)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, {
    fetchTodos: _actions.fetchTodos
  })(TodosList)
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(31);

var _reactRouterDom = __webpack_require__(7);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(4);

var _serializeJavascript = __webpack_require__(32);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(3);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store, context) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: context },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));

  var helmet = _reactHelmet.Helmet.renderStatic();

  return '\n    <html>\n      <head>\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n          window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(10);

var _reduxThunk = __webpack_require__(34);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _axios = __webpack_require__(9);

var _axios2 = _interopRequireDefault(_axios);

var _reducers = __webpack_require__(35);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, res) {
    var axiosInstance = _axios2.default.create({
        baseURL: req.protocol + '://' + req.hostname + (process.env.PORT ? ':' + process.env.PORT : '') + '/api',
        headers: {
            "cookie": req.get('cookie') || ''
        }
    });

    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));

    return store;
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(10);

var _reduxForm = __webpack_require__(8);

var _usersReducer = __webpack_require__(36);

var _usersReducer2 = _interopRequireDefault(_usersReducer);

var _todosReducer = __webpack_require__(37);

var _todosReducer2 = _interopRequireDefault(_todosReducer);

var _authReducer = __webpack_require__(38);

var _authReducer2 = _interopRequireDefault(_authReducer);

var _adminsReducer = __webpack_require__(39);

var _adminsReducer2 = _interopRequireDefault(_adminsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    form: _reduxForm.reducer,
    users: _usersReducer2.default,
    todos: _todosReducer2.default,
    auth: _authReducer2.default,
    admins: _adminsReducer2.default
});

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_TODOS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
    var action = arguments[1];

    switch (action.type) {
        case _actions.FETCH_CURRENT_USER:
            return _extends({}, state, {
                user: action.payload.data.status === 'success' && action.payload.data.user || false
            });
        case _actions.LOGOUT_USER:
            return _extends({}, state, {
                user: false
            });
        case _actions.TOGGLE_LOGIN_FORM:
            return _extends({}, state, {
                loginFormStatus: action.status || false
            });
        default:
            return state;
    }
};

var _actions = __webpack_require__(1);

var INITIAL_STATE = {
    user: false,
    loginFormStatus: false
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mongoose = undefined;

var _mongoose = __webpack_require__(5);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect(process.env.MONGODB_URI);
exports.mongoose = _mongoose2.default;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _todo = __webpack_require__(42);

exports.default = function (app) {
    app.get('/api/todos', function (req, res) {
        _todo.Todo.find({}).then(function (todos) {
            res.json(todos);
        }, function (e) {
            res.status(400).send(e);
        });
    });
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Todo = undefined;

var _mongoose = __webpack_require__(5);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = _mongoose2.default.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
    // _creator: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true
    // }
});

exports.Todo = Todo;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _lodash = __webpack_require__(11);

var _lodash2 = _interopRequireDefault(_lodash);

var _user = __webpack_require__(12);

var _authenticate = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
    app.post('/api/users', function (req, res) {
        var body = _lodash2.default.pick(req.body, ['username', 'email', 'age', 'password']);
        var user = new _user.User(body);
        user.save().then(function () {
            return user.generateAuthToken();
        }).then(function (token) {
            req.session = {
                _token: token
            };
            res.json(user);
        }).catch(function (e) {
            res.json(e);
        });
    });

    app.get('/api/users/me', _authenticate.authenticate, function (req, res) {
        res.json({
            'status': 'success',
            user: req.user
        });
    });

    app.delete('/api/users/me/token', _authenticate.authenticate, function (req, res) {
        req.user.removeToken(req.token).then(function () {
            req.session = {};
            res.status(200).json({
                'status': 'success'
            });
        }, function () {
            res.status(400).send();
        });
    });
};

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("validator");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.authenticate = undefined;

var _user = __webpack_require__(12);

var authenticate = function authenticate(req, res, next) {
    var token = req.session._token;
    _user.User.findByToken(token).then(function (user) {
        if (!user) {
            return Promise.reject();
        }
        req.user = user;
        req.token = token;
        next();
    }).catch(function (e) {
        res.status(401).send();
    });
};

exports.authenticate = authenticate;

/***/ })
/******/ ]);