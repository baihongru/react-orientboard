(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var blockActions = _reflux2.default.createActions(['setActiveBlock', 'removeBox', 'createBox', 'setBlockConfig', 'newComponent'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = blockActions;

},{"reflux":"reflux"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = _reflux2.default.createActions(['saveBoard', 'cloneBoard', 'createBoard', 'listBoards', 'findBoard', 'renameBoard', 'removeBoard', 'updateBoard', 'addBlock', 'moveBlock', 'removeBlock', 'getDisplayLink', 'openDisplayLink', 'publishBoard'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = actions;

},{"reflux":"reflux"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = _reflux2.default.createActions(['startDrag', 'stopDrag', 'startRotate', 'startResize', 'stopAll', 'addZIndex', 'removeBox', 'init', 'openConfig'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = actions;

},{"reflux":"reflux"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = _reflux2.default.createActions(['addUser', 'removeUserConfrim', 'removeUser', 'updateUser', 'listUser', 'changePassword'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = actions;

},{"reflux":"reflux"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = _reflux2.default.createActions(['setActiveBlock', 'setActiveBox', 'setActiveBoard', 'setApp'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = actions;

},{"reflux":"reflux"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var actions = _reflux2.default.createActions(['openBlockConfig', 'closeBlockConfig', 'openBoardConfig', 'closeBoardConfig', 'setMode', 'setTheme'].reduce(function (pv, cv) {
  pv[cv] = { asyncResult: true };
  return pv;
}, {}));

exports.default = actions;

},{"reflux":"reflux"}],7:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _CloudApp = require('./components/CloudApp');

var _CloudApp2 = _interopRequireDefault(_CloudApp);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _util.initStores)();

_reactDom2.default.render(_react2.default.createElement(_CloudApp2.default, {
  __self: undefined
}), document.querySelector('#mount-app'));

},{"./components/CloudApp":8,"./lib/util":13,"react":"react","react-dom":"react-dom"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactBootstrap = require('react-bootstrap');

var _block = require('../actions/block');

var _block2 = _interopRequireDefault(_block);

var _box = require('../actions/box');

var _box2 = _interopRequireDefault(_box);

var _ui = require('../stores/ui');

var _ui2 = _interopRequireDefault(_ui);

var _select = require('../actions/select');

var _select2 = _interopRequireDefault(_select);

var _select3 = require('../stores/select');

var _select4 = _interopRequireDefault(_select3);

var _cloudui = require('../actions/cloudui');

var _cloudui2 = _interopRequireDefault(_cloudui);

var _cloudui3 = require('../stores/cloudui');

var _cloudui4 = _interopRequireDefault(_cloudui3);

var _app = require('../css/app.css');

var _app2 = _interopRequireDefault(_app);

var _components = require('../lib/components');

var _components2 = _interopRequireDefault(_components);

var _Notification = require('./Notification');

var _CloudTR = require('./CloudTR');

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserType = { "admin": "管理员", "worker": "开发者", "guest": "使用者" };

function _jsonReq(method, data, endpoint) {
  var opts = {
    method: method,
    data: JSON.stringify(data),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    url: endpoint
  };
  if (method === 'GET') opts.data = data;else {
    opts.data = JSON.stringify(data);
    opts.contentType = 'application/json; charset=utf-8';
    opts.dataType = 'json';
  }
  return _jquery2.default.ajax(opts);
}

var AlertDismissable = (0, _autobindDecorator2.default)(_class = function (_React$Component) {
  _inherits(AlertDismissable, _React$Component);

  function AlertDismissable(props) {
    _classCallCheck(this, AlertDismissable);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(AlertDismissable).call(this, props));

    _this.state = {
      alertVisible: true,
      title: "",
      msg: "",
      type: "success"
    };

    return _this;
  }

  _createClass(AlertDismissable, [{
    key: 'showalert',
    value: function showalert() {
      this.setState({ alertVisible: true, title: "标题", msg: "消息" });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.state.alertVisible) {
        return _react2.default.createElement(
          _reactBootstrap.Alert,
          { bsStyle: this.state.type, onDismiss: this.handleAlertDismiss, __self: this
          },
          _react2.default.createElement(
            'h4',
            {
              __self: this
            },
            this.state.title
          ),
          _react2.default.createElement(
            'p',
            {
              __self: this
            },
            this.state.msg
          ),
          _react2.default.createElement('p', {
            __self: this
          })
        );
      }

      return _react2.default.createElement(
        _reactBootstrap.Button,
        { onClick: this.showalert, __self: this
        },
        '测试'
      );
    }
  }, {
    key: 'handleAlertDismiss',
    value: function handleAlertDismiss() {
      this.setState({ alertVisible: false });
    }
  }, {
    key: 'handleAlertShow',
    value: function handleAlertShow() {
      this.setState({ alertVisible: true });
    }
  }]);

  return AlertDismissable;
}(_react2.default.Component)) || _class;

var App = (0, _autobindDecorator2.default)(_class2 = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this2.state = {
      showConfig: false

    };

    return _this2;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      this.loadPushServer();

      _cloudui4.default.listen(function (newState) {
        _this3.setState(newState);
      });

      _cloudui2.default.listUser();
    }
  }, {
    key: 'addUserConfig',
    value: function addUserConfig() {

      this.setState({ showConfig: !this.state.showConfig, idx: null, confrim: false, configTitle: "添加用户" });
    }
  }, {
    key: 'showNotifiy',
    value: function showNotifiy() {
      this.refs.notifiy.show("标题", "内容");
    }
  }, {
    key: 'closeConfrim',
    value: function closeConfrim() {
      this.setState({ confrim: false, idx: null });
    }
  }, {
    key: 'removeUser',
    value: function removeUser() {

      var user = {};

      if (this.state.idx) {
        user = this.state.users[this.state.idx - 1];
        _cloudui2.default.removeUser(user);
      }

      this.setState({ confrim: false });
    }
  }, {
    key: 'saveUser',
    value: function saveUser() {

      var pwd = this.refs.password.getValue();

      var email = this.refs.email.getValue();

      var type = this.refs.type.getValue();

      if (pwd == "" || email == "" || type == "") {
        alert("请检查输入项目");
        return;
      }

      if (pwd != this.refs.password1.getValue()) {
        alert("密码不一致!");
        return;
      }

      if (this.state.idx) {
        var user = this.state.users[this.state.idx - 1];
        console.log("update user ", user);

        _cloudui2.default.updateUser("changePassword", { "uid": user.uid, "password": pwd });
      } else {

        _cloudui2.default.addUser({ "email": email, "password": pwd, "type": type });
        this.setState({ showConfig: false, idx: null, confrim: false, configTitle: "添加用户" });
      }
    }
  }, {
    key: 'onCodeChange',
    value: function onCodeChange(code) {
      this.setState({ servers: this.refs.pushServer.getValue() });
    }
  }, {
    key: 'loadPushServer',
    value: function loadPushServer() {
      var _this4 = this;

      _jquery2.default.get('/api/v1/servers', function (result) {

        console.log(result);
        _this4.setState({
          servers: JSON.stringify(result, null, 4)
        });
        console.log("远程调用server", result);
      });
    }
  }, {
    key: 'showPushserverConfig',
    value: function showPushserverConfig() {
      this.setState({ 'showPushserver': true });
    }
  }, {
    key: 'hidePushserverConfig',
    value: function hidePushserverConfig() {
      this.setState({ 'showPushserver': false });
    }
  }, {
    key: 'savePushServer',
    value: function savePushServer() {

      console.log(this.refs.pushServerURL.getValue());
      try {
        var protocol = ["mqtt", "ws", "socketio"];
        var server = this.refs.pushServerURL.getValue();

        if (protocol.indexOf(server.split("://")[0]) < 0) {
          alert('服务列表解析错误,请检查' + server);
        } else {

          _jsonReq('POST', { "servers": [server] }, '/api/v1/servers');
          this.loadPushServer();
        }
      } catch (e) {
        console.log(e);
        alert('服务列表解析错误,请检查');
      }

      this.setState({ 'showPushserver': false });
    }
  }, {
    key: 'deletePushServer',
    value: function deletePushServer() {

      console.log(this.refs.pushServerURL.getValue());
      try {
        var protocol = ["mqtt", "ws", "socketio"];
        var server = this.refs.pushServerURL.getValue();

        if (protocol.indexOf(server.split("://")[0]) < 0) {
          alert('服务列表解析错误,请检查' + server);
        } else {

          _jsonReq('DELETE', { "servers": [server] }, '/api/v1/servers');
          this.loadPushServer();
        }
      } catch (e) {
        console.log(e);
        alert('服务列表解析错误,请检查');
      }

      this.setState({ 'showPushserver': false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var user = {};
      var deletConfirm = false;

      if (this.state.idx) {
        user = this.state.users[this.state.idx - 1];
        deletConfirm = true;
      }

      return _react2.default.createElement(
        'div',
        { className: 'container p-t-60', __self: this
        },
        _react2.default.createElement(_Notification.Notification, { ref: 'notifiy', __self: this
        }),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showPushserver, __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            {
              __self: this
            },
            '添加/删除 Push数据源'
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            {
              __self: this
            },
            _react2.default.createElement(_reactBootstrap.Input, { ref: 'pushServerURL', type: 'text', label: 'Push Server URL', __self: this
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            {
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.hidePushserverConfig, __self: this
              },
              '取消'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.savePushServer, __self: this
              },
              '确认添加'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { className: 'btn-danger', onClick: this.deletePushServer, __self: this
              },
              '确认删除'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.confrim, onHide: this.closeConfrim, __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            {
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              {
                __self: this
              },
              '用户管理'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            {
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Row,
              {
                __self: this
              },
              _react2.default.createElement('p', {
                __self: this
              }),
              this.state.confrimMsg,
              ' ',
              user.email
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            {
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.closeConfrim, __self: this
              },
              '取消'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.removeUser, __self: this
              },
              '确认'
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showConfig, onHide: this.closeConfig, __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            {
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              {
                __self: this
              },
              this.state.configTitle
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            {
              __self: this
            },
            _react2.default.createElement(
              'form',
              {
                __self: this
              },
              _react2.default.createElement(
                _reactBootstrap.Row,
                {
                  __self: this
                },
                _react2.default.createElement('p', {
                  __self: this
                }),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { xs: 8, __self: this
                  },
                  _react2.default.createElement(_reactBootstrap.Input, { type: 'email', label: '用户邮箱', ref: 'email', defaultValue: user.email, __self: this
                  })
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Row,
                {
                  __self: this
                },
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { xs: 4, __self: this
                  },
                  _react2.default.createElement(_reactBootstrap.Input, { type: 'password', label: '用户密码', ref: 'password', defaultValue: this.state.password, __self: this
                  })
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { xs: 4, __self: this
                  },
                  _react2.default.createElement(_reactBootstrap.Input, { type: 'password', label: '重复密码', ref: 'password1', defaultValue: this.state.password, __self: this
                  })
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Row,
                {
                  __self: this
                },
                _react2.default.createElement('p', {
                  __self: this
                }),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { xs: 8, __self: this
                  },
                  _react2.default.createElement(
                    _reactBootstrap.Input,
                    { type: 'select', label: '用户类型', ref: 'type', defaultValue: user.type, onChange: this.handleChange, __self: this
                    },
                    _react2.default.createElement(
                      'option',
                      { value: 'worker', __self: this
                      },
                      'Board开发人员'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'guest', __self: this
                      },
                      'Board使用人员'
                    ),
                    _react2.default.createElement(
                      'option',
                      { value: 'admin', __self: this
                      },
                      'Board管理人员'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Col,
                  { xs: 1, __self: this
                  },
                  _react2.default.createElement(
                    'p',
                    {
                      __self: this
                    },
                    _react2.default.createElement('br', {
                      __self: this
                    })
                  ),
                  _react2.default.createElement('i', { className: "fa fa-" + this.state.icon + " fa-2x pull-right", __self: this
                  })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            {
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.addUserConfig, __self: this
              },
              '取消'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.saveUser, __self: this
              },
              '确认'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row p-t-10', __self: this
          },
          _react2.default.createElement(
            'div',
            { className: 'col-sm-12', __self: this
            },
            _react2.default.createElement(
              'ol',
              { className: 'breadcrumb', __self: this
              },
              _react2.default.createElement(
                'li',
                {
                  __self: this
                },
                ' ',
                _react2.default.createElement(
                  'a',
                  { href: '#', __self: this
                  },
                  'OrientBoard'
                ),
                ' '
              ),
              _react2.default.createElement(
                'li',
                { className: 'active', __self: this
                },
                ' 云管理 '
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'wrapper', __self: this
          },
          _react2.default.createElement(
            'div',
            { className: 'container pt25', __self: this
            },
            _react2.default.createElement(
              'div',
              { className: 'row text-center ', __self: this
              },
              _react2.default.createElement(
                _reactBootstrap.Tabs,
                { defaultActiveKey: 1, __self: this
                },
                _react2.default.createElement(
                  _reactBootstrap.Tab,
                  { eventKey: 1, title: '用户管理', __self: this
                  },
                  _react2.default.createElement(
                    _reactBootstrap.Row,
                    {
                      __self: this
                    },
                    _react2.default.createElement('p', {
                      __self: this
                    }),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { xs: 1, __self: this
                      },
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.addUserConfig, className: 'btn btn-primary btn-sm ', __self: this
                        },
                        '添加用户'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Row,
                    {
                      __self: this
                    },
                    _react2.default.createElement('p', {
                      __self: this
                    }),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { xs: 12, __self: this
                      },
                      _react2.default.createElement(
                        'div',
                        { className: 'table-responsive-vertical shadow-z-1', __self: this
                        },
                        _react2.default.createElement(
                          'table',
                          { id: 'table', className: 'table table-hover table-mc-light-blue', __self: this
                          },
                          _react2.default.createElement(
                            'thead',
                            {
                              __self: this
                            },
                            _react2.default.createElement(
                              'tr',
                              {
                                __self: this
                              },
                              _react2.default.createElement(
                                'th',
                                {
                                  __self: this
                                },
                                _react2.default.createElement(
                                  'center',
                                  {
                                    __self: this
                                  },
                                  'ID'
                                )
                              ),
                              _react2.default.createElement(
                                'th',
                                {
                                  __self: this
                                },
                                _react2.default.createElement(
                                  'center',
                                  {
                                    __self: this
                                  },
                                  '用户名'
                                )
                              ),
                              _react2.default.createElement(
                                'th',
                                {
                                  __self: this
                                },
                                _react2.default.createElement(
                                  'center',
                                  {
                                    __self: this
                                  },
                                  '类型'
                                )
                              ),
                              _react2.default.createElement(
                                'th',
                                {
                                  __self: this
                                },
                                _react2.default.createElement(
                                  'center',
                                  {
                                    __self: this
                                  },
                                  '操作'
                                )
                              )
                            )
                          ),
                          _react2.default.createElement(
                            'tbody',
                            { className: 'user', __self: this
                            },
                            _lodash2.default.keys(this.state.users).map(function (user, i) {
                              console.log(_this5.state.users[i].email, i);
                              return _react2.default.createElement(_CloudTR.UserTR, { key: i + 1, idx: i + 1, uid: _this5.state.users[i].uid, email: _this5.state.users[i].email, password: '12345', type: _this5.state.users[i].type, frozen: _this5.state.users[i].frozen, __self: _this5
                              });
                            })
                          )
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        {
                          __self: this
                        },
                        _react2.default.createElement(
                          'ul',
                          { className: 'pagination pagination-lg ', __self: this
                          },
                          _react2.default.createElement(
                            'li',
                            { className: 'disabled', __self: this
                            },
                            _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0)', __self: this
                              },
                              '«'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            { className: 'active', __self: this
                            },
                            _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0)', __self: this
                              },
                              '1'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            {
                              __self: this
                            },
                            _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0)', __self: this
                              },
                              '2'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            {
                              __self: this
                            },
                            _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0)', __self: this
                              },
                              '3'
                            )
                          ),
                          _react2.default.createElement(
                            'li',
                            {
                              __self: this
                            },
                            _react2.default.createElement(
                              'a',
                              { href: 'javascript:void(0)', __self: this
                              },
                              '»'
                            )
                          )
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactBootstrap.Tab,
                  { eventKey: 4, title: 'Push Server', __self: this
                  },
                  _react2.default.createElement(
                    _reactBootstrap.Row,
                    {
                      __self: this
                    },
                    _react2.default.createElement('p', {
                      __self: this
                    }),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { xs: 1, __self: this
                      },
                      _react2.default.createElement(
                        _reactBootstrap.Button,
                        { onClick: this.showPushserverConfig, className: 'btn btn-primary btn-sm ', __self: this
                        },
                        '添加/删除'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Row,
                    {
                      __self: this
                    },
                    _react2.default.createElement('p', {
                      __self: this
                    }),
                    _react2.default.createElement(
                      _reactBootstrap.Col,
                      { xs: 10, __self: this
                      },
                      '  ',
                      _react2.default.createElement(_reactBootstrap.Input, { type: 'textarea', ref: 'pushServer', rows: '10', value: this.state.servers, onChange: this.onCodeChange, __self: this
                      })
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react2.default.Component)) || _class2;

App.defaultProps = {};

exports.default = App;

},{"../actions/block":1,"../actions/box":3,"../actions/cloudui":4,"../actions/select":5,"../css/app.css":11,"../lib/components":12,"../stores/cloudui":17,"../stores/select":18,"../stores/ui":19,"./CloudTR":9,"./Notification":10,"autobind-decorator":"autobind-decorator","jquery":"jquery","lodash":"lodash","react":"react","react-bootstrap":"react-bootstrap"}],9:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactBootstrap = require('react-bootstrap');

var _block = require('../actions/block');

var _block2 = _interopRequireDefault(_block);

var _box = require('../actions/box');

var _box2 = _interopRequireDefault(_box);

var _ui = require('../stores/ui');

var _ui2 = _interopRequireDefault(_ui);

var _select = require('../actions/select');

var _select2 = _interopRequireDefault(_select);

var _select3 = require('../stores/select');

var _select4 = _interopRequireDefault(_select3);

var _cloudui = require('../actions/cloudui');

var _cloudui2 = _interopRequireDefault(_cloudui);

var _cloudui3 = require('../stores/cloudui');

var _cloudui4 = _interopRequireDefault(_cloudui3);

var _app = require('../css/app.css');

var _app2 = _interopRequireDefault(_app);

var _components = require('../lib/components');

var _components2 = _interopRequireDefault(_components);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserType = { "admin": "管理员", "worker": "开发者", "guest": "使用者" };

var UserTR = (0, _autobindDecorator2.default)(_class = function (_React$Component) {
  _inherits(UserTR, _React$Component);

  function UserTR(props) {
    _classCallCheck(this, UserTR);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UserTR).call(this, props));

    var type = "guest";

    if (UserType[props.type]) {
      type = props.type;
    }

    _this.state = {
      email: props.email,
      password: props.password,
      idx: props.idx,
      frozen: props.frozen || false,
      type: type,
      uid: props.uid
    };

    return _this;
  }

  _createClass(UserTR, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.state);
    }
  }, {
    key: 'getTypeLabel',
    value: function getTypeLabel() {
      return UserType[this.state.type];
    }
  }, {
    key: 'frozenSetup',
    value: function frozenSetup() {
      console.log(this.state.frozen);
      if (this.state.type != "admin") {
        this.setState({ "frozen": !this.state.frozen });
        _cloudui2.default.updateUser("frozen", { "uid": this.state.uid, "frozen": !this.state.frozen });
      } else {
        alert("管理员账户无法冻结,请联系数据管理员");
      }
    }
  }, {
    key: 'deleteUser',
    value: function deleteUser() {

      if (this.state.type == "admin") {
        return alert("不能删除 Board 管理员");
      } else {
        _cloudui2.default.removeUserConfrim(this.state.idx);
      }
    }
  }, {
    key: 'changePassword',
    value: function changePassword() {
      console.log("changePassword", this.state.idx);
      _cloudui2.default.changePassword(this.state.idx);
    }
  }, {
    key: 'render',
    value: function render() {

      var btnLable = this.state.frozen ? "解冻用户" : "冻结用户";

      return _react2.default.createElement(
        'tr',
        {
          __self: this
        },
        _react2.default.createElement(
          'td',
          { 'data-title': 'ID', __self: this
          },
          this.state.idx
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Type', __self: this
          },
          this.state.email
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Type', __self: this
          },
          this.getTypeLabel()
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Action', __self: this
          },
          _react2.default.createElement(
            'a',
            { className: 'changePWD btn btn-sm btn-success', onClick: this.changePassword, __self: this
            },
            '修改密码'
          ),
          '  ',
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'foizen btn btn-sm btn-warning', onClick: this.frozenSetup, __self: this
            },
            btnLable
          ),
          '  ',
          _react2.default.createElement(
            'a',
            { className: 'delete btn btn-sm btn-danger', onClick: this.deleteUser, __self: this
            },
            '删除用户'
          ),
          _react2.default.createElement('br', {
            __self: this
          })
        )
      );
    }
  }]);

  return UserTR;
}(_react2.default.Component)) || _class;

var BoardTR = (0, _autobindDecorator2.default)(_class2 = function (_React$Component2) {
  _inherits(BoardTR, _React$Component2);

  function BoardTR(props) {
    _classCallCheck(this, BoardTR);

    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(BoardTR).call(this, props));

    var type = "guest";

    if (UserType[props.type]) {
      type = props.type;
    }

    _this2.state = {
      email: props.email,
      password: props.password,
      idx: props.idx,
      frozen: props.frozen || false,
      type: type,
      uid: props.uid
    };

    return _this2;
  }

  _createClass(BoardTR, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log(this.state);
    }
  }, {
    key: 'getTypeLabel',
    value: function getTypeLabel() {
      return UserType[this.state.type];
    }
  }, {
    key: 'frozenSetup',
    value: function frozenSetup() {
      console.log(this.state.frozen);
      if (this.state.type != "admin") {
        this.setState({ "frozen": !this.state.frozen });
        _cloudui2.default.updateUser("frozen", { "uid": this.state.uid, "frozen": !this.state.frozen });
      } else {
        alert("管理员账户无法冻结,请联系数据管理员");
      }
    }
  }, {
    key: 'deleteBoard',
    value: function deleteBoard() {

      if (this.state.type == "admin") {
        return alert("不能删除 Board 管理员");
      } else {
        //cloudUIActions.removeUserConfrim(this.state.idx)
        console.log('click delete board');
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var btnLable = this.state.frozen ? "停用" : "启用";

      return _react2.default.createElement(
        'tr',
        {
          __self: this
        },
        _react2.default.createElement(
          'td',
          { 'data-title': 'ID', __self: this
          },
          this.state.idx
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Type', __self: this
          },
          this.state.email
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Type', __self: this
          },
          this.getTypeLabel()
        ),
        _react2.default.createElement(
          'td',
          { 'data-title': 'Action', __self: this
          },
          _react2.default.createElement(
            'a',
            { className: 'delete btn btn-sm btn-primary', onClick: this.deleteBoard, __self: this
            },
            '预览'
          ),
          '  ',
          _react2.default.createElement(
            _reactBootstrap.Button,
            { className: 'foizen btn btn-sm btn-warning', onClick: this.frozenSetup, __self: this
            },
            btnLable
          ),
          '  ',
          _react2.default.createElement(
            'a',
            { className: 'delete btn btn-sm btn-danger', onClick: this.deleteBoard, __self: this
            },
            '删除'
          ),
          _react2.default.createElement('br', {
            __self: this
          })
        )
      );
    }
  }]);

  return BoardTR;
}(_react2.default.Component)) || _class2;

exports.UserTR = UserTR;
exports.BoardTR = BoardTR;

},{"../actions/block":1,"../actions/box":3,"../actions/cloudui":4,"../actions/select":5,"../css/app.css":11,"../lib/components":12,"../stores/cloudui":17,"../stores/select":18,"../stores/ui":19,"autobind-decorator":"autobind-decorator","lodash":"lodash","react":"react","react-bootstrap":"react-bootstrap"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: l1 better display page

var Notification = (0, _autobindDecorator2.default)(_class = function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification(props) {
    _classCallCheck(this, Notification);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Notification).call(this, props));

    _this.state = {
      show: _this.props.show || false,
      title: _this.props.title || "",
      msg: _this.props.msg || ""
    };
    return _this;
  }

  _createClass(Notification, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'show',
    value: function show(title, msg) {
      this.setState({ show: true, title: title, msg: msg });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ show: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: this.state.show, onHide: this.close, __self: this
        },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          {
            __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            {
              __self: this
            },
            this.state.title
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          {
            __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Row,
            {
              __self: this
            },
            '  ',
            "   info:  ",
            ' ',
            this.state.msg
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          {
            __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.close, __self: this
            },
            '关闭'
          )
        )
      );
    }
  }]);

  return Notification;
}(_react2.default.Component)) || _class;

exports.default = Notification;


exports.Notification = Notification;

},{"autobind-decorator":"autobind-decorator","lodash":"lodash","react":"react","react-bootstrap":"react-bootstrap"}],11:[function(require,module,exports){
module.exports = {"left_nav":"_app_css_app__left_nav","workspace":"_app_css_app__workspace","navbar":"_app_css_app__navbar","box_toolbar_deactive":"_app_css_app__box_toolbar_deactive","box_toolbar_active":"_app_css_app__box_toolbar_active","logo":"_app_css_app__logo"}
},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'example': require('orientboard-component-example').default
};

},{"orientboard-component-example":22}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getTestLayout = getTestLayout;
exports.swapElements = swapElements;
exports.initStores = initStores;
exports.copyToClipboard = copyToClipboard;
exports.openWindow = openWindow;
exports.startDynamic = startDynamic;
exports.stopDynamic = stopDynamic;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _block = require('../stores/block');

var _block2 = _interopRequireDefault(_block);

var _board = require('../stores/board');

var _board2 = _interopRequireDefault(_board);

var _box = require('../stores/box');

var _box2 = _interopRequireDefault(_box);

var _select = require('../stores/select');

var _select2 = _interopRequireDefault(_select);

var _ui = require('../stores/ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getTestLayout(title, cb) {
    var name = /(.*)-dev$/.exec(title)[1];
    if (name) return _jquery2.default.ajax({
        url: '/get-test-layout/' + name,
        method: 'GET',
        success: cb
    });
    return null;
}

function swapElements(list, x, y) {
    list[x] = [list[y], list[y] = list[x]][0];
}

function initStores() {
    // HACK: import all stores and bypass eslint no-unused rules
    (function () {})(_block2.default, _board2.default, _box2.default, _select2.default, _ui2.default);
}

function copyToClipboard(text) {
    window.prompt('Copy to clipboard: Ctrl+C, Enter', text);
}

function openWindow(text) {
    window.open(text);
}

function startDynamic(component) {

    if (!component.state.datasource) {
        return;
    }

    var cb = component.handleDynamicData ? function (data) {
        if (!component.state.datasource.startDynamic) {
            return;
        }
        console.log("data", data);
        component.handleDynamicData(data);

        if (component.refs.ds && component.refs.ds.state.show) {
            component.refs.ds.handleLog(data);
        }
    } : function (data) {
        console.log(data);
    };

    var serverURL = component.state.datasource.server;

    if (component.state.datasource.dataType === "pull") {

        if (component.state.datasource.startDynamic) {

            if (!component.state.datasource.repeat) {
                component.props.timerPool.start(component.state.datasource.url, component.state.datasource.interval, cb, true);
            } else {
                var id = component.props.timerPool.start(component.state.datasource.url, component.state.datasource.interval, cb);
                component.setState({ timerId: id });
            }
        }
    } else if (component.state.datasource.dataType === "push") {

        var _conn = null;
        var pool = null;

        if (serverURL.indexOf("mqtt") > -1) {

            _conn = component.props.mqttPool.get('ws://' + serverURL.split("mqtt://")[1]);
            pool = component.props.mqttPool;
        } else if (serverURL.indexOf("socketio") > -1) {

            _conn = component.props.socketioPool.get('http://' + serverURL.split("socketio://")[1]);
            pool = component.props.socketioPool;
        } else {
            console.log("未支持协议", serverURL);
            return;
        }

        if (component.state.datasource.startDynamic) {

            pool.sub(_conn, component.state.datasource.channel, cb);
        } else {

            pool.unsub(_conn, component.state.datasource.channel, cb);
        }
    }
}

function stopDynamic(component) {

    var cb = component.handleDynamicData ? component.handleDynamicData : function (data) {
        console.log(data);
    };

    if (component.state.dataType === "pull") {

        component.props.timerPool.stop(component.state.timerId);
        component.setState({ timerId: null });
    } else if (component.state.dataType === "push") {

        component.props.mqttPool.unsub(conn, component.state.channel, cb);
    }
}

},{"../stores/block":14,"../stores/board":15,"../stores/box":16,"../stores/select":18,"../stores/ui":19,"jquery":"jquery"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _block = require('../actions/block');

var _block2 = _interopRequireDefault(_block);

var _select = require('../stores/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {};

_select2.default.listen(function (newState) {
  state = _lodash2.default.assign(state, newState);
});

function ensureComponentInfo(info) {
  var defaults = {
    x: 0,
    y: 0,
    rotate: 0,
    h: 100,
    w: 100,
    data: {},
    id: _uuid2.default.v4()
  };
  return _lodash2.default.assign(defaults, info);
}

var store = _reflux2.default.createStore({
  listenables: _block2.default,
  onRemoveBox: function onRemoveBox() {
    state.block.removeBox(state.box);
  },
  onNewComponent: function onNewComponent(box) {
    console.log(state.block.createBox);
    box = ensureComponentInfo(box);
    state.block.createBox(box);
  },
  onSetBlockConfig: function onSetBlockConfig(config) {
    state.block.setConfig(config);
  }

});

store.getState = function () {
  return _lodash2.default.clone(state);
};

store.findBoard = function (board) {
  return _lodash2.default.find(state.boards, board);
};

exports.default = store;

},{"../actions/block":1,"../stores/select":18,"lodash":"lodash","reflux":"reflux","uuid":25}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _board = require('../actions/board');

var _board2 = _interopRequireDefault(_board);

var _select = require('../actions/select');

var _select2 = _interopRequireDefault(_select);

var _select3 = require('../stores/select');

var _select4 = _interopRequireDefault(_select3);

var _client = require('../../lib/client');

var _client2 = _interopRequireDefault(_client);

var _util = require('../lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var bm = new _client2.default();
var state = {
  boards: []
};

_select4.default.listen(function (newState) {
  state = _lodash2.default.assign(state, newState);
});

var store = _reflux2.default.createStore({
  listenables: _board2.default,
  onSaveBoard: function onSaveBoard() {
    var nb = state.app.refs.board.toJson();
    console.log(nb);
    _board2.default.updateBoard({ name: nb.name }, nb);
    alert('保存成功');
  },
  onCloneBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(newName) {
      var nb, res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              nb = state.app.refs.board.toJson();

              nb.name = newName;
              _context.prev = 2;
              _context.next = 5;
              return bm.create(nb);

            case 5:
              res = _context.sent;

              state.boards.push(res);
              store.trigger(state);

              return _context.abrupt('return', _board2.default.createBoard.completed(nb));

            case 11:
              _context.prev = 11;
              _context.t0 = _context['catch'](2);
              return _context.abrupt('return', _board2.default.createBoard.failed(_context.t0));

            case 14:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[2, 11]]);
    }));

    return function onCloneBoard(_x) {
      return ref.apply(this, arguments);
    };
  }(),
  onCreateBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(board) {
      var res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return bm.create(board);

            case 3:
              res = _context2.sent;

              state.boards.push(res);
              store.trigger(state);
              return _context2.abrupt('return', _board2.default.createBoard.completed(board));

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2['catch'](0);
              return _context2.abrupt('return', _board2.default.createBoard.failed(_context2.t0));

            case 12:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[0, 9]]);
    }));

    return function onCreateBoard(_x2) {
      return ref.apply(this, arguments);
    };
  }(),

  onRenameBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(boardName, boardDesc) {
      var nb, oldName;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              nb = state.app.refs.board.toJson();
              oldName = nb.name;

              nb.name = boardName;
              nb.desc = boardDesc;

              //console.log("rename",boardDesc)

              _board2.default.updateBoard({ name: oldName }, nb);
              state.boards[_lodash2.default.findIndex(state.boards, { name: boardName, desc: boardDesc })] = nb;
              store.trigger(state);
              return _context3.abrupt('return', _board2.default.updateBoard.completed());

            case 8:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function onRenameBoard(_x3, _x4) {
      return ref.apply(this, arguments);
    };
  }(),

  onCreateBoardFailed: function onCreateBoardFailed() {
    console.log('create failed');
  },
  onCreateBoardCompleted: function onCreateBoardCompleted(board) {
    _select2.default.setActiveBoard(board);
  },
  onListBoards: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
      var res;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return bm.list();

            case 2:
              res = _context4.sent;

              state.boards = res;
              store.trigger(state);
              return _context4.abrupt('return', _board2.default.listBoards.completed());

            case 6:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function onListBoards() {
      return ref.apply(this, arguments);
    };
  }(),
  onFindBoard: function onFindBoard(board) {
    return _board2.default.findBoard.completed(_lodash2.default.filter(state.boards, board));
  },
  onRemoveBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(board) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (_lodash2.default.filter(state.boards, board)) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt('return', _board2.default.removeBoard.failed('Board not found'));

            case 2:
              _context5.next = 4;
              return bm.remove(board);

            case 4:
              state.boards = state.boards.filter(function (b) {
                return b.name !== board.name;
              });
              _select2.default.setActiveBoard(state.boards[0]);
              store.trigger(state);

            case 7:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function onRemoveBoard(_x5) {
      return ref.apply(this, arguments);
    };
  }(),
  onUpdateBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(query, board) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (_lodash2.default.filter(state.boards, board)) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt('return', _board2.default.removeBoard.failed('Board not found'));

            case 2:
              _context6.next = 4;
              return bm.update(query, board);

            case 4:
              state.boards[_lodash2.default.findIndex(state.boards, query)] = board;
              store.trigger(state);
              return _context6.abrupt('return', _board2.default.updateBoard.completed());

            case 7:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function onUpdateBoard(_x6, _x7) {
      return ref.apply(this, arguments);
    };
  }(),
  onAddBlock: function onAddBlock() {
    state.board.blocks.push({
      boxes: [],
      // use timestamp as id to distinguish blocks in the same board
      id: Date.now().toString(),
      w: _lodash2.default.get(state, 'board.blocks[0].w') || 800,
      h: _lodash2.default.get(state, 'board.blocks[0].h') || 600,
      img: null
    });
    store.trigger(state);
  },
  onRemoveBlock: function onRemoveBlock() {
    state.board.blocks.splice(_lodash2.default.findIndex(state.board.blocks, { id: state.block.id }), 1);
    store.trigger(state);
  },
  onMoveBlock: function onMoveBlock(step) {
    var idx = _lodash2.default.findIndex(state.board.blocks, { id: state.block.id });
    if (state.board.blocks[idx + step]) {
      (0, _util.swapElements)(state.board.blocks, idx, idx + step);
      store.trigger(state);
    }
  },
  onPublishBoard: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
      var board, res, link;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              //const link = window.location.origin + `/api/display/${state.board._id}`
              //copyToClipboard(link)

              board = _lodash2.default.findIndex(state.boards, { _id: state.board._id });
              _context7.next = 3;
              return bm.publish(state.board._id);

            case 3:
              res = _context7.sent;


              if (res.status == "ok") {
                alert('发布成功');
                link = window.location.origin + ('/publish/' + state.board._id + '.html');

                (0, _util.openWindow)(link);
              } else {
                alert('发布失败');
              }
              return _context7.abrupt('return');

            case 6:
            case 'end':
              return _context7.stop();
          }
        }
      }, _callee7, undefined);
    }));

    return function onPublishBoard() {
      return ref.apply(this, arguments);
    };
  }(),

  onGetDisplayLink: function onGetDisplayLink() {
    var link = window.location.origin + ('/api/display/' + state.board._id);
    (0, _util.copyToClipboard)(link);
  },
  onOpenDisplayLink: function onOpenDisplayLink() {
    var link = window.location.origin + ('/api/display/' + state.board._id);
    (0, _util.openWindow)(link);
  }
});

store.getState = function () {
  return _lodash2.default.clone(state);
};

store.findBoard = function (board) {
  return _lodash2.default.find(state.boards, board);
};

exports.default = store;

},{"../../lib/client":20,"../actions/board":2,"../actions/select":5,"../lib/util":13,"../stores/select":18,"lodash":"lodash","reflux":"reflux"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _victor = require('victor');

var _victor2 = _interopRequireDefault(_victor);

var _box = require('../actions/box');

var _box2 = _interopRequireDefault(_box);

var _select = require('../stores/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ACTIONS = {
  NONE: 0,
  ROTATE: 1,
  DRAG: 2,
  RESIZE: 3
};

var ROTATE_STEP = 15,
    GRID_SIZE = 10;

var state = {
  box: null,
  dragStart: {
    x: 0,
    y: 0
  },
  center: {
    x: 0,
    y: 0
  },
  rotateStart: {
    x: 0,
    y: 0
  },
  resizeStart: {
    x: 0,
    y: 0
  },
  rInit: 0,
  action: ACTIONS.NONE,
  mode: 'edit',
  boards: []
};

_select2.default.listen(function (newState) {
  state = _lodash2.default.assign(state, newState);
});

// get the angle between vector(rotateStart.x - center.x,
// rotateStart.y - center.y)
// and vector(x - center.x, y - center.y) in degree
function getRotateAngle(x, y) {
  var _state = state;
  var rotateStart = _state.rotateStart;
  var center = _state.center;

  var vStart = new _victor2.default(rotateStart.x - center.x, rotateStart.y - center.y);
  var vEnd = new _victor2.default(x - center.x, y - center.y);
  return vEnd.angleDeg() - vStart.angleDeg();
}

// ensures box being dragged stays in block
function constrainDrag(x, y) {
  x = x + state.box.w <= state.block.w ? x : state.block.w - state.box.w;
  x = x < 0 ? 0 : x;
  y = y + state.box.h <= state.block.h ? y : state.block.h - state.box.h;
  y = y < 0 ? 0 : y;
  return { x: x, y: y };
}

var store = _reflux2.default.createStore({
  listenables: _box2.default,
  onInit: function onInit(app) {
    console.log('init started');
    if (state.ready) return null;

    state.app = app;

    document.documentElement.onmousemove = function (e) {
      switch (state.action) {
        case ACTIONS.DRAG:
          var _constrainDrag = constrainDrag(e.clientX - state.dragStart.x, e.clientY - state.dragStart.y);

          var x = _constrainDrag.x;
          var y = _constrainDrag.y;


          if (e.altKey) {
            x -= x % GRID_SIZE;
            y -= y % GRID_SIZE;
          }

          state.box.moveTo(x, y);
          break;

        case ACTIONS.ROTATE:
          var angle = state.rInit + getRotateAngle(e.clientX, e.clientY);
          if (e.altKey) angle -= angle % ROTATE_STEP;
          state.box.rotate(angle);
          break;

        case ACTIONS.RESIZE:
          var h = state.resizeStart.h + e.clientY - state.resizeStart.y,
              w = state.resizeStart.w + e.clientX - state.resizeStart.x;

          if (e.altKey) {
            h -= h % GRID_SIZE;
            w -= w % GRID_SIZE;
          }
          state.box.resize(h, w);
          break;

        default:
          break;
      }
    };

    document.documentElement.onmouseup = function () {
      state.action = ACTIONS.NONE;
    };
    document.documentElement.ondblclick = function openBoxConfig() {
      if (state.box) state.box.openConfig();
    };

    state.ready = true;
  },
  // TODO: l2 prevent too many renders
  onStartRotate: function onStartRotate(center, x, y, theta) {
    state.action = ACTIONS.ROTATE;
    state.center = center;
    state.rotateStart = { x: x, y: y };
    state.rInit = theta;
  },
  onStartDrag: function onStartDrag(x, y) {
    state.action = ACTIONS.DRAG;
    state.dragStart = { x: x, y: y };
  },
  onStartResize: function onStartResize(h, w, x, y) {
    state.action = ACTIONS.RESIZE;
    state.resizeStart = { x: x, y: y, h: h, w: w };
  },
  onStopDrag: function onStopDrag() {
    state.action = ACTIONS.NONE;
  },
  onStopAll: function onStopAll() {
    state.action = ACTIONS.NONE;
  },
  onAddZIndex: function onAddZIndex(amount) {
    if (state.box) state.box.addZIndex(amount);
  },
  onOpenConfig: function onOpenConfig() {
    console.log('openning config', state.box);
    if (state.box) state.box.openConfig();
  }
});

store.getState = function () {
  return _lodash2.default.clone(state);
};

exports.default = store;

},{"../actions/box":3,"../stores/select":18,"lodash":"lodash","reflux":"reflux","victor":26}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _cloudui = require('../actions/cloudui');

var _cloudui2 = _interopRequireDefault(_cloudui);

var _client = require('../../lib/client');

var _client2 = _interopRequireDefault(_client);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

var bm = new _client2.default();

var state = {
  users: []
};

var store = _reflux2.default.createStore({
  listenables: _cloudui2.default,

  onAddUser: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(user) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("-->addUser", user);
              _context.prev = 1;
              _context.next = 4;
              return bm.createUser(user).then(function (newUser) {
                console.log(newUser.result[0].uid);
                user.uid = newUser.result[0].uid;
                state.users.push(user);
                state.idx = null;
                store.trigger(state);
              });

            case 4:
              res = _context.sent;
              return _context.abrupt('return', "ok");

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](1);

              console.log(_context.t0);
              return _context.abrupt('return');

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[1, 8]]);
    }));

    return function onAddUser(_x) {
      return ref.apply(this, arguments);
    };
  }(),

  onRemoveUser: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(user) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log("-->removeUser", user);

              bm.removeUser(user).then(function () {

                var idx = 0;
                for (var i = 0; i < state.users.length; i++) {
                  if (state.users[i].email == user.email) {
                    idx = i;
                    break;
                  }
                }

                state.users.splice(idx, 1);
                state.idx = null;
                state.confrim = false;
                store.trigger(state);
              });

              return _context2.abrupt('return', "");

            case 3:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function onRemoveUser(_x2) {
      return ref.apply(this, arguments);
    };
  }(),

  onRemoveUserConfrim: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(idx) {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log("-->removeUserConfrim", idx);
              state.showConfig = false;
              state.confrim = true;
              state.confrimMsg = "删除用户";
              state.idx = idx;
              store.trigger(state);

              return _context3.abrupt('return', "");

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function onRemoveUserConfrim(_x3) {
      return ref.apply(this, arguments);
    };
  }(),

  onUpdateUser: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee4(op, user) {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log("-->updateUser", user);

              // if(op=="changePassword"){
              //  console.log(user);
              // }else if(op=="forzen"){
              //  console.log(user)
              // }

              bm.updateUser(user).then(function (result) {
                console.log(result);
                state.showConfig = false;
                state.idx = null;
                store.trigger(state);
              });

              return _context4.abrupt('return', "");

            case 3:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function onUpdateUser(_x4, _x5) {
      return ref.apply(this, arguments);
    };
  }(),

  onChangePassword: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(idx) {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:

              state.showConfig = true;
              state.idx = idx;
              state.configTitle = "修改用户密码";
              store.trigger(state);

            case 4:
            case 'end':
              return _context5.stop();
          }
        }
      }, _callee5, undefined);
    }));

    return function onChangePassword(_x6) {
      return ref.apply(this, arguments);
    };
  }(),

  onListUser: function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee6(user) {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              console.log("-->listUser", user);
              // const nb = state.app.refs.board.toJson()
              // const oldName=nb.name
              // nb.name=boardName

              // actions.updateBoard({ name: oldName }, nb)
              // state.boards[_.findIndex(state.boards, { name: boardName })] = nb
              // store.trigger(state)
              // return actions.updateBoard.completed()
              bm.listUser().then(function (users) {
                _lodash2.default.forEach(users, function (user) {
                  //console.log(user);
                  if (state.users.indexOf(user) == -1) {
                    state.users.push(user);
                  }
                });
                console.log(state);
                store.trigger(state);
              });

              return _context6.abrupt('return', "aa");

            case 3:
            case 'end':
              return _context6.stop();
          }
        }
      }, _callee6, undefined);
    }));

    return function onListUser(_x7) {
      return ref.apply(this, arguments);
    };
  }()

});

store.getState = function () {
  return _lodash2.default.clone(state);
};

exports.default = store;

},{"../../lib/client":20,"../actions/cloudui":4,"lodash":"lodash","reflux":"reflux"}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _select = require('../actions/select');

var _select2 = _interopRequireDefault(_select);

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  box: null,
  block: null,
  board: null
};

_ui2.default.listen(function (newState) {
  _lodash2.default.assign(state, newState);
});

var store = _reflux2.default.createStore({
  listenables: _select2.default,
  onSetActiveBlock: function onSetActiveBlock(block) {
    if (state.mode === 'publish') return null;
    if (state.block === block) return null;
    _select2.default.setActiveBox(null);
    if (state.block) state.block.deactivate();
    state.block = block;
    if (block) block.activate();
    store.trigger(state);
  },
  onSetActiveBox: function onSetActiveBox(box) {
    if (state.mode === 'publish') return null;
    if (state.box === box) return null;
    if (state.box) state.box.deactivate();
    state.box = box;
    if (box) box.activate();
    store.trigger(state);
  },
  onSetActiveBoard: function onSetActiveBoard(board) {
    if (state.mode === 'publish') return null;
    if (_lodash2.default.get(state, 'board.name') === board.name) return null;
    if (state.box) state.box.deactivate();
    state.box = null;
    state.block = null;
    state.board = board;
    store.trigger(state);
  },
  onSetApp: function onSetApp(app) {
    state.app = app;
    store.trigger(state);
  }
});

store.getState = function () {
  return _lodash2.default.clone(state);
};

exports.default = store;

},{"../actions/select":5,"./ui":19,"lodash":"lodash","reflux":"reflux"}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reflux = require('reflux');

var _reflux2 = _interopRequireDefault(_reflux);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _ui = require('../actions/ui');

var _ui2 = _interopRequireDefault(_ui);

var _select = require('../actions/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var state = {
  showBlockConfig: false,
  showBoardConfig: false,
  mode: 'edit',
  theme: 'default'
};

var store = _reflux2.default.createStore({
  listenables: _ui2.default,
  onOpenBlockConfig: function onOpenBlockConfig() {
    state.showBlockConfig = true;
    store.trigger(state);
  },
  onCloseBlockConfig: function onCloseBlockConfig() {
    state.showBlockConfig = false;
    store.trigger(state);
  },

  onOpenBoardConfig: function onOpenBoardConfig(name, action) {
    state.showBoardConfig = true;
    if (name) {
      state.boardName = name;
    }

    state.boardAction = action;
    store.trigger(state);
  },
  onCloseBoardConfig: function onCloseBoardConfig() {
    state.showBoardConfig = false;
    store.trigger(state);
  },
  onSetMode: function onSetMode(mode) {
    if (state.mode === mode) return null;
    state.mode = mode;
    _select2.default.setActiveBox(null);
    _select2.default.setActiveBlock(null);
    store.trigger(state);
  },
  onSetTheme: function onSetTheme(theme) {
    if (state.theme === theme) return null;
    state.theme = theme;
    store.trigger(state);
  }
});

store.getState = function () {
  return _lodash2.default.clone(state);
};

exports.default = store;

},{"../actions/select":5,"../actions/ui":6,"lodash":"lodash","reflux":"reflux"}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var $ = require('jquery');

module.exports = function () {
  function BoardManagerClient(opts) {
    _classCallCheck(this, BoardManagerClient);

    opts = opts || {};
    this.host = opts.host || '';
    this.path = opts.path || 'api';
  }

  _createClass(BoardManagerClient, [{
    key: '_url',
    value: function _url(endpoint) {
      console.log(this.host + '/' + this.path + '/' + endpoint);
      return this.host + '/' + this.path + '/' + endpoint;
    }
  }, {
    key: '_jsonReq',
    value: function _jsonReq(method, data, endpoint) {
      var opts = {
        method: method,
        data: JSON.stringify(data),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        url: this._url(endpoint)
      };
      if (method === 'GET') opts.data = data;else {
        opts.data = JSON.stringify(data);
        opts.contentType = 'application/json; charset=utf-8';
        opts.dataType = 'json';
      }
      return $.ajax(opts);
    }
  }, {
    key: 'listUser',
    value: function listUser() {
      return this._jsonReq('GET', {}, 'v1/user');
    }
  }, {
    key: 'createUser',
    value: function createUser(user) {
      return this._jsonReq('POST', user, 'v1/user');
    }
  }, {
    key: 'removeUser',
    value: function removeUser(user) {
      return this._jsonReq('DELETE', user, 'v1/user/' + user.uid);
    }
  }, {
    key: 'updateUser',
    value: function updateUser(user) {
      return this._jsonReq('PUT', user, 'v1/user/' + user.uid);
    }
  }, {
    key: 'publish',
    value: function publish(board_id) {
      return this._jsonReq('POST', {}, '/board/publish/' + board_id);
    }
  }, {
    key: 'create',
    value: function create(board) {
      return this._jsonReq('PUT', { board: board }, 'board');
    }
  }, {
    key: 'remove',
    value: function remove(board) {
      return this._jsonReq('DELETE', { board: board }, 'board');
    }
  }, {
    key: 'update',
    value: function update(query, board) {
      return this._jsonReq('PATCH', { query: query, board: board }, 'board');
    }
  }, {
    key: 'find',
    value: function find(board) {
      return this._jsonReq('GET', { board: board }, 'board');
    }
  }, {
    key: 'list',
    value: function list() {
      return this._jsonReq('GET', {}, 'boards');
    }
  }]);

  return BoardManagerClient;
}();

},{"jquery":"jquery"}],21:[function(require,module,exports){
module.exports = {"text":"_node_modules_orientboard_component_example_css_component__text"}
},{}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _component = require('../css/component.css');

var _component2 = _interopRequireDefault(_component);

var _reactBootstrap = require('react-bootstrap');

var _newComponentModal = require('./new-component-modal');

var _newComponentModal2 = _interopRequireDefault(_newComponentModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Example = (0, _autobindDecorator2.default)(_class = function (_React$Component) {
  _inherits(Example, _React$Component);

  function Example(props) {
    _classCallCheck(this, Example);

    // props:
    // - data: object, your data
    // - edit: boolean, whether your component should be editable
    // - theme: string, the global theme

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Example).call(this, props));

    _this.state = {
      showConfig: false,
      content: _this.props.data.content
    };
    return _this;
  }

  _createClass(Example, [{
    key: 'toJson',
    value: function toJson() {
      // return the data you want to save as an object
      return {
        content: this.state.content
      };
    }
  }, {
    key: 'openConfig',
    value: function openConfig() {
      this.setState({ showConfig: true });
    }
  }, {
    key: 'closeConfig',
    value: function closeConfig() {
      this.setState({ showConfig: false });
    }
  }, {
    key: '_applyConfig',
    value: function _applyConfig() {
      // apply changes here
      this.closeConfig();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({}, this.props, {
          __self: this
        }),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showConfig, onHide: this.closeConfig, __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            {
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              {
                __self: this
              },
              'Config'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            {
              __self: this
            },
            'Config goes here'
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            {
              __self: this
            },
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this.closeConfig, __self: this
              },
              'Cancel'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              { onClick: this._applyConfig, __self: this
              },
              'Confirm'
            )
          )
        ),
        _react2.default.createElement(
          'h1',
          { className: _component2.default.text, __self: this
          },
          this.state.content
        )
      );
    }
  }]);

  return Example;
}(_react2.default.Component)) || _class;

Example.propTypes = {
  data: _react2.default.PropTypes.object,
  theme: _react2.default.PropTypes.string
};

Example.NewComponentConfig = _newComponentModal2.default;

exports.default = Example;
},{"../css/component.css":21,"./new-component-modal":23,"autobind-decorator":"autobind-decorator","react":"react","react-bootstrap":"react-bootstrap"}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _autobindDecorator = require('autobind-decorator');

var _autobindDecorator2 = _interopRequireDefault(_autobindDecorator);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewComponentModal = (0, _autobindDecorator2.default)(_class = function (_React$Component) {
  _inherits(NewComponentModal, _React$Component);

  function NewComponentModal(props) {
    _classCallCheck(this, NewComponentModal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NewComponentModal).call(this, props));

    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(NewComponentModal, [{
    key: 'open',
    value: function open() {
      this.setState({ show: true });
    }
  }, {
    key: 'close',
    value: function close() {
      this.setState({ show: false });
    }
  }, {
    key: '_create',
    value: function _create() {
      var info = {
        x: 0,
        y: 0,
        w: parseInt(this.refs.w.getValue(), 10),
        h: parseInt(this.refs.h.getValue(), 10),
        rotate: 0,
        // the short name of your component here
        type: 'example',
        data: {
          content: this.refs.content.getValue()
        }
      };
      this.props.actions.newComponent(info);
      this.close();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Modal,
        { show: this.state.show, onHide: this.close, __self: this
        },
        _react2.default.createElement(
          _reactBootstrap.Modal.Header,
          {
            __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Modal.Title,
            {
              __self: this
            },
            'New Component'
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Body,
          {
            __self: this
          },
          _react2.default.createElement(
            'form',
            {
              __self: this
            },
            _react2.default.createElement(_reactBootstrap.Input, { type: 'text', label: 'w', ref: 'w', __self: this
            }),
            _react2.default.createElement(_reactBootstrap.Input, { type: 'text', label: 'h', ref: 'h', __self: this
            }),
            _react2.default.createElement(_reactBootstrap.Input, { type: 'text', label: 'content', ref: 'content', __self: this
            })
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Modal.Footer,
          {
            __self: this
          },
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this.close, __self: this
            },
            'Cancel'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            { onClick: this._create, __self: this
            },
            'Confirm'
          )
        )
      );
    }
  }]);

  return NewComponentModal;
}(_react2.default.Component)) || _class;

NewComponentModal.propTypes = {
  actions: _react2.default.PropTypes.object
};

NewComponentModal.defaultProps = {};

exports.default = NewComponentModal;
},{"autobind-decorator":"autobind-decorator","react":"react","react-bootstrap":"react-bootstrap"}],24:[function(require,module,exports){
(function (global){

var rng;

if (global.crypto && crypto.getRandomValues) {
  // WHATWG crypto-based RNG - http://wiki.whatwg.org/wiki/Crypto
  // Moderately fast, high quality
  var _rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(_rnds8);
    return _rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  _rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      _rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return _rnds;
  };
}

module.exports = rng;


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],25:[function(require,module,exports){
//     uuid.js
//
//     Copyright (c) 2010-2012 Robert Kieffer
//     MIT License - http://opensource.org/licenses/mit-license.php

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var _rng = require('./rng');

// Maps for number <-> hex string conversion
var _byteToHex = [];
var _hexToByte = {};
for (var i = 0; i < 256; i++) {
  _byteToHex[i] = (i + 0x100).toString(16).substr(1);
  _hexToByte[_byteToHex[i]] = i;
}

// **`parse()` - Parse a UUID into it's component bytes**
function parse(s, buf, offset) {
  var i = (buf && offset) || 0, ii = 0;

  buf = buf || [];
  s.toLowerCase().replace(/[0-9a-f]{2}/g, function(oct) {
    if (ii < 16) { // Don't overflow!
      buf[i + ii++] = _hexToByte[oct];
    }
  });

  // Zero out remaining bytes if string was short
  while (ii < 16) {
    buf[i + ii++] = 0;
  }

  return buf;
}

// **`unparse()` - Convert UUID byte array (ala parse()) into a string**
function unparse(buf, offset) {
  var i = offset || 0, bth = _byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = _rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; n++) {
    b[i + n] = node[n];
  }

  return buf ? buf : unparse(b);
}

// **`v4()` - Generate random UUID**

// See https://github.com/broofa/node-uuid for API details
function v4(options, buf, offset) {
  // Deprecated - 'format' argument, as supported in v1.2
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || _rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ii++) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || unparse(rnds);
}

// Export public API
var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;
uuid.parse = parse;
uuid.unparse = unparse;

module.exports = uuid;

},{"./rng":24}],26:[function(require,module,exports){
exports = module.exports = Victor;

/**
 * # Victor - A JavaScript 2D vector class with methods for common vector operations
 */

/**
 * Constructor. Will also work without the `new` keyword
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = Victor(42, 1337);
 *
 * @param {Number} x Value of the x axis
 * @param {Number} y Value of the y axis
 * @return {Victor}
 * @api public
 */
function Victor (x, y) {
	if (!(this instanceof Victor)) {
		return new Victor(x, y);
	}

	/**
	 * The X axis
	 *
	 * ### Examples:
	 *     var vec = new Victor.fromArray(42, 21);
	 *
	 *     vec.x;
	 *     // => 42
	 *
	 * @api public
	 */
	this.x = x || 0;

	/**
	 * The Y axis
	 *
	 * ### Examples:
	 *     var vec = new Victor.fromArray(42, 21);
	 *
	 *     vec.y;
	 *     // => 21
	 *
	 * @api public
	 */
	this.y = y || 0;
};

/**
 * # Static
 */

/**
 * Creates a new instance from an array
 *
 * ### Examples:
 *     var vec = Victor.fromArray([42, 21]);
 *
 *     vec.toString();
 *     // => x:42, y:21
 *
 * @name Victor.fromArray
 * @param {Array} array Array with the x and y values at index 0 and 1 respectively
 * @return {Victor} The new instance
 * @api public
 */
Victor.fromArray = function (arr) {
	return new Victor(arr[0] || 0, arr[1] || 0);
};

/**
 * Creates a new instance from an object
 *
 * ### Examples:
 *     var vec = Victor.fromObject({ x: 42, y: 21 });
 *
 *     vec.toString();
 *     // => x:42, y:21
 *
 * @name Victor.fromObject
 * @param {Object} obj Object with the values for x and y
 * @return {Victor} The new instance
 * @api public
 */
Victor.fromObject = function (obj) {
	return new Victor(obj.x || 0, obj.y || 0);
};

/**
 * # Manipulation
 *
 * These functions are chainable.
 */

/**
 * Adds another vector's X axis to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.addX(vec2);
 *     vec1.toString();
 *     // => x:30, y:10
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addX = function (vec) {
	this.x += vec.x;
	return this;
};

/**
 * Adds another vector's Y axis to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.addY(vec2);
 *     vec1.toString();
 *     // => x:10, y:40
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addY = function (vec) {
	this.y += vec.y;
	return this;
};

/**
 * Adds another vector to this one
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.add(vec2);
 *     vec1.toString();
 *     // => x:30, y:40
 *
 * @param {Victor} vector The other vector you want to add to this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.add = function (vec) {
	this.x += vec.x;
	this.y += vec.y;
	return this;
};

/**
 * Adds the given scalar to both vector axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalar(2);
 *     vec.toString();
 *     // => x: 3, y: 4
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalar = function (scalar) {
	this.x += scalar;
	this.y += scalar;
	return this;
};

/**
 * Adds the given scalar to the X axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalarX(2);
 *     vec.toString();
 *     // => x: 3, y: 2
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalarX = function (scalar) {
	this.x += scalar;
	return this;
};

/**
 * Adds the given scalar to the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(1, 2);
 *
 *     vec.addScalarY(2);
 *     vec.toString();
 *     // => x: 1, y: 4
 *
 * @param {Number} scalar The scalar to add
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.addScalarY = function (scalar) {
	this.y += scalar;
	return this;
};

/**
 * Subtracts the X axis of another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtractX(vec2);
 *     vec1.toString();
 *     // => x:80, y:50
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractX = function (vec) {
	this.x -= vec.x;
	return this;
};

/**
 * Subtracts the Y axis of another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtractY(vec2);
 *     vec1.toString();
 *     // => x:100, y:20
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractY = function (vec) {
	this.y -= vec.y;
	return this;
};

/**
 * Subtracts another vector from this one
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(20, 30);
 *
 *     vec1.subtract(vec2);
 *     vec1.toString();
 *     // => x:80, y:20
 *
 * @param {Victor} vector The other vector you want subtract from this one
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtract = function (vec) {
	this.x -= vec.x;
	this.y -= vec.y;
	return this;
};

/**
 * Subtracts the given scalar from both axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalar(20);
 *     vec.toString();
 *     // => x: 80, y: 180
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalar = function (scalar) {
	this.x -= scalar;
	this.y -= scalar;
	return this;
};

/**
 * Subtracts the given scalar from the X axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalarX(20);
 *     vec.toString();
 *     // => x: 80, y: 200
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalarX = function (scalar) {
	this.x -= scalar;
	return this;
};

/**
 * Subtracts the given scalar from the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 200);
 *
 *     vec.subtractScalarY(20);
 *     vec.toString();
 *     // => x: 100, y: 180
 *
 * @param {Number} scalar The scalar to subtract
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.subtractScalarY = function (scalar) {
	this.y -= scalar;
	return this;
};

/**
 * Divides the X axis by the x component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 0);
 *
 *     vec.divideX(vec2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Victor} vector The other vector you want divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideX = function (vector) {
	this.x /= vector.x;
	return this;
};

/**
 * Divides the Y axis by the y component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(0, 2);
 *
 *     vec.divideY(vec2);
 *     vec.toString();
 *     // => x:100, y:25
 *
 * @param {Victor} vector The other vector you want divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideY = function (vector) {
	this.y /= vector.y;
	return this;
};

/**
 * Divides both vector axis by a axis values of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 2);
 *
 *     vec.divide(vec2);
 *     vec.toString();
 *     // => x:50, y:25
 *
 * @param {Victor} vector The vector to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divide = function (vector) {
	this.x /= vector.x;
	this.y /= vector.y;
	return this;
};

/**
 * Divides both vector axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalar(2);
 *     vec.toString();
 *     // => x:50, y:25
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalar = function (scalar) {
	if (scalar !== 0) {
		this.x /= scalar;
		this.y /= scalar;
	} else {
		this.x = 0;
		this.y = 0;
	}

	return this;
};

/**
 * Divides the X axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalarX(2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalarX = function (scalar) {
	if (scalar !== 0) {
		this.x /= scalar;
	} else {
		this.x = 0;
	}
	return this;
};

/**
 * Divides the Y axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.divideScalarY(2);
 *     vec.toString();
 *     // => x:100, y:25
 *
 * @param {Number} The scalar to divide by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.divideScalarY = function (scalar) {
	if (scalar !== 0) {
		this.y /= scalar;
	} else {
		this.y = 0;
	}
	return this;
};

/**
 * Inverts the X axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invertX();
 *     vec.toString();
 *     // => x:-100, y:50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invertX = function () {
	this.x *= -1;
	return this;
};

/**
 * Inverts the Y axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invertY();
 *     vec.toString();
 *     // => x:100, y:-50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invertY = function () {
	this.y *= -1;
	return this;
};

/**
 * Inverts both axis
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.invert();
 *     vec.toString();
 *     // => x:-100, y:-50
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.invert = function () {
	this.invertX();
	this.invertY();
	return this;
};

/**
 * Multiplies the X axis by X component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 0);
 *
 *     vec.multiplyX(vec2);
 *     vec.toString();
 *     // => x:200, y:50
 *
 * @param {Victor} vector The vector to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyX = function (vector) {
	this.x *= vector.x;
	return this;
};

/**
 * Multiplies the Y axis by Y component of given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(0, 2);
 *
 *     vec.multiplyX(vec2);
 *     vec.toString();
 *     // => x:100, y:100
 *
 * @param {Victor} vector The vector to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyY = function (vector) {
	this.y *= vector.y;
	return this;
};

/**
 * Multiplies both vector axis by values from a given vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     var vec2 = new Victor(2, 2);
 *
 *     vec.multiply(vec2);
 *     vec.toString();
 *     // => x:200, y:100
 *
 * @param {Victor} vector The vector to multiply by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiply = function (vector) {
	this.x *= vector.x;
	this.y *= vector.y;
	return this;
};

/**
 * Multiplies both vector axis by the given scalar value
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalar(2);
 *     vec.toString();
 *     // => x:200, y:100
 *
 * @param {Number} The scalar to multiply by
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalar = function (scalar) {
	this.x *= scalar;
	this.y *= scalar;
	return this;
};

/**
 * Multiplies the X axis by the given scalar
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalarX(2);
 *     vec.toString();
 *     // => x:200, y:50
 *
 * @param {Number} The scalar to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalarX = function (scalar) {
	this.x *= scalar;
	return this;
};

/**
 * Multiplies the Y axis by the given scalar
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.multiplyScalarY(2);
 *     vec.toString();
 *     // => x:100, y:100
 *
 * @param {Number} The scalar to multiply the axis with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.multiplyScalarY = function (scalar) {
	this.y *= scalar;
	return this;
};

/**
 * Normalize
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.normalize = function () {
	var length = this.length();

	if (length === 0) {
		this.x = 1;
		this.y = 0;
	} else {
		this.divide(Victor(length, length));
	}
	return this;
};

Victor.prototype.norm = Victor.prototype.normalize;

/**
 * If the absolute vector axis is greater than `max`, multiplies the axis by `factor`
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.limit(80, 0.9);
 *     vec.toString();
 *     // => x:90, y:50
 *
 * @param {Number} max The maximum value for both x and y axis
 * @param {Number} factor Factor by which the axis are to be multiplied with
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.limit = function (max, factor) {
	if (Math.abs(this.x) > max){ this.x *= factor; }
	if (Math.abs(this.y) > max){ this.y *= factor; }
	return this;
};

/**
 * Randomizes both vector axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomize(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:67, y:73
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomize = function (topLeft, bottomRight) {
	this.randomizeX(topLeft, bottomRight);
	this.randomizeY(topLeft, bottomRight);

	return this;
};

/**
 * Randomizes the y axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeX(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:55, y:50
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeX = function (topLeft, bottomRight) {
	var min = Math.min(topLeft.x, bottomRight.x);
	var max = Math.max(topLeft.x, bottomRight.x);
	this.x = random(min, max);
	return this;
};

/**
 * Randomizes the y axis with a value between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeY(new Victor(50, 60), new Victor(70, 80`));
 *     vec.toString();
 *     // => x:100, y:66
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeY = function (topLeft, bottomRight) {
	var min = Math.min(topLeft.y, bottomRight.y);
	var max = Math.max(topLeft.y, bottomRight.y);
	this.y = random(min, max);
	return this;
};

/**
 * Randomly randomizes either axis between 2 vectors
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.randomizeAny(new Victor(50, 60), new Victor(70, 80));
 *     vec.toString();
 *     // => x:100, y:77
 *
 * @param {Victor} topLeft first vector
 * @param {Victor} bottomRight second vector
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.randomizeAny = function (topLeft, bottomRight) {
	if (!! Math.round(Math.random())) {
		this.randomizeX(topLeft, bottomRight);
	} else {
		this.randomizeY(topLeft, bottomRight);
	}
	return this;
};

/**
 * Rounds both axis to an integer value
 *
 * ### Examples:
 *     var vec = new Victor(100.2, 50.9);
 *
 *     vec.unfloat();
 *     vec.toString();
 *     // => x:100, y:51
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.unfloat = function () {
	this.x = Math.round(this.x);
	this.y = Math.round(this.y);
	return this;
};

/**
 * Rounds both axis to a certain precision
 *
 * ### Examples:
 *     var vec = new Victor(100.2, 50.9);
 *
 *     vec.unfloat();
 *     vec.toString();
 *     // => x:100, y:51
 *
 * @param {Number} Precision (default: 8)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.toFixed = function (precision) {
	if (typeof precision === 'undefined') { precision = 8; }
	this.x = this.x.toFixed(precision);
	this.y = this.y.toFixed(precision);
	return this;
};

/**
 * Performs a linear blend / interpolation of the X axis towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mixX(vec2, 0.5);
 *     vec.toString();
 *     // => x:150, y:100
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mixX = function (vec, amount) {
	if (typeof amount === 'undefined') {
		amount = 0.5;
	}

	this.x = (1 - amount) * this.x + amount * vec.x;
	return this;
};

/**
 * Performs a linear blend / interpolation of the Y axis towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mixY(vec2, 0.5);
 *     vec.toString();
 *     // => x:100, y:150
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mixY = function (vec, amount) {
	if (typeof amount === 'undefined') {
		amount = 0.5;
	}

	this.y = (1 - amount) * this.y + amount * vec.y;
	return this;
};

/**
 * Performs a linear blend / interpolation towards another vector
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 100);
 *     var vec2 = new Victor(200, 200);
 *
 *     vec1.mix(vec2, 0.5);
 *     vec.toString();
 *     // => x:150, y:150
 *
 * @param {Victor} vector The other vector
 * @param {Number} amount The blend amount (optional, default: 0.5)
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.mix = function (vec, amount) {
	this.mixX(vec, amount);
	this.mixY(vec, amount);
	return this;
};

/**
 * # Products
 */

/**
 * Creates a clone of this vector
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = vec1.clone();
 *
 *     vec2.toString();
 *     // => x:10, y:10
 *
 * @return {Victor} A clone of the vector
 * @api public
 */
Victor.prototype.clone = function () {
	return new Victor(this.x, this.y);
};

/**
 * Copies another vector's X component in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copyX(vec1);
 *
 *     vec2.toString();
 *     // => x:20, y:10
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copyX = function (vec) {
	this.x = vec.x;
	return this;
};

/**
 * Copies another vector's Y component in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copyY(vec1);
 *
 *     vec2.toString();
 *     // => x:10, y:20
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copyY = function (vec) {
	this.y = vec.y;
	return this;
};

/**
 * Copies another vector's X and Y components in to its own
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *     var vec2 = new Victor(20, 20);
 *     var vec2 = vec1.copy(vec1);
 *
 *     vec2.toString();
 *     // => x:20, y:20
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.copy = function (vec) {
	this.copyX(vec);
	this.copyY(vec);
	return this;
};

/**
 * Sets the vector to zero (0,0)
 *
 * ### Examples:
 *     var vec1 = new Victor(10, 10);
 *		 var1.zero();
 *     vec1.toString();
 *     // => x:0, y:0
 *
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.zero = function () {
	this.x = this.y = 0;
	return this;
};

/**
 * Calculates the dot product of this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.dot(vec2);
 *     // => 23000
 *
 * @param {Victor} vector The second vector
 * @return {Number} Dot product
 * @api public
 */
Victor.prototype.dot = function (vec2) {
	return this.x * vec2.x + this.y * vec2.y;
};

Victor.prototype.cross = function (vec2) {
	return (this.x * vec2.y ) - (this.y * vec2.x );
};

/**
 * Projects a vector onto another vector, setting itself to the result.
 *
 * ### Examples:
 *     var vec = new Victor(100, 0);
 *     var vec2 = new Victor(100, 100);
 *
 *     vec.projectOnto(vec2);
 *     vec.toString();
 *     // => x:50, y:50
 *
 * @param {Victor} vector The other vector you want to project this vector onto
 * @return {Victor} `this` for chaining capabilities
 * @api public
 */
Victor.prototype.projectOnto = function (vec2) {
    var coeff = ( (this.x * vec2.x)+(this.y * vec2.y) ) / ((vec2.x*vec2.x)+(vec2.y*vec2.y));
    this.x = coeff * vec2.x;
    this.y = coeff * vec2.y;
    return this;
};


Victor.prototype.horizontalAngle = function () {
	return Math.atan2(this.y, this.x);
};

Victor.prototype.horizontalAngleDeg = function () {
	return radian2degrees(this.horizontalAngle());
};

Victor.prototype.verticalAngle = function () {
	return Math.atan2(this.x, this.y);
};

Victor.prototype.verticalAngleDeg = function () {
	return radian2degrees(this.verticalAngle());
};

Victor.prototype.angle = Victor.prototype.horizontalAngle;
Victor.prototype.angleDeg = Victor.prototype.horizontalAngleDeg;
Victor.prototype.direction = Victor.prototype.horizontalAngle;

Victor.prototype.rotate = function (angle) {
	var nx = (this.x * Math.cos(angle)) - (this.y * Math.sin(angle));
	var ny = (this.x * Math.sin(angle)) + (this.y * Math.cos(angle));

	this.x = nx;
	this.y = ny;

	return this;
};

Victor.prototype.rotateDeg = function (angle) {
	angle = degrees2radian(angle);
	return this.rotate(angle);
};

Victor.prototype.rotateTo = function(rotation) {
	return this.rotate(rotation-this.angle());
};

Victor.prototype.rotateToDeg = function(rotation) {
	rotation = degrees2radian(rotation);
	return this.rotateTo(rotation);
};

Victor.prototype.rotateBy = function (rotation) {
	var angle = this.angle() + rotation;

	return this.rotate(angle);
};

Victor.prototype.rotateByDeg = function (rotation) {
	rotation = degrees2radian(rotation);
	return this.rotateBy(rotation);
};

/**
 * Calculates the distance of the X axis between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceX(vec2);
 *     // => -100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceX = function (vec) {
	return this.x - vec.x;
};

/**
 * Same as `distanceX()` but always returns an absolute number
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.absDistanceX(vec2);
 *     // => 100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Absolute distance
 * @api public
 */
Victor.prototype.absDistanceX = function (vec) {
	return Math.abs(this.distanceX(vec));
};

/**
 * Calculates the distance of the Y axis between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceY(vec2);
 *     // => -10
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceY = function (vec) {
	return this.y - vec.y;
};

/**
 * Same as `distanceY()` but always returns an absolute number
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceY(vec2);
 *     // => 10
 *
 * @param {Victor} vector The second vector
 * @return {Number} Absolute distance
 * @api public
 */
Victor.prototype.absDistanceY = function (vec) {
	return Math.abs(this.distanceY(vec));
};

/**
 * Calculates the euclidean distance between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distance(vec2);
 *     // => 100.4987562112089
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distance = function (vec) {
	return Math.sqrt(this.distanceSq(vec));
};

/**
 * Calculates the squared euclidean distance between this vector and another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(200, 60);
 *
 *     vec1.distanceSq(vec2);
 *     // => 10100
 *
 * @param {Victor} vector The second vector
 * @return {Number} Distance
 * @api public
 */
Victor.prototype.distanceSq = function (vec) {
	var dx = this.distanceX(vec),
		dy = this.distanceY(vec);

	return dx * dx + dy * dy;
};

/**
 * Calculates the length or magnitude of the vector
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.length();
 *     // => 111.80339887498948
 *
 * @return {Number} Length / Magnitude
 * @api public
 */
Victor.prototype.length = function () {
	return Math.sqrt(this.lengthSq());
};

/**
 * Squared length / magnitude
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *
 *     vec.lengthSq();
 *     // => 12500
 *
 * @return {Number} Length / Magnitude
 * @api public
 */
Victor.prototype.lengthSq = function () {
	return this.x * this.x + this.y * this.y;
};

Victor.prototype.magnitude = Victor.prototype.length;

/**
 * Returns a true if vector is (0, 0)
 *
 * ### Examples:
 *     var vec = new Victor(100, 50);
 *     vec.zero();
 *
 *     // => true
 *
 * @return {Boolean}
 * @api public
 */
Victor.prototype.isZero = function() {
	return this.x === 0 && this.y === 0;
};

/**
 * Returns a true if this vector is the same as another
 *
 * ### Examples:
 *     var vec1 = new Victor(100, 50);
 *     var vec2 = new Victor(100, 50);
 *     vec1.isEqualTo(vec2);
 *
 *     // => true
 *
 * @return {Boolean}
 * @api public
 */
Victor.prototype.isEqualTo = function(vec2) {
	return this.x === vec2.x && this.y === vec2.y;
};

/**
 * # Utility Methods
 */

/**
 * Returns an string representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toString();
 *     // => x:10, y:20
 *
 * @return {String}
 * @api public
 */
Victor.prototype.toString = function () {
	return 'x:' + this.x + ', y:' + this.y;
};

/**
 * Returns an array representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toArray();
 *     // => [10, 20]
 *
 * @return {Array}
 * @api public
 */
Victor.prototype.toArray = function () {
	return [ this.x, this.y ];
};

/**
 * Returns an object representation of the vector
 *
 * ### Examples:
 *     var vec = new Victor(10, 20);
 *
 *     vec.toObject();
 *     // => { x: 10, y: 20 }
 *
 * @return {Object}
 * @api public
 */
Victor.prototype.toObject = function () {
	return { x: this.x, y: this.y };
};


var degrees = 180 / Math.PI;

function random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function radian2degrees (rad) {
	return rad * degrees;
}

function degrees2radian (deg) {
	return deg / degrees;
}

},{}]},{},[7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYWN0aW9ucy9ibG9jay5qcyIsImFwcC9hY3Rpb25zL2JvYXJkLmpzIiwiYXBwL2FjdGlvbnMvYm94LmpzIiwiYXBwL2FjdGlvbnMvY2xvdWR1aS5qcyIsImFwcC9hY3Rpb25zL3NlbGVjdC5qcyIsImFwcC9hY3Rpb25zL3VpLmpzIiwiYXBwL2Nsb3VkLmpzIiwiYXBwL2NvbXBvbmVudHMvQ2xvdWRBcHAuanMiLCJhcHAvY29tcG9uZW50cy9DbG91ZFRSLmpzIiwiYXBwL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uLmpzIiwiYXBwL2Nzcy9hcHAuY3NzIiwiYXBwL2xpYi9jb21wb25lbnRzLmpzIiwiYXBwL2xpYi91dGlsLmpzIiwiYXBwL3N0b3Jlcy9ibG9jay5qcyIsImFwcC9zdG9yZXMvYm9hcmQuanMiLCJhcHAvc3RvcmVzL2JveC5qcyIsImFwcC9zdG9yZXMvY2xvdWR1aS5qcyIsImFwcC9zdG9yZXMvc2VsZWN0LmpzIiwiYXBwL3N0b3Jlcy91aS5qcyIsImxpYi9jbGllbnQuanMiLCJub2RlX21vZHVsZXMvb3JpZW50Ym9hcmQtY29tcG9uZW50LWV4YW1wbGUvY3NzL2NvbXBvbmVudC5jc3MiLCJub2RlX21vZHVsZXMvb3JpZW50Ym9hcmQtY29tcG9uZW50LWV4YW1wbGUvbGliL2NvbXBvbmVudC5qcyIsIm5vZGVfbW9kdWxlcy9vcmllbnRib2FyZC1jb21wb25lbnQtZXhhbXBsZS9saWIvbmV3LWNvbXBvbmVudC1tb2RhbC5qcyIsIm5vZGVfbW9kdWxlcy91dWlkL3JuZy1icm93c2VyLmpzIiwibm9kZV9tb2R1bGVzL3V1aWQvdXVpZC5qcyIsIm5vZGVfbW9kdWxlcy92aWN0b3IvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNBQTs7Ozs7O0FBRUEsSUFBTSxlQUFlLGlCQUFPLGFBQVAsQ0FBcUIsQ0FDeEMsZ0JBRHdDLEVBRXhDLFdBRndDLEVBR3hDLFdBSHdDLEVBSXhDLGdCQUp3QyxFQUt4QyxjQUx3QyxFQU14QyxNQU53QyxDQU1qQyxVQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVk7QUFDbkIsS0FBRyxFQUFILElBQVMsRUFBRSxhQUFhLElBQWYsRUFBVDtBQUNBLFNBQU8sRUFBUDtBQUNELENBVHlDLEVBU3ZDLEVBVHVDLENBQXJCLENBQXJCOztrQkFXZSxZOzs7Ozs7Ozs7QUNiZjs7Ozs7O0FBRUEsSUFBTSxVQUFVLGlCQUFPLGFBQVAsQ0FBcUIsQ0FDbkMsV0FEbUMsRUFFbkMsWUFGbUMsRUFHbkMsYUFIbUMsRUFJbkMsWUFKbUMsRUFLbkMsV0FMbUMsRUFNbkMsYUFObUMsRUFPbkMsYUFQbUMsRUFRbkMsYUFSbUMsRUFTbkMsVUFUbUMsRUFVbkMsV0FWbUMsRUFXbkMsYUFYbUMsRUFZbkMsZ0JBWm1DLEVBYW5DLGlCQWJtQyxFQWNuQyxjQWRtQyxFQWVuQyxNQWZtQyxDQWU1QixVQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVk7QUFDbkIsS0FBRyxFQUFILElBQVMsRUFBRSxhQUFhLElBQWYsRUFBVDtBQUNBLFNBQU8sRUFBUDtBQUNELENBbEJvQyxFQWtCbEMsRUFsQmtDLENBQXJCLENBQWhCOztrQkFvQmUsTzs7Ozs7Ozs7O0FDdEJmOzs7Ozs7QUFFQSxJQUFNLFVBQVUsaUJBQU8sYUFBUCxDQUFxQixDQUNuQyxXQURtQyxFQUVuQyxVQUZtQyxFQUduQyxhQUhtQyxFQUluQyxhQUptQyxFQUtuQyxTQUxtQyxFQU1uQyxXQU5tQyxFQU9uQyxXQVBtQyxFQVFuQyxNQVJtQyxFQVNuQyxZQVRtQyxFQVVuQyxNQVZtQyxDQVU1QixVQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVk7QUFDbkIsS0FBRyxFQUFILElBQVMsRUFBRSxhQUFhLElBQWYsRUFBVDtBQUNBLFNBQU8sRUFBUDtBQUNELENBYm9DLEVBYWxDLEVBYmtDLENBQXJCLENBQWhCOztrQkFlZSxPOzs7Ozs7Ozs7QUNqQmY7Ozs7OztBQUVBLElBQU0sVUFBVSxpQkFBTyxhQUFQLENBQXFCLENBQ25DLFNBRG1DLEVBRW5DLG1CQUZtQyxFQUduQyxZQUhtQyxFQUluQyxZQUptQyxFQUtuQyxVQUxtQyxFQU1uQyxnQkFObUMsRUFPbkMsTUFQbUMsQ0FPNUIsVUFBQyxFQUFELEVBQUssRUFBTCxFQUFZO0FBQ25CLEtBQUcsRUFBSCxJQUFTLEVBQUUsYUFBYSxJQUFmLEVBQVQ7QUFDQSxTQUFPLEVBQVA7QUFDRCxDQVZvQyxFQVVsQyxFQVZrQyxDQUFyQixDQUFoQjs7a0JBWWUsTzs7Ozs7Ozs7O0FDZGY7Ozs7OztBQUVBLElBQU0sVUFBVSxpQkFBTyxhQUFQLENBQXFCLENBQ25DLGdCQURtQyxFQUVuQyxjQUZtQyxFQUduQyxnQkFIbUMsRUFJbkMsUUFKbUMsRUFLbkMsTUFMbUMsQ0FLNUIsVUFBQyxFQUFELEVBQUssRUFBTCxFQUFZO0FBQ25CLEtBQUcsRUFBSCxJQUFTLEVBQUUsYUFBYSxJQUFmLEVBQVQ7QUFDQSxTQUFPLEVBQVA7QUFDRCxDQVJvQyxFQVFsQyxFQVJrQyxDQUFyQixDQUFoQjs7a0JBVWUsTzs7Ozs7Ozs7O0FDWmY7Ozs7OztBQUVBLElBQU0sVUFBVSxpQkFBTyxhQUFQLENBQXFCLENBQ25DLGlCQURtQyxFQUVuQyxrQkFGbUMsRUFHbkMsaUJBSG1DLEVBSW5DLGtCQUptQyxFQUtuQyxTQUxtQyxFQU1uQyxVQU5tQyxFQU9uQyxNQVBtQyxDQU81QixVQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVk7QUFDbkIsS0FBRyxFQUFILElBQVMsRUFBRSxhQUFhLElBQWYsRUFBVDtBQUNBLFNBQU8sRUFBUDtBQUNELENBVm9DLEVBVWxDLEVBVmtDLENBQXJCLENBQWhCOztrQkFZZSxPOzs7OztBQ2RmOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7O0FBRUEsbUJBQVMsTUFBVCxDQUFnQjtBQUFBO0FBQUEsRUFBaEIsRUFBd0IsU0FBUyxhQUFULENBQXVCLFlBQXZCLENBQXhCOzs7Ozs7Ozs7Ozs7O0FDUkE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUVBOzs7O0FBRUE7O0FBRUE7O0FBSUE7Ozs7Ozs7Ozs7OztBQUZBLElBQU0sV0FBUyxFQUFDLFNBQVEsS0FBVCxFQUFlLFVBQVMsS0FBeEIsRUFBOEIsU0FBUSxLQUF0QyxFQUFmOztBQU1BLFNBQVMsUUFBVCxDQUFrQixNQUFsQixFQUEwQixJQUExQixFQUFnQyxRQUFoQyxFQUEwQztBQUN0QyxNQUFNLE9BQU87QUFDWCxrQkFEVztBQUVYLFVBQU0sS0FBSyxTQUFMLENBQWUsSUFBZixDQUZLO0FBR1gsaUJBQWEsaUNBSEY7QUFJWCxjQUFVLE1BSkM7QUFLWCxTQUFLO0FBTE0sR0FBYjtBQU9BLE1BQUksV0FBVyxLQUFmLEVBQ0UsS0FBSyxJQUFMLEdBQVksSUFBWixDQURGLEtBRUs7QUFDSCxTQUFLLElBQUwsR0FBWSxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQVo7QUFDQSxTQUFLLFdBQUwsR0FBbUIsaUNBQW5CO0FBQ0EsU0FBSyxRQUFMLEdBQWdCLE1BQWhCO0FBQ0Q7QUFDRCxTQUFPLGlCQUFFLElBQUYsQ0FBTyxJQUFQLENBQVA7QUFDRDs7SUFNRyxnQjs7O0FBQ0osNEJBQVksS0FBWixFQUFtQjtBQUFBOztBQUFBLG9HQUNYLEtBRFc7O0FBR2pCLFVBQUssS0FBTCxHQUFhO0FBQ1osb0JBQWMsSUFERjtBQUVaLGFBQU0sRUFGTTtBQUdaLFdBQUksRUFIUTtBQUlaLFlBQUs7QUFKTyxLQUFiOztBQUhpQjtBQVVsQjs7OztnQ0FNVTtBQUNSLFdBQUssUUFBTCxDQUFjLEVBQUMsY0FBYyxJQUFmLEVBQW9CLE9BQU0sSUFBMUIsRUFBK0IsS0FBSSxJQUFuQyxFQUFkO0FBQ0Y7Ozs2QkFFUTtBQUNQLFVBQUksS0FBSyxLQUFMLENBQVcsWUFBZixFQUE2QjtBQUMzQixlQUNFO0FBQUE7QUFBQSxZQUFPLFNBQVMsS0FBSyxLQUFMLENBQVcsSUFBM0IsRUFBaUMsV0FBVyxLQUFLLGtCQUFqRDtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFLLGlCQUFLLEtBQUwsQ0FBVztBQUFoQixXQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFJLGlCQUFLLEtBQUwsQ0FBVztBQUFmLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFIRixTQURGO0FBUUQ7O0FBRUQsYUFDRztBQUFBO0FBQUEsVUFBUSxTQUFTLEtBQUssU0FBdEI7QUFBQTtBQUFBO0FBQUEsT0FESDtBQUdEOzs7eUNBRW9CO0FBQ25CLFdBQUssUUFBTCxDQUFjLEVBQUMsY0FBYyxLQUFmLEVBQWQ7QUFDRDs7O3NDQUVpQjtBQUNoQixXQUFLLFFBQUwsQ0FBYyxFQUFDLGNBQWMsSUFBZixFQUFkO0FBQ0Q7Ozs7RUE1QzRCLGdCQUFNLFM7O0lBaUQvQixHOzs7QUFDSixlQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3RkFDWCxLQURXOztBQUdqQixXQUFLLEtBQUwsR0FBYTtBQUNYLGtCQUFZOztBQURELEtBQWI7O0FBSGlCO0FBUWxCOzs7O3dDQUVtQjtBQUFBOztBQUVuQixXQUFLLGNBQUw7O0FBRUEsd0JBQWEsTUFBYixDQUFvQixVQUFDLFFBQUQsRUFBYztBQUMvQixlQUFLLFFBQUwsQ0FBYyxRQUFkO0FBQ0QsT0FGRjs7QUFJQyx3QkFBZSxRQUFmO0FBRUQ7OztvQ0FHYzs7QUFFWixXQUFLLFFBQUwsQ0FBYyxFQUFDLFlBQVksQ0FBQyxLQUFLLEtBQUwsQ0FBVyxVQUF6QixFQUFvQyxLQUFJLElBQXhDLEVBQTZDLFNBQVEsS0FBckQsRUFBMkQsYUFBWSxNQUF2RSxFQUFkO0FBQ0Y7OztrQ0FDWTtBQUNYLFdBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNEIsSUFBNUI7QUFDRDs7O21DQUNhO0FBQ1gsV0FBSyxRQUFMLENBQWMsRUFBQyxTQUFTLEtBQVYsRUFBZ0IsS0FBSSxJQUFwQixFQUFkO0FBQ0Y7OztpQ0FFVzs7QUFFVixVQUFJLE9BQUssRUFBVDs7QUFFQSxVQUFHLEtBQUssS0FBTCxDQUFXLEdBQWQsRUFBa0I7QUFDaEIsZUFBSyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLEtBQUssS0FBTCxDQUFXLEdBQVgsR0FBZSxDQUFoQyxDQUFMO0FBQ0EsMEJBQWUsVUFBZixDQUEwQixJQUExQjtBQUNBOztBQUdELFdBQUssUUFBTCxDQUFjLEVBQUMsU0FBVSxLQUFYLEVBQWQ7QUFHRjs7OytCQUVTOztBQUVSLFVBQUksTUFBSSxLQUFLLElBQUwsQ0FBVSxRQUFWLENBQW1CLFFBQW5CLEVBQVI7O0FBRUEsVUFBSSxRQUFNLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsRUFBVjs7QUFFQSxVQUFJLE9BQUssS0FBSyxJQUFMLENBQVUsSUFBVixDQUFlLFFBQWYsRUFBVDs7QUFFQSxVQUFHLE9BQUssRUFBTCxJQUFTLFNBQU8sRUFBaEIsSUFBb0IsUUFBTSxFQUE3QixFQUFnQztBQUM5QixjQUFNLFNBQU47QUFDQTtBQUNEOztBQUVELFVBQUcsT0FBSyxLQUFLLElBQUwsQ0FBVSxTQUFWLENBQW9CLFFBQXBCLEVBQVIsRUFBdUM7QUFDckMsY0FBTSxRQUFOO0FBQ0E7QUFDRDs7QUFHRCxVQUFHLEtBQUssS0FBTCxDQUFXLEdBQWQsRUFBa0I7QUFDaEIsWUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsS0FBSyxLQUFMLENBQVcsR0FBWCxHQUFlLENBQWhDLENBQVg7QUFDQSxnQkFBUSxHQUFSLENBQVksY0FBWixFQUE0QixJQUE1Qjs7QUFFQSwwQkFBZSxVQUFmLENBQTBCLGdCQUExQixFQUEyQyxFQUFDLE9BQU0sS0FBSyxHQUFaLEVBQWdCLFlBQVcsR0FBM0IsRUFBM0M7QUFFRCxPQU5ELE1BTUs7O0FBR0wsMEJBQWUsT0FBZixDQUF1QixFQUFDLFNBQVEsS0FBVCxFQUFlLFlBQVcsR0FBMUIsRUFBK0IsUUFBUyxJQUF4QyxFQUF2QjtBQUNBLGFBQUssUUFBTCxDQUFjLEVBQUMsWUFBWSxLQUFiLEVBQW1CLEtBQUksSUFBdkIsRUFBNEIsU0FBUSxLQUFwQyxFQUEwQyxhQUFZLE1BQXRELEVBQWQ7QUFDQztBQUNGOzs7aUNBS1ksSSxFQUFNO0FBQ2pCLFdBQUssUUFBTCxDQUFjLEVBQUMsU0FBUSxLQUFLLElBQUwsQ0FBVSxVQUFWLENBQXFCLFFBQXJCLEVBQVQsRUFBZDtBQUNEOzs7cUNBRWU7QUFBQTs7QUFDZCx1QkFBRSxHQUFGLENBQU0saUJBQU4sRUFBeUIsVUFBQyxNQUFELEVBQVk7O0FBRTdCLGdCQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsZUFBSyxRQUFMLENBQWM7QUFDVixtQkFBUyxLQUFLLFNBQUwsQ0FBZSxNQUFmLEVBQXVCLElBQXZCLEVBQTZCLENBQTdCO0FBREMsU0FBZDtBQUdBLGdCQUFRLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQTFCO0FBQ0gsT0FQTDtBQVNEOzs7MkNBRXFCO0FBQ3BCLFdBQUssUUFBTCxDQUFjLEVBQUMsa0JBQWlCLElBQWxCLEVBQWQ7QUFFRDs7OzJDQUVxQjtBQUNwQixXQUFLLFFBQUwsQ0FBYyxFQUFDLGtCQUFpQixLQUFsQixFQUFkO0FBRUQ7OztxQ0FFZTs7QUFFZCxjQUFRLEdBQVIsQ0FBWSxLQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCLFFBQXhCLEVBQVo7QUFDQSxVQUFHO0FBQ0QsWUFBSSxXQUFTLENBQUMsTUFBRCxFQUFRLElBQVIsRUFBYSxVQUFiLENBQWI7QUFDQSxZQUFJLFNBQU8sS0FBSyxJQUFMLENBQVUsYUFBVixDQUF3QixRQUF4QixFQUFYOztBQUVBLFlBQUcsU0FBUyxPQUFULENBQWlCLE9BQU8sS0FBUCxDQUFhLEtBQWIsRUFBb0IsQ0FBcEIsQ0FBakIsSUFBeUMsQ0FBNUMsRUFBOEM7QUFDMUMsZ0JBQU0saUJBQWUsTUFBckI7QUFDQyxTQUZMLE1BRVM7O0FBRUosbUJBQVMsTUFBVCxFQUFrQixFQUFDLFdBQVUsQ0FBQyxNQUFELENBQVgsRUFBbEIsRUFBeUMsaUJBQXpDO0FBQ0EsZUFBSyxjQUFMO0FBQ0E7QUFFTixPQVpELENBWUMsT0FBTSxDQUFOLEVBQVE7QUFDUCxnQkFBUSxHQUFSLENBQVksQ0FBWjtBQUNBLGNBQU0sY0FBTjtBQUVEOztBQUdELFdBQUssUUFBTCxDQUFjLEVBQUMsa0JBQWlCLEtBQWxCLEVBQWQ7QUFHRDs7O3VDQUVpQjs7QUFFZixjQUFRLEdBQVIsQ0FBWSxLQUFLLElBQUwsQ0FBVSxhQUFWLENBQXdCLFFBQXhCLEVBQVo7QUFDRCxVQUFHO0FBQ0QsWUFBSSxXQUFTLENBQUMsTUFBRCxFQUFRLElBQVIsRUFBYSxVQUFiLENBQWI7QUFDQSxZQUFJLFNBQU8sS0FBSyxJQUFMLENBQVUsYUFBVixDQUF3QixRQUF4QixFQUFYOztBQUVBLFlBQUcsU0FBUyxPQUFULENBQWlCLE9BQU8sS0FBUCxDQUFhLEtBQWIsRUFBb0IsQ0FBcEIsQ0FBakIsSUFBeUMsQ0FBNUMsRUFBOEM7QUFDMUMsZ0JBQU0saUJBQWUsTUFBckI7QUFDQyxTQUZMLE1BRVM7O0FBRUosbUJBQVMsUUFBVCxFQUFvQixFQUFDLFdBQVUsQ0FBQyxNQUFELENBQVgsRUFBcEIsRUFBMkMsaUJBQTNDO0FBQ0EsZUFBSyxjQUFMO0FBQ0E7QUFFTixPQVpELENBWUMsT0FBTSxDQUFOLEVBQVE7QUFDUCxnQkFBUSxHQUFSLENBQVksQ0FBWjtBQUNBLGNBQU0sY0FBTjtBQUVEOztBQUdELFdBQUssUUFBTCxDQUFjLEVBQUMsa0JBQWlCLEtBQWxCLEVBQWQ7QUFFRDs7OzZCQUVRO0FBQUE7O0FBRU4sVUFBSSxPQUFLLEVBQVQ7QUFDQSxVQUFJLGVBQWEsS0FBakI7O0FBRUEsVUFBRyxLQUFLLEtBQUwsQ0FBVyxHQUFkLEVBQWtCO0FBQ2pCLGVBQUssS0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixLQUFLLEtBQUwsQ0FBVyxHQUFYLEdBQWUsQ0FBaEMsQ0FBTDtBQUNBLHVCQUFhLElBQWI7QUFDQTs7QUFHRixhQUNBO0FBQUE7QUFBQSxVQUFLLFdBQVUsa0JBQWY7QUFBQTtBQUVDLG9FQUFjLEtBQUksU0FBbEI7QUFBQSxVQUZEO0FBSUE7QUFBQTtBQUFBLFlBQU8sTUFBTSxLQUFLLEtBQUwsQ0FBVyxjQUF4QjtBQUFBO0FBQ0k7QUFBQSxrQ0FBTyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBRUk7QUFBQSxrQ0FBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBRUUsbUVBQU8sS0FBSSxlQUFYLEVBQTJCLE1BQUssTUFBaEMsRUFBdUMsT0FBTSxpQkFBN0M7QUFBQTtBQUZGLFdBRko7QUFPSTtBQUFBLGtDQUFPLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsZ0JBQVEsU0FBUyxLQUFLLG9CQUF0QjtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFRLFNBQVMsS0FBSyxjQUF0QjtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBR0U7QUFBQTtBQUFBLGdCQUFRLFdBQVUsWUFBbEIsRUFBK0IsU0FBUyxLQUFLLGdCQUE3QztBQUFBO0FBQUE7QUFBQTtBQUhGO0FBUEosU0FKQTtBQWtCQTtBQUFBO0FBQUEsWUFBTyxNQUFNLEtBQUssS0FBTCxDQUFXLE9BQXhCLEVBQWlDLFFBQVEsS0FBSyxZQUE5QztBQUFBO0FBQ0k7QUFBQSxrQ0FBTyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQ0k7QUFBQSxvQ0FBTyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLFdBREo7QUFJSTtBQUFBLGtDQUFPLElBQVA7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGdCQURGO0FBRUcsbUJBQUssS0FBTCxDQUFXLFVBRmQ7QUFBQTtBQUUyQixtQkFBSztBQUZoQztBQURKLFdBSko7QUFXSTtBQUFBLGtDQUFPLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsZ0JBQVEsU0FBUyxLQUFLLFlBQXRCO0FBQUE7QUFBQTtBQUFBLGFBREo7QUFFSTtBQUFBO0FBQUEsZ0JBQVEsU0FBUyxLQUFLLFVBQXRCO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFYSixTQWxCQTtBQW1DQTtBQUFBO0FBQUEsWUFBTyxNQUFNLEtBQUssS0FBTCxDQUFXLFVBQXhCLEVBQW9DLFFBQVEsS0FBSyxXQUFqRDtBQUFBO0FBQ0k7QUFBQSxrQ0FBTyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQ0k7QUFBQSxvQ0FBTyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQWMsbUJBQUssS0FBTCxDQUFXO0FBQXpCO0FBREosV0FESjtBQUlJO0FBQUEsa0NBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUNLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtCQURKO0FBRUk7QUFBQTtBQUFBLG9CQUFLLElBQUksQ0FBVDtBQUFBO0FBQ0EseUVBQU8sTUFBSyxPQUFaLEVBQW9CLE9BQU0sTUFBMUIsRUFBaUMsS0FBSSxPQUFyQyxFQUE2QyxjQUFjLEtBQUssS0FBaEU7QUFBQTtBQURBO0FBRkosZUFEWDtBQU9XO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsb0JBQUssSUFBSSxDQUFUO0FBQUE7QUFDQSx5RUFBTyxNQUFLLFVBQVosRUFBdUIsT0FBTSxNQUE3QixFQUFvQyxLQUFJLFVBQXhDLEVBQW1ELGNBQWMsS0FBSyxLQUFMLENBQVcsUUFBNUU7QUFBQTtBQURBLGlCQURKO0FBSUk7QUFBQTtBQUFBLG9CQUFLLElBQUksQ0FBVDtBQUFBO0FBQ0EseUVBQU8sTUFBSyxVQUFaLEVBQXVCLE9BQU0sTUFBN0IsRUFBb0MsS0FBSSxXQUF4QyxFQUFvRCxjQUFjLEtBQUssS0FBTCxDQUFXLFFBQTdFO0FBQUE7QUFEQTtBQUpKLGVBUFg7QUFlVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGtCQURKO0FBRUk7QUFBQTtBQUFBLG9CQUFLLElBQUksQ0FBVDtBQUFBO0FBQ0E7QUFBQTtBQUFBLHNCQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLE1BQTNCLEVBQWtDLEtBQUksTUFBdEMsRUFBNkMsY0FBYyxLQUFLLElBQWhFLEVBQXNFLFVBQVUsS0FBSyxZQUFyRjtBQUFBO0FBQ0M7QUFBQTtBQUFBLHdCQUFRLE9BQU0sUUFBZDtBQUFBO0FBQUE7QUFBQSxxQkFERDtBQUVDO0FBQUE7QUFBQSx3QkFBUSxPQUFNLE9BQWQ7QUFBQTtBQUFBO0FBQUEscUJBRkQ7QUFHQztBQUFBO0FBQUEsd0JBQVEsT0FBTSxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBSEQ7QUFEQSxpQkFGSjtBQVNJO0FBQUE7QUFBQSxvQkFBSyxJQUFJLENBQVQ7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFESixtQkFEQTtBQUdJLHVEQUFHLFdBQVksV0FBUyxLQUFLLEtBQUwsQ0FBVyxJQUFwQixHQUEwQixtQkFBekM7QUFBQTtBQUhKO0FBVEo7QUFmWDtBQURMLFdBSko7QUFzQ0k7QUFBQSxrQ0FBTyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGdCQUFRLFNBQVMsS0FBSyxhQUF0QjtBQUFBO0FBQUE7QUFBQSxhQURKO0FBRUk7QUFBQTtBQUFBLGdCQUFRLFNBQVMsS0FBSyxRQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBdENKLFNBbkNBO0FBOEVBO0FBQUE7QUFBQSxZQUFLLFdBQVUsWUFBZjtBQUFBO0FBQ0k7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQUE7QUFDSTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxZQUFkO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSztBQUFBO0FBQUEsb0JBQUcsTUFBSyxHQUFSO0FBQUE7QUFBQTtBQUFBLGlCQUFMO0FBQUE7QUFBQSxlQURKO0FBRUk7QUFBQTtBQUFBLGtCQUFJLFdBQVUsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBREo7QUFESixTQTlFQTtBQXNGQTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFBQTtBQUNJO0FBQUE7QUFBQSxjQUFLLFdBQVUsZ0JBQWY7QUFBQTtBQUdJO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGtCQUFmO0FBQUE7QUFDSTtBQUFBO0FBQUEsa0JBQU0sa0JBQWtCLENBQXhCO0FBQUE7QUFDSTtBQUFBO0FBQUEsb0JBQUssVUFBVSxDQUFmLEVBQWtCLE9BQU0sTUFBeEI7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBREo7QUFFSTtBQUFBO0FBQUEsd0JBQUssSUFBSSxDQUFUO0FBQUE7QUFDQTtBQUFBO0FBQUEsMEJBQVEsU0FBUyxLQUFLLGFBQXRCLEVBQXFDLFdBQVUseUJBQS9DO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFGSixtQkFESjtBQVNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBREo7QUFFSTtBQUFBO0FBQUEsd0JBQUssSUFBSSxFQUFUO0FBQUE7QUFDQTtBQUFBO0FBQUEsMEJBQUssV0FBVSxzQ0FBZjtBQUFBO0FBQ0k7QUFBQTtBQUFBLDRCQUFPLElBQUcsT0FBVixFQUFrQixXQUFVLHVDQUE1QjtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSiwrQkFESjtBQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKLCtCQUZKO0FBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUosK0JBSEo7QUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUpKO0FBREosMkJBREo7QUFTSTtBQUFBO0FBQUEsOEJBQU8sV0FBVSxNQUFqQjtBQUFBO0FBRUUsNkNBQUUsSUFBRixDQUFPLEtBQUssS0FBTCxDQUFXLEtBQWxCLEVBQXlCLEdBQXpCLENBQTZCLFVBQUMsSUFBRCxFQUFPLENBQVAsRUFBYTtBQUN4QyxzQ0FBUSxHQUFSLENBQVksT0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixDQUFqQixFQUFvQixLQUFoQyxFQUF1QyxDQUF2QztBQUNGLHFDQUNFLGlEQUFRLEtBQUssSUFBRSxDQUFmLEVBQWtCLEtBQUssSUFBRSxDQUF6QixFQUE0QixLQUFLLE9BQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsR0FBckQsRUFBMEQsT0FBTyxPQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLENBQWpCLEVBQW9CLEtBQXJGLEVBQTRGLFVBQVMsT0FBckcsRUFBNkcsTUFBTSxPQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLENBQWpCLEVBQW9CLElBQXZJLEVBQTZJLFFBQVEsT0FBSyxLQUFMLENBQVcsS0FBWCxDQUFpQixDQUFqQixFQUFvQixNQUF6SztBQUFBLGdDQURGO0FBSUQsNkJBTkM7QUFGRjtBQVRKO0FBREosdUJBREE7QUF3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJO0FBQUE7QUFBQSw0QkFBSSxXQUFVLDJCQUFkO0FBQUE7QUFDSTtBQUFBO0FBQUEsOEJBQUksV0FBVSxVQUFkO0FBQUE7QUFBeUI7QUFBQTtBQUFBLGdDQUFHLE1BQUssb0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBekIsMkJBREo7QUFFSTtBQUFBO0FBQUEsOEJBQUksV0FBVSxRQUFkO0FBQUE7QUFBdUI7QUFBQTtBQUFBLGdDQUFHLE1BQUssb0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBdkIsMkJBRko7QUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUk7QUFBQTtBQUFBLGdDQUFHLE1BQUssb0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBSiwyQkFISjtBQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsZ0NBQUcsTUFBSyxvQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFKLDJCQUpKO0FBS0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFJO0FBQUE7QUFBQSxnQ0FBRyxNQUFLLG9CQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFMSjtBQURKO0FBeEJBO0FBRko7QUFUSixpQkFESjtBQWtHSTtBQUFBO0FBQUEsb0JBQUssVUFBVSxDQUFmLEVBQWtCLE9BQU0sYUFBeEI7QUFBQTtBQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsc0JBREo7QUFFSTtBQUFBO0FBQUEsd0JBQUssSUFBSSxDQUFUO0FBQUE7QUFDQTtBQUFBO0FBQUEsMEJBQVEsU0FBUyxLQUFLLG9CQUF0QixFQUE0QyxXQUFVLHlCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQURBO0FBRkosbUJBREo7QUFPSztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0c7QUFBQTtBQUFBLHNCQURIO0FBRUc7QUFBQTtBQUFBLHdCQUFLLElBQUksRUFBVDtBQUFBO0FBQUE7QUFDTyw2RUFBTyxNQUFLLFVBQVosRUFBd0IsS0FBSSxZQUE1QixFQUEwQyxNQUFLLElBQS9DLEVBQW9ELE9BQU8sS0FBSyxLQUFMLENBQVcsT0FBdEUsRUFBK0UsVUFBVSxLQUFLLFlBQTlGO0FBQUE7QUFEUDtBQUZIO0FBUEw7QUFsR0o7QUFESjtBQUhKO0FBREo7QUF0RkEsT0FEQTtBQW1ORDs7OztFQW5ZZSxnQkFBTSxTOztBQXlZeEIsSUFBSSxZQUFKLEdBQW1CLEVBQW5COztrQkFJZSxHOzs7Ozs7Ozs7QUNsZmY7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUVBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFNLFdBQVMsRUFBQyxTQUFRLEtBQVQsRUFBZSxVQUFTLEtBQXhCLEVBQThCLFNBQVEsS0FBdEMsRUFBZjs7SUFLTSxNOzs7QUFHRixrQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEZBQ2IsS0FEYTs7QUFHbkIsUUFBSSxPQUFNLE9BQVY7O0FBRUEsUUFBRyxTQUFTLE1BQU0sSUFBZixDQUFILEVBQXdCO0FBQ3RCLGFBQUssTUFBTSxJQUFYO0FBQ0Q7O0FBRUQsVUFBSyxLQUFMLEdBQVc7QUFDVCxhQUFNLE1BQU0sS0FESDtBQUVULGdCQUFTLE1BQU0sUUFGTjtBQUdULFdBQUksTUFBTSxHQUhEO0FBSVQsY0FBTyxNQUFNLE1BQU4sSUFBYyxLQUpaO0FBS1QsWUFBSyxJQUxJO0FBTVQsV0FBSSxNQUFNO0FBTkQsS0FBWDs7QUFUbUI7QUFrQnBCOzs7O3dDQUVvQjtBQUNuQixjQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQWpCO0FBRUQ7OzttQ0FFYTtBQUNaLGFBQU8sU0FBUyxLQUFLLEtBQUwsQ0FBVyxJQUFwQixDQUFQO0FBQ0Q7OztrQ0FFWTtBQUNYLGNBQVEsR0FBUixDQUFZLEtBQUssS0FBTCxDQUFXLE1BQXZCO0FBQ0MsVUFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLElBQWlCLE9BQXBCLEVBQTRCO0FBQzNCLGFBQUssUUFBTCxDQUFjLEVBQUMsVUFBUyxDQUFDLEtBQUssS0FBTCxDQUFXLE1BQXRCLEVBQWQ7QUFDQSwwQkFBZSxVQUFmLENBQTBCLFFBQTFCLEVBQW1DLEVBQUMsT0FBTSxLQUFLLEtBQUwsQ0FBVyxHQUFsQixFQUFzQixVQUFTLENBQUMsS0FBSyxLQUFMLENBQVcsTUFBM0MsRUFBbkM7QUFDQSxPQUhELE1BR0s7QUFDSixjQUFNLG9CQUFOO0FBQ0E7QUFDSDs7O2lDQUdXOztBQUVSLFVBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxJQUFpQixPQUFwQixFQUE0QjtBQUMzQixlQUFPLE1BQU0sZ0JBQU4sQ0FBUDtBQUNBLE9BRkQsTUFFSztBQUNKLDBCQUFlLGlCQUFmLENBQWlDLEtBQUssS0FBTCxDQUFXLEdBQTVDO0FBQ0E7QUFFSjs7O3FDQUVlO0FBQ2YsY0FBUSxHQUFSLENBQVksZ0JBQVosRUFBNkIsS0FBSyxLQUFMLENBQVcsR0FBeEM7QUFDQSx3QkFBZSxjQUFmLENBQThCLEtBQUssS0FBTCxDQUFXLEdBQXpDO0FBRUE7Ozs2QkFHUTs7QUFHUCxVQUFJLFdBQVUsS0FBSyxLQUFMLENBQVcsTUFBWCxHQUFrQixNQUFsQixHQUF5QixNQUF2Qzs7QUFHQSxhQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUEsWUFBSSxjQUFXLElBQWY7QUFBQTtBQUFxQixlQUFLLEtBQUwsQ0FBVztBQUFoQyxTQURKO0FBRUk7QUFBQTtBQUFBLFlBQUksY0FBVyxNQUFmO0FBQUE7QUFBdUIsZUFBSyxLQUFMLENBQVc7QUFBbEMsU0FGSjtBQUdJO0FBQUE7QUFBQSxZQUFJLGNBQVcsTUFBZjtBQUFBO0FBQXVCLGVBQUssWUFBTDtBQUF2QixTQUhKO0FBSUk7QUFBQTtBQUFBLFlBQUksY0FBVyxRQUFmO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBRyxXQUFVLGtDQUFiLEVBQWdELFNBQVMsS0FBSyxjQUE5RDtBQUFBO0FBQUE7QUFBQSxXQURGO0FBQUE7QUFFRTtBQUFBO0FBQUEsY0FBUSxXQUFVLCtCQUFsQixFQUFtRCxTQUFTLEtBQUssV0FBakU7QUFBQTtBQUFnRjtBQUFoRixXQUZGO0FBQUE7QUFHRTtBQUFBO0FBQUEsY0FBRyxXQUFVLDhCQUFiLEVBQTRDLFNBQVMsS0FBSyxVQUExRDtBQUFBO0FBQUE7QUFBQSxXQUhGO0FBSUU7QUFBQTtBQUFBO0FBSkY7QUFKSixPQUZGO0FBY0Q7Ozs7RUFoRmtCLGdCQUFNLFM7O0lBd0ZyQixPOzs7QUFHRixtQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEZBQ2IsS0FEYTs7QUFHbkIsUUFBSSxPQUFNLE9BQVY7O0FBRUEsUUFBRyxTQUFTLE1BQU0sSUFBZixDQUFILEVBQXdCO0FBQ3RCLGFBQUssTUFBTSxJQUFYO0FBQ0Q7O0FBRUQsV0FBSyxLQUFMLEdBQVc7QUFDVCxhQUFNLE1BQU0sS0FESDtBQUVULGdCQUFTLE1BQU0sUUFGTjtBQUdULFdBQUksTUFBTSxHQUhEO0FBSVQsY0FBTyxNQUFNLE1BQU4sSUFBYyxLQUpaO0FBS1QsWUFBSyxJQUxJO0FBTVQsV0FBSSxNQUFNO0FBTkQsS0FBWDs7QUFUbUI7QUFrQnBCOzs7O3dDQUVvQjtBQUNuQixjQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQWpCO0FBRUQ7OzttQ0FFYTtBQUNaLGFBQU8sU0FBUyxLQUFLLEtBQUwsQ0FBVyxJQUFwQixDQUFQO0FBQ0Q7OztrQ0FFWTtBQUNYLGNBQVEsR0FBUixDQUFZLEtBQUssS0FBTCxDQUFXLE1BQXZCO0FBQ0MsVUFBRyxLQUFLLEtBQUwsQ0FBVyxJQUFYLElBQWlCLE9BQXBCLEVBQTRCO0FBQzNCLGFBQUssUUFBTCxDQUFjLEVBQUMsVUFBUyxDQUFDLEtBQUssS0FBTCxDQUFXLE1BQXRCLEVBQWQ7QUFDQSwwQkFBZSxVQUFmLENBQTBCLFFBQTFCLEVBQW1DLEVBQUMsT0FBTSxLQUFLLEtBQUwsQ0FBVyxHQUFsQixFQUFzQixVQUFTLENBQUMsS0FBSyxLQUFMLENBQVcsTUFBM0MsRUFBbkM7QUFDQSxPQUhELE1BR0s7QUFDSixjQUFNLG9CQUFOO0FBQ0E7QUFDSDs7O2tDQUdZOztBQUVULFVBQUcsS0FBSyxLQUFMLENBQVcsSUFBWCxJQUFpQixPQUFwQixFQUE0QjtBQUMzQixlQUFPLE1BQU0sZ0JBQU4sQ0FBUDtBQUNBLE9BRkQsTUFFSzs7QUFFSixnQkFBUSxHQUFSLENBQVksb0JBQVo7QUFDQTtBQUVKOzs7NkJBRVE7O0FBR1AsVUFBSSxXQUFVLEtBQUssS0FBTCxDQUFXLE1BQVgsR0FBa0IsSUFBbEIsR0FBdUIsSUFBckM7O0FBR0EsYUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLFlBQUksY0FBVyxJQUFmO0FBQUE7QUFBcUIsZUFBSyxLQUFMLENBQVc7QUFBaEMsU0FESjtBQUVJO0FBQUE7QUFBQSxZQUFJLGNBQVcsTUFBZjtBQUFBO0FBQXVCLGVBQUssS0FBTCxDQUFXO0FBQWxDLFNBRko7QUFHSTtBQUFBO0FBQUEsWUFBSSxjQUFXLE1BQWY7QUFBQTtBQUF1QixlQUFLLFlBQUw7QUFBdkIsU0FISjtBQUlJO0FBQUE7QUFBQSxZQUFJLGNBQVcsUUFBZjtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUcsV0FBVSwrQkFBYixFQUE2QyxTQUFTLEtBQUssV0FBM0Q7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUFBO0FBRUU7QUFBQTtBQUFBLGNBQVEsV0FBVSwrQkFBbEIsRUFBbUQsU0FBUyxLQUFLLFdBQWpFO0FBQUE7QUFBZ0Y7QUFBaEYsV0FGRjtBQUFBO0FBR0U7QUFBQTtBQUFBLGNBQUcsV0FBVSw4QkFBYixFQUE0QyxTQUFTLEtBQUssV0FBMUQ7QUFBQTtBQUFBO0FBQUEsV0FIRjtBQUlFO0FBQUE7QUFBQTtBQUpGO0FBSkosT0FGRjtBQWNEOzs7O0VBMUVtQixnQkFBTSxTOztBQThFNUIsUUFBUSxNQUFSLEdBQWdCLE1BQWhCO0FBQ0EsUUFBUSxPQUFSLEdBQWlCLE9BQWpCOzs7Ozs7Ozs7Ozs7OztBQ2hNQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBS3FCLFk7OztBQUNuQix3QkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsZ0dBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWE7QUFDWixZQUFLLE1BQUssS0FBTCxDQUFXLElBQVgsSUFBaUIsS0FEVjtBQUVaLGFBQU0sTUFBSyxLQUFMLENBQVcsS0FBWCxJQUFrQixFQUZaO0FBR1osV0FBSSxNQUFLLEtBQUwsQ0FBVyxHQUFYLElBQWdCO0FBSFIsS0FBYjtBQUZpQjtBQU9sQjs7Ozt3Q0FFbUIsQ0FFbkI7Ozt5QkFFSSxLLEVBQU0sRyxFQUFJO0FBQ2QsV0FBSyxRQUFMLENBQWMsRUFBQyxNQUFNLElBQVAsRUFBWSxZQUFaLEVBQWtCLFFBQWxCLEVBQWQ7QUFDQTs7OzRCQUVNO0FBQ0osV0FBSyxRQUFMLENBQWMsRUFBQyxNQUFNLEtBQVAsRUFBZDtBQUNGOzs7NkJBR1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFPLE1BQU0sS0FBSyxLQUFMLENBQVcsSUFBeEIsRUFBOEIsUUFBUSxLQUFLLEtBQTNDO0FBQUE7QUFDRTtBQUFBLGdDQUFPLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFDSTtBQUFBLGtDQUFPLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBYyxpQkFBSyxLQUFMLENBQVc7QUFBekI7QUFESixTQURGO0FBTUc7QUFBQSxnQ0FBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1ksd0JBRFo7QUFBQTtBQUMyQixpQkFBSyxLQUFMLENBQVc7QUFEdEM7QUFESCxTQU5IO0FBWUU7QUFBQSxnQ0FBTyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLGNBQVEsU0FBUyxLQUFLLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFaRixPQURGO0FBa0JEOzs7O0VBMUN1QyxnQkFBTSxTOztrQkFBM0IsWTs7O0FBZ0RyQixRQUFRLFlBQVIsR0FBc0IsWUFBdEI7OztBQ3hEQTs7Ozs7OztrQkNBZTtBQUNiLGFBQVcsUUFBUSwrQkFBUixFQUF5QztBQUR2QyxDOzs7Ozs7OztRQ1FDLGEsR0FBQSxhO1FBV0EsWSxHQUFBLFk7UUFJQSxVLEdBQUEsVTtRQU9BLGUsR0FBQSxlO1FBSUEsVSxHQUFBLFU7UUFPQSxZLEdBQUEsWTtRQTRFQSxXLEdBQUEsVzs7QUFySGhCOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sU0FBUyxhQUFULENBQXVCLEtBQXZCLEVBQThCLEVBQTlCLEVBQWtDO0FBQ3ZDLFFBQU0sT0FBTyxZQUFZLElBQVosQ0FBaUIsS0FBakIsRUFBd0IsQ0FBeEIsQ0FBYjtBQUNBLFFBQUksSUFBSixFQUNFLE9BQU8saUJBQUUsSUFBRixDQUFPO0FBQ1osbUNBQXlCLElBRGI7QUFFWixnQkFBUSxLQUZJO0FBR1osaUJBQVM7QUFIRyxLQUFQLENBQVA7QUFLRixXQUFPLElBQVA7QUFDRDs7QUFFTSxTQUFTLFlBQVQsQ0FBc0IsSUFBdEIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0M7QUFDdkMsU0FBSyxDQUFMLElBQVUsQ0FBQyxLQUFLLENBQUwsQ0FBRCxFQUFVLEtBQUssQ0FBTCxJQUFVLEtBQUssQ0FBTCxDQUFwQixFQUE2QixDQUE3QixDQUFWO0FBQ0Q7O0FBRU0sU0FBUyxVQUFULEdBQXNCOztBQUUzQixLQUFDLFlBQU0sQ0FBRSxDQUFUO0FBR0Q7O0FBRU0sU0FBUyxlQUFULENBQXlCLElBQXpCLEVBQStCO0FBQ2xDLFdBQU8sTUFBUCxDQUFjLGtDQUFkLEVBQWtELElBQWxEO0FBQ0g7O0FBRU0sU0FBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCO0FBQzdCLFdBQU8sSUFBUCxDQUFZLElBQVo7QUFDSDs7QUFLTSxTQUFTLFlBQVQsQ0FBc0IsU0FBdEIsRUFBaUM7O0FBRXBDLFFBQUksQ0FBQyxVQUFVLEtBQVYsQ0FBZ0IsVUFBckIsRUFBaUM7QUFDN0I7QUFDSDs7QUFJRCxRQUFJLEtBQUssVUFBVSxpQkFBVixHQUE4QixVQUFDLElBQUQsRUFBVTtBQUM3QyxZQUFJLENBQUMsVUFBVSxLQUFWLENBQWdCLFVBQWhCLENBQTJCLFlBQWhDLEVBQThDO0FBQzFDO0FBQ0g7QUFDRCxnQkFBUSxHQUFSLENBQVksTUFBWixFQUFtQixJQUFuQjtBQUNBLGtCQUFVLGlCQUFWLENBQTRCLElBQTVCOztBQUVBLFlBQUksVUFBVSxJQUFWLENBQWUsRUFBZixJQUFxQixVQUFVLElBQVYsQ0FBZSxFQUFmLENBQWtCLEtBQWxCLENBQXdCLElBQWpELEVBQXVEO0FBQ25ELHNCQUFVLElBQVYsQ0FBZSxFQUFmLENBQWtCLFNBQWxCLENBQTRCLElBQTVCO0FBQ0g7QUFDSixLQVZRLEdBVUwsVUFBQyxJQUFELEVBQVU7QUFBRSxnQkFBUSxHQUFSLENBQVksSUFBWjtBQUFvQixLQVZwQzs7QUFZQSxRQUFJLFlBQVksVUFBVSxLQUFWLENBQWdCLFVBQWhCLENBQTJCLE1BQTNDOztBQUdBLFFBQUksVUFBVSxLQUFWLENBQWdCLFVBQWhCLENBQTJCLFFBQTNCLEtBQXdDLE1BQTVDLEVBQW9EOztBQUVoRCxZQUFJLFVBQVUsS0FBVixDQUFnQixVQUFoQixDQUEyQixZQUEvQixFQUE2Qzs7QUFFekMsZ0JBQUksQ0FBQyxVQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FBMkIsTUFBaEMsRUFBd0M7QUFDcEMsMEJBQVUsS0FBVixDQUFnQixTQUFoQixDQUEwQixLQUExQixDQUFnQyxVQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FBMkIsR0FBM0QsRUFBZ0UsVUFBVSxLQUFWLENBQWdCLFVBQWhCLENBQTJCLFFBQTNGLEVBQXFHLEVBQXJHLEVBQXlHLElBQXpHO0FBRUgsYUFIRCxNQUdPO0FBQ0gsb0JBQUksS0FBSyxVQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsQ0FBMEIsS0FBMUIsQ0FBZ0MsVUFBVSxLQUFWLENBQWdCLFVBQWhCLENBQTJCLEdBQTNELEVBQWdFLFVBQVUsS0FBVixDQUFnQixVQUFoQixDQUEyQixRQUEzRixFQUFxRyxFQUFyRyxDQUFUO0FBQ0EsMEJBQVUsUUFBVixDQUFtQixFQUFFLFNBQVMsRUFBWCxFQUFuQjtBQUNIO0FBR0o7QUFHSixLQWhCRCxNQWdCTyxJQUFJLFVBQVUsS0FBVixDQUFnQixVQUFoQixDQUEyQixRQUEzQixLQUF3QyxNQUE1QyxFQUFvRDs7QUFFdkQsWUFBSSxRQUFLLElBQVQ7QUFDQSxZQUFJLE9BQUssSUFBVDs7QUFFQSxZQUFHLFVBQVUsT0FBVixDQUFrQixNQUFsQixJQUEwQixDQUFDLENBQTlCLEVBQWdDOztBQUU1QixvQkFBTyxVQUFVLEtBQVYsQ0FBZ0IsUUFBaEIsQ0FBeUIsR0FBekIsQ0FBNkIsVUFBVSxVQUFVLEtBQVYsQ0FBZ0IsU0FBaEIsRUFBMkIsQ0FBM0IsQ0FBdkMsQ0FBUDtBQUNBLG1CQUFNLFVBQVUsS0FBVixDQUFnQixRQUF0QjtBQUVILFNBTEQsTUFLTSxJQUFHLFVBQVUsT0FBVixDQUFrQixVQUFsQixJQUE4QixDQUFDLENBQWxDLEVBQW9DOztBQUV0QyxvQkFBTyxVQUFVLEtBQVYsQ0FBZ0IsWUFBaEIsQ0FBNkIsR0FBN0IsQ0FBaUMsWUFBWSxVQUFVLEtBQVYsQ0FBZ0IsYUFBaEIsRUFBK0IsQ0FBL0IsQ0FBN0MsQ0FBUDtBQUNBLG1CQUFNLFVBQVUsS0FBVixDQUFnQixZQUF0QjtBQUVILFNBTEssTUFLQTtBQUNGLG9CQUFRLEdBQVIsQ0FBWSxPQUFaLEVBQW9CLFNBQXBCO0FBQ0E7QUFDSDs7QUFJRCxZQUFJLFVBQVUsS0FBVixDQUFnQixVQUFoQixDQUEyQixZQUEvQixFQUE2Qzs7QUFFekMsaUJBQUssR0FBTCxDQUFTLEtBQVQsRUFBZSxVQUFVLEtBQVYsQ0FBZ0IsVUFBaEIsQ0FBMkIsT0FBMUMsRUFBbUQsRUFBbkQ7QUFFSCxTQUpELE1BSU87O0FBRUgsaUJBQUssS0FBTCxDQUFXLEtBQVgsRUFBaUIsVUFBVSxLQUFWLENBQWdCLFVBQWhCLENBQTJCLE9BQTVDLEVBQXFELEVBQXJEO0FBRUg7QUFHSjtBQUVKOztBQUVNLFNBQVMsV0FBVCxDQUFxQixTQUFyQixFQUFnQzs7QUFHbkMsUUFBSSxLQUFLLFVBQVUsaUJBQVYsR0FBOEIsVUFBVSxpQkFBeEMsR0FBNEQsVUFBQyxJQUFELEVBQVU7QUFBRSxnQkFBUSxHQUFSLENBQVksSUFBWjtBQUFvQixLQUFyRzs7QUFFQSxRQUFJLFVBQVUsS0FBVixDQUFnQixRQUFoQixLQUE2QixNQUFqQyxFQUF5Qzs7QUFFckMsa0JBQVUsS0FBVixDQUFnQixTQUFoQixDQUEwQixJQUExQixDQUErQixVQUFVLEtBQVYsQ0FBZ0IsT0FBL0M7QUFDQSxrQkFBVSxRQUFWLENBQW1CLEVBQUUsU0FBUyxJQUFYLEVBQW5CO0FBRUgsS0FMRCxNQUtPLElBQUksVUFBVSxLQUFWLENBQWdCLFFBQWhCLEtBQTZCLE1BQWpDLEVBQXlDOztBQUU1QyxrQkFBVSxLQUFWLENBQWdCLFFBQWhCLENBQXlCLEtBQXpCLENBQStCLElBQS9CLEVBQXFDLFVBQVUsS0FBVixDQUFnQixPQUFyRCxFQUE4RCxFQUE5RDtBQUVIO0FBRUo7Ozs7Ozs7OztBQ3JJRDs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFJLFFBQVEsRUFBWjs7QUFJQSxpQkFBWSxNQUFaLENBQW1CLFVBQUMsUUFBRCxFQUFjO0FBQy9CLFVBQVEsaUJBQUUsTUFBRixDQUFTLEtBQVQsRUFBZ0IsUUFBaEIsQ0FBUjtBQUNELENBRkQ7O0FBSUEsU0FBUyxtQkFBVCxDQUE2QixJQUE3QixFQUFtQztBQUNqQyxNQUFNLFdBQVc7QUFDZixPQUFHLENBRFk7QUFFZixPQUFHLENBRlk7QUFHZixZQUFRLENBSE87QUFJZixPQUFHLEdBSlk7QUFLZixPQUFHLEdBTFk7QUFNZixVQUFNLEVBTlM7QUFPZixRQUFJLGVBQUssRUFBTDtBQVBXLEdBQWpCO0FBU0EsU0FBTyxpQkFBRSxNQUFGLENBQVMsUUFBVCxFQUFtQixJQUFuQixDQUFQO0FBQ0Q7O0FBRUQsSUFBTSxRQUFRLGlCQUFPLFdBQVAsQ0FBbUI7QUFDL0IsOEJBRCtCO0FBRS9CLGVBQWEsdUJBQU07QUFDakIsVUFBTSxLQUFOLENBQVksU0FBWixDQUFzQixNQUFNLEdBQTVCO0FBQ0QsR0FKOEI7QUFLL0Isa0JBQWdCLHdCQUFDLEdBQUQsRUFBUztBQUN2QixZQUFRLEdBQVIsQ0FBWSxNQUFNLEtBQU4sQ0FBWSxTQUF4QjtBQUNBLFVBQU0sb0JBQW9CLEdBQXBCLENBQU47QUFDQSxVQUFNLEtBQU4sQ0FBWSxTQUFaLENBQXNCLEdBQXRCO0FBQ0QsR0FUOEI7QUFVL0Isb0JBQWtCLDBCQUFDLE1BQUQsRUFBWTtBQUM1QixVQUFNLEtBQU4sQ0FBWSxTQUFaLENBQXNCLE1BQXRCO0FBQ0Q7O0FBWjhCLENBQW5CLENBQWQ7O0FBZ0JBLE1BQU0sUUFBTixHQUFpQixZQUFNO0FBQ3JCLFNBQU8saUJBQUUsS0FBRixDQUFRLEtBQVIsQ0FBUDtBQUNELENBRkQ7O0FBSUEsTUFBTSxTQUFOLEdBQWtCLFVBQUMsS0FBRCxFQUFXO0FBQzNCLFNBQU8saUJBQUUsSUFBRixDQUFPLE1BQU0sTUFBYixFQUFxQixLQUFyQixDQUFQO0FBQ0QsQ0FGRDs7a0JBSWUsSzs7Ozs7Ozs7O0FDckRmOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNLEtBQUssc0JBQVg7QUFDQSxJQUFJLFFBQVE7QUFDVixVQUFRO0FBREUsQ0FBWjs7QUFJQSxpQkFBWSxNQUFaLENBQW1CLFVBQUMsUUFBRCxFQUFjO0FBQy9CLFVBQVEsaUJBQUUsTUFBRixDQUFTLEtBQVQsRUFBZ0IsUUFBaEIsQ0FBUjtBQUNELENBRkQ7O0FBSUEsSUFBTSxRQUFRLGlCQUFPLFdBQVAsQ0FBbUI7QUFDL0IsOEJBRCtCO0FBRS9CLGVBQWEsdUJBQU07QUFDakIsUUFBTSxLQUFLLE1BQU0sR0FBTixDQUFVLElBQVYsQ0FBZSxLQUFmLENBQXFCLE1BQXJCLEVBQVg7QUFDQSxZQUFRLEdBQVIsQ0FBWSxFQUFaO0FBQ0Esb0JBQVEsV0FBUixDQUFvQixFQUFFLE1BQU0sR0FBRyxJQUFYLEVBQXBCLEVBQXVDLEVBQXZDO0FBQ0EsVUFBTSxNQUFOO0FBQ0QsR0FQOEI7QUFRL0I7QUFBQSx3REFBYyxpQkFBTSxPQUFOO0FBQUEsVUFDTixFQURNLEVBSUosR0FKSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ04sZ0JBRE0sR0FDRCxNQUFNLEdBQU4sQ0FBVSxJQUFWLENBQWUsS0FBZixDQUFxQixNQUFyQixFQURDOztBQUVaLGlCQUFHLElBQUgsR0FBUSxPQUFSO0FBRlk7QUFBQTtBQUFBLHFCQUlRLEdBQUcsTUFBSCxDQUFVLEVBQVYsQ0FKUjs7QUFBQTtBQUlKLGlCQUpJOztBQUtWLG9CQUFNLE1BQU4sQ0FBYSxJQUFiLENBQWtCLEdBQWxCO0FBQ0Esb0JBQU0sT0FBTixDQUFjLEtBQWQ7O0FBTlUsK0NBUUgsZ0JBQVEsV0FBUixDQUFvQixTQUFwQixDQUE4QixFQUE5QixDQVJHOztBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQVdILGdCQUFRLFdBQVIsQ0FBb0IsTUFBcEIsYUFYRzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUitCO0FBd0IvQjtBQUFBLHdEQUFlLGtCQUFPLEtBQVA7QUFBQSxVQUVMLEdBRks7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFTyxHQUFHLE1BQUgsQ0FBVSxLQUFWLENBRlA7O0FBQUE7QUFFTCxpQkFGSzs7QUFHWCxvQkFBTSxNQUFOLENBQWEsSUFBYixDQUFrQixHQUFsQjtBQUNBLG9CQUFNLE9BQU4sQ0FBYyxLQUFkO0FBSlcsZ0RBS0osZ0JBQVEsV0FBUixDQUFvQixTQUFwQixDQUE4QixLQUE5QixDQUxJOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdEQU9KLGdCQUFRLFdBQVIsQ0FBb0IsTUFBcEIsY0FQSTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBeEIrQjs7QUFtQy9CO0FBQUEsd0RBQWUsa0JBQU8sU0FBUCxFQUFpQixTQUFqQjtBQUFBLFVBRVAsRUFGTyxFQUdQLE9BSE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVQLGdCQUZPLEdBRUYsTUFBTSxHQUFOLENBQVUsSUFBVixDQUFlLEtBQWYsQ0FBcUIsTUFBckIsRUFGRTtBQUdQLHFCQUhPLEdBR0MsR0FBRyxJQUhKOztBQUliLGlCQUFHLElBQUgsR0FBUSxTQUFSO0FBQ0EsaUJBQUcsSUFBSCxHQUFRLFNBQVI7Ozs7QUFJQSw4QkFBUSxXQUFSLENBQW9CLEVBQUUsTUFBTSxPQUFSLEVBQXBCLEVBQXVDLEVBQXZDO0FBQ0Esb0JBQU0sTUFBTixDQUFhLGlCQUFFLFNBQUYsQ0FBWSxNQUFNLE1BQWxCLEVBQTBCLEVBQUUsTUFBTSxTQUFSLEVBQWtCLE1BQUssU0FBdkIsRUFBMUIsQ0FBYixJQUE4RSxFQUE5RTtBQUNBLG9CQUFNLE9BQU4sQ0FBYyxLQUFkO0FBWGEsZ0RBWU4sZ0JBQVEsV0FBUixDQUFvQixTQUFwQixFQVpNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWY7O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FuQytCOztBQW9EL0IsdUJBQXFCLCtCQUFNO0FBQ3pCLFlBQVEsR0FBUixDQUFZLGVBQVo7QUFDRCxHQXREOEI7QUF1RC9CLDBCQUF3QixnQ0FBQyxLQUFELEVBQVc7QUFDakMscUJBQWMsY0FBZCxDQUE2QixLQUE3QjtBQUNELEdBekQ4QjtBQTBEL0I7QUFBQSx3REFBYztBQUFBLFVBQ04sR0FETTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTSxHQUFHLElBQUgsRUFETjs7QUFBQTtBQUNOLGlCQURNOztBQUVaLG9CQUFNLE1BQU4sR0FBZSxHQUFmO0FBQ0Esb0JBQU0sT0FBTixDQUFjLEtBQWQ7QUFIWSxnREFJTCxnQkFBUSxVQUFSLENBQW1CLFNBQW5CLEVBSks7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTFEK0I7QUFnRS9CLGVBQWEscUJBQUMsS0FBRCxFQUFXO0FBQ3RCLFdBQU8sZ0JBQVEsU0FBUixDQUFrQixTQUFsQixDQUE0QixpQkFBRSxNQUFGLENBQVMsTUFBTSxNQUFmLEVBQXVCLEtBQXZCLENBQTVCLENBQVA7QUFDRCxHQWxFOEI7QUFtRS9CO0FBQUEsd0RBQWUsa0JBQU8sS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1IsaUJBQUUsTUFBRixDQUFTLE1BQU0sTUFBZixFQUF1QixLQUF2QixDQURRO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQUVKLGdCQUFRLFdBQVIsQ0FBb0IsTUFBcEIsQ0FBMkIsaUJBQTNCLENBRkk7O0FBQUE7QUFBQTtBQUFBLHFCQUdQLEdBQUcsTUFBSCxDQUFVLEtBQVYsQ0FITzs7QUFBQTtBQUliLG9CQUFNLE1BQU4sR0FBZSxNQUFNLE1BQU4sQ0FBYSxNQUFiLENBQW9CLFVBQUMsQ0FBRCxFQUFPO0FBQ3hDLHVCQUFPLEVBQUUsSUFBRixLQUFXLE1BQU0sSUFBeEI7QUFDRCxlQUZjLENBQWY7QUFHQSwrQkFBYyxjQUFkLENBQTZCLE1BQU0sTUFBTixDQUFhLENBQWIsQ0FBN0I7QUFDQSxvQkFBTSxPQUFOLENBQWMsS0FBZDs7QUFSYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFmOztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBbkUrQjtBQTZFL0I7QUFBQSx3REFBZSxrQkFBTyxLQUFQLEVBQWMsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQ1IsaUJBQUUsTUFBRixDQUFTLE1BQU0sTUFBZixFQUF1QixLQUF2QixDQURRO0FBQUE7QUFBQTtBQUFBOztBQUFBLGdEQUVKLGdCQUFRLFdBQVIsQ0FBb0IsTUFBcEIsQ0FBMkIsaUJBQTNCLENBRkk7O0FBQUE7QUFBQTtBQUFBLHFCQUdQLEdBQUcsTUFBSCxDQUFVLEtBQVYsRUFBaUIsS0FBakIsQ0FITzs7QUFBQTtBQUliLG9CQUFNLE1BQU4sQ0FBYSxpQkFBRSxTQUFGLENBQVksTUFBTSxNQUFsQixFQUEwQixLQUExQixDQUFiLElBQWlELEtBQWpEO0FBQ0Esb0JBQU0sT0FBTixDQUFjLEtBQWQ7QUFMYSxnREFNTixnQkFBUSxXQUFSLENBQW9CLFNBQXBCLEVBTk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQTdFK0I7QUFxRi9CLGNBQVksc0JBQU07QUFDaEIsVUFBTSxLQUFOLENBQVksTUFBWixDQUFtQixJQUFuQixDQUF3QjtBQUN0QixhQUFPLEVBRGU7O0FBR3RCLFVBQUksS0FBSyxHQUFMLEdBQVcsUUFBWCxFQUhrQjtBQUl0QixTQUFHLGlCQUFFLEdBQUYsQ0FBTSxLQUFOLEVBQWEsbUJBQWIsS0FBcUMsR0FKbEI7QUFLdEIsU0FBRyxpQkFBRSxHQUFGLENBQU0sS0FBTixFQUFhLG1CQUFiLEtBQXFDLEdBTGxCO0FBTXRCLFdBQUs7QUFOaUIsS0FBeEI7QUFRQSxVQUFNLE9BQU4sQ0FBYyxLQUFkO0FBQ0QsR0EvRjhCO0FBZ0cvQixpQkFBZSx5QkFBTTtBQUNuQixVQUFNLEtBQU4sQ0FBWSxNQUFaLENBQW1CLE1BQW5CLENBQ0UsaUJBQUUsU0FBRixDQUFZLE1BQU0sS0FBTixDQUFZLE1BQXhCLEVBQWdDLEVBQUUsSUFBSSxNQUFNLEtBQU4sQ0FBWSxFQUFsQixFQUFoQyxDQURGLEVBQzJELENBRDNEO0FBR0EsVUFBTSxPQUFOLENBQWMsS0FBZDtBQUNELEdBckc4QjtBQXNHL0IsZUFBYSxxQkFBQyxJQUFELEVBQVU7QUFDckIsUUFBTSxNQUFNLGlCQUFFLFNBQUYsQ0FBWSxNQUFNLEtBQU4sQ0FBWSxNQUF4QixFQUFnQyxFQUFFLElBQUksTUFBTSxLQUFOLENBQVksRUFBbEIsRUFBaEMsQ0FBWjtBQUNBLFFBQUksTUFBTSxLQUFOLENBQVksTUFBWixDQUFtQixNQUFNLElBQXpCLENBQUosRUFBb0M7QUFDbEMsOEJBQWEsTUFBTSxLQUFOLENBQVksTUFBekIsRUFBaUMsR0FBakMsRUFBc0MsTUFBTSxJQUE1QztBQUNBLFlBQU0sT0FBTixDQUFjLEtBQWQ7QUFDRDtBQUNGLEdBNUc4QjtBQTZHL0I7QUFBQSx3REFBZ0I7QUFBQSxVQUlSLEtBSlEsRUFNUixHQU5RLEVBVUosSUFWSTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBSVIsbUJBSlEsR0FJRixpQkFBRSxTQUFGLENBQVksTUFBTSxNQUFsQixFQUEwQixFQUFFLEtBQUssTUFBTSxLQUFOLENBQVksR0FBbkIsRUFBMUIsQ0FKRTtBQUFBO0FBQUEscUJBTUksR0FBRyxPQUFILENBQVcsTUFBTSxLQUFOLENBQVksR0FBdkIsQ0FOSjs7QUFBQTtBQU1SLGlCQU5ROzs7QUFRYixrQkFBRyxJQUFJLE1BQUosSUFBWSxJQUFmLEVBQW9CO0FBQ2pCLHNCQUFNLE1BQU47QUFDTSxvQkFGVyxHQUVKLE9BQU8sUUFBUCxDQUFnQixNQUFoQixrQkFBcUMsTUFBTSxLQUFOLENBQVksR0FBakQsV0FGSTs7QUFHakIsc0NBQVcsSUFBWDtBQUNGLGVBSkQsTUFJSztBQUNGLHNCQUFNLE1BQU47QUFDRjtBQWRZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWhCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBN0crQjs7QUErSC9CLG9CQUFrQiw0QkFBTTtBQUN0QixRQUFNLE9BQU8sT0FBTyxRQUFQLENBQWdCLE1BQWhCLHNCQUF5QyxNQUFNLEtBQU4sQ0FBWSxHQUFyRCxDQUFiO0FBQ0EsK0JBQWdCLElBQWhCO0FBQ0QsR0FsSThCO0FBbUkvQixxQkFBbUIsNkJBQU07QUFDdkIsUUFBTSxPQUFPLE9BQU8sUUFBUCxDQUFnQixNQUFoQixzQkFBeUMsTUFBTSxLQUFOLENBQVksR0FBckQsQ0FBYjtBQUNBLDBCQUFXLElBQVg7QUFDRDtBQXRJOEIsQ0FBbkIsQ0FBZDs7QUF5SUEsTUFBTSxRQUFOLEdBQWlCLFlBQU07QUFDckIsU0FBTyxpQkFBRSxLQUFGLENBQVEsS0FBUixDQUFQO0FBQ0QsQ0FGRDs7QUFJQSxNQUFNLFNBQU4sR0FBa0IsVUFBQyxLQUFELEVBQVc7QUFDM0IsU0FBTyxpQkFBRSxJQUFGLENBQU8sTUFBTSxNQUFiLEVBQXFCLEtBQXJCLENBQVA7QUFDRCxDQUZEOztrQkFJZSxLOzs7Ozs7Ozs7QUNyS2Y7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTSxVQUFVO0FBQ2QsUUFBTSxDQURRO0FBRWQsVUFBUSxDQUZNO0FBR2QsUUFBTSxDQUhRO0FBSWQsVUFBUTtBQUpNLENBQWhCOztBQU9BLElBQU0sY0FBYyxFQUFwQjtBQUFBLElBQ00sWUFBWSxFQURsQjs7QUFHQSxJQUFJLFFBQVE7QUFDVixPQUFLLElBREs7QUFFVixhQUFXO0FBQ1QsT0FBRyxDQURNO0FBRVQsT0FBRztBQUZNLEdBRkQ7QUFNVixVQUFRO0FBQ04sT0FBRyxDQURHO0FBRU4sT0FBRztBQUZHLEdBTkU7QUFVVixlQUFhO0FBQ1gsT0FBRyxDQURRO0FBRVgsT0FBRztBQUZRLEdBVkg7QUFjVixlQUFhO0FBQ1gsT0FBRyxDQURRO0FBRVgsT0FBRztBQUZRLEdBZEg7QUFrQlYsU0FBTyxDQWxCRztBQW1CVixVQUFRLFFBQVEsSUFuQk47QUFvQlYsUUFBTSxNQXBCSTtBQXFCVixVQUFRO0FBckJFLENBQVo7O0FBeUJBLGlCQUFZLE1BQVosQ0FBbUIsVUFBQyxRQUFELEVBQWM7QUFDL0IsVUFBUSxpQkFBRSxNQUFGLENBQVMsS0FBVCxFQUFnQixRQUFoQixDQUFSO0FBQ0QsQ0FGRDs7Ozs7QUFPQSxTQUFTLGNBQVQsQ0FBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEI7QUFBQSxlQUNJLEtBREo7QUFBQSxNQUNwQixXQURvQixVQUNwQixXQURvQjtBQUFBLE1BQ1AsTUFETyxVQUNQLE1BRE87O0FBRTVCLE1BQU0sU0FBUyxxQkFBVyxZQUFZLENBQVosR0FBZ0IsT0FBTyxDQUFsQyxFQUFxQyxZQUFZLENBQVosR0FBZ0IsT0FBTyxDQUE1RCxDQUFmO0FBQ0EsTUFBTSxPQUFPLHFCQUFXLElBQUksT0FBTyxDQUF0QixFQUF5QixJQUFJLE9BQU8sQ0FBcEMsQ0FBYjtBQUNBLFNBQU8sS0FBSyxRQUFMLEtBQWtCLE9BQU8sUUFBUCxFQUF6QjtBQUNEOzs7QUFHRCxTQUFTLGFBQVQsQ0FBdUIsQ0FBdkIsRUFBMEIsQ0FBMUIsRUFBNkI7QUFDM0IsTUFBSSxJQUFJLE1BQU0sR0FBTixDQUFVLENBQWQsSUFBbUIsTUFBTSxLQUFOLENBQVksQ0FBL0IsR0FBbUMsQ0FBbkMsR0FBdUMsTUFBTSxLQUFOLENBQVksQ0FBWixHQUFnQixNQUFNLEdBQU4sQ0FBVSxDQUFyRTtBQUNBLE1BQUksSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQWhCO0FBQ0EsTUFBSSxJQUFJLE1BQU0sR0FBTixDQUFVLENBQWQsSUFBbUIsTUFBTSxLQUFOLENBQVksQ0FBL0IsR0FBbUMsQ0FBbkMsR0FBdUMsTUFBTSxLQUFOLENBQVksQ0FBWixHQUFnQixNQUFNLEdBQU4sQ0FBVSxDQUFyRTtBQUNBLE1BQUksSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQWhCO0FBQ0EsU0FBTyxFQUFFLElBQUYsRUFBSyxJQUFMLEVBQVA7QUFDRDs7QUFFRCxJQUFNLFFBQVEsaUJBQU8sV0FBUCxDQUFtQjtBQUMvQiw0QkFEK0I7QUFFL0IsVUFBUSxnQkFBQyxHQUFELEVBQVM7QUFDZixZQUFRLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsUUFBSSxNQUFNLEtBQVYsRUFBaUIsT0FBTyxJQUFQOztBQUVqQixVQUFNLEdBQU4sR0FBWSxHQUFaOztBQUVBLGFBQVMsZUFBVCxDQUF5QixXQUF6QixHQUF1QyxVQUFVLENBQVYsRUFBYTtBQUNsRCxjQUFRLE1BQU0sTUFBZDtBQUNBLGFBQUssUUFBUSxJQUFiO0FBQUEsK0JBQ2lCLGNBQ2IsRUFBRSxPQUFGLEdBQVksTUFBTSxTQUFOLENBQWdCLENBRGYsRUFFYixFQUFFLE9BQUYsR0FBWSxNQUFNLFNBQU4sQ0FBZ0IsQ0FGZixDQURqQjs7QUFBQSxjQUNRLENBRFIsa0JBQ1EsQ0FEUjtBQUFBLGNBQ1csQ0FEWCxrQkFDVyxDQURYOzs7QUFNRSxjQUFJLEVBQUUsTUFBTixFQUFjO0FBQ1osaUJBQUssSUFBSSxTQUFUO0FBQ0EsaUJBQUssSUFBSSxTQUFUO0FBQ0Q7O0FBRUQsZ0JBQU0sR0FBTixDQUFVLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFDQTs7QUFFRixhQUFLLFFBQVEsTUFBYjtBQUNFLGNBQUksUUFBUSxNQUFNLEtBQU4sR0FBYyxlQUFlLEVBQUUsT0FBakIsRUFBMEIsRUFBRSxPQUE1QixDQUExQjtBQUNBLGNBQUksRUFBRSxNQUFOLEVBQ0UsU0FBUyxRQUFRLFdBQWpCO0FBQ0YsZ0JBQU0sR0FBTixDQUFVLE1BQVYsQ0FBaUIsS0FBakI7QUFDQTs7QUFFRixhQUFLLFFBQVEsTUFBYjtBQUNFLGNBQUksSUFBSSxNQUFNLFdBQU4sQ0FBa0IsQ0FBbEIsR0FBc0IsRUFBRSxPQUF4QixHQUFrQyxNQUFNLFdBQU4sQ0FBa0IsQ0FBNUQ7QUFBQSxjQUNJLElBQUksTUFBTSxXQUFOLENBQWtCLENBQWxCLEdBQXNCLEVBQUUsT0FBeEIsR0FBa0MsTUFBTSxXQUFOLENBQWtCLENBRDVEOztBQUdBLGNBQUksRUFBRSxNQUFOLEVBQWM7QUFDWixpQkFBSyxJQUFJLFNBQVQ7QUFDQSxpQkFBSyxJQUFJLFNBQVQ7QUFDRDtBQUNELGdCQUFNLEdBQU4sQ0FBVSxNQUFWLENBQWlCLENBQWpCLEVBQW9CLENBQXBCO0FBQ0E7O0FBRUY7QUFDRTtBQWxDRjtBQW9DRCxLQXJDRDs7QUF1Q0EsYUFBUyxlQUFULENBQXlCLFNBQXpCLEdBQXFDLFlBQVk7QUFDL0MsWUFBTSxNQUFOLEdBQWUsUUFBUSxJQUF2QjtBQUNELEtBRkQ7QUFHQSxhQUFTLGVBQVQsQ0FBeUIsVUFBekIsR0FBc0MsU0FBUyxhQUFULEdBQXlCO0FBQzdELFVBQUksTUFBTSxHQUFWLEVBQWUsTUFBTSxHQUFOLENBQVUsVUFBVjtBQUNoQixLQUZEOztBQUlBLFVBQU0sS0FBTixHQUFjLElBQWQ7QUFDRCxHQXZEOEI7O0FBeUQvQixpQkFBZSx1QkFBQyxNQUFELEVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxLQUFmLEVBQXlCO0FBQ3RDLFVBQU0sTUFBTixHQUFlLFFBQVEsTUFBdkI7QUFDQSxVQUFNLE1BQU4sR0FBZSxNQUFmO0FBQ0EsVUFBTSxXQUFOLEdBQW9CLEVBQUUsSUFBRixFQUFLLElBQUwsRUFBcEI7QUFDQSxVQUFNLEtBQU4sR0FBYyxLQUFkO0FBQ0QsR0E5RDhCO0FBK0QvQixlQUFhLHFCQUFDLENBQUQsRUFBSSxDQUFKLEVBQVU7QUFDckIsVUFBTSxNQUFOLEdBQWUsUUFBUSxJQUF2QjtBQUNBLFVBQU0sU0FBTixHQUFrQixFQUFFLElBQUYsRUFBSyxJQUFMLEVBQWxCO0FBQ0QsR0FsRThCO0FBbUUvQixpQkFBZSx1QkFBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWdCO0FBQzdCLFVBQU0sTUFBTixHQUFlLFFBQVEsTUFBdkI7QUFDQSxVQUFNLFdBQU4sR0FBb0IsRUFBRSxJQUFGLEVBQUssSUFBTCxFQUFRLElBQVIsRUFBVyxJQUFYLEVBQXBCO0FBQ0QsR0F0RThCO0FBdUUvQixjQUFZLHNCQUFNO0FBQ2hCLFVBQU0sTUFBTixHQUFlLFFBQVEsSUFBdkI7QUFDRCxHQXpFOEI7QUEwRS9CLGFBQVcscUJBQU07QUFDZixVQUFNLE1BQU4sR0FBZSxRQUFRLElBQXZCO0FBQ0QsR0E1RThCO0FBNkUvQixlQUFhLHFCQUFDLE1BQUQsRUFBWTtBQUN2QixRQUFJLE1BQU0sR0FBVixFQUNFLE1BQU0sR0FBTixDQUFVLFNBQVYsQ0FBb0IsTUFBcEI7QUFDSCxHQWhGOEI7QUFpRi9CLGNBakYrQiwwQkFpRmhCO0FBQ2IsWUFBUSxHQUFSLENBQVksaUJBQVosRUFBK0IsTUFBTSxHQUFyQztBQUNBLFFBQUksTUFBTSxHQUFWLEVBQ0UsTUFBTSxHQUFOLENBQVUsVUFBVjtBQUNIO0FBckY4QixDQUFuQixDQUFkOztBQXlGQSxNQUFNLFFBQU4sR0FBaUIsWUFBTTtBQUNyQixTQUFPLGlCQUFFLEtBQUYsQ0FBUSxLQUFSLENBQVA7QUFDRCxDQUZEOztrQkFJZSxLOzs7Ozs7Ozs7QUMvSmY7Ozs7QUFDQTs7OztBQUdBOzs7O0FBQ0E7Ozs7Ozs7O0FBR0EsSUFBTSxLQUFLLHNCQUFYOztBQUVBLElBQUksUUFBUTtBQUNWLFNBQU07QUFESSxDQUFaOztBQUtBLElBQU0sUUFBUSxpQkFBTyxXQUFQLENBQW1CO0FBQy9CLGdDQUQrQjs7QUFJL0I7QUFBQSx3REFBVyxpQkFBTSxJQUFOO0FBQUEsVUFHRCxHQUhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDVCxzQkFBUSxHQUFSLENBQVksWUFBWixFQUF5QixJQUF6QjtBQURTO0FBQUE7QUFBQSxxQkFHVyxHQUFHLFVBQUgsQ0FBYyxJQUFkLEVBQW9CLElBQXBCLENBQXlCLFVBQUMsT0FBRCxFQUFXO0FBQ3BELHdCQUFRLEdBQVIsQ0FBWSxRQUFRLE1BQVIsQ0FBZSxDQUFmLEVBQWtCLEdBQTlCO0FBQ0EscUJBQUssR0FBTCxHQUFTLFFBQVEsTUFBUixDQUFlLENBQWYsRUFBa0IsR0FBM0I7QUFDQSxzQkFBTSxLQUFOLENBQVksSUFBWixDQUFpQixJQUFqQjtBQUNBLHNCQUFNLEdBQU4sR0FBVSxJQUFWO0FBQ0Esc0JBQU0sT0FBTixDQUFjLEtBQWQ7QUFDRCxlQU5pQixDQUhYOztBQUFBO0FBR0QsaUJBSEM7QUFBQSwrQ0FZQSxJQVpBOztBQUFBO0FBQUE7QUFBQTs7QUFlUCxzQkFBUSxHQUFSO0FBZk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUorQjs7QUEwQmhDO0FBQUEsd0RBQWMsa0JBQU8sSUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1gsc0JBQVEsR0FBUixDQUFZLGVBQVosRUFBNEIsSUFBNUI7O0FBRUEsaUJBQUcsVUFBSCxDQUFjLElBQWQsRUFBb0IsSUFBcEIsQ0FBeUIsWUFBSTs7QUFFNUIsb0JBQUksTUFBSSxDQUFSO0FBQ0EscUJBQUksSUFBSSxJQUFFLENBQVYsRUFBWSxJQUFFLE1BQU0sS0FBTixDQUFZLE1BQTFCLEVBQWlDLEdBQWpDLEVBQXFDO0FBQ3BDLHNCQUFHLE1BQU0sS0FBTixDQUFZLENBQVosRUFBZSxLQUFmLElBQXNCLEtBQUssS0FBOUIsRUFBb0M7QUFDbEMsMEJBQUksQ0FBSjtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxzQkFBTSxLQUFOLENBQVksTUFBWixDQUFtQixHQUFuQixFQUF1QixDQUF2QjtBQUNBLHNCQUFNLEdBQU4sR0FBVSxJQUFWO0FBQ0Esc0JBQU0sT0FBTixHQUFjLEtBQWQ7QUFDQSxzQkFBTSxPQUFOLENBQWMsS0FBZDtBQUVBLGVBZkQ7O0FBSFcsZ0RBb0JKLEVBcEJJOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0ExQmdDOztBQWlEL0I7QUFBQSx3REFBcUIsa0JBQU8sR0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ25CLHNCQUFRLEdBQVIsQ0FBWSxzQkFBWixFQUFtQyxHQUFuQztBQUNBLG9CQUFNLFVBQU4sR0FBaUIsS0FBakI7QUFDQSxvQkFBTSxPQUFOLEdBQWMsSUFBZDtBQUNBLG9CQUFNLFVBQU4sR0FBaUIsTUFBakI7QUFDQSxvQkFBTSxHQUFOLEdBQVUsR0FBVjtBQUNBLG9CQUFNLE9BQU4sQ0FBYyxLQUFkOztBQU5tQixnREFRWixFQVJZOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXJCOztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBakQrQjs7QUE0RC9CO0FBQUEsd0RBQWMsa0JBQU8sRUFBUCxFQUFVLElBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaLHNCQUFRLEdBQVIsQ0FBWSxlQUFaLEVBQTRCLElBQTVCOzs7Ozs7OztBQVFDLGlCQUFHLFVBQUgsQ0FBYyxJQUFkLEVBQW9CLElBQXBCLENBQXlCLFVBQUMsTUFBRCxFQUFVO0FBQ2xDLHdCQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0Esc0JBQU0sVUFBTixHQUFpQixLQUFqQjtBQUNBLHNCQUFNLEdBQU4sR0FBVSxJQUFWO0FBQ0Esc0JBQU0sT0FBTixDQUFjLEtBQWQ7QUFDQSxlQUxEOztBQVRXLGdEQWdCTCxFQWhCSzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQUFBO0FBQUE7QUFBQTtBQUFBLEtBNUQrQjs7QUErRS9CO0FBQUEsd0RBQWlCLGtCQUFNLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFZixvQkFBTSxVQUFOLEdBQWlCLElBQWpCO0FBQ0Esb0JBQU0sR0FBTixHQUFVLEdBQVY7QUFDQSxvQkFBTSxXQUFOLEdBQWtCLFFBQWxCO0FBQ0Esb0JBQU0sT0FBTixDQUFjLEtBQWQ7O0FBTGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EvRStCOztBQXdGOUI7QUFBQSx3REFBWSxrQkFBTyxJQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWCxzQkFBUSxHQUFSLENBQVksYUFBWixFQUEwQixJQUExQjs7Ozs7Ozs7O0FBVUEsaUJBQUcsUUFBSCxHQUFjLElBQWQsQ0FBbUIsVUFBQyxLQUFELEVBQVM7QUFDMUIsaUNBQUUsT0FBRixDQUFVLEtBQVYsRUFBZ0IsVUFBQyxJQUFELEVBQVE7O0FBRXRCLHNCQUFHLE1BQU0sS0FBTixDQUFZLE9BQVosQ0FBb0IsSUFBcEIsS0FBMkIsQ0FBQyxDQUEvQixFQUFpQztBQUMvQiwwQkFBTSxLQUFOLENBQVksSUFBWixDQUFpQixJQUFqQjtBQUNEO0FBQ0YsaUJBTEQ7QUFNQSx3QkFBUSxHQUFSLENBQVksS0FBWjtBQUNBLHNCQUFNLE9BQU4sQ0FBYyxLQUFkO0FBQ0QsZUFURDs7QUFYVyxnREFzQkosSUF0Qkk7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUF4RjhCLENBQW5CLENBQWQ7O0FBbUhBLE1BQU0sUUFBTixHQUFpQixZQUFNO0FBQ3JCLFNBQU8saUJBQUUsS0FBRixDQUFRLEtBQVIsQ0FBUDtBQUNELENBRkQ7O2tCQUtlLEs7Ozs7Ozs7OztBQ3ZJZjs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQTs7Ozs7O0FBRUEsSUFBTSxRQUFRO0FBQ1osT0FBSyxJQURPO0FBRVosU0FBTyxJQUZLO0FBR1osU0FBTztBQUhLLENBQWQ7O0FBTUEsYUFBUSxNQUFSLENBQWUsVUFBQyxRQUFELEVBQWM7QUFDM0IsbUJBQUUsTUFBRixDQUFTLEtBQVQsRUFBZ0IsUUFBaEI7QUFDRCxDQUZEOztBQUlBLElBQU0sUUFBUSxpQkFBTyxXQUFQLENBQW1CO0FBQy9CLCtCQUQrQjtBQUUvQixvQkFBa0IsMEJBQUMsS0FBRCxFQUFXO0FBQzNCLFFBQUksTUFBTSxJQUFOLEtBQWUsU0FBbkIsRUFBOEIsT0FBTyxJQUFQO0FBQzlCLFFBQUksTUFBTSxLQUFOLEtBQWdCLEtBQXBCLEVBQTJCLE9BQU8sSUFBUDtBQUMzQixxQkFBUSxZQUFSLENBQXFCLElBQXJCO0FBQ0EsUUFBSSxNQUFNLEtBQVYsRUFBaUIsTUFBTSxLQUFOLENBQVksVUFBWjtBQUNqQixVQUFNLEtBQU4sR0FBYyxLQUFkO0FBQ0EsUUFBSSxLQUFKLEVBQVcsTUFBTSxRQUFOO0FBQ1gsVUFBTSxPQUFOLENBQWMsS0FBZDtBQUNELEdBVjhCO0FBVy9CLGtCQUFnQix3QkFBQyxHQUFELEVBQVM7QUFDdkIsUUFBSSxNQUFNLElBQU4sS0FBZSxTQUFuQixFQUE4QixPQUFPLElBQVA7QUFDOUIsUUFBSSxNQUFNLEdBQU4sS0FBYyxHQUFsQixFQUF1QixPQUFPLElBQVA7QUFDdkIsUUFBSSxNQUFNLEdBQVYsRUFDRSxNQUFNLEdBQU4sQ0FBVSxVQUFWO0FBQ0YsVUFBTSxHQUFOLEdBQVksR0FBWjtBQUNBLFFBQUksR0FBSixFQUFTLElBQUksUUFBSjtBQUNULFVBQU0sT0FBTixDQUFjLEtBQWQ7QUFDRCxHQW5COEI7QUFvQi9CLG9CQUFrQiwwQkFBQyxLQUFELEVBQVc7QUFDM0IsUUFBSSxNQUFNLElBQU4sS0FBZSxTQUFuQixFQUE4QixPQUFPLElBQVA7QUFDOUIsUUFBSSxpQkFBRSxHQUFGLENBQU0sS0FBTixFQUFhLFlBQWIsTUFBK0IsTUFBTSxJQUF6QyxFQUErQyxPQUFPLElBQVA7QUFDL0MsUUFBSSxNQUFNLEdBQVYsRUFBZSxNQUFNLEdBQU4sQ0FBVSxVQUFWO0FBQ2YsVUFBTSxHQUFOLEdBQVksSUFBWjtBQUNBLFVBQU0sS0FBTixHQUFjLElBQWQ7QUFDQSxVQUFNLEtBQU4sR0FBYyxLQUFkO0FBQ0EsVUFBTSxPQUFOLENBQWMsS0FBZDtBQUNELEdBNUI4QjtBQTZCL0IsWUFBVSxrQkFBQyxHQUFELEVBQVM7QUFDakIsVUFBTSxHQUFOLEdBQVksR0FBWjtBQUNBLFVBQU0sT0FBTixDQUFjLEtBQWQ7QUFDRDtBQWhDOEIsQ0FBbkIsQ0FBZDs7QUFtQ0EsTUFBTSxRQUFOLEdBQWlCLFlBQU07QUFDckIsU0FBTyxpQkFBRSxLQUFGLENBQVEsS0FBUixDQUFQO0FBQ0QsQ0FGRDs7a0JBSWUsSzs7Ozs7Ozs7O0FDeERmOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNLFFBQVE7QUFDWixtQkFBaUIsS0FETDtBQUVaLG1CQUFpQixLQUZMO0FBR1osUUFBTSxNQUhNO0FBSVosU0FBTztBQUpLLENBQWQ7O0FBT0EsSUFBTSxRQUFRLGlCQUFPLFdBQVAsQ0FBbUI7QUFDL0IsMkJBRCtCO0FBRS9CLG1CQUYrQiwrQkFFWDtBQUNsQixVQUFNLGVBQU4sR0FBd0IsSUFBeEI7QUFDQSxVQUFNLE9BQU4sQ0FBYyxLQUFkO0FBQ0QsR0FMOEI7QUFNL0Isb0JBTitCLGdDQU1WO0FBQ25CLFVBQU0sZUFBTixHQUF3QixLQUF4QjtBQUNBLFVBQU0sT0FBTixDQUFjLEtBQWQ7QUFDRCxHQVQ4Qjs7QUFVL0IscUJBQW1CLDJCQUFDLElBQUQsRUFBTSxNQUFOLEVBQWlCO0FBQ2xDLFVBQU0sZUFBTixHQUF3QixJQUF4QjtBQUNBLFFBQUcsSUFBSCxFQUFRO0FBQ04sWUFBTSxTQUFOLEdBQWdCLElBQWhCO0FBQ0Q7O0FBRUQsVUFBTSxXQUFOLEdBQWtCLE1BQWxCO0FBQ0EsVUFBTSxPQUFOLENBQWMsS0FBZDtBQUNELEdBbEI4QjtBQW1CL0Isc0JBQW9CLDhCQUFNO0FBQ3hCLFVBQU0sZUFBTixHQUF3QixLQUF4QjtBQUNBLFVBQU0sT0FBTixDQUFjLEtBQWQ7QUFDRCxHQXRCOEI7QUF1Qi9CLGFBQVcsbUJBQUMsSUFBRCxFQUFVO0FBQ25CLFFBQUksTUFBTSxJQUFOLEtBQWUsSUFBbkIsRUFBeUIsT0FBTyxJQUFQO0FBQ3pCLFVBQU0sSUFBTixHQUFhLElBQWI7QUFDQSxxQkFBYyxZQUFkLENBQTJCLElBQTNCO0FBQ0EscUJBQWMsY0FBZCxDQUE2QixJQUE3QjtBQUNBLFVBQU0sT0FBTixDQUFjLEtBQWQ7QUFDRCxHQTdCOEI7QUE4Qi9CLGNBQVksb0JBQUMsS0FBRCxFQUFXO0FBQ3JCLFFBQUksTUFBTSxLQUFOLEtBQWdCLEtBQXBCLEVBQTJCLE9BQU8sSUFBUDtBQUMzQixVQUFNLEtBQU4sR0FBYyxLQUFkO0FBQ0EsVUFBTSxPQUFOLENBQWMsS0FBZDtBQUNEO0FBbEM4QixDQUFuQixDQUFkOztBQXFDQSxNQUFNLFFBQU4sR0FBaUIsWUFBTTtBQUNyQixTQUFPLGlCQUFFLEtBQUYsQ0FBUSxLQUFSLENBQVA7QUFDRCxDQUZEOztrQkFJZSxLOzs7Ozs7Ozs7QUN0RGYsSUFBTSxJQUFJLFFBQVEsUUFBUixDQUFWOztBQUVBLE9BQU8sT0FBUDtBQUNFLDhCQUFZLElBQVosRUFBa0I7QUFBQTs7QUFDaEIsV0FBTyxRQUFRLEVBQWY7QUFDQSxTQUFLLElBQUwsR0FBWSxLQUFLLElBQUwsSUFBYSxFQUF6QjtBQUNBLFNBQUssSUFBTCxHQUFZLEtBQUssSUFBTCxJQUFhLEtBQXpCO0FBQ0Q7O0FBTEg7QUFBQTtBQUFBLHlCQU9PLFFBUFAsRUFPaUI7QUFDYixjQUFRLEdBQVIsQ0FBZSxLQUFLLElBQXBCLFNBQTRCLEtBQUssSUFBakMsU0FBeUMsUUFBekM7QUFDQSxhQUFVLEtBQUssSUFBZixTQUF1QixLQUFLLElBQTVCLFNBQW9DLFFBQXBDO0FBQ0Q7QUFWSDtBQUFBO0FBQUEsNkJBWVcsTUFaWCxFQVltQixJQVpuQixFQVl5QixRQVp6QixFQVltQztBQUMvQixVQUFNLE9BQU87QUFDWCxzQkFEVztBQUVYLGNBQU0sS0FBSyxTQUFMLENBQWUsSUFBZixDQUZLO0FBR1gscUJBQWEsaUNBSEY7QUFJWCxrQkFBVSxNQUpDO0FBS1gsYUFBSyxLQUFLLElBQUwsQ0FBVSxRQUFWO0FBTE0sT0FBYjtBQU9BLFVBQUksV0FBVyxLQUFmLEVBQ0UsS0FBSyxJQUFMLEdBQVksSUFBWixDQURGLEtBRUs7QUFDSCxhQUFLLElBQUwsR0FBWSxLQUFLLFNBQUwsQ0FBZSxJQUFmLENBQVo7QUFDQSxhQUFLLFdBQUwsR0FBbUIsaUNBQW5CO0FBQ0EsYUFBSyxRQUFMLEdBQWdCLE1BQWhCO0FBQ0Q7QUFDRCxhQUFPLEVBQUUsSUFBRixDQUFPLElBQVAsQ0FBUDtBQUNEO0FBNUJIO0FBQUE7QUFBQSwrQkE4QmE7QUFDVCxhQUFPLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsRUFBckIsRUFBeUIsU0FBekIsQ0FBUDtBQUNEO0FBaENIO0FBQUE7QUFBQSwrQkFrQ2EsSUFsQ2IsRUFrQ21CO0FBQ2YsYUFBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLEVBQXVCLElBQXZCLEVBQThCLFNBQTlCLENBQVA7QUFDRDtBQXBDSDtBQUFBO0FBQUEsK0JBc0NhLElBdENiLEVBc0NrQjtBQUNiLGFBQU8sS0FBSyxRQUFMLENBQWMsUUFBZCxFQUF5QixJQUF6QixFQUFnQyxhQUFXLEtBQUssR0FBaEQsQ0FBUDtBQUNGO0FBeENIO0FBQUE7QUFBQSwrQkEwQ2EsSUExQ2IsRUEwQ2tCO0FBQ2QsYUFBTyxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXNCLElBQXRCLEVBQTZCLGFBQVcsS0FBSyxHQUE3QyxDQUFQO0FBQ0Q7QUE1Q0g7QUFBQTtBQUFBLDRCQThDVSxRQTlDVixFQThDb0I7QUFDaEIsYUFBTyxLQUFLLFFBQUwsQ0FBYyxNQUFkLEVBQXNCLEVBQXRCLEVBQTJCLG9CQUFrQixRQUE3QyxDQUFQO0FBQ0Q7QUFoREg7QUFBQTtBQUFBLDJCQWtEUyxLQWxEVCxFQWtEZ0I7QUFDWixhQUFPLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsRUFBRSxZQUFGLEVBQXJCLEVBQWdDLE9BQWhDLENBQVA7QUFDRDtBQXBESDtBQUFBO0FBQUEsMkJBc0RTLEtBdERULEVBc0RnQjtBQUNaLGFBQU8sS0FBSyxRQUFMLENBQWMsUUFBZCxFQUF3QixFQUFFLFlBQUYsRUFBeEIsRUFBbUMsT0FBbkMsQ0FBUDtBQUNEO0FBeERIO0FBQUE7QUFBQSwyQkEwRFMsS0ExRFQsRUEwRGdCLEtBMURoQixFQTBEdUI7QUFDbkIsYUFBTyxLQUFLLFFBQUwsQ0FBYyxPQUFkLEVBQXVCLEVBQUUsWUFBRixFQUFTLFlBQVQsRUFBdkIsRUFBeUMsT0FBekMsQ0FBUDtBQUNEO0FBNURIO0FBQUE7QUFBQSx5QkE4RE8sS0E5RFAsRUE4RGM7QUFDVixhQUFPLEtBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsRUFBRSxZQUFGLEVBQXJCLEVBQWdDLE9BQWhDLENBQVA7QUFDRDtBQWhFSDtBQUFBO0FBQUEsMkJBa0VTO0FBQ0wsYUFBTyxLQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLEVBQXJCLEVBQXlCLFFBQXpCLENBQVA7QUFDRDtBQXBFSDs7QUFBQTtBQUFBOzs7QUNGQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnXG5cbmNvbnN0IGJsb2NrQWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKFtcbiAgJ3NldEFjdGl2ZUJsb2NrJyxcbiAgJ3JlbW92ZUJveCcsXG4gICdjcmVhdGVCb3gnLFxuICAnc2V0QmxvY2tDb25maWcnLFxuICAnbmV3Q29tcG9uZW50Jyxcbl0ucmVkdWNlKChwdiwgY3YpID0+IHtcbiAgcHZbY3ZdID0geyBhc3luY1Jlc3VsdDogdHJ1ZSB9XG4gIHJldHVybiBwdlxufSwge30pKVxuXG5leHBvcnQgZGVmYXVsdCBibG9ja0FjdGlvbnNcbiIsImltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4J1xuXG5jb25zdCBhY3Rpb25zID0gUmVmbHV4LmNyZWF0ZUFjdGlvbnMoW1xuICAnc2F2ZUJvYXJkJyxcbiAgJ2Nsb25lQm9hcmQnLFxuICAnY3JlYXRlQm9hcmQnLFxuICAnbGlzdEJvYXJkcycsXG4gICdmaW5kQm9hcmQnLFxuICAncmVuYW1lQm9hcmQnLFxuICAncmVtb3ZlQm9hcmQnLFxuICAndXBkYXRlQm9hcmQnLFxuICAnYWRkQmxvY2snLFxuICAnbW92ZUJsb2NrJyxcbiAgJ3JlbW92ZUJsb2NrJyxcbiAgJ2dldERpc3BsYXlMaW5rJyxcbiAgJ29wZW5EaXNwbGF5TGluaycsXG4gICdwdWJsaXNoQm9hcmQnXG5dLnJlZHVjZSgocHYsIGN2KSA9PiB7XG4gIHB2W2N2XSA9IHsgYXN5bmNSZXN1bHQ6IHRydWUgfVxuICByZXR1cm4gcHZcbn0sIHt9KSlcblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uc1xuIiwiaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnXG5cbmNvbnN0IGFjdGlvbnMgPSBSZWZsdXguY3JlYXRlQWN0aW9ucyhbXG4gICdzdGFydERyYWcnLFxuICAnc3RvcERyYWcnLFxuICAnc3RhcnRSb3RhdGUnLFxuICAnc3RhcnRSZXNpemUnLFxuICAnc3RvcEFsbCcsXG4gICdhZGRaSW5kZXgnLFxuICAncmVtb3ZlQm94JyxcbiAgJ2luaXQnLFxuICAnb3BlbkNvbmZpZycsXG5dLnJlZHVjZSgocHYsIGN2KSA9PiB7XG4gIHB2W2N2XSA9IHsgYXN5bmNSZXN1bHQ6IHRydWUgfVxuICByZXR1cm4gcHZcbn0sIHt9KSlcblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uc1xuIiwiaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnXG5cbmNvbnN0IGFjdGlvbnMgPSBSZWZsdXguY3JlYXRlQWN0aW9ucyhbXG4gICdhZGRVc2VyJyxcbiAgJ3JlbW92ZVVzZXJDb25mcmltJyxcbiAgJ3JlbW92ZVVzZXInLFxuICAndXBkYXRlVXNlcicsXG4gICdsaXN0VXNlcicsXG4gICdjaGFuZ2VQYXNzd29yZCdcbl0ucmVkdWNlKChwdiwgY3YpID0+IHtcbiAgcHZbY3ZdID0geyBhc3luY1Jlc3VsdDogdHJ1ZSB9XG4gIHJldHVybiBwdlxufSwge30pKVxuXG5leHBvcnQgZGVmYXVsdCBhY3Rpb25zXG4iLCJpbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCdcblxuY29uc3QgYWN0aW9ucyA9IFJlZmx1eC5jcmVhdGVBY3Rpb25zKFtcbiAgJ3NldEFjdGl2ZUJsb2NrJyxcbiAgJ3NldEFjdGl2ZUJveCcsXG4gICdzZXRBY3RpdmVCb2FyZCcsXG4gICdzZXRBcHAnLFxuXS5yZWR1Y2UoKHB2LCBjdikgPT4ge1xuICBwdltjdl0gPSB7IGFzeW5jUmVzdWx0OiB0cnVlIH1cbiAgcmV0dXJuIHB2XG59LCB7fSkpXG5cbmV4cG9ydCBkZWZhdWx0IGFjdGlvbnNcbiIsImltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4J1xuXG5jb25zdCBhY3Rpb25zID0gUmVmbHV4LmNyZWF0ZUFjdGlvbnMoW1xuICAnb3BlbkJsb2NrQ29uZmlnJyxcbiAgJ2Nsb3NlQmxvY2tDb25maWcnLFxuICAnb3BlbkJvYXJkQ29uZmlnJyxcbiAgJ2Nsb3NlQm9hcmRDb25maWcnLFxuICAnc2V0TW9kZScsXG4gICdzZXRUaGVtZScsXG5dLnJlZHVjZSgocHYsIGN2KSA9PiB7XG4gIHB2W2N2XSA9IHsgYXN5bmNSZXN1bHQ6IHRydWUgfVxuICByZXR1cm4gcHZcbn0sIHt9KSlcblxuZXhwb3J0IGRlZmF1bHQgYWN0aW9uc1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQ2xvdWRBcHAnXG5cbmltcG9ydCB7IGluaXRTdG9yZXMgfSBmcm9tICcuL2xpYi91dGlsJ1xuaW5pdFN0b3JlcygpXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb3VudC1hcHAnKSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLElucHV0LFJvdyxDb2wsVGFicyxUYWIgLEdseXBoaWNvbiwgQWxlcnR9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuaW1wb3J0IGJsb2NrQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2Jsb2NrJ1xuaW1wb3J0IGJveEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9ib3gnXG5pbXBvcnQgdWlTdG9yZSBmcm9tICcuLi9zdG9yZXMvdWknXG5pbXBvcnQgc2VsZWN0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3NlbGVjdCdcbmltcG9ydCBzZWxlY3RTdG9yZSBmcm9tICcuLi9zdG9yZXMvc2VsZWN0J1xuXG5cbmltcG9ydCBjbG91ZFVJQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2Nsb3VkdWknXG5pbXBvcnQgY2xvdWRVSVN0b3JlIGZyb20gJy4uL3N0b3Jlcy9jbG91ZHVpJ1xuXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vY3NzL2FwcC5jc3MnXG5cbmltcG9ydCBjbSBmcm9tICcuLi9saWIvY29tcG9uZW50cydcblxuaW1wb3J0IHtOb3RpZmljYXRpb259IGZyb20gJy4vTm90aWZpY2F0aW9uJ1xuXG5pbXBvcnQge1VzZXJUUixCb2FyZFRSfSBmcm9tICcuL0Nsb3VkVFInXG5cbmNvbnN0IFVzZXJUeXBlPXtcImFkbWluXCI6XCLnrqHnkIblkZhcIixcIndvcmtlclwiOlwi5byA5Y+R6ICFXCIsXCJndWVzdFwiOlwi5L2/55So6ICFXCJ9XG5cbmltcG9ydCAkICBmcm9tICdqcXVlcnknXG5cblxuXG5mdW5jdGlvbiBfanNvblJlcShtZXRob2QsIGRhdGEsIGVuZHBvaW50KSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB1cmw6IGVuZHBvaW50LFxuICAgIH1cbiAgICBpZiAobWV0aG9kID09PSAnR0VUJylcbiAgICAgIG9wdHMuZGF0YSA9IGRhdGFcbiAgICBlbHNlIHtcbiAgICAgIG9wdHMuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICBvcHRzLmNvbnRlbnRUeXBlID0gJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXG4gICAgICBvcHRzLmRhdGFUeXBlID0gJ2pzb24nXG4gICAgfVxuICAgIHJldHVybiAkLmFqYXgob3B0cylcbiAgfVxuICBcblxuXG5cbkBhdXRvYmluZFxuY2xhc3MgQWxlcnREaXNtaXNzYWJsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICBhbGVydFZpc2libGU6IHRydWUsXG4gICAgIHRpdGxlOlwiXCIsXG4gICAgIG1zZzpcIlwiLFxuICAgICB0eXBlOlwic3VjY2Vzc1wiXG4gICAgfVxuXG4gIH1cblxuXG5cblxuXG4gIHNob3dhbGVydCgpe1xuICAgICB0aGlzLnNldFN0YXRlKHthbGVydFZpc2libGU6IHRydWUsdGl0bGU6XCLmoIfpophcIixtc2c6XCLmtojmga9cIn0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmFsZXJ0VmlzaWJsZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEFsZXJ0IGJzU3R5bGU9e3RoaXMuc3RhdGUudHlwZX0gb25EaXNtaXNzPXt0aGlzLmhhbmRsZUFsZXJ0RGlzbWlzc30+XG4gICAgICAgICAgPGg0Pnt0aGlzLnN0YXRlLnRpdGxlfTwvaDQ+XG4gICAgICAgICAgPHA+e3RoaXMuc3RhdGUubXNnfTwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvQWxlcnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3dhbGVydH0+5rWL6K+VPC9CdXR0b24+XG4gICAgKTtcbiAgfVxuXG4gIGhhbmRsZUFsZXJ0RGlzbWlzcygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHthbGVydFZpc2libGU6IGZhbHNlfSk7XG4gIH1cblxuICBoYW5kbGVBbGVydFNob3coKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YWxlcnRWaXNpYmxlOiB0cnVlfSk7XG4gIH1cbn1cblxuXG5AYXV0b2JpbmRcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0NvbmZpZzogZmFsc2UsXG4gICAgICBcbiAgICB9XG5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgXG4gICB0aGlzLmxvYWRQdXNoU2VydmVyKClcblxuICAgY2xvdWRVSVN0b3JlLmxpc3RlbigobmV3U3RhdGUpID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpXG4gICAgfSlcblxuICAgIGNsb3VkVUlBY3Rpb25zLmxpc3RVc2VyKCk7XG5cbiAgfVxuXG5cbiAgYWRkVXNlckNvbmZpZygpe1xuICAgIFxuICAgICB0aGlzLnNldFN0YXRlKHtzaG93Q29uZmlnOiAhdGhpcy5zdGF0ZS5zaG93Q29uZmlnLGlkeDpudWxsLGNvbmZyaW06ZmFsc2UsY29uZmlnVGl0bGU6XCLmt7vliqDnlKjmiLdcIiB9KVxuICB9XG4gIHNob3dOb3RpZml5KCl7XG4gICAgdGhpcy5yZWZzLm5vdGlmaXkuc2hvdyhcIuagh+mimFwiLFwi5YaF5a65XCIpO1xuICB9XG4gIGNsb3NlQ29uZnJpbSgpe1xuICAgICB0aGlzLnNldFN0YXRlKHtjb25mcmltOiBmYWxzZSxpZHg6bnVsbCB9KVxuICB9XG5cbiAgcmVtb3ZlVXNlcigpe1xuXG4gICAgbGV0IHVzZXI9e307XG4gICAgXG4gICAgaWYodGhpcy5zdGF0ZS5pZHgpe1xuICAgICAgdXNlcj10aGlzLnN0YXRlLnVzZXJzW3RoaXMuc3RhdGUuaWR4LTFdXG4gICAgICBjbG91ZFVJQWN0aW9ucy5yZW1vdmVVc2VyKHVzZXIpO1xuICAgICB9XG5cblxuICAgICB0aGlzLnNldFN0YXRlKHtjb25mcmltOiAgZmFsc2V9KVxuICAgIFxuXG4gIH1cblxuICBzYXZlVXNlcigpe1xuICAgIFxuICAgIGxldCBwd2Q9dGhpcy5yZWZzLnBhc3N3b3JkLmdldFZhbHVlKCk7XG5cbiAgICBsZXQgZW1haWw9dGhpcy5yZWZzLmVtYWlsLmdldFZhbHVlKCk7XG5cbiAgICBsZXQgdHlwZT10aGlzLnJlZnMudHlwZS5nZXRWYWx1ZSgpO1xuXG4gICAgaWYocHdkPT1cIlwifHxlbWFpbD09XCJcInx8dHlwZT09XCJcIil7XG4gICAgICBhbGVydChcIuivt+ajgOafpei+k+WFpemhueebrlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgaWYocHdkIT10aGlzLnJlZnMucGFzc3dvcmQxLmdldFZhbHVlKCkpe1xuICAgICAgYWxlcnQoXCLlr4bnoIHkuI3kuIDoh7QhXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG5cbiAgICBpZih0aGlzLnN0YXRlLmlkeCl7XG4gICAgICBsZXQgdXNlciA9IHRoaXMuc3RhdGUudXNlcnNbdGhpcy5zdGF0ZS5pZHgtMV07XG4gICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZSB1c2VyIFwiLCB1c2VyKVxuXG4gICAgICBjbG91ZFVJQWN0aW9ucy51cGRhdGVVc2VyKFwiY2hhbmdlUGFzc3dvcmRcIix7XCJ1aWRcIjp1c2VyLnVpZCxcInBhc3N3b3JkXCI6cHdkfSk7XG5cbiAgICB9ZWxzZXtcbiAgICBcbiAgICAgIFxuICAgIGNsb3VkVUlBY3Rpb25zLmFkZFVzZXIoe1wiZW1haWxcIjplbWFpbCxcInBhc3N3b3JkXCI6cHdkLCBcInR5cGVcIiA6IHR5cGV9KVxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dDb25maWc6IGZhbHNlLGlkeDpudWxsLGNvbmZyaW06ZmFsc2UsY29uZmlnVGl0bGU6XCLmt7vliqDnlKjmiLdcIiB9KVxuICAgIH1cbiAgfVxuXG5cblxuXG4gIG9uQ29kZUNoYW5nZShjb2RlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VydmVyczp0aGlzLnJlZnMucHVzaFNlcnZlci5nZXRWYWx1ZSgpfSlcbiAgfVxuXG4gIGxvYWRQdXNoU2VydmVyKCl7XG4gICAgJC5nZXQoJy9hcGkvdjEvc2VydmVycycsIChyZXN1bHQpID0+IHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VydmVyczogSlNPTi5zdHJpbmdpZnkocmVzdWx0LCBudWxsLCA0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6L+c56iL6LCD55Soc2VydmVyXCIsIHJlc3VsdClcbiAgICAgICAgfSk7XG5cbiAgfVxuXG4gIHNob3dQdXNoc2VydmVyQ29uZmlnKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7J3Nob3dQdXNoc2VydmVyJzp0cnVlfSk7XG5cbiAgfVxuXG4gIGhpZGVQdXNoc2VydmVyQ29uZmlnKCl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7J3Nob3dQdXNoc2VydmVyJzpmYWxzZX0pO1xuXG4gIH1cblxuICBzYXZlUHVzaFNlcnZlcigpe1xuICAgIFxuICAgIGNvbnNvbGUubG9nKHRoaXMucmVmcy5wdXNoU2VydmVyVVJMLmdldFZhbHVlKCkpXG4gICAgdHJ5e1xuICAgICAgdmFyIHByb3RvY29sPVtcIm1xdHRcIixcIndzXCIsXCJzb2NrZXRpb1wiXTtcbiAgICAgIGxldCBzZXJ2ZXI9dGhpcy5yZWZzLnB1c2hTZXJ2ZXJVUkwuZ2V0VmFsdWUoKVxuICAgICAgXG4gICAgICBpZihwcm90b2NvbC5pbmRleE9mKHNlcnZlci5zcGxpdChcIjovL1wiKVswXSk8MCl7XG4gICAgICAgICAgYWxlcnQoJ+acjeWKoeWIl+ihqOino+aekOmUmeivryzor7fmo4Dmn6UnK3NlcnZlcik7XG4gICAgICAgICAgfWVsc2V7XG5cbiAgICAgICAgICAgX2pzb25SZXEoJ1BPU1QnLCAge1wic2VydmVyc1wiOltzZXJ2ZXJdfSAsICcvYXBpL3YxL3NlcnZlcnMnKVxuICAgICAgICAgICB0aGlzLmxvYWRQdXNoU2VydmVyKCk7XG4gICAgICAgICAgfVxuICAgICAgIFxuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICBhbGVydCgn5pyN5Yqh5YiX6KGo6Kej5p6Q6ZSZ6K+vLOivt+ajgOafpScpO1xuXG4gICAgfVxuICBcblxuICAgIHRoaXMuc2V0U3RhdGUoeydzaG93UHVzaHNlcnZlcic6ZmFsc2V9KTtcblxuICAgXG4gIH1cblxuICBkZWxldGVQdXNoU2VydmVyKCl7XG5cbiAgICAgY29uc29sZS5sb2codGhpcy5yZWZzLnB1c2hTZXJ2ZXJVUkwuZ2V0VmFsdWUoKSlcbiAgICB0cnl7XG4gICAgICB2YXIgcHJvdG9jb2w9W1wibXF0dFwiLFwid3NcIixcInNvY2tldGlvXCJdO1xuICAgICAgbGV0IHNlcnZlcj10aGlzLnJlZnMucHVzaFNlcnZlclVSTC5nZXRWYWx1ZSgpXG4gICAgICBcbiAgICAgIGlmKHByb3RvY29sLmluZGV4T2Yoc2VydmVyLnNwbGl0KFwiOi8vXCIpWzBdKTwwKXtcbiAgICAgICAgICBhbGVydCgn5pyN5Yqh5YiX6KGo6Kej5p6Q6ZSZ6K+vLOivt+ajgOafpScrc2VydmVyKTtcbiAgICAgICAgICB9ZWxzZXtcblxuICAgICAgICAgICBfanNvblJlcSgnREVMRVRFJywgIHtcInNlcnZlcnNcIjpbc2VydmVyXX0gLCAnL2FwaS92MS9zZXJ2ZXJzJylcbiAgICAgICAgICAgdGhpcy5sb2FkUHVzaFNlcnZlcigpO1xuICAgICAgICAgIH1cbiAgICAgICBcbiAgICB9Y2F0Y2goZSl7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgYWxlcnQoJ+acjeWKoeWIl+ihqOino+aekOmUmeivryzor7fmo4Dmn6UnKTtcblxuICAgIH1cbiAgXG5cbiAgICB0aGlzLnNldFN0YXRlKHsnc2hvd1B1c2hzZXJ2ZXInOmZhbHNlfSk7XG5cbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuICAgICBsZXQgdXNlcj17fVxuICAgICBsZXQgZGVsZXRDb25maXJtPWZhbHNlO1xuXG4gICAgIGlmKHRoaXMuc3RhdGUuaWR4KXtcbiAgICAgIHVzZXI9dGhpcy5zdGF0ZS51c2Vyc1t0aGlzLnN0YXRlLmlkeC0xXVxuICAgICAgZGVsZXRDb25maXJtPXRydWVcbiAgICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHAtdC02MFwiPlxuXG4gICAgIDxOb3RpZmljYXRpb24gcmVmPVwibm90aWZpeVwiIC8+XG5cbiAgICA8TW9kYWwgc2hvdz17dGhpcy5zdGF0ZS5zaG93UHVzaHNlcnZlcn0+XG4gICAgICAgIDxNb2RhbC5IZWFkZXIgPua3u+WKoC/liKDpmaQgUHVzaOaVsOaNrua6kDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICA8TW9kYWwuQm9keSA+XG4gICAgICAgICAgXG4gICAgICAgICAgPElucHV0IHJlZj0ncHVzaFNlcnZlclVSTCcgdHlwZT0ndGV4dCcgbGFiZWw9J1B1c2ggU2VydmVyIFVSTCcvPlxuXG4gICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgPE1vZGFsLkZvb3RlciA+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhpZGVQdXNoc2VydmVyQ29uZmlnfT7lj5bmtog8L0J1dHRvbj5cbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2F2ZVB1c2hTZXJ2ZXJ9PuehruiupOa3u+WKoDwvQnV0dG9uPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuLWRhbmdlclwiIG9uQ2xpY2s9e3RoaXMuZGVsZXRlUHVzaFNlcnZlcn0+56Gu6K6k5Yig6ZmkPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgICAgPC9Nb2RhbD5cblxuICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLmNvbmZyaW19IG9uSGlkZT17dGhpcy5jbG9zZUNvbmZyaW19PlxuICAgICAgICA8TW9kYWwuSGVhZGVyPlxuICAgICAgICAgICAgPE1vZGFsLlRpdGxlPueUqOaIt+euoeeQhjwvTW9kYWwuVGl0bGU+XG4gICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgICAge3RoaXMuc3RhdGUuY29uZnJpbU1zZ30ge3VzZXIuZW1haWx9XG4gICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgIFxuICAgICAgICA8L01vZGFsLkJvZHk+XG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2VDb25mcmltfT7lj5bmtog8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5yZW1vdmVVc2VyfT7noa7orqQ8L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgPC9Nb2RhbD5cblxuICAgIDxNb2RhbCBzaG93PXt0aGlzLnN0YXRlLnNob3dDb25maWd9IG9uSGlkZT17dGhpcy5jbG9zZUNvbmZpZ30+XG4gICAgICAgIDxNb2RhbC5IZWFkZXI+XG4gICAgICAgICAgICA8TW9kYWwuVGl0bGU+e3RoaXMuc3RhdGUuY29uZmlnVGl0bGV9PC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17OH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9J2VtYWlsJyBsYWJlbD0n55So5oi36YKu566xJyByZWY9XCJlbWFpbFwiIGRlZmF1bHRWYWx1ZT17dXNlci5lbWFpbH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPSdwYXNzd29yZCcgbGFiZWw9J+eUqOaIt+WvhueggScgcmVmPVwicGFzc3dvcmRcIiBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT0ncGFzc3dvcmQnIGxhYmVsPSfph43lpI3lr4bnoIEnIHJlZj1cInBhc3N3b3JkMVwiIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXs4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT0nc2VsZWN0JyBsYWJlbD0n55So5oi357G75Z6LJyByZWY9XCJ0eXBlXCIgZGVmYXVsdFZhbHVlPXt1c2VyLnR5cGV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J3dvcmtlcic+Qm9hcmTlvIDlj5HkurrlkZg8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0nZ3Vlc3QnPkJvYXJk5L2/55So5Lq65ZGYPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9J2FkbWluJz5Cb2FyZOeuoeeQhuS6uuWRmDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPjxpIGNsYXNzTmFtZT17IFwiZmEgZmEtXCIrdGhpcy5zdGF0ZS5pY29uKyBcIiBmYS0yeCBwdWxsLXJpZ2h0XCJ9PjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIDwvTW9kYWwuQm9keT5cbiAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRVc2VyQ29uZmlnfT7lj5bmtog8L0J1dHRvbj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zYXZlVXNlcn0+56Gu6K6kPC9CdXR0b24+XG4gICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuICAgIDwvTW9kYWw+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcC10LTEwXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICA8b2wgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxuICAgICAgICAgICAgICAgIDxsaT4gPGEgaHJlZj1cIiNcIj5PcmllbnRCb2FyZDwvYT4gPC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+IOS6keeuoeeQhiA8L2xpPlxuICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB0MjVcIj5cbiAgICAgICAgICBcbiAgey8qPEFsZXJ0RGlzbWlzc2FibGUvPiovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgPFRhYnMgZGVmYXVsdEFjdGl2ZUtleT17MX0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9ezF9IHRpdGxlPVwi55So5oi3566h55CGXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuYWRkVXNlckNvbmZpZ30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBcIj7mt7vliqDnlKjmiLc8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd05vdGlmaXl9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tc20gXCI+c2hvdyBub3RpZml5PC9CdXR0b24+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yZXNwb25zaXZlLXZlcnRpY2FsIHNoYWRvdy16LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRhYmxlIGlkPVwidGFibGVcIiBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciB0YWJsZS1tYy1saWdodC1ibHVlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGNlbnRlcj5JRDwvY2VudGVyPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Y2VudGVyPueUqOaIt+WQjTwvY2VudGVyPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Y2VudGVyPuexu+WeizwvY2VudGVyPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Y2VudGVyPuaTjeS9nDwvY2VudGVyPjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwidXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmtleXModGhpcy5zdGF0ZS51c2VycykubWFwKCh1c2VyLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS51c2Vyc1tpXS5lbWFpbCwgaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlclRSIGtleT17aSsxfSBpZHg9e2krMX0gdWlkPXt0aGlzLnN0YXRlLnVzZXJzW2ldLnVpZH0gZW1haWw9e3RoaXMuc3RhdGUudXNlcnNbaV0uZW1haWx9IHBhc3N3b3JkPVwiMTIzNDVcIiB0eXBlPXt0aGlzLnN0YXRlLnVzZXJzW2ldLnR5cGV9IGZyb3plbj17dGhpcy5zdGF0ZS51c2Vyc1tpXS5mcm96ZW59Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvbiBwYWdpbmF0aW9uLWxnIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRpc2FibGVkXCI+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPsKrPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiYWN0aXZlXCI+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPjE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+MjwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj4zPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPsK7PC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgPC9UYWI+XG4gICAgICAgICAgICAgICAgICAgIHsvKlxuICAgICAgICAgICAgICAgICAgICA8VGFiIGV2ZW50S2V5PXsyfSB0aXRsZT1cIkJvYXJk566h55CGXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLXJlc3BvbnNpdmUtdmVydGljYWwgc2hhZG93LXotMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgaWQ9XCJ0YWJsZVwiIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLW1jLWxpZ2h0LWJsdWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48Y2VudGVyPklEPC9jZW50ZXI+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPjxjZW50ZXI+Qm9hcmTmj4/ov7A8L2NlbnRlcj48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGNlbnRlcj7miYDmnInogIU8L2NlbnRlcj48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PGNlbnRlcj7mk43kvZw8L2NlbnRlcj48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5IGNsYXNzTmFtZT1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5rZXlzKHRoaXMuc3RhdGUudXNlcnMpLm1hcCgodXNlciwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUudXNlcnNbaV0uZW1haWwsIGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJvYXJkVFIga2V5PXtpKzF9IGlkeD17aSsxfSB1aWQ9e3RoaXMuc3RhdGUudXNlcnNbaV0udWlkfSBlbWFpbD17dGhpcy5zdGF0ZS51c2Vyc1tpXS5lbWFpbH0gcGFzc3dvcmQ9XCIxMjM0NVwiIHR5cGU9e3RoaXMuc3RhdGUudXNlcnNbaV0udHlwZX0gZnJvemVuPXt0aGlzLnN0YXRlLnVzZXJzW2ldLmZyb3plbn0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uIHBhZ2luYXRpb24tbGcgXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGlzYWJsZWRcIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+wqs8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhY3RpdmVcIj48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+MTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj4yPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPjM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+wrs8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgICAgICAgICA8L1RhYj5cbiAgICAgICAgICAgICAgICAgICovfVxuICAgICAgICAgICAgICAgICAgIHsvKiA8VGFiIGV2ZW50S2V5PXszfSB0aXRsZT1cIue7hOS7tueuoeeQhlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17MX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXt0aGlzLmFkZENvbXBvbmV0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgYnRuLXNtIFwiPua3u+WKoOe7hOS7tjwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgICAgKi99XG4gICAgICAgICAgICAgICAgICAgIDxUYWIgZXZlbnRLZXk9ezR9IHRpdGxlPVwiUHVzaCBTZXJ2ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5zaG93UHVzaHNlcnZlckNvbmZpZ30gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBcIj7mt7vliqAv5Yig6ZmkPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1Jvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHhzPXsxMH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7IDxJbnB1dCB0eXBlPSd0ZXh0YXJlYScgIHJlZj1cInB1c2hTZXJ2ZXJcIiAgcm93cz1cIjEwXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2VydmVyc30gb25DaGFuZ2U9e3RoaXMub25Db2RlQ2hhbmdlfS8+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgICAgIDwvVGFiPlxuICAgICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG4gICAgKVxuICB9XG5cbn1cblxuXG5cbkFwcC5kZWZhdWx0UHJvcHMgPSB7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgYXV0b2JpbmQgZnJvbSAnYXV0b2JpbmQtZGVjb3JhdG9yJ1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbixJbnB1dCxSb3csQ29sLFRhYnMsVGFiICxHbHlwaGljb24sIEFsZXJ0fSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmltcG9ydCBibG9ja0FjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9ibG9jaydcbmltcG9ydCBib3hBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvYm94J1xuaW1wb3J0IHVpU3RvcmUgZnJvbSAnLi4vc3RvcmVzL3VpJ1xuaW1wb3J0IHNlbGVjdEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zZWxlY3QnXG5pbXBvcnQgc2VsZWN0U3RvcmUgZnJvbSAnLi4vc3RvcmVzL3NlbGVjdCdcblxuXG5pbXBvcnQgY2xvdWRVSUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jbG91ZHVpJ1xuaW1wb3J0IGNsb3VkVUlTdG9yZSBmcm9tICcuLi9zdG9yZXMvY2xvdWR1aSdcblxuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2Nzcy9hcHAuY3NzJ1xuXG5pbXBvcnQgY20gZnJvbSAnLi4vbGliL2NvbXBvbmVudHMnXG5cbmNvbnN0IFVzZXJUeXBlPXtcImFkbWluXCI6XCLnrqHnkIblkZhcIixcIndvcmtlclwiOlwi5byA5Y+R6ICFXCIsXCJndWVzdFwiOlwi5L2/55So6ICFXCJ9XG5cblxuXG5AYXV0b2JpbmRcbmNsYXNzIFVzZXJUUiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICBsZXQgdHlwZSA9XCJndWVzdFwiIFxuXG4gICAgaWYoVXNlclR5cGVbcHJvcHMudHlwZV0pe1xuICAgICAgdHlwZT1wcm9wcy50eXBlXG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZT17XG4gICAgICBlbWFpbDpwcm9wcy5lbWFpbCxcbiAgICAgIHBhc3N3b3JkOnByb3BzLnBhc3N3b3JkLFxuICAgICAgaWR4OnByb3BzLmlkeCxcbiAgICAgIGZyb3plbjpwcm9wcy5mcm96ZW58fGZhbHNlLFxuICAgICAgdHlwZTp0eXBlLFxuICAgICAgdWlkOnByb3BzLnVpZCxcbiAgICB9XG5cbiAgfVxuXG4gICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuXG4gIH1cblxuICBnZXRUeXBlTGFiZWwoKXtcbiAgICByZXR1cm4gVXNlclR5cGVbdGhpcy5zdGF0ZS50eXBlXTtcbiAgfVxuXG4gIGZyb3plblNldHVwKCl7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5mcm96ZW4pO1xuICAgICBpZih0aGlzLnN0YXRlLnR5cGUhPVwiYWRtaW5cIil7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcImZyb3plblwiOiF0aGlzLnN0YXRlLmZyb3plbn0pO1xuICAgICAgY2xvdWRVSUFjdGlvbnMudXBkYXRlVXNlcihcImZyb3plblwiLHtcInVpZFwiOnRoaXMuc3RhdGUudWlkLFwiZnJvemVuXCI6IXRoaXMuc3RhdGUuZnJvemVufSk7XG4gICAgIH1lbHNle1xuICAgICAgYWxlcnQoXCLnrqHnkIblkZjotKbmiLfml6Dms5Xlhrvnu5Ms6K+36IGU57O75pWw5o2u566h55CG5ZGYXCIpXG4gICAgIH1cbiAgfVxuXG5cbiAgZGVsZXRlVXNlcigpe1xuICAgXG4gICAgICBpZih0aGlzLnN0YXRlLnR5cGU9PVwiYWRtaW5cIil7XG4gICAgICAgcmV0dXJuIGFsZXJ0KFwi5LiN6IO95Yig6ZmkIEJvYXJkIOeuoeeQhuWRmFwiKTtcbiAgICAgIH1lbHNle1xuICAgICAgIGNsb3VkVUlBY3Rpb25zLnJlbW92ZVVzZXJDb25mcmltKHRoaXMuc3RhdGUuaWR4KVxuICAgICAgfVxuICAgIFxuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQoKXtcbiAgIGNvbnNvbGUubG9nKFwiY2hhbmdlUGFzc3dvcmRcIix0aGlzLnN0YXRlLmlkeCk7XG4gICBjbG91ZFVJQWN0aW9ucy5jaGFuZ2VQYXNzd29yZCh0aGlzLnN0YXRlLmlkeCk7XG5cbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuXG5cbiAgICB2YXIgYnRuTGFibGUgPXRoaXMuc3RhdGUuZnJvemVuP1wi6Kej5Ya755So5oi3XCI6XCLlhrvnu5PnlKjmiLdcIjtcbiAgICBcblxuICAgIHJldHVybiAoXG5cbiAgICAgIDx0cj5cbiAgICAgICAgICA8dGQgZGF0YS10aXRsZT1cIklEXCI+e3RoaXMuc3RhdGUuaWR4fTwvdGQ+XG4gICAgICAgICAgPHRkIGRhdGEtdGl0bGU9XCJUeXBlXCI+e3RoaXMuc3RhdGUuZW1haWx9PC90ZD5cbiAgICAgICAgICA8dGQgZGF0YS10aXRsZT1cIlR5cGVcIj57dGhpcy5nZXRUeXBlTGFiZWwoKX08L3RkPlxuICAgICAgICAgIDx0ZCBkYXRhLXRpdGxlPVwiQWN0aW9uXCI+XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J2NoYW5nZVBXRCBidG4gYnRuLXNtIGJ0bi1zdWNjZXNzJyBvbkNsaWNrPXt0aGlzLmNoYW5nZVBhc3N3b3JkfT7kv67mlLnlr4bnoIE8L2E+ICZuYnNwO1xuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J2ZvaXplbiBidG4gYnRuLXNtIGJ0bi13YXJuaW5nJyAgb25DbGljaz17dGhpcy5mcm96ZW5TZXR1cH0gPntidG5MYWJsZX08L0J1dHRvbj4gJm5ic3A7XG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9J2RlbGV0ZSBidG4gYnRuLXNtIGJ0bi1kYW5nZXInIG9uQ2xpY2s9e3RoaXMuZGVsZXRlVXNlcn0+5Yig6Zmk55So5oi3PC9hPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICA8L3RkPlxuICAgICAgPC90cj4pXG5cbiAgfVxuIFxufVxuXG5cblxuXG5AYXV0b2JpbmRcbmNsYXNzIEJvYXJkVFIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgbGV0IHR5cGUgPVwiZ3Vlc3RcIiBcblxuICAgIGlmKFVzZXJUeXBlW3Byb3BzLnR5cGVdKXtcbiAgICAgIHR5cGU9cHJvcHMudHlwZVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGU9e1xuICAgICAgZW1haWw6cHJvcHMuZW1haWwsXG4gICAgICBwYXNzd29yZDpwcm9wcy5wYXNzd29yZCxcbiAgICAgIGlkeDpwcm9wcy5pZHgsXG4gICAgICBmcm96ZW46cHJvcHMuZnJvemVufHxmYWxzZSxcbiAgICAgIHR5cGU6dHlwZSxcbiAgICAgIHVpZDpwcm9wcy51aWQsXG4gICAgfVxuXG4gIH1cblxuICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcblxuICB9XG5cbiAgZ2V0VHlwZUxhYmVsKCl7XG4gICAgcmV0dXJuIFVzZXJUeXBlW3RoaXMuc3RhdGUudHlwZV07XG4gIH1cblxuICBmcm96ZW5TZXR1cCgpe1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZnJvemVuKTtcbiAgICAgaWYodGhpcy5zdGF0ZS50eXBlIT1cImFkbWluXCIpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XCJmcm96ZW5cIjohdGhpcy5zdGF0ZS5mcm96ZW59KTtcbiAgICAgIGNsb3VkVUlBY3Rpb25zLnVwZGF0ZVVzZXIoXCJmcm96ZW5cIix7XCJ1aWRcIjp0aGlzLnN0YXRlLnVpZCxcImZyb3plblwiOiF0aGlzLnN0YXRlLmZyb3plbn0pO1xuICAgICB9ZWxzZXtcbiAgICAgIGFsZXJ0KFwi566h55CG5ZGY6LSm5oi35peg5rOV5Ya757uTLOivt+iBlOezu+aVsOaNrueuoeeQhuWRmFwiKVxuICAgICB9XG4gIH1cblxuXG4gIGRlbGV0ZUJvYXJkKCl7XG4gICBcbiAgICAgIGlmKHRoaXMuc3RhdGUudHlwZT09XCJhZG1pblwiKXtcbiAgICAgICByZXR1cm4gYWxlcnQoXCLkuI3og73liKDpmaQgQm9hcmQg566h55CG5ZGYXCIpO1xuICAgICAgfWVsc2V7XG4gICAgICAgLy9jbG91ZFVJQWN0aW9ucy5yZW1vdmVVc2VyQ29uZnJpbSh0aGlzLnN0YXRlLmlkeClcbiAgICAgICBjb25zb2xlLmxvZygnY2xpY2sgZGVsZXRlIGJvYXJkJylcbiAgICAgIH1cbiAgICBcbiAgfVxuXG4gIHJlbmRlcigpIHtcblxuXG4gICAgdmFyIGJ0bkxhYmxlID10aGlzLnN0YXRlLmZyb3plbj9cIuWBnOeUqFwiOlwi5ZCv55SoXCI7XG4gICAgXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICA8dHI+XG4gICAgICAgICAgPHRkIGRhdGEtdGl0bGU9XCJJRFwiPnt0aGlzLnN0YXRlLmlkeH08L3RkPlxuICAgICAgICAgIDx0ZCBkYXRhLXRpdGxlPVwiVHlwZVwiPnt0aGlzLnN0YXRlLmVtYWlsfTwvdGQ+XG4gICAgICAgICAgPHRkIGRhdGEtdGl0bGU9XCJUeXBlXCI+e3RoaXMuZ2V0VHlwZUxhYmVsKCl9PC90ZD5cbiAgICAgICAgICA8dGQgZGF0YS10aXRsZT1cIkFjdGlvblwiPlxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdkZWxldGUgYnRuIGJ0bi1zbSBidG4tcHJpbWFyeScgb25DbGljaz17dGhpcy5kZWxldGVCb2FyZH0+6aKE6KeIPC9hPiAmbmJzcDtcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPSdmb2l6ZW4gYnRuIGJ0bi1zbSBidG4td2FybmluZycgIG9uQ2xpY2s9e3RoaXMuZnJvemVuU2V0dXB9ID57YnRuTGFibGV9PC9CdXR0b24+ICZuYnNwO1xuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdkZWxldGUgYnRuIGJ0bi1zbSBidG4tZGFuZ2VyJyBvbkNsaWNrPXt0aGlzLmRlbGV0ZUJvYXJkfT7liKDpmaQ8L2E+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPilcblxuICB9XG4gXG59XG5cbmV4cG9ydHMuVXNlclRSPSBVc2VyVFI7XG5leHBvcnRzLkJvYXJkVFI9IEJvYXJkVFI7XG5cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbmltcG9ydCBhdXRvYmluZCBmcm9tICdhdXRvYmluZC1kZWNvcmF0b3InXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLElucHV0LFJvdyxDb2wsVGFicyxUYWIgLEdseXBoaWNvbiwgQWxlcnR9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuXG4vLyBUT0RPOiBsMSBiZXR0ZXIgZGlzcGxheSBwYWdlXG5AYXV0b2JpbmRcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmaWNhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICBcdHNob3c6dGhpcy5wcm9wcy5zaG93fHxmYWxzZSxcbiAgICBcdHRpdGxlOnRoaXMucHJvcHMudGl0bGV8fFwiXCIsXG4gICAgXHRtc2c6dGhpcy5wcm9wcy5tc2d8fFwiXCJcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBcbiAgfVxuXG4gIHNob3codGl0bGUsbXNnKXtcbiAgXHR0aGlzLnNldFN0YXRlKHtzaG93OiB0cnVlLHRpdGxlLG1zZ30pXG4gIH1cblxuICBjbG9zZSgpe1xuICAgICB0aGlzLnNldFN0YXRlKHtzaG93OiBmYWxzZX0pXG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1vZGFsIHNob3c9e3RoaXMuc3RhdGUuc2hvd30gb25IaWRlPXt0aGlzLmNsb3NlfT5cbiAgICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZT57dGhpcy5zdGF0ZS50aXRsZX08L01vZGFsLlRpdGxlPlxuICAgICAgICA8L01vZGFsLkhlYWRlcj5cbiAgICAgICBcbiAgICAgICAgXG4gICAgICAgICA8TW9kYWwuQm9keT5cbiAgICAgICAgICAgIDxSb3c+XG4gICAgICAgICAgICAgICAgJm5ic3A7IHtcIiAgIGluZm86ICBcIn0ge3RoaXMuc3RhdGUubXNnfSBcbiAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICA8L01vZGFsLkJvZHk+ICAgXG4gICAgICAgXG4gICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RoaXMuY2xvc2V9PuWFs+mXrTwvQnV0dG9uPlxuICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICA8L01vZGFsPlxuICAgIClcbiAgfVxufVxuXG5cblxuXG5leHBvcnRzLk5vdGlmaWNhdGlvbj0gTm90aWZpY2F0aW9uO1xuXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcImxlZnRfbmF2XCI6XCJfYXBwX2Nzc19hcHBfX2xlZnRfbmF2XCIsXCJ3b3Jrc3BhY2VcIjpcIl9hcHBfY3NzX2FwcF9fd29ya3NwYWNlXCIsXCJuYXZiYXJcIjpcIl9hcHBfY3NzX2FwcF9fbmF2YmFyXCIsXCJib3hfdG9vbGJhcl9kZWFjdGl2ZVwiOlwiX2FwcF9jc3NfYXBwX19ib3hfdG9vbGJhcl9kZWFjdGl2ZVwiLFwiYm94X3Rvb2xiYXJfYWN0aXZlXCI6XCJfYXBwX2Nzc19hcHBfX2JveF90b29sYmFyX2FjdGl2ZVwiLFwibG9nb1wiOlwiX2FwcF9jc3NfYXBwX19sb2dvXCJ9IiwiZXhwb3J0IGRlZmF1bHQge1xuICAnZXhhbXBsZSc6IHJlcXVpcmUoJ29yaWVudGJvYXJkLWNvbXBvbmVudC1leGFtcGxlJykuZGVmYXVsdFxufSIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSdcblxuaW1wb3J0IGJsb2NrU3RvcmUgZnJvbSAnLi4vc3RvcmVzL2Jsb2NrJ1xuaW1wb3J0IGJvYXJkU3RvcmUgZnJvbSAnLi4vc3RvcmVzL2JvYXJkJ1xuaW1wb3J0IGJveFN0b3JlIGZyb20gJy4uL3N0b3Jlcy9ib3gnXG5pbXBvcnQgc2VsZWN0U3RvcmUgZnJvbSAnLi4vc3RvcmVzL3NlbGVjdCdcbmltcG9ydCB1aVN0b3JlIGZyb20gJy4uL3N0b3Jlcy91aSdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRlc3RMYXlvdXQodGl0bGUsIGNiKSB7XG4gIGNvbnN0IG5hbWUgPSAvKC4qKS1kZXYkLy5leGVjKHRpdGxlKVsxXVxuICBpZiAobmFtZSlcbiAgICByZXR1cm4gJC5hamF4KHtcbiAgICAgIHVybDogYC9nZXQtdGVzdC1sYXlvdXQvJHtuYW1lfWAsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2VzczogY2IsXG4gICAgfSlcbiAgcmV0dXJuIG51bGxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3YXBFbGVtZW50cyhsaXN0LCB4LCB5KSB7XG4gIGxpc3RbeF0gPSBbbGlzdFt5XSwgbGlzdFt5XSA9IGxpc3RbeF1dWzBdXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmVzKCkge1xuICAvLyBIQUNLOiBpbXBvcnQgYWxsIHN0b3JlcyBhbmQgYnlwYXNzIGVzbGludCBuby11bnVzZWQgcnVsZXNcbiAgKCgpID0+IHt9KShcbiAgICBibG9ja1N0b3JlLCBib2FyZFN0b3JlLCBib3hTdG9yZSwgc2VsZWN0U3RvcmUsIHVpU3RvcmVcbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29weVRvQ2xpcGJvYXJkKHRleHQpIHtcbiAgICB3aW5kb3cucHJvbXB0KCdDb3B5IHRvIGNsaXBib2FyZDogQ3RybCtDLCBFbnRlcicsIHRleHQpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuV2luZG93KHRleHQpIHtcbiAgICB3aW5kb3cub3Blbih0ZXh0KVxufVxuXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnREeW5hbWljKGNvbXBvbmVudCkge1xuXG4gICAgaWYgKCFjb21wb25lbnQuc3RhdGUuZGF0YXNvdXJjZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cblxuICAgIGxldCBjYiA9IGNvbXBvbmVudC5oYW5kbGVEeW5hbWljRGF0YSA/IChkYXRhKSA9PiB7XG4gICAgICAgIGlmICghY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2Uuc3RhcnREeW5hbWljKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsZGF0YSlcbiAgICAgICAgY29tcG9uZW50LmhhbmRsZUR5bmFtaWNEYXRhKGRhdGEpO1xuXG4gICAgICAgIGlmIChjb21wb25lbnQucmVmcy5kcyAmJiBjb21wb25lbnQucmVmcy5kcy5zdGF0ZS5zaG93KSB7XG4gICAgICAgICAgICBjb21wb25lbnQucmVmcy5kcy5oYW5kbGVMb2coZGF0YSk7XG4gICAgICAgIH1cbiAgICB9IDogKGRhdGEpID0+IHsgY29uc29sZS5sb2coZGF0YSk7IH1cblxuICAgIGxldCBzZXJ2ZXJVUkwgPSBjb21wb25lbnQuc3RhdGUuZGF0YXNvdXJjZS5zZXJ2ZXI7XG5cblxuICAgIGlmIChjb21wb25lbnQuc3RhdGUuZGF0YXNvdXJjZS5kYXRhVHlwZSA9PT0gXCJwdWxsXCIpIHtcblxuICAgICAgICBpZiAoY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2Uuc3RhcnREeW5hbWljKSB7XG5cbiAgICAgICAgICAgIGlmICghY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2UucmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnByb3BzLnRpbWVyUG9vbC5zdGFydChjb21wb25lbnQuc3RhdGUuZGF0YXNvdXJjZS51cmwsIGNvbXBvbmVudC5zdGF0ZS5kYXRhc291cmNlLmludGVydmFsLCBjYiwgdHJ1ZSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gY29tcG9uZW50LnByb3BzLnRpbWVyUG9vbC5zdGFydChjb21wb25lbnQuc3RhdGUuZGF0YXNvdXJjZS51cmwsIGNvbXBvbmVudC5zdGF0ZS5kYXRhc291cmNlLmludGVydmFsLCBjYik7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50LnNldFN0YXRlKHsgdGltZXJJZDogaWQgfSk7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG5cblxuICAgIH0gZWxzZSBpZiAoY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2UuZGF0YVR5cGUgPT09IFwicHVzaFwiKSB7XG5cbiAgICAgICAgbGV0IGNvbm49bnVsbDtcbiAgICAgICAgbGV0IHBvb2w9bnVsbDtcblxuICAgICAgICBpZihzZXJ2ZXJVUkwuaW5kZXhPZihcIm1xdHRcIik+LTEpe1xuXG4gICAgICAgICAgICBjb25uID0gY29tcG9uZW50LnByb3BzLm1xdHRQb29sLmdldCgnd3M6Ly8nICsgc2VydmVyVVJMLnNwbGl0KFwibXF0dDovL1wiKVsxXSk7XG4gICAgICAgICAgICBwb29sPSBjb21wb25lbnQucHJvcHMubXF0dFBvb2w7XG5cbiAgICAgICAgfWVsc2UgaWYoc2VydmVyVVJMLmluZGV4T2YoXCJzb2NrZXRpb1wiKT4tMSl7XG5cbiAgICAgICAgICAgIGNvbm4gPSBjb21wb25lbnQucHJvcHMuc29ja2V0aW9Qb29sLmdldCgnaHR0cDovLycgKyBzZXJ2ZXJVUkwuc3BsaXQoXCJzb2NrZXRpbzovL1wiKVsxXSk7XG4gICAgICAgICAgICBwb29sPSBjb21wb25lbnQucHJvcHMuc29ja2V0aW9Qb29sO1xuXG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5pyq5pSv5oyB5Y2P6K6uXCIsc2VydmVyVVJMKVxuICAgICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICBpZiAoY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2Uuc3RhcnREeW5hbWljKSB7XG5cbiAgICAgICAgICAgIHBvb2wuc3ViKGNvbm4sIGNvbXBvbmVudC5zdGF0ZS5kYXRhc291cmNlLmNoYW5uZWwsIGNiKVxuXG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIHBvb2wudW5zdWIoY29ubiwgY29tcG9uZW50LnN0YXRlLmRhdGFzb3VyY2UuY2hhbm5lbCwgY2IpXG5cbiAgICAgICAgfVxuXG5cbiAgICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BEeW5hbWljKGNvbXBvbmVudCkge1xuXG5cbiAgICBsZXQgY2IgPSBjb21wb25lbnQuaGFuZGxlRHluYW1pY0RhdGEgPyBjb21wb25lbnQuaGFuZGxlRHluYW1pY0RhdGEgOiAoZGF0YSkgPT4geyBjb25zb2xlLmxvZyhkYXRhKTsgfVxuXG4gICAgaWYgKGNvbXBvbmVudC5zdGF0ZS5kYXRhVHlwZSA9PT0gXCJwdWxsXCIpIHtcblxuICAgICAgICBjb21wb25lbnQucHJvcHMudGltZXJQb29sLnN0b3AoY29tcG9uZW50LnN0YXRlLnRpbWVySWQpO1xuICAgICAgICBjb21wb25lbnQuc2V0U3RhdGUoeyB0aW1lcklkOiBudWxsIH0pO1xuXG4gICAgfSBlbHNlIGlmIChjb21wb25lbnQuc3RhdGUuZGF0YVR5cGUgPT09IFwicHVzaFwiKSB7XG5cbiAgICAgICAgY29tcG9uZW50LnByb3BzLm1xdHRQb29sLnVuc3ViKGNvbm4sIGNvbXBvbmVudC5zdGF0ZS5jaGFubmVsLCBjYilcblxuICAgIH1cblxufVxuIiwiaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkJ1xuXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2Jsb2NrJ1xuXG5pbXBvcnQgc2VsZWN0U3RvcmUgZnJvbSAnLi4vc3RvcmVzL3NlbGVjdCdcblxubGV0IHN0YXRlID0ge1xuXG59XG5cbnNlbGVjdFN0b3JlLmxpc3RlbigobmV3U3RhdGUpID0+IHtcbiAgc3RhdGUgPSBfLmFzc2lnbihzdGF0ZSwgbmV3U3RhdGUpXG59KVxuXG5mdW5jdGlvbiBlbnN1cmVDb21wb25lbnRJbmZvKGluZm8pIHtcbiAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIHJvdGF0ZTogMCxcbiAgICBoOiAxMDAsXG4gICAgdzogMTAwLFxuICAgIGRhdGE6IHt9LFxuICAgIGlkOiB1dWlkLnY0KCksXG4gIH1cbiAgcmV0dXJuIF8uYXNzaWduKGRlZmF1bHRzLCBpbmZvKVxufVxuXG5jb25zdCBzdG9yZSA9IFJlZmx1eC5jcmVhdGVTdG9yZSh7XG4gIGxpc3RlbmFibGVzOiBhY3Rpb25zLFxuICBvblJlbW92ZUJveDogKCkgPT4ge1xuICAgIHN0YXRlLmJsb2NrLnJlbW92ZUJveChzdGF0ZS5ib3gpXG4gIH0sXG4gIG9uTmV3Q29tcG9uZW50OiAoYm94KSA9PiB7XG4gICAgY29uc29sZS5sb2coc3RhdGUuYmxvY2suY3JlYXRlQm94KVxuICAgIGJveCA9IGVuc3VyZUNvbXBvbmVudEluZm8oYm94KVxuICAgIHN0YXRlLmJsb2NrLmNyZWF0ZUJveChib3gpXG4gIH0sXG4gIG9uU2V0QmxvY2tDb25maWc6IChjb25maWcpID0+IHtcbiAgICBzdGF0ZS5ibG9jay5zZXRDb25maWcoY29uZmlnKVxuICB9LFxuXG59KVxuXG5zdG9yZS5nZXRTdGF0ZSA9ICgpID0+IHtcbiAgcmV0dXJuIF8uY2xvbmUoc3RhdGUpXG59XG5cbnN0b3JlLmZpbmRCb2FyZCA9IChib2FyZCkgPT4ge1xuICByZXR1cm4gXy5maW5kKHN0YXRlLmJvYXJkcywgYm9hcmQpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlXG4iLCJpbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9ib2FyZCdcblxuaW1wb3J0IHNlbGVjdEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zZWxlY3QnXG5pbXBvcnQgc2VsZWN0U3RvcmUgZnJvbSAnLi4vc3RvcmVzL3NlbGVjdCdcbmltcG9ydCBCb2FyZE1hbmFnZXIgZnJvbSAnLi4vLi4vbGliL2NsaWVudCdcblxuaW1wb3J0IHsgc3dhcEVsZW1lbnRzLCBjb3B5VG9DbGlwYm9hcmQsb3BlbldpbmRvdyB9IGZyb20gJy4uL2xpYi91dGlsJ1xuXG5jb25zdCBibSA9IG5ldyBCb2FyZE1hbmFnZXIoKVxubGV0IHN0YXRlID0ge1xuICBib2FyZHM6IFtdLFxufVxuXG5zZWxlY3RTdG9yZS5saXN0ZW4oKG5ld1N0YXRlKSA9PiB7XG4gIHN0YXRlID0gXy5hc3NpZ24oc3RhdGUsIG5ld1N0YXRlKVxufSlcblxuY29uc3Qgc3RvcmUgPSBSZWZsdXguY3JlYXRlU3RvcmUoe1xuICBsaXN0ZW5hYmxlczogYWN0aW9ucyxcbiAgb25TYXZlQm9hcmQ6ICgpID0+IHtcbiAgICBjb25zdCBuYiA9IHN0YXRlLmFwcC5yZWZzLmJvYXJkLnRvSnNvbigpXG4gICAgY29uc29sZS5sb2cobmIpXG4gICAgYWN0aW9ucy51cGRhdGVCb2FyZCh7IG5hbWU6IG5iLm5hbWUgfSwgbmIpXG4gICAgYWxlcnQoJ+S/neWtmOaIkOWKnycpXG4gIH0sXG4gIG9uQ2xvbmVCb2FyZDogYXN5bmMobmV3TmFtZSkgPT4ge1xuICAgIGNvbnN0IG5iID0gc3RhdGUuYXBwLnJlZnMuYm9hcmQudG9Kc29uKClcbiAgICBuYi5uYW1lPW5ld05hbWVcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYm0uY3JlYXRlKG5iKVxuICAgICAgc3RhdGUuYm9hcmRzLnB1c2gocmVzKVxuICAgICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcblxuICAgICAgcmV0dXJuIGFjdGlvbnMuY3JlYXRlQm9hcmQuY29tcGxldGVkKG5iKVxuXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGFjdGlvbnMuY3JlYXRlQm9hcmQuZmFpbGVkKGUpXG4gICAgfVxuXG5cbiAgfSxcbiAgb25DcmVhdGVCb2FyZDogYXN5bmMgKGJvYXJkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGJtLmNyZWF0ZShib2FyZClcbiAgICAgIHN0YXRlLmJvYXJkcy5wdXNoKHJlcylcbiAgICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG4gICAgICByZXR1cm4gYWN0aW9ucy5jcmVhdGVCb2FyZC5jb21wbGV0ZWQoYm9hcmQpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGFjdGlvbnMuY3JlYXRlQm9hcmQuZmFpbGVkKGUpXG4gICAgfVxuICB9LFxuXG4gIG9uUmVuYW1lQm9hcmQ6IGFzeW5jIChib2FyZE5hbWUsYm9hcmREZXNjKSA9PiB7XG5cbiAgICBjb25zdCBuYiA9IHN0YXRlLmFwcC5yZWZzLmJvYXJkLnRvSnNvbigpXG4gICAgY29uc3Qgb2xkTmFtZT1uYi5uYW1lXG4gICAgbmIubmFtZT1ib2FyZE5hbWVcbiAgICBuYi5kZXNjPWJvYXJkRGVzY1xuXG4gICAgLy9jb25zb2xlLmxvZyhcInJlbmFtZVwiLGJvYXJkRGVzYylcblxuICAgIGFjdGlvbnMudXBkYXRlQm9hcmQoeyBuYW1lOiBvbGROYW1lIH0sIG5iKVxuICAgIHN0YXRlLmJvYXJkc1tfLmZpbmRJbmRleChzdGF0ZS5ib2FyZHMsIHsgbmFtZTogYm9hcmROYW1lLGRlc2M6Ym9hcmREZXNjIH0pXSA9IG5iXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgICByZXR1cm4gYWN0aW9ucy51cGRhdGVCb2FyZC5jb21wbGV0ZWQoKVxuXG4gICAgLy9yZXR1cm4gXCJ0cnVlXCJcbiAgfSxcblxuICBvbkNyZWF0ZUJvYXJkRmFpbGVkOiAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0ZSBmYWlsZWQnKVxuICB9LFxuICBvbkNyZWF0ZUJvYXJkQ29tcGxldGVkOiAoYm9hcmQpID0+IHtcbiAgICBzZWxlY3RBY3Rpb25zLnNldEFjdGl2ZUJvYXJkKGJvYXJkKVxuICB9LFxuICBvbkxpc3RCb2FyZHM6IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBibS5saXN0KClcbiAgICBzdGF0ZS5ib2FyZHMgPSByZXNcbiAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuICAgIHJldHVybiBhY3Rpb25zLmxpc3RCb2FyZHMuY29tcGxldGVkKClcbiAgfSxcbiAgb25GaW5kQm9hcmQ6IChib2FyZCkgPT4ge1xuICAgIHJldHVybiBhY3Rpb25zLmZpbmRCb2FyZC5jb21wbGV0ZWQoXy5maWx0ZXIoc3RhdGUuYm9hcmRzLCBib2FyZCkpXG4gIH0sXG4gIG9uUmVtb3ZlQm9hcmQ6IGFzeW5jIChib2FyZCkgPT4ge1xuICAgIGlmICghXy5maWx0ZXIoc3RhdGUuYm9hcmRzLCBib2FyZCkpXG4gICAgICByZXR1cm4gYWN0aW9ucy5yZW1vdmVCb2FyZC5mYWlsZWQoJ0JvYXJkIG5vdCBmb3VuZCcpXG4gICAgYXdhaXQgYm0ucmVtb3ZlKGJvYXJkKVxuICAgIHN0YXRlLmJvYXJkcyA9IHN0YXRlLmJvYXJkcy5maWx0ZXIoKGIpID0+IHtcbiAgICAgIHJldHVybiBiLm5hbWUgIT09IGJvYXJkLm5hbWVcbiAgICB9KVxuICAgIHNlbGVjdEFjdGlvbnMuc2V0QWN0aXZlQm9hcmQoc3RhdGUuYm9hcmRzWzBdKVxuICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG4gIH0sXG4gIG9uVXBkYXRlQm9hcmQ6IGFzeW5jIChxdWVyeSwgYm9hcmQpID0+IHtcbiAgICBpZiAoIV8uZmlsdGVyKHN0YXRlLmJvYXJkcywgYm9hcmQpKVxuICAgICAgcmV0dXJuIGFjdGlvbnMucmVtb3ZlQm9hcmQuZmFpbGVkKCdCb2FyZCBub3QgZm91bmQnKVxuICAgIGF3YWl0IGJtLnVwZGF0ZShxdWVyeSwgYm9hcmQpXG4gICAgc3RhdGUuYm9hcmRzW18uZmluZEluZGV4KHN0YXRlLmJvYXJkcywgcXVlcnkpXSA9IGJvYXJkXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgICByZXR1cm4gYWN0aW9ucy51cGRhdGVCb2FyZC5jb21wbGV0ZWQoKVxuICB9LFxuICBvbkFkZEJsb2NrOiAoKSA9PiB7XG4gICAgc3RhdGUuYm9hcmQuYmxvY2tzLnB1c2goe1xuICAgICAgYm94ZXM6IFtdLFxuICAgICAgLy8gdXNlIHRpbWVzdGFtcCBhcyBpZCB0byBkaXN0aW5ndWlzaCBibG9ja3MgaW4gdGhlIHNhbWUgYm9hcmRcbiAgICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXG4gICAgICB3OiBfLmdldChzdGF0ZSwgJ2JvYXJkLmJsb2Nrc1swXS53JykgfHwgODAwLFxuICAgICAgaDogXy5nZXQoc3RhdGUsICdib2FyZC5ibG9ja3NbMF0uaCcpIHx8IDYwMCxcbiAgICAgIGltZzogbnVsbCxcbiAgICB9KVxuICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG4gIH0sXG4gIG9uUmVtb3ZlQmxvY2s6ICgpID0+IHtcbiAgICBzdGF0ZS5ib2FyZC5ibG9ja3Muc3BsaWNlKFxuICAgICAgXy5maW5kSW5kZXgoc3RhdGUuYm9hcmQuYmxvY2tzLCB7IGlkOiBzdGF0ZS5ibG9jay5pZCB9KSwgMVxuICAgIClcbiAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuICB9LFxuICBvbk1vdmVCbG9jazogKHN0ZXApID0+IHtcbiAgICBjb25zdCBpZHggPSBfLmZpbmRJbmRleChzdGF0ZS5ib2FyZC5ibG9ja3MsIHsgaWQ6IHN0YXRlLmJsb2NrLmlkIH0pXG4gICAgaWYgKHN0YXRlLmJvYXJkLmJsb2Nrc1tpZHggKyBzdGVwXSkge1xuICAgICAgc3dhcEVsZW1lbnRzKHN0YXRlLmJvYXJkLmJsb2NrcywgaWR4LCBpZHggKyBzdGVwKVxuICAgICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgICB9XG4gIH0sXG4gIG9uUHVibGlzaEJvYXJkOiBhc3luYygpID0+IHtcbiAgICAvL2NvbnN0IGxpbmsgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgYC9hcGkvZGlzcGxheS8ke3N0YXRlLmJvYXJkLl9pZH1gXG4gICAgLy9jb3B5VG9DbGlwYm9hcmQobGluaylcblxuICAgIGNvbnN0IGJvYXJkPV8uZmluZEluZGV4KHN0YXRlLmJvYXJkcywgeyBfaWQ6IHN0YXRlLmJvYXJkLl9pZCB9KVxuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYm0ucHVibGlzaChzdGF0ZS5ib2FyZC5faWQpXG5cbiAgICAgaWYocmVzLnN0YXR1cz09XCJva1wiKXtcbiAgICAgICAgYWxlcnQoJ+WPkeW4g+aIkOWKnycpO1xuICAgICAgICBjb25zdCBsaW5rID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIGAvcHVibGlzaC8ke3N0YXRlLmJvYXJkLl9pZH0uaHRtbGBcbiAgICAgICAgb3BlbldpbmRvdyhsaW5rKVxuICAgICB9ZWxzZXtcbiAgICAgICAgYWxlcnQoJ+WPkeW4g+Wksei0pScpO1xuICAgICB9XG4gICAgIHJldHVyblxuICB9LFxuXG4gIG9uR2V0RGlzcGxheUxpbms6ICgpID0+IHtcbiAgICBjb25zdCBsaW5rID0gd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIGAvYXBpL2Rpc3BsYXkvJHtzdGF0ZS5ib2FyZC5faWR9YFxuICAgIGNvcHlUb0NsaXBib2FyZChsaW5rKVxuICB9LFxuICBvbk9wZW5EaXNwbGF5TGluazogKCkgPT4ge1xuICAgIGNvbnN0IGxpbmsgPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgYC9hcGkvZGlzcGxheS8ke3N0YXRlLmJvYXJkLl9pZH1gXG4gICAgb3BlbldpbmRvdyhsaW5rKVxuICB9LFxufSlcblxuc3RvcmUuZ2V0U3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiBfLmNsb25lKHN0YXRlKVxufVxuXG5zdG9yZS5maW5kQm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgcmV0dXJuIF8uZmluZChzdGF0ZS5ib2FyZHMsIGJvYXJkKVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuIiwiaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgVmVjdG9yIGZyb20gJ3ZpY3RvcidcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9ib3gnXG5cbmltcG9ydCBzZWxlY3RTdG9yZSBmcm9tICcuLi9zdG9yZXMvc2VsZWN0J1xuXG5jb25zdCBBQ1RJT05TID0ge1xuICBOT05FOiAwLFxuICBST1RBVEU6IDEsXG4gIERSQUc6IDIsXG4gIFJFU0laRTogMyxcbn1cblxuY29uc3QgUk9UQVRFX1NURVAgPSAxNSxcbiAgICAgIEdSSURfU0laRSA9IDEwXG5cbmxldCBzdGF0ZSA9IHtcbiAgYm94OiBudWxsLFxuICBkcmFnU3RhcnQ6IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gIH0sXG4gIGNlbnRlcjoge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgfSxcbiAgcm90YXRlU3RhcnQ6IHtcbiAgICB4OiAwLFxuICAgIHk6IDAsXG4gIH0sXG4gIHJlc2l6ZVN0YXJ0OiB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICB9LFxuICBySW5pdDogMCxcbiAgYWN0aW9uOiBBQ1RJT05TLk5PTkUsXG4gIG1vZGU6ICdlZGl0JyxcbiAgYm9hcmRzOiBbXSxcbn1cblxuXG5zZWxlY3RTdG9yZS5saXN0ZW4oKG5ld1N0YXRlKSA9PiB7XG4gIHN0YXRlID0gXy5hc3NpZ24oc3RhdGUsIG5ld1N0YXRlKVxufSlcblxuLy8gZ2V0IHRoZSBhbmdsZSBiZXR3ZWVuIHZlY3Rvcihyb3RhdGVTdGFydC54IC0gY2VudGVyLngsXG4vLyByb3RhdGVTdGFydC55IC0gY2VudGVyLnkpXG4vLyBhbmQgdmVjdG9yKHggLSBjZW50ZXIueCwgeSAtIGNlbnRlci55KSBpbiBkZWdyZWVcbmZ1bmN0aW9uIGdldFJvdGF0ZUFuZ2xlKHgsIHkpIHtcbiAgY29uc3QgeyByb3RhdGVTdGFydCwgY2VudGVyIH0gPSBzdGF0ZVxuICBjb25zdCB2U3RhcnQgPSBuZXcgVmVjdG9yKHJvdGF0ZVN0YXJ0LnggLSBjZW50ZXIueCwgcm90YXRlU3RhcnQueSAtIGNlbnRlci55KVxuICBjb25zdCB2RW5kID0gbmV3IFZlY3Rvcih4IC0gY2VudGVyLngsIHkgLSBjZW50ZXIueSlcbiAgcmV0dXJuIHZFbmQuYW5nbGVEZWcoKSAtIHZTdGFydC5hbmdsZURlZygpXG59XG5cbi8vIGVuc3VyZXMgYm94IGJlaW5nIGRyYWdnZWQgc3RheXMgaW4gYmxvY2tcbmZ1bmN0aW9uIGNvbnN0cmFpbkRyYWcoeCwgeSkge1xuICB4ID0geCArIHN0YXRlLmJveC53IDw9IHN0YXRlLmJsb2NrLncgPyB4IDogc3RhdGUuYmxvY2sudyAtIHN0YXRlLmJveC53XG4gIHggPSB4IDwgMCA/IDAgOiB4XG4gIHkgPSB5ICsgc3RhdGUuYm94LmggPD0gc3RhdGUuYmxvY2suaCA/IHkgOiBzdGF0ZS5ibG9jay5oIC0gc3RhdGUuYm94LmhcbiAgeSA9IHkgPCAwID8gMCA6IHlcbiAgcmV0dXJuIHsgeCwgeSB9XG59XG5cbmNvbnN0IHN0b3JlID0gUmVmbHV4LmNyZWF0ZVN0b3JlKHtcbiAgbGlzdGVuYWJsZXM6IGFjdGlvbnMsXG4gIG9uSW5pdDogKGFwcCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdpbml0IHN0YXJ0ZWQnKVxuICAgIGlmIChzdGF0ZS5yZWFkeSkgcmV0dXJuIG51bGxcblxuICAgIHN0YXRlLmFwcCA9IGFwcFxuXG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHN3aXRjaCAoc3RhdGUuYWN0aW9uKSB7XG4gICAgICBjYXNlIEFDVElPTlMuRFJBRzpcbiAgICAgICAgbGV0IHsgeCwgeSB9ID0gY29uc3RyYWluRHJhZyhcbiAgICAgICAgICBlLmNsaWVudFggLSBzdGF0ZS5kcmFnU3RhcnQueFxuICAgICAgICAsIGUuY2xpZW50WSAtIHN0YXRlLmRyYWdTdGFydC55XG4gICAgICAgIClcblxuICAgICAgICBpZiAoZS5hbHRLZXkpIHtcbiAgICAgICAgICB4IC09IHggJSBHUklEX1NJWkVcbiAgICAgICAgICB5IC09IHkgJSBHUklEX1NJWkVcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLmJveC5tb3ZlVG8oeCwgeSlcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBBQ1RJT05TLlJPVEFURTpcbiAgICAgICAgbGV0IGFuZ2xlID0gc3RhdGUuckluaXQgKyBnZXRSb3RhdGVBbmdsZShlLmNsaWVudFgsIGUuY2xpZW50WSlcbiAgICAgICAgaWYgKGUuYWx0S2V5KVxuICAgICAgICAgIGFuZ2xlIC09IGFuZ2xlICUgUk9UQVRFX1NURVBcbiAgICAgICAgc3RhdGUuYm94LnJvdGF0ZShhbmdsZSlcbiAgICAgICAgYnJlYWtcblxuICAgICAgY2FzZSBBQ1RJT05TLlJFU0laRTpcbiAgICAgICAgbGV0IGggPSBzdGF0ZS5yZXNpemVTdGFydC5oICsgZS5jbGllbnRZIC0gc3RhdGUucmVzaXplU3RhcnQueSxcbiAgICAgICAgICAgIHcgPSBzdGF0ZS5yZXNpemVTdGFydC53ICsgZS5jbGllbnRYIC0gc3RhdGUucmVzaXplU3RhcnQueFxuXG4gICAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgIGggLT0gaCAlIEdSSURfU0laRVxuICAgICAgICAgIHcgLT0gdyAlIEdSSURfU0laRVxuICAgICAgICB9XG4gICAgICAgIHN0YXRlLmJveC5yZXNpemUoaCwgdylcbiAgICAgICAgYnJlYWtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub25tb3VzZXVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3RhdGUuYWN0aW9uID0gQUNUSU9OUy5OT05FXG4gICAgfVxuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vbmRibGNsaWNrID0gZnVuY3Rpb24gb3BlbkJveENvbmZpZygpIHtcbiAgICAgIGlmIChzdGF0ZS5ib3gpIHN0YXRlLmJveC5vcGVuQ29uZmlnKClcbiAgICB9XG5cbiAgICBzdGF0ZS5yZWFkeSA9IHRydWVcbiAgfSxcbiAgLy8gVE9ETzogbDIgcHJldmVudCB0b28gbWFueSByZW5kZXJzXG4gIG9uU3RhcnRSb3RhdGU6IChjZW50ZXIsIHgsIHksIHRoZXRhKSA9PiB7XG4gICAgc3RhdGUuYWN0aW9uID0gQUNUSU9OUy5ST1RBVEVcbiAgICBzdGF0ZS5jZW50ZXIgPSBjZW50ZXJcbiAgICBzdGF0ZS5yb3RhdGVTdGFydCA9IHsgeCwgeSB9XG4gICAgc3RhdGUuckluaXQgPSB0aGV0YVxuICB9LFxuICBvblN0YXJ0RHJhZzogKHgsIHkpID0+IHtcbiAgICBzdGF0ZS5hY3Rpb24gPSBBQ1RJT05TLkRSQUdcbiAgICBzdGF0ZS5kcmFnU3RhcnQgPSB7IHgsIHkgfVxuICB9LFxuICBvblN0YXJ0UmVzaXplOiAoaCwgdywgeCwgeSkgPT4ge1xuICAgIHN0YXRlLmFjdGlvbiA9IEFDVElPTlMuUkVTSVpFXG4gICAgc3RhdGUucmVzaXplU3RhcnQgPSB7IHgsIHksIGgsIHcgfVxuICB9LFxuICBvblN0b3BEcmFnOiAoKSA9PiB7XG4gICAgc3RhdGUuYWN0aW9uID0gQUNUSU9OUy5OT05FXG4gIH0sXG4gIG9uU3RvcEFsbDogKCkgPT4ge1xuICAgIHN0YXRlLmFjdGlvbiA9IEFDVElPTlMuTk9ORVxuICB9LFxuICBvbkFkZFpJbmRleDogKGFtb3VudCkgPT4ge1xuICAgIGlmIChzdGF0ZS5ib3gpXG4gICAgICBzdGF0ZS5ib3guYWRkWkluZGV4KGFtb3VudClcbiAgfSxcbiAgb25PcGVuQ29uZmlnKCkge1xuICAgIGNvbnNvbGUubG9nKCdvcGVubmluZyBjb25maWcnLCBzdGF0ZS5ib3gpXG4gICAgaWYgKHN0YXRlLmJveClcbiAgICAgIHN0YXRlLmJveC5vcGVuQ29uZmlnKClcbiAgfSxcblxufSlcblxuc3RvcmUuZ2V0U3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiBfLmNsb25lKHN0YXRlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxuIiwiaW1wb3J0IFJlZmx1eCBmcm9tICdyZWZsdXgnXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnXG5cblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jbG91ZHVpJ1xuaW1wb3J0IEJvYXJkTWFuYWdlciBmcm9tICcuLi8uLi9saWIvY2xpZW50J1xuXG5cbmNvbnN0IGJtID0gbmV3IEJvYXJkTWFuYWdlcigpXG5cbmxldCBzdGF0ZSA9IHtcbiAgdXNlcnM6W11cbn1cblxuXG5jb25zdCBzdG9yZSA9IFJlZmx1eC5jcmVhdGVTdG9yZSh7XG4gIGxpc3RlbmFibGVzOiBhY3Rpb25zLFxuIFxuXG4gIG9uQWRkVXNlcjogYXN5bmModXNlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiLS0+YWRkVXNlclwiLHVzZXIpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBibS5jcmVhdGVVc2VyKHVzZXIpLnRoZW4oKG5ld1VzZXIpPT57XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1VzZXIucmVzdWx0WzBdLnVpZClcbiAgICAgICAgdXNlci51aWQ9bmV3VXNlci5yZXN1bHRbMF0udWlkO1xuICAgICAgICBzdGF0ZS51c2Vycy5wdXNoKHVzZXIpXG4gICAgICAgIHN0YXRlLmlkeD1udWxsO1xuICAgICAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuICAgICAgfSlcbiAgICAgIFxuICAgICAgXG4gICAgICByZXR1cm4gXCJva1wiXG5cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICBcblxuICB9LFxuXG4gb25SZW1vdmVVc2VyOiBhc3luYyAodXNlcikgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiLS0+cmVtb3ZlVXNlclwiLHVzZXIpO1xuICAgXG4gICAgYm0ucmVtb3ZlVXNlcih1c2VyKS50aGVuKCgpPT57XG5cbiAgICAgbGV0IGlkeD0wO1xuICAgICBmb3IodmFyIGk9MDtpPHN0YXRlLnVzZXJzLmxlbmd0aDtpKyspe1xuICAgICAgaWYoc3RhdGUudXNlcnNbaV0uZW1haWw9PXVzZXIuZW1haWwpe1xuICAgICAgICBpZHg9aTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgIH1cblxuICAgICBzdGF0ZS51c2Vycy5zcGxpY2UoaWR4LDEpXG4gICAgIHN0YXRlLmlkeD1udWxsO1xuICAgICBzdGF0ZS5jb25mcmltPWZhbHNlO1xuICAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuXG4gICAgfSlcblxuICAgIHJldHVybiBcIlwiO1xuICB9LFxuXG4gIG9uUmVtb3ZlVXNlckNvbmZyaW06IGFzeW5jIChpZHgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIi0tPnJlbW92ZVVzZXJDb25mcmltXCIsaWR4KTtcbiAgICBzdGF0ZS5zaG93Q29uZmlnPWZhbHNlXG4gICAgc3RhdGUuY29uZnJpbT10cnVlXG4gICAgc3RhdGUuY29uZnJpbU1zZz1cIuWIoOmZpOeUqOaIt1wiXG4gICAgc3RhdGUuaWR4PWlkeFxuICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfSxcblxuICBvblVwZGF0ZVVzZXI6IGFzeW5jIChvcCx1c2VyKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCItLT51cGRhdGVVc2VyXCIsdXNlcik7XG4gICAgXG4gICAgIC8vIGlmKG9wPT1cImNoYW5nZVBhc3N3b3JkXCIpe1xuICAgICAvLyAgY29uc29sZS5sb2codXNlcik7XG4gICAgIC8vIH1lbHNlIGlmKG9wPT1cImZvcnplblwiKXtcbiAgICAgLy8gIGNvbnNvbGUubG9nKHVzZXIpXG4gICAgIC8vIH1cblxuICAgICBibS51cGRhdGVVc2VyKHVzZXIpLnRoZW4oKHJlc3VsdCk9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICBzdGF0ZS5zaG93Q29uZmlnPWZhbHNlO1xuICAgICAgc3RhdGUuaWR4PW51bGw7XG4gICAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKTtcbiAgICAgfSk7XG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfSxcblxuICBvbkNoYW5nZVBhc3N3b3JkOmFzeW5jKGlkeCk9PntcblxuICAgIHN0YXRlLnNob3dDb25maWc9dHJ1ZTtcbiAgICBzdGF0ZS5pZHg9aWR4O1xuICAgIHN0YXRlLmNvbmZpZ1RpdGxlPVwi5L+u5pS555So5oi35a+G56CBXCJcbiAgICBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuXG4gIH0sXG5cbiAgIG9uTGlzdFVzZXI6IGFzeW5jICh1c2VyKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCItLT5saXN0VXNlclwiLHVzZXIpO1xuICAgIC8vIGNvbnN0IG5iID0gc3RhdGUuYXBwLnJlZnMuYm9hcmQudG9Kc29uKClcbiAgICAvLyBjb25zdCBvbGROYW1lPW5iLm5hbWVcbiAgICAvLyBuYi5uYW1lPWJvYXJkTmFtZVxuXG4gICAgXG4gICAgLy8gYWN0aW9ucy51cGRhdGVCb2FyZCh7IG5hbWU6IG9sZE5hbWUgfSwgbmIpXG4gICAgLy8gc3RhdGUuYm9hcmRzW18uZmluZEluZGV4KHN0YXRlLmJvYXJkcywgeyBuYW1lOiBib2FyZE5hbWUgfSldID0gbmJcbiAgICAvLyBzdG9yZS50cmlnZ2VyKHN0YXRlKVxuICAgIC8vIHJldHVybiBhY3Rpb25zLnVwZGF0ZUJvYXJkLmNvbXBsZXRlZCgpXG4gICAgYm0ubGlzdFVzZXIoKS50aGVuKCh1c2Vycyk9PntcbiAgICAgIF8uZm9yRWFjaCh1c2VycywodXNlcik9PntcbiAgICAgICAgLy9jb25zb2xlLmxvZyh1c2VyKTtcbiAgICAgICAgaWYoc3RhdGUudXNlcnMuaW5kZXhPZih1c2VyKT09LTEpe1xuICAgICAgICAgIHN0YXRlLnVzZXJzLnB1c2godXNlcik7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhzdGF0ZSlcbiAgICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpO1xuICAgIH0pO1xuICAgIFxuICAgIHJldHVybiBcImFhXCI7XG4gIH1cblxufSlcblxuc3RvcmUuZ2V0U3RhdGUgPSAoKSA9PiB7XG4gIHJldHVybiBfLmNsb25lKHN0YXRlKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlXG4iLCJpbXBvcnQgUmVmbHV4IGZyb20gJ3JlZmx1eCdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9zZWxlY3QnXG5cbmltcG9ydCB1aVN0b3JlIGZyb20gJy4vdWknXG5cbmNvbnN0IHN0YXRlID0ge1xuICBib3g6IG51bGwsXG4gIGJsb2NrOiBudWxsLFxuICBib2FyZDogbnVsbCxcbn1cblxudWlTdG9yZS5saXN0ZW4oKG5ld1N0YXRlKSA9PiB7XG4gIF8uYXNzaWduKHN0YXRlLCBuZXdTdGF0ZSlcbn0pXG5cbmNvbnN0IHN0b3JlID0gUmVmbHV4LmNyZWF0ZVN0b3JlKHtcbiAgbGlzdGVuYWJsZXM6IGFjdGlvbnMsXG4gIG9uU2V0QWN0aXZlQmxvY2s6IChibG9jaykgPT4ge1xuICAgIGlmIChzdGF0ZS5tb2RlID09PSAncHVibGlzaCcpIHJldHVybiBudWxsXG4gICAgaWYgKHN0YXRlLmJsb2NrID09PSBibG9jaykgcmV0dXJuIG51bGxcbiAgICBhY3Rpb25zLnNldEFjdGl2ZUJveChudWxsKVxuICAgIGlmIChzdGF0ZS5ibG9jaykgc3RhdGUuYmxvY2suZGVhY3RpdmF0ZSgpXG4gICAgc3RhdGUuYmxvY2sgPSBibG9ja1xuICAgIGlmIChibG9jaykgYmxvY2suYWN0aXZhdGUoKVxuICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG4gIH0sXG4gIG9uU2V0QWN0aXZlQm94OiAoYm94KSA9PiB7XG4gICAgaWYgKHN0YXRlLm1vZGUgPT09ICdwdWJsaXNoJykgcmV0dXJuIG51bGxcbiAgICBpZiAoc3RhdGUuYm94ID09PSBib3gpIHJldHVybiBudWxsXG4gICAgaWYgKHN0YXRlLmJveClcbiAgICAgIHN0YXRlLmJveC5kZWFjdGl2YXRlKClcbiAgICBzdGF0ZS5ib3ggPSBib3hcbiAgICBpZiAoYm94KSBib3guYWN0aXZhdGUoKVxuICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG4gIH0sXG4gIG9uU2V0QWN0aXZlQm9hcmQ6IChib2FyZCkgPT4ge1xuICAgIGlmIChzdGF0ZS5tb2RlID09PSAncHVibGlzaCcpIHJldHVybiBudWxsXG4gICAgaWYgKF8uZ2V0KHN0YXRlLCAnYm9hcmQubmFtZScpID09PSBib2FyZC5uYW1lKSByZXR1cm4gbnVsbFxuICAgIGlmIChzdGF0ZS5ib3gpIHN0YXRlLmJveC5kZWFjdGl2YXRlKClcbiAgICBzdGF0ZS5ib3ggPSBudWxsXG4gICAgc3RhdGUuYmxvY2sgPSBudWxsXG4gICAgc3RhdGUuYm9hcmQgPSBib2FyZFxuICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG4gIH0sXG4gIG9uU2V0QXBwOiAoYXBwKSA9PiB7XG4gICAgc3RhdGUuYXBwID0gYXBwXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbn0pXG5cbnN0b3JlLmdldFN0YXRlID0gKCkgPT4ge1xuICByZXR1cm4gXy5jbG9uZShzdGF0ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiIsImltcG9ydCBSZWZsdXggZnJvbSAncmVmbHV4J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuXG5pbXBvcnQgdWlBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdWknXG5pbXBvcnQgc2VsZWN0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL3NlbGVjdCdcblxuY29uc3Qgc3RhdGUgPSB7XG4gIHNob3dCbG9ja0NvbmZpZzogZmFsc2UsXG4gIHNob3dCb2FyZENvbmZpZzogZmFsc2UsXG4gIG1vZGU6ICdlZGl0JyxcbiAgdGhlbWU6ICdkZWZhdWx0Jyxcbn1cblxuY29uc3Qgc3RvcmUgPSBSZWZsdXguY3JlYXRlU3RvcmUoe1xuICBsaXN0ZW5hYmxlczogdWlBY3Rpb25zLFxuICBvbk9wZW5CbG9ja0NvbmZpZygpIHtcbiAgICBzdGF0ZS5zaG93QmxvY2tDb25maWcgPSB0cnVlXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbiAgb25DbG9zZUJsb2NrQ29uZmlnKCkge1xuICAgIHN0YXRlLnNob3dCbG9ja0NvbmZpZyA9IGZhbHNlXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbiAgb25PcGVuQm9hcmRDb25maWc6IChuYW1lLGFjdGlvbikgPT4ge1xuICAgIHN0YXRlLnNob3dCb2FyZENvbmZpZyA9IHRydWVcbiAgICBpZihuYW1lKXtcbiAgICAgIHN0YXRlLmJvYXJkTmFtZT1uYW1lXG4gICAgfVxuICAgIFxuICAgIHN0YXRlLmJvYXJkQWN0aW9uPWFjdGlvblxuICAgIHN0b3JlLnRyaWdnZXIoc3RhdGUpXG4gIH0sXG4gIG9uQ2xvc2VCb2FyZENvbmZpZzogKCkgPT4ge1xuICAgIHN0YXRlLnNob3dCb2FyZENvbmZpZyA9IGZhbHNlXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbiAgb25TZXRNb2RlOiAobW9kZSkgPT4ge1xuICAgIGlmIChzdGF0ZS5tb2RlID09PSBtb2RlKSByZXR1cm4gbnVsbFxuICAgIHN0YXRlLm1vZGUgPSBtb2RlXG4gICAgc2VsZWN0QWN0aW9ucy5zZXRBY3RpdmVCb3gobnVsbClcbiAgICBzZWxlY3RBY3Rpb25zLnNldEFjdGl2ZUJsb2NrKG51bGwpXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbiAgb25TZXRUaGVtZTogKHRoZW1lKSA9PiB7XG4gICAgaWYgKHN0YXRlLnRoZW1lID09PSB0aGVtZSkgcmV0dXJuIG51bGxcbiAgICBzdGF0ZS50aGVtZSA9IHRoZW1lXG4gICAgc3RvcmUudHJpZ2dlcihzdGF0ZSlcbiAgfSxcbn0pXG5cbnN0b3JlLmdldFN0YXRlID0gKCkgPT4ge1xuICByZXR1cm4gXy5jbG9uZShzdGF0ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RvcmVcbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJvYXJkTWFuYWdlckNsaWVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdHMpIHtcbiAgICBvcHRzID0gb3B0cyB8fCB7fVxuICAgIHRoaXMuaG9zdCA9IG9wdHMuaG9zdCB8fCAnJ1xuICAgIHRoaXMucGF0aCA9IG9wdHMucGF0aCB8fCAnYXBpJ1xuICB9XG5cbiAgX3VybChlbmRwb2ludCkge1xuICAgIGNvbnNvbGUubG9nKGAke3RoaXMuaG9zdH0vJHt0aGlzLnBhdGh9LyR7ZW5kcG9pbnR9YClcbiAgICByZXR1cm4gYCR7dGhpcy5ob3N0fS8ke3RoaXMucGF0aH0vJHtlbmRwb2ludH1gXG4gIH1cblxuICBfanNvblJlcShtZXRob2QsIGRhdGEsIGVuZHBvaW50KSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIG1ldGhvZCxcbiAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04JyxcbiAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICB1cmw6IHRoaXMuX3VybChlbmRwb2ludCksXG4gICAgfVxuICAgIGlmIChtZXRob2QgPT09ICdHRVQnKVxuICAgICAgb3B0cy5kYXRhID0gZGF0YVxuICAgIGVsc2Uge1xuICAgICAgb3B0cy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgIG9wdHMuY29udGVudFR5cGUgPSAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcbiAgICAgIG9wdHMuZGF0YVR5cGUgPSAnanNvbidcbiAgICB9XG4gICAgcmV0dXJuICQuYWpheChvcHRzKVxuICB9XG5cbiAgbGlzdFVzZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25SZXEoJ0dFVCcsIHt9LCAndjEvdXNlcicpXG4gIH1cblxuICBjcmVhdGVVc2VyKHVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblJlcSgnUE9TVCcsICB1c2VyICwgJ3YxL3VzZXInKVxuICB9XG5cbiAgcmVtb3ZlVXNlcih1c2VyKXtcbiAgICAgcmV0dXJuIHRoaXMuX2pzb25SZXEoJ0RFTEVURScsICB1c2VyICwgJ3YxL3VzZXIvJyt1c2VyLnVpZClcbiAgfVxuXG4gIHVwZGF0ZVVzZXIodXNlcil7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25SZXEoJ1BVVCcsICB1c2VyICwgJ3YxL3VzZXIvJyt1c2VyLnVpZClcbiAgfVxuXG4gIHB1Ymxpc2goYm9hcmRfaWQpIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblJlcSgnUE9TVCcsIHsgfSwgJy9ib2FyZC9wdWJsaXNoLycrYm9hcmRfaWQpXG4gIH1cblxuICBjcmVhdGUoYm9hcmQpIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblJlcSgnUFVUJywgeyBib2FyZCB9LCAnYm9hcmQnKVxuICB9XG5cbiAgcmVtb3ZlKGJvYXJkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2pzb25SZXEoJ0RFTEVURScsIHsgYm9hcmQgfSwgJ2JvYXJkJylcbiAgfVxuXG4gIHVwZGF0ZShxdWVyeSwgYm9hcmQpIHtcbiAgICByZXR1cm4gdGhpcy5fanNvblJlcSgnUEFUQ0gnLCB7IHF1ZXJ5LCBib2FyZCB9LCAnYm9hcmQnKVxuICB9XG5cbiAgZmluZChib2FyZCkge1xuICAgIHJldHVybiB0aGlzLl9qc29uUmVxKCdHRVQnLCB7IGJvYXJkIH0sICdib2FyZCcpXG4gIH1cblxuICBsaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9qc29uUmVxKCdHRVQnLCB7fSwgJ2JvYXJkcycpXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1widGV4dFwiOlwiX25vZGVfbW9kdWxlc19vcmllbnRib2FyZF9jb21wb25lbnRfZXhhbXBsZV9jc3NfY29tcG9uZW50X190ZXh0XCJ9IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX2NsYXNzO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfYXV0b2JpbmREZWNvcmF0b3IgPSByZXF1aXJlKCdhdXRvYmluZC1kZWNvcmF0b3InKTtcblxudmFyIF9hdXRvYmluZERlY29yYXRvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9hdXRvYmluZERlY29yYXRvcik7XG5cbnZhciBfY29tcG9uZW50ID0gcmVxdWlyZSgnLi4vY3NzL2NvbXBvbmVudC5jc3MnKTtcblxudmFyIF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29tcG9uZW50KTtcblxudmFyIF9yZWFjdEJvb3RzdHJhcCA9IHJlcXVpcmUoJ3JlYWN0LWJvb3RzdHJhcCcpO1xuXG52YXIgX25ld0NvbXBvbmVudE1vZGFsID0gcmVxdWlyZSgnLi9uZXctY29tcG9uZW50LW1vZGFsJyk7XG5cbnZhciBfbmV3Q29tcG9uZW50TW9kYWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbmV3Q29tcG9uZW50TW9kYWwpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBFeGFtcGxlID0gKDAsIF9hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdCkoX2NsYXNzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKEV4YW1wbGUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEV4YW1wbGUocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRXhhbXBsZSk7XG5cbiAgICAvLyBwcm9wczpcbiAgICAvLyAtIGRhdGE6IG9iamVjdCwgeW91ciBkYXRhXG4gICAgLy8gLSBlZGl0OiBib29sZWFuLCB3aGV0aGVyIHlvdXIgY29tcG9uZW50IHNob3VsZCBiZSBlZGl0YWJsZVxuICAgIC8vIC0gdGhlbWU6IHN0cmluZywgdGhlIGdsb2JhbCB0aGVtZVxuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgT2JqZWN0LmdldFByb3RvdHlwZU9mKEV4YW1wbGUpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0NvbmZpZzogZmFsc2UsXG4gICAgICBjb250ZW50OiBfdGhpcy5wcm9wcy5kYXRhLmNvbnRlbnRcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFeGFtcGxlLCBbe1xuICAgIGtleTogJ3RvSnNvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSnNvbigpIHtcbiAgICAgIC8vIHJldHVybiB0aGUgZGF0YSB5b3Ugd2FudCB0byBzYXZlIGFzIGFuIG9iamVjdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29udGVudDogdGhpcy5zdGF0ZS5jb250ZW50XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29wZW5Db25maWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvcGVuQ29uZmlnKCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maWc6IHRydWUgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2xvc2VDb25maWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbG9zZUNvbmZpZygpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93Q29uZmlnOiBmYWxzZSB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfYXBwbHlDb25maWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfYXBwbHlDb25maWcoKSB7XG4gICAgICAvLyBhcHBseSBjaGFuZ2VzIGhlcmVcbiAgICAgIHRoaXMuY2xvc2VDb25maWcoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIF9fc2VsZjogdGhpc1xuICAgICAgICB9KSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLk1vZGFsLFxuICAgICAgICAgIHsgc2hvdzogdGhpcy5zdGF0ZS5zaG93Q29uZmlnLCBvbkhpZGU6IHRoaXMuY2xvc2VDb25maWcsIF9fc2VsZjogdGhpc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfcmVhY3RCb290c3RyYXAuTW9kYWwuSGVhZGVyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NlbGY6IHRoaXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLk1vZGFsLlRpdGxlLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zZWxmOiB0aGlzXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdDb25maWcnXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIF9yZWFjdEJvb3RzdHJhcC5Nb2RhbC5Cb2R5LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NlbGY6IHRoaXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnQ29uZmlnIGdvZXMgaGVyZSdcbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLk1vZGFsLkZvb3RlcixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zZWxmOiB0aGlzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIF9yZWFjdEJvb3RzdHJhcC5CdXR0b24sXG4gICAgICAgICAgICAgIHsgb25DbGljazogdGhpcy5jbG9zZUNvbmZpZywgX19zZWxmOiB0aGlzXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdDYW5jZWwnXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIF9yZWFjdEJvb3RzdHJhcC5CdXR0b24sXG4gICAgICAgICAgICAgIHsgb25DbGljazogdGhpcy5fYXBwbHlDb25maWcsIF9fc2VsZjogdGhpc1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAnQ29uZmlybSdcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdoMScsXG4gICAgICAgICAgeyBjbGFzc05hbWU6IF9jb21wb25lbnQyLmRlZmF1bHQudGV4dCwgX19zZWxmOiB0aGlzXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzLnN0YXRlLmNvbnRlbnRcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXhhbXBsZTtcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCkpIHx8IF9jbGFzcztcblxuRXhhbXBsZS5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub2JqZWN0LFxuICB0aGVtZTogX3JlYWN0Mi5kZWZhdWx0LlByb3BUeXBlcy5zdHJpbmdcbn07XG5cbkV4YW1wbGUuTmV3Q29tcG9uZW50Q29uZmlnID0gX25ld0NvbXBvbmVudE1vZGFsMi5kZWZhdWx0O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBFeGFtcGxlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9jbGFzcztcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX2F1dG9iaW5kRGVjb3JhdG9yID0gcmVxdWlyZSgnYXV0b2JpbmQtZGVjb3JhdG9yJyk7XG5cbnZhciBfYXV0b2JpbmREZWNvcmF0b3IyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXV0b2JpbmREZWNvcmF0b3IpO1xuXG52YXIgX3JlYWN0Qm9vdHN0cmFwID0gcmVxdWlyZSgncmVhY3QtYm9vdHN0cmFwJyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIE5ld0NvbXBvbmVudE1vZGFsID0gKDAsIF9hdXRvYmluZERlY29yYXRvcjIuZGVmYXVsdCkoX2NsYXNzID0gZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzKE5ld0NvbXBvbmVudE1vZGFsLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBOZXdDb21wb25lbnRNb2RhbChwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBOZXdDb21wb25lbnRNb2RhbCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTmV3Q29tcG9uZW50TW9kYWwpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgc2hvdzogZmFsc2VcbiAgICB9O1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhOZXdDb21wb25lbnRNb2RhbCwgW3tcbiAgICBrZXk6ICdvcGVuJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb3BlbigpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93OiB0cnVlIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvc2UoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgc2hvdzogZmFsc2UgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2NyZWF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9jcmVhdGUoKSB7XG4gICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgdzogcGFyc2VJbnQodGhpcy5yZWZzLncuZ2V0VmFsdWUoKSwgMTApLFxuICAgICAgICBoOiBwYXJzZUludCh0aGlzLnJlZnMuaC5nZXRWYWx1ZSgpLCAxMCksXG4gICAgICAgIHJvdGF0ZTogMCxcbiAgICAgICAgLy8gdGhlIHNob3J0IG5hbWUgb2YgeW91ciBjb21wb25lbnQgaGVyZVxuICAgICAgICB0eXBlOiAnZXhhbXBsZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjb250ZW50OiB0aGlzLnJlZnMuY29udGVudC5nZXRWYWx1ZSgpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLnByb3BzLmFjdGlvbnMubmV3Q29tcG9uZW50KGluZm8pO1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLk1vZGFsLFxuICAgICAgICB7IHNob3c6IHRoaXMuc3RhdGUuc2hvdywgb25IaWRlOiB0aGlzLmNsb3NlLCBfX3NlbGY6IHRoaXNcbiAgICAgICAgfSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLk1vZGFsLkhlYWRlcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NlbGY6IHRoaXNcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLk1vZGFsLlRpdGxlLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NlbGY6IHRoaXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnTmV3IENvbXBvbmVudCdcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIF9yZWFjdEJvb3RzdHJhcC5Nb2RhbC5Cb2R5LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc2VsZjogdGhpc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnZm9ybScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc2VsZjogdGhpc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdEJvb3RzdHJhcC5JbnB1dCwgeyB0eXBlOiAndGV4dCcsIGxhYmVsOiAndycsIHJlZjogJ3cnLCBfX3NlbGY6IHRoaXNcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0Qm9vdHN0cmFwLklucHV0LCB7IHR5cGU6ICd0ZXh0JywgbGFiZWw6ICdoJywgcmVmOiAnaCcsIF9fc2VsZjogdGhpc1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RCb290c3RyYXAuSW5wdXQsIHsgdHlwZTogJ3RleHQnLCBsYWJlbDogJ2NvbnRlbnQnLCByZWY6ICdjb250ZW50JywgX19zZWxmOiB0aGlzXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLk1vZGFsLkZvb3RlcixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NlbGY6IHRoaXNcbiAgICAgICAgICB9LFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLkJ1dHRvbixcbiAgICAgICAgICAgIHsgb25DbGljazogdGhpcy5jbG9zZSwgX19zZWxmOiB0aGlzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ0NhbmNlbCdcbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgX3JlYWN0Qm9vdHN0cmFwLkJ1dHRvbixcbiAgICAgICAgICAgIHsgb25DbGljazogdGhpcy5fY3JlYXRlLCBfX3NlbGY6IHRoaXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnQ29uZmlybSdcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIE5ld0NvbXBvbmVudE1vZGFsO1xufShfcmVhY3QyLmRlZmF1bHQuQ29tcG9uZW50KSkgfHwgX2NsYXNzO1xuXG5OZXdDb21wb25lbnRNb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGFjdGlvbnM6IF9yZWFjdDIuZGVmYXVsdC5Qcm9wVHlwZXMub2JqZWN0XG59O1xuXG5OZXdDb21wb25lbnRNb2RhbC5kZWZhdWx0UHJvcHMgPSB7fTtcblxuZXhwb3J0cy5kZWZhdWx0ID0gTmV3Q29tcG9uZW50TW9kYWw7IiwiXG52YXIgcm5nO1xuXG5pZiAoZ2xvYmFsLmNyeXB0byAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gIC8vIFdIQVRXRyBjcnlwdG8tYmFzZWQgUk5HIC0gaHR0cDovL3dpa2kud2hhdHdnLm9yZy93aWtpL0NyeXB0b1xuICAvLyBNb2RlcmF0ZWx5IGZhc3QsIGhpZ2ggcXVhbGl0eVxuICB2YXIgX3JuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICBybmcgPSBmdW5jdGlvbiB3aGF0d2dSTkcoKSB7XG4gICAgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhfcm5kczgpO1xuICAgIHJldHVybiBfcm5kczg7XG4gIH07XG59XG5cbmlmICghcm5nKSB7XG4gIC8vIE1hdGgucmFuZG9tKCktYmFzZWQgKFJORylcbiAgLy9cbiAgLy8gSWYgYWxsIGVsc2UgZmFpbHMsIHVzZSBNYXRoLnJhbmRvbSgpLiAgSXQncyBmYXN0LCBidXQgaXMgb2YgdW5zcGVjaWZpZWRcbiAgLy8gcXVhbGl0eS5cbiAgdmFyICBfcm5kcyA9IG5ldyBBcnJheSgxNik7XG4gIHJuZyA9IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGkgPSAwLCByOyBpIDwgMTY7IGkrKykge1xuICAgICAgaWYgKChpICYgMHgwMykgPT09IDApIHIgPSBNYXRoLnJhbmRvbSgpICogMHgxMDAwMDAwMDA7XG4gICAgICBfcm5kc1tpXSA9IHIgPj4+ICgoaSAmIDB4MDMpIDw8IDMpICYgMHhmZjtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JuZHM7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcm5nO1xuXG4iLCIvLyAgICAgdXVpZC5qc1xuLy9cbi8vICAgICBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxMiBSb2JlcnQgS2llZmZlclxuLy8gICAgIE1JVCBMaWNlbnNlIC0gaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXG4vLyBVbmlxdWUgSUQgY3JlYXRpb24gcmVxdWlyZXMgYSBoaWdoIHF1YWxpdHkgcmFuZG9tICMgZ2VuZXJhdG9yLiAgV2UgZmVhdHVyZVxuLy8gZGV0ZWN0IHRvIGRldGVybWluZSB0aGUgYmVzdCBSTkcgc291cmNlLCBub3JtYWxpemluZyB0byBhIGZ1bmN0aW9uIHRoYXRcbi8vIHJldHVybnMgMTI4LWJpdHMgb2YgcmFuZG9tbmVzcywgc2luY2UgdGhhdCdzIHdoYXQncyB1c3VhbGx5IHJlcXVpcmVkXG52YXIgX3JuZyA9IHJlcXVpcmUoJy4vcm5nJyk7XG5cbi8vIE1hcHMgZm9yIG51bWJlciA8LT4gaGV4IHN0cmluZyBjb252ZXJzaW9uXG52YXIgX2J5dGVUb0hleCA9IFtdO1xudmFyIF9oZXhUb0J5dGUgPSB7fTtcbmZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcbiAgX2J5dGVUb0hleFtpXSA9IChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSk7XG4gIF9oZXhUb0J5dGVbX2J5dGVUb0hleFtpXV0gPSBpO1xufVxuXG4vLyAqKmBwYXJzZSgpYCAtIFBhcnNlIGEgVVVJRCBpbnRvIGl0J3MgY29tcG9uZW50IGJ5dGVzKipcbmZ1bmN0aW9uIHBhcnNlKHMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gKGJ1ZiAmJiBvZmZzZXQpIHx8IDAsIGlpID0gMDtcblxuICBidWYgPSBidWYgfHwgW107XG4gIHMudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bMC05YS1mXXsyfS9nLCBmdW5jdGlvbihvY3QpIHtcbiAgICBpZiAoaWkgPCAxNikgeyAvLyBEb24ndCBvdmVyZmxvdyFcbiAgICAgIGJ1ZltpICsgaWkrK10gPSBfaGV4VG9CeXRlW29jdF07XG4gICAgfVxuICB9KTtcblxuICAvLyBaZXJvIG91dCByZW1haW5pbmcgYnl0ZXMgaWYgc3RyaW5nIHdhcyBzaG9ydFxuICB3aGlsZSAoaWkgPCAxNikge1xuICAgIGJ1ZltpICsgaWkrK10gPSAwO1xuICB9XG5cbiAgcmV0dXJuIGJ1Zjtcbn1cblxuLy8gKipgdW5wYXJzZSgpYCAtIENvbnZlcnQgVVVJRCBieXRlIGFycmF5IChhbGEgcGFyc2UoKSkgaW50byBhIHN0cmluZyoqXG5mdW5jdGlvbiB1bnBhcnNlKGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gb2Zmc2V0IHx8IDAsIGJ0aCA9IF9ieXRlVG9IZXg7XG4gIHJldHVybiAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArICctJyArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gKyAnLScgK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dICsgJy0nICtcbiAgICAgICAgICBidGhbYnVmW2krK11dICsgYnRoW2J1ZltpKytdXSArXG4gICAgICAgICAgYnRoW2J1ZltpKytdXSArIGJ0aFtidWZbaSsrXV0gK1xuICAgICAgICAgIGJ0aFtidWZbaSsrXV0gKyBidGhbYnVmW2krK11dO1xufVxuXG4vLyAqKmB2MSgpYCAtIEdlbmVyYXRlIHRpbWUtYmFzZWQgVVVJRCoqXG4vL1xuLy8gSW5zcGlyZWQgYnkgaHR0cHM6Ly9naXRodWIuY29tL0xpb3NLL1VVSUQuanNcbi8vIGFuZCBodHRwOi8vZG9jcy5weXRob24ub3JnL2xpYnJhcnkvdXVpZC5odG1sXG5cbi8vIHJhbmRvbSAjJ3Mgd2UgbmVlZCB0byBpbml0IG5vZGUgYW5kIGNsb2Nrc2VxXG52YXIgX3NlZWRCeXRlcyA9IF9ybmcoKTtcblxuLy8gUGVyIDQuNSwgY3JlYXRlIGFuZCA0OC1iaXQgbm9kZSBpZCwgKDQ3IHJhbmRvbSBiaXRzICsgbXVsdGljYXN0IGJpdCA9IDEpXG52YXIgX25vZGVJZCA9IFtcbiAgX3NlZWRCeXRlc1swXSB8IDB4MDEsXG4gIF9zZWVkQnl0ZXNbMV0sIF9zZWVkQnl0ZXNbMl0sIF9zZWVkQnl0ZXNbM10sIF9zZWVkQnl0ZXNbNF0sIF9zZWVkQnl0ZXNbNV1cbl07XG5cbi8vIFBlciA0LjIuMiwgcmFuZG9taXplICgxNCBiaXQpIGNsb2Nrc2VxXG52YXIgX2Nsb2Nrc2VxID0gKF9zZWVkQnl0ZXNbNl0gPDwgOCB8IF9zZWVkQnl0ZXNbN10pICYgMHgzZmZmO1xuXG4vLyBQcmV2aW91cyB1dWlkIGNyZWF0aW9uIHRpbWVcbnZhciBfbGFzdE1TZWNzID0gMCwgX2xhc3ROU2VjcyA9IDA7XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYnJvb2ZhL25vZGUtdXVpZCBmb3IgQVBJIGRldGFpbHNcbmZ1bmN0aW9uIHYxKG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuICB2YXIgYiA9IGJ1ZiB8fCBbXTtcblxuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICB2YXIgY2xvY2tzZXEgPSBvcHRpb25zLmNsb2Nrc2VxICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLmNsb2Nrc2VxIDogX2Nsb2Nrc2VxO1xuXG4gIC8vIFVVSUQgdGltZXN0YW1wcyBhcmUgMTAwIG5hbm8tc2Vjb25kIHVuaXRzIHNpbmNlIHRoZSBHcmVnb3JpYW4gZXBvY2gsXG4gIC8vICgxNTgyLTEwLTE1IDAwOjAwKS4gIEpTTnVtYmVycyBhcmVuJ3QgcHJlY2lzZSBlbm91Z2ggZm9yIHRoaXMsIHNvXG4gIC8vIHRpbWUgaXMgaGFuZGxlZCBpbnRlcm5hbGx5IGFzICdtc2VjcycgKGludGVnZXIgbWlsbGlzZWNvbmRzKSBhbmQgJ25zZWNzJ1xuICAvLyAoMTAwLW5hbm9zZWNvbmRzIG9mZnNldCBmcm9tIG1zZWNzKSBzaW5jZSB1bml4IGVwb2NoLCAxOTcwLTAxLTAxIDAwOjAwLlxuICB2YXIgbXNlY3MgPSBvcHRpb25zLm1zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm1zZWNzIDogbmV3IERhdGUoKS5nZXRUaW1lKCk7XG5cbiAgLy8gUGVyIDQuMi4xLjIsIHVzZSBjb3VudCBvZiB1dWlkJ3MgZ2VuZXJhdGVkIGR1cmluZyB0aGUgY3VycmVudCBjbG9ja1xuICAvLyBjeWNsZSB0byBzaW11bGF0ZSBoaWdoZXIgcmVzb2x1dGlvbiBjbG9ja1xuICB2YXIgbnNlY3MgPSBvcHRpb25zLm5zZWNzICE9PSB1bmRlZmluZWQgPyBvcHRpb25zLm5zZWNzIDogX2xhc3ROU2VjcyArIDE7XG5cbiAgLy8gVGltZSBzaW5jZSBsYXN0IHV1aWQgY3JlYXRpb24gKGluIG1zZWNzKVxuICB2YXIgZHQgPSAobXNlY3MgLSBfbGFzdE1TZWNzKSArIChuc2VjcyAtIF9sYXN0TlNlY3MpLzEwMDAwO1xuXG4gIC8vIFBlciA0LjIuMS4yLCBCdW1wIGNsb2Nrc2VxIG9uIGNsb2NrIHJlZ3Jlc3Npb25cbiAgaWYgKGR0IDwgMCAmJiBvcHRpb25zLmNsb2Nrc2VxID09PSB1bmRlZmluZWQpIHtcbiAgICBjbG9ja3NlcSA9IGNsb2Nrc2VxICsgMSAmIDB4M2ZmZjtcbiAgfVxuXG4gIC8vIFJlc2V0IG5zZWNzIGlmIGNsb2NrIHJlZ3Jlc3NlcyAobmV3IGNsb2Nrc2VxKSBvciB3ZSd2ZSBtb3ZlZCBvbnRvIGEgbmV3XG4gIC8vIHRpbWUgaW50ZXJ2YWxcbiAgaWYgKChkdCA8IDAgfHwgbXNlY3MgPiBfbGFzdE1TZWNzKSAmJiBvcHRpb25zLm5zZWNzID09PSB1bmRlZmluZWQpIHtcbiAgICBuc2VjcyA9IDA7XG4gIH1cblxuICAvLyBQZXIgNC4yLjEuMiBUaHJvdyBlcnJvciBpZiB0b28gbWFueSB1dWlkcyBhcmUgcmVxdWVzdGVkXG4gIGlmIChuc2VjcyA+PSAxMDAwMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXVpZC52MSgpOiBDYW5cXCd0IGNyZWF0ZSBtb3JlIHRoYW4gMTBNIHV1aWRzL3NlYycpO1xuICB9XG5cbiAgX2xhc3RNU2VjcyA9IG1zZWNzO1xuICBfbGFzdE5TZWNzID0gbnNlY3M7XG4gIF9jbG9ja3NlcSA9IGNsb2Nrc2VxO1xuXG4gIC8vIFBlciA0LjEuNCAtIENvbnZlcnQgZnJvbSB1bml4IGVwb2NoIHRvIEdyZWdvcmlhbiBlcG9jaFxuICBtc2VjcyArPSAxMjIxOTI5MjgwMDAwMDtcblxuICAvLyBgdGltZV9sb3dgXG4gIHZhciB0bCA9ICgobXNlY3MgJiAweGZmZmZmZmYpICogMTAwMDAgKyBuc2VjcykgJSAweDEwMDAwMDAwMDtcbiAgYltpKytdID0gdGwgPj4+IDI0ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDE2ICYgMHhmZjtcbiAgYltpKytdID0gdGwgPj4+IDggJiAweGZmO1xuICBiW2krK10gPSB0bCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfbWlkYFxuICB2YXIgdG1oID0gKG1zZWNzIC8gMHgxMDAwMDAwMDAgKiAxMDAwMCkgJiAweGZmZmZmZmY7XG4gIGJbaSsrXSA9IHRtaCA+Pj4gOCAmIDB4ZmY7XG4gIGJbaSsrXSA9IHRtaCAmIDB4ZmY7XG5cbiAgLy8gYHRpbWVfaGlnaF9hbmRfdmVyc2lvbmBcbiAgYltpKytdID0gdG1oID4+PiAyNCAmIDB4ZiB8IDB4MTA7IC8vIGluY2x1ZGUgdmVyc2lvblxuICBiW2krK10gPSB0bWggPj4+IDE2ICYgMHhmZjtcblxuICAvLyBgY2xvY2tfc2VxX2hpX2FuZF9yZXNlcnZlZGAgKFBlciA0LjIuMiAtIGluY2x1ZGUgdmFyaWFudClcbiAgYltpKytdID0gY2xvY2tzZXEgPj4+IDggfCAweDgwO1xuXG4gIC8vIGBjbG9ja19zZXFfbG93YFxuICBiW2krK10gPSBjbG9ja3NlcSAmIDB4ZmY7XG5cbiAgLy8gYG5vZGVgXG4gIHZhciBub2RlID0gb3B0aW9ucy5ub2RlIHx8IF9ub2RlSWQ7XG4gIGZvciAodmFyIG4gPSAwOyBuIDwgNjsgbisrKSB7XG4gICAgYltpICsgbl0gPSBub2RlW25dO1xuICB9XG5cbiAgcmV0dXJuIGJ1ZiA/IGJ1ZiA6IHVucGFyc2UoYik7XG59XG5cbi8vICoqYHY0KClgIC0gR2VuZXJhdGUgcmFuZG9tIFVVSUQqKlxuXG4vLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2Jyb29mYS9ub2RlLXV1aWQgZm9yIEFQSSBkZXRhaWxzXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAvLyBEZXByZWNhdGVkIC0gJ2Zvcm1hdCcgYXJndW1lbnQsIGFzIHN1cHBvcnRlZCBpbiB2MS4yXG4gIHZhciBpID0gYnVmICYmIG9mZnNldCB8fCAwO1xuXG4gIGlmICh0eXBlb2Yob3B0aW9ucykgPT0gJ3N0cmluZycpIHtcbiAgICBidWYgPSBvcHRpb25zID09ICdiaW5hcnknID8gbmV3IEFycmF5KDE2KSA6IG51bGw7XG4gICAgb3B0aW9ucyA9IG51bGw7XG4gIH1cbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgX3JuZykoKTtcblxuICAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG4gIHJuZHNbNl0gPSAocm5kc1s2XSAmIDB4MGYpIHwgMHg0MDtcbiAgcm5kc1s4XSA9IChybmRzWzhdICYgMHgzZikgfCAweDgwO1xuXG4gIC8vIENvcHkgYnl0ZXMgdG8gYnVmZmVyLCBpZiBwcm92aWRlZFxuICBpZiAoYnVmKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwOyBpaSA8IDE2OyBpaSsrKSB7XG4gICAgICBidWZbaSArIGlpXSA9IHJuZHNbaWldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBidWYgfHwgdW5wYXJzZShybmRzKTtcbn1cblxuLy8gRXhwb3J0IHB1YmxpYyBBUElcbnZhciB1dWlkID0gdjQ7XG51dWlkLnYxID0gdjE7XG51dWlkLnY0ID0gdjQ7XG51dWlkLnBhcnNlID0gcGFyc2U7XG51dWlkLnVucGFyc2UgPSB1bnBhcnNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHV1aWQ7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBWaWN0b3I7XG5cbi8qKlxuICogIyBWaWN0b3IgLSBBIEphdmFTY3JpcHQgMkQgdmVjdG9yIGNsYXNzIHdpdGggbWV0aG9kcyBmb3IgY29tbW9uIHZlY3RvciBvcGVyYXRpb25zXG4gKi9cblxuLyoqXG4gKiBDb25zdHJ1Y3Rvci4gV2lsbCBhbHNvIHdvcmsgd2l0aG91dCB0aGUgYG5ld2Aga2V5d29yZFxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmFyIHZlYzIgPSBWaWN0b3IoNDIsIDEzMzcpO1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IFZhbHVlIG9mIHRoZSB4IGF4aXNcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IFZhbHVlIG9mIHRoZSB5IGF4aXNcbiAqIEByZXR1cm4ge1ZpY3Rvcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cbmZ1bmN0aW9uIFZpY3RvciAoeCwgeSkge1xuXHRpZiAoISh0aGlzIGluc3RhbmNlb2YgVmljdG9yKSkge1xuXHRcdHJldHVybiBuZXcgVmljdG9yKHgsIHkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBYIGF4aXNcblx0ICpcblx0ICogIyMjIEV4YW1wbGVzOlxuXHQgKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IuZnJvbUFycmF5KDQyLCAyMSk7XG5cdCAqXG5cdCAqICAgICB2ZWMueDtcblx0ICogICAgIC8vID0+IDQyXG5cdCAqXG5cdCAqIEBhcGkgcHVibGljXG5cdCAqL1xuXHR0aGlzLnggPSB4IHx8IDA7XG5cblx0LyoqXG5cdCAqIFRoZSBZIGF4aXNcblx0ICpcblx0ICogIyMjIEV4YW1wbGVzOlxuXHQgKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IuZnJvbUFycmF5KDQyLCAyMSk7XG5cdCAqXG5cdCAqICAgICB2ZWMueTtcblx0ICogICAgIC8vID0+IDIxXG5cdCAqXG5cdCAqIEBhcGkgcHVibGljXG5cdCAqL1xuXHR0aGlzLnkgPSB5IHx8IDA7XG59O1xuXG4vKipcbiAqICMgU3RhdGljXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGluc3RhbmNlIGZyb20gYW4gYXJyYXlcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IFZpY3Rvci5mcm9tQXJyYXkoWzQyLCAyMV0pO1xuICpcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjQyLCB5OjIxXG4gKlxuICogQG5hbWUgVmljdG9yLmZyb21BcnJheVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgQXJyYXkgd2l0aCB0aGUgeCBhbmQgeSB2YWx1ZXMgYXQgaW5kZXggMCBhbmQgMSByZXNwZWN0aXZlbHlcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gVGhlIG5ldyBpbnN0YW5jZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLmZyb21BcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcblx0cmV0dXJuIG5ldyBWaWN0b3IoYXJyWzBdIHx8IDAsIGFyclsxXSB8fCAwKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBmcm9tIGFuIG9iamVjdFxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gVmljdG9yLmZyb21PYmplY3QoeyB4OiA0MiwgeTogMjEgfSk7XG4gKlxuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6NDIsIHk6MjFcbiAqXG4gKiBAbmFtZSBWaWN0b3IuZnJvbU9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBPYmplY3Qgd2l0aCB0aGUgdmFsdWVzIGZvciB4IGFuZCB5XG4gKiBAcmV0dXJuIHtWaWN0b3J9IFRoZSBuZXcgaW5zdGFuY2VcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5mcm9tT2JqZWN0ID0gZnVuY3Rpb24gKG9iaikge1xuXHRyZXR1cm4gbmV3IFZpY3RvcihvYmoueCB8fCAwLCBvYmoueSB8fCAwKTtcbn07XG5cbi8qKlxuICogIyBNYW5pcHVsYXRpb25cbiAqXG4gKiBUaGVzZSBmdW5jdGlvbnMgYXJlIGNoYWluYWJsZS5cbiAqL1xuXG4vKipcbiAqIEFkZHMgYW5vdGhlciB2ZWN0b3IncyBYIGF4aXMgdG8gdGhpcyBvbmVcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwLCAxMCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwLCAzMCk7XG4gKlxuICogICAgIHZlYzEuYWRkWCh2ZWMyKTtcbiAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDozMCwgeToxMFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuYWRkWCA9IGZ1bmN0aW9uICh2ZWMpIHtcblx0dGhpcy54ICs9IHZlYy54O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbm90aGVyIHZlY3RvcidzIFkgYXhpcyB0byB0aGlzIG9uZVxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAsIDEwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAsIDMwKTtcbiAqXG4gKiAgICAgdmVjMS5hZGRZKHZlYzIpO1xuICogICAgIHZlYzEudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwLCB5OjQwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yIHlvdSB3YW50IHRvIGFkZCB0byB0aGlzIG9uZVxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5hZGRZID0gZnVuY3Rpb24gKHZlYykge1xuXHR0aGlzLnkgKz0gdmVjLnk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFub3RoZXIgdmVjdG9yIHRvIHRoaXMgb25lXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMCwgMTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMCwgMzApO1xuICpcbiAqICAgICB2ZWMxLmFkZCh2ZWMyKTtcbiAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDozMCwgeTo0MFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBhZGQgdG8gdGhpcyBvbmVcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHZlYykge1xuXHR0aGlzLnggKz0gdmVjLng7XG5cdHRoaXMueSArPSB2ZWMueTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byBib3RoIHZlY3RvciBheGlzXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEsIDIpO1xuICpcbiAqICAgICB2ZWMuYWRkU2NhbGFyKDIpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6IDMsIHk6IDRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmFkZFNjYWxhciA9IGZ1bmN0aW9uIChzY2FsYXIpIHtcblx0dGhpcy54ICs9IHNjYWxhcjtcblx0dGhpcy55ICs9IHNjYWxhcjtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgdGhlIGdpdmVuIHNjYWxhciB0byB0aGUgWCBheGlzXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEsIDIpO1xuICpcbiAqICAgICB2ZWMuYWRkU2NhbGFyWCgyKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OiAzLCB5OiAyXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIGFkZFxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5hZGRTY2FsYXJYID0gZnVuY3Rpb24gKHNjYWxhcikge1xuXHR0aGlzLnggKz0gc2NhbGFyO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyB0aGUgZ2l2ZW4gc2NhbGFyIHRvIHRoZSBZIGF4aXNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMSwgMik7XG4gKlxuICogICAgIHZlYy5hZGRTY2FsYXJZKDIpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6IDEsIHk6IDRcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGFyIFRoZSBzY2FsYXIgdG8gYWRkXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmFkZFNjYWxhclkgPSBmdW5jdGlvbiAoc2NhbGFyKSB7XG5cdHRoaXMueSArPSBzY2FsYXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdWJ0cmFjdHMgdGhlIFggYXhpcyBvZiBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAsIDMwKTtcbiAqXG4gKiAgICAgdmVjMS5zdWJ0cmFjdFgodmVjMik7XG4gKiAgICAgdmVjMS50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6ODAsIHk6NTBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5zdWJ0cmFjdFggPSBmdW5jdGlvbiAodmVjKSB7XG5cdHRoaXMueCAtPSB2ZWMueDtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN1YnRyYWN0cyB0aGUgWSBheGlzIG9mIGFub3RoZXIgdmVjdG9yIGZyb20gdGhpcyBvbmVcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMCwgMzApO1xuICpcbiAqICAgICB2ZWMxLnN1YnRyYWN0WSh2ZWMyKTtcbiAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxMDAsIHk6MjBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgc3VidHJhY3QgZnJvbSB0aGlzIG9uZVxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5zdWJ0cmFjdFkgPSBmdW5jdGlvbiAodmVjKSB7XG5cdHRoaXMueSAtPSB2ZWMueTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN1YnRyYWN0cyBhbm90aGVyIHZlY3RvciBmcm9tIHRoaXMgb25lXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAsIDMwKTtcbiAqXG4gKiAgICAgdmVjMS5zdWJ0cmFjdCh2ZWMyKTtcbiAqICAgICB2ZWMxLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDo4MCwgeToyMFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCBzdWJ0cmFjdCBmcm9tIHRoaXMgb25lXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnN1YnRyYWN0ID0gZnVuY3Rpb24gKHZlYykge1xuXHR0aGlzLnggLT0gdmVjLng7XG5cdHRoaXMueSAtPSB2ZWMueTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFN1YnRyYWN0cyB0aGUgZ2l2ZW4gc2NhbGFyIGZyb20gYm90aCBheGlzXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgMjAwKTtcbiAqXG4gKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyKDIwKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OiA4MCwgeTogMTgwXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxhciBUaGUgc2NhbGFyIHRvIHN1YnRyYWN0XG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnN1YnRyYWN0U2NhbGFyID0gZnVuY3Rpb24gKHNjYWxhcikge1xuXHR0aGlzLnggLT0gc2NhbGFyO1xuXHR0aGlzLnkgLT0gc2NhbGFyO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU3VidHJhY3RzIHRoZSBnaXZlbiBzY2FsYXIgZnJvbSB0aGUgWCBheGlzXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgMjAwKTtcbiAqXG4gKiAgICAgdmVjLnN1YnRyYWN0U2NhbGFyWCgyMCk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDogODAsIHk6IDIwMFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5zdWJ0cmFjdFNjYWxhclggPSBmdW5jdGlvbiAoc2NhbGFyKSB7XG5cdHRoaXMueCAtPSBzY2FsYXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTdWJ0cmFjdHMgdGhlIGdpdmVuIHNjYWxhciBmcm9tIHRoZSBZIGF4aXNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCAyMDApO1xuICpcbiAqICAgICB2ZWMuc3VidHJhY3RTY2FsYXJZKDIwKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OiAxMDAsIHk6IDE4MFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsYXIgVGhlIHNjYWxhciB0byBzdWJ0cmFjdFxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5zdWJ0cmFjdFNjYWxhclkgPSBmdW5jdGlvbiAoc2NhbGFyKSB7XG5cdHRoaXMueSAtPSBzY2FsYXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIHggY29tcG9uZW50IG9mIGdpdmVuIHZlY3RvclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMiwgMCk7XG4gKlxuICogICAgIHZlYy5kaXZpZGVYKHZlYzIpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6NTAsIHk6NTBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgZGl2aWRlIGJ5XG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmRpdmlkZVggPSBmdW5jdGlvbiAodmVjdG9yKSB7XG5cdHRoaXMueCAvPSB2ZWN0b3IueDtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpdmlkZXMgdGhlIFkgYXhpcyBieSB0aGUgeSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigwLCAyKTtcbiAqXG4gKiAgICAgdmVjLmRpdmlkZVkodmVjMik7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBvdGhlciB2ZWN0b3IgeW91IHdhbnQgZGl2aWRlIGJ5XG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmRpdmlkZVkgPSBmdW5jdGlvbiAodmVjdG9yKSB7XG5cdHRoaXMueSAvPSB2ZWN0b3IueTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSBhIGF4aXMgdmFsdWVzIG9mIGdpdmVuIHZlY3RvclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMiwgMik7XG4gKlxuICogICAgIHZlYy5kaXZpZGUodmVjMik7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDo1MCwgeToyNVxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIHZlY3RvciB0byBkaXZpZGUgYnlcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuZGl2aWRlID0gZnVuY3Rpb24gKHZlY3Rvcikge1xuXHR0aGlzLnggLz0gdmVjdG9yLng7XG5cdHRoaXMueSAvPSB2ZWN0b3IueTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpdmlkZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyIHZhbHVlXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMuZGl2aWRlU2NhbGFyKDIpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6NTAsIHk6MjVcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuZGl2aWRlU2NhbGFyID0gZnVuY3Rpb24gKHNjYWxhcikge1xuXHRpZiAoc2NhbGFyICE9PSAwKSB7XG5cdFx0dGhpcy54IC89IHNjYWxhcjtcblx0XHR0aGlzLnkgLz0gc2NhbGFyO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMueCA9IDA7XG5cdFx0dGhpcy55ID0gMDtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEaXZpZGVzIHRoZSBYIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqXG4gKiAgICAgdmVjLmRpdmlkZVNjYWxhclgoMik7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBUaGUgc2NhbGFyIHRvIGRpdmlkZSBieVxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5kaXZpZGVTY2FsYXJYID0gZnVuY3Rpb24gKHNjYWxhcikge1xuXHRpZiAoc2NhbGFyICE9PSAwKSB7XG5cdFx0dGhpcy54IC89IHNjYWxhcjtcblx0fSBlbHNlIHtcblx0XHR0aGlzLnggPSAwO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBEaXZpZGVzIHRoZSBZIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhciB2YWx1ZVxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqXG4gKiAgICAgdmVjLmRpdmlkZVNjYWxhclkoMik7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxMDAsIHk6MjVcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBkaXZpZGUgYnlcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuZGl2aWRlU2NhbGFyWSA9IGZ1bmN0aW9uIChzY2FsYXIpIHtcblx0aWYgKHNjYWxhciAhPT0gMCkge1xuXHRcdHRoaXMueSAvPSBzY2FsYXI7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy55ID0gMDtcblx0fVxuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW52ZXJ0cyB0aGUgWCBheGlzXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMuaW52ZXJ0WCgpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6LTEwMCwgeTo1MFxuICpcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuaW52ZXJ0WCA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy54ICo9IC0xO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW52ZXJ0cyB0aGUgWSBheGlzXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMuaW52ZXJ0WSgpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MTAwLCB5Oi01MFxuICpcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuaW52ZXJ0WSA9IGZ1bmN0aW9uICgpIHtcblx0dGhpcy55ICo9IC0xO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogSW52ZXJ0cyBib3RoIGF4aXNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKlxuICogICAgIHZlYy5pbnZlcnQoKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4Oi0xMDAsIHk6LTUwXG4gKlxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5pbnZlcnQgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMuaW52ZXJ0WCgpO1xuXHR0aGlzLmludmVydFkoKTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdGhlIFggYXhpcyBieSBYIGNvbXBvbmVudCBvZiBnaXZlbiB2ZWN0b3JcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIsIDApO1xuICpcbiAqICAgICB2ZWMubXVsdGlwbHlYKHZlYzIpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MjAwLCB5OjUwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgdmVjdG9yIHRvIG11bHRpcGx5IHRoZSBheGlzIHdpdGhcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUubXVsdGlwbHlYID0gZnVuY3Rpb24gKHZlY3Rvcikge1xuXHR0aGlzLnggKj0gdmVjdG9yLng7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHRoZSBZIGF4aXMgYnkgWSBjb21wb25lbnQgb2YgZ2l2ZW4gdmVjdG9yXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigwLCAyKTtcbiAqXG4gKiAgICAgdmVjLm11bHRpcGx5WCh2ZWMyKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwMCwgeToxMDBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5tdWx0aXBseVkgPSBmdW5jdGlvbiAodmVjdG9yKSB7XG5cdHRoaXMueSAqPSB2ZWN0b3IueTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgYm90aCB2ZWN0b3IgYXhpcyBieSB2YWx1ZXMgZnJvbSBhIGdpdmVuIHZlY3RvclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMiwgMik7XG4gKlxuICogICAgIHZlYy5tdWx0aXBseSh2ZWMyKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSB2ZWN0b3IgdG8gbXVsdGlwbHkgYnlcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUubXVsdGlwbHkgPSBmdW5jdGlvbiAodmVjdG9yKSB7XG5cdHRoaXMueCAqPSB2ZWN0b3IueDtcblx0dGhpcy55ICo9IHZlY3Rvci55O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogTXVsdGlwbGllcyBib3RoIHZlY3RvciBheGlzIGJ5IHRoZSBnaXZlbiBzY2FsYXIgdmFsdWVcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKlxuICogICAgIHZlYy5tdWx0aXBseVNjYWxhcigyKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjIwMCwgeToxMDBcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBtdWx0aXBseSBieVxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5tdWx0aXBseVNjYWxhciA9IGZ1bmN0aW9uIChzY2FsYXIpIHtcblx0dGhpcy54ICo9IHNjYWxhcjtcblx0dGhpcy55ICo9IHNjYWxhcjtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE11bHRpcGxpZXMgdGhlIFggYXhpcyBieSB0aGUgZ2l2ZW4gc2NhbGFyXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMubXVsdGlwbHlTY2FsYXJYKDIpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MjAwLCB5OjUwXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IFRoZSBzY2FsYXIgdG8gbXVsdGlwbHkgdGhlIGF4aXMgd2l0aFxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5tdWx0aXBseVNjYWxhclggPSBmdW5jdGlvbiAoc2NhbGFyKSB7XG5cdHRoaXMueCAqPSBzY2FsYXI7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBNdWx0aXBsaWVzIHRoZSBZIGF4aXMgYnkgdGhlIGdpdmVuIHNjYWxhclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqXG4gKiAgICAgdmVjLm11bHRpcGx5U2NhbGFyWSgyKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwMCwgeToxMDBcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gVGhlIHNjYWxhciB0byBtdWx0aXBseSB0aGUgYXhpcyB3aXRoXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLm11bHRpcGx5U2NhbGFyWSA9IGZ1bmN0aW9uIChzY2FsYXIpIHtcblx0dGhpcy55ICo9IHNjYWxhcjtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIE5vcm1hbGl6ZVxuICpcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcblxuXHRpZiAobGVuZ3RoID09PSAwKSB7XG5cdFx0dGhpcy54ID0gMTtcblx0XHR0aGlzLnkgPSAwO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMuZGl2aWRlKFZpY3RvcihsZW5ndGgsIGxlbmd0aCkpO1xuXHR9XG5cdHJldHVybiB0aGlzO1xufTtcblxuVmljdG9yLnByb3RvdHlwZS5ub3JtID0gVmljdG9yLnByb3RvdHlwZS5ub3JtYWxpemU7XG5cbi8qKlxuICogSWYgdGhlIGFic29sdXRlIHZlY3RvciBheGlzIGlzIGdyZWF0ZXIgdGhhbiBgbWF4YCwgbXVsdGlwbGllcyB0aGUgYXhpcyBieSBgZmFjdG9yYFxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqXG4gKiAgICAgdmVjLmxpbWl0KDgwLCAwLjkpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6OTAsIHk6NTBcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbWF4IFRoZSBtYXhpbXVtIHZhbHVlIGZvciBib3RoIHggYW5kIHkgYXhpc1xuICogQHBhcmFtIHtOdW1iZXJ9IGZhY3RvciBGYWN0b3IgYnkgd2hpY2ggdGhlIGF4aXMgYXJlIHRvIGJlIG11bHRpcGxpZWQgd2l0aFxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5saW1pdCA9IGZ1bmN0aW9uIChtYXgsIGZhY3Rvcikge1xuXHRpZiAoTWF0aC5hYnModGhpcy54KSA+IG1heCl7IHRoaXMueCAqPSBmYWN0b3I7IH1cblx0aWYgKE1hdGguYWJzKHRoaXMueSkgPiBtYXgpeyB0aGlzLnkgKj0gZmFjdG9yOyB9XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSYW5kb21pemVzIGJvdGggdmVjdG9yIGF4aXMgd2l0aCBhIHZhbHVlIGJldHdlZW4gMiB2ZWN0b3JzXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMucmFuZG9taXplKG5ldyBWaWN0b3IoNTAsIDYwKSwgbmV3IFZpY3Rvcig3MCwgODBgKSk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDo2NywgeTo3M1xuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICogQHBhcmFtIHtWaWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUucmFuZG9taXplID0gZnVuY3Rpb24gKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSB7XG5cdHRoaXMucmFuZG9taXplWCh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cdHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJhbmRvbWl6ZXMgdGhlIHkgYXhpcyB3aXRoIGEgdmFsdWUgYmV0d2VlbiAyIHZlY3RvcnNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKlxuICogICAgIHZlYy5yYW5kb21pemVYKG5ldyBWaWN0b3IoNTAsIDYwKSwgbmV3IFZpY3Rvcig3MCwgODBgKSk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDo1NSwgeTo1MFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB0b3BMZWZ0IGZpcnN0IHZlY3RvclxuICogQHBhcmFtIHtWaWN0b3J9IGJvdHRvbVJpZ2h0IHNlY29uZCB2ZWN0b3JcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUucmFuZG9taXplWCA9IGZ1bmN0aW9uICh0b3BMZWZ0LCBib3R0b21SaWdodCkge1xuXHR2YXIgbWluID0gTWF0aC5taW4odG9wTGVmdC54LCBib3R0b21SaWdodC54KTtcblx0dmFyIG1heCA9IE1hdGgubWF4KHRvcExlZnQueCwgYm90dG9tUmlnaHQueCk7XG5cdHRoaXMueCA9IHJhbmRvbShtaW4sIG1heCk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSYW5kb21pemVzIHRoZSB5IGF4aXMgd2l0aCBhIHZhbHVlIGJldHdlZW4gMiB2ZWN0b3JzXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICpcbiAqICAgICB2ZWMucmFuZG9taXplWShuZXcgVmljdG9yKDUwLCA2MCksIG5ldyBWaWN0b3IoNzAsIDgwYCkpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MTAwLCB5OjY2XG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5yYW5kb21pemVZID0gZnVuY3Rpb24gKHRvcExlZnQsIGJvdHRvbVJpZ2h0KSB7XG5cdHZhciBtaW4gPSBNYXRoLm1pbih0b3BMZWZ0LnksIGJvdHRvbVJpZ2h0LnkpO1xuXHR2YXIgbWF4ID0gTWF0aC5tYXgodG9wTGVmdC55LCBib3R0b21SaWdodC55KTtcblx0dGhpcy55ID0gcmFuZG9tKG1pbiwgbWF4KTtcblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJhbmRvbWx5IHJhbmRvbWl6ZXMgZWl0aGVyIGF4aXMgYmV0d2VlbiAyIHZlY3RvcnNcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKlxuICogICAgIHZlYy5yYW5kb21pemVBbnkobmV3IFZpY3Rvcig1MCwgNjApLCBuZXcgVmljdG9yKDcwLCA4MCkpO1xuICogICAgIHZlYy50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MTAwLCB5Ojc3XG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHRvcExlZnQgZmlyc3QgdmVjdG9yXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gYm90dG9tUmlnaHQgc2Vjb25kIHZlY3RvclxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5yYW5kb21pemVBbnkgPSBmdW5jdGlvbiAodG9wTGVmdCwgYm90dG9tUmlnaHQpIHtcblx0aWYgKCEhIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSkpIHtcblx0XHR0aGlzLnJhbmRvbWl6ZVgodG9wTGVmdCwgYm90dG9tUmlnaHQpO1xuXHR9IGVsc2Uge1xuXHRcdHRoaXMucmFuZG9taXplWSh0b3BMZWZ0LCBib3R0b21SaWdodCk7XG5cdH1cblx0cmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJvdW5kcyBib3RoIGF4aXMgdG8gYW4gaW50ZWdlciB2YWx1ZVxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAuMiwgNTAuOSk7XG4gKlxuICogICAgIHZlYy51bmZsb2F0KCk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxMDAsIHk6NTFcbiAqXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnVuZmxvYXQgPSBmdW5jdGlvbiAoKSB7XG5cdHRoaXMueCA9IE1hdGgucm91bmQodGhpcy54KTtcblx0dGhpcy55ID0gTWF0aC5yb3VuZCh0aGlzLnkpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUm91bmRzIGJvdGggYXhpcyB0byBhIGNlcnRhaW4gcHJlY2lzaW9uXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwMC4yLCA1MC45KTtcbiAqXG4gKiAgICAgdmVjLnVuZmxvYXQoKTtcbiAqICAgICB2ZWMudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwMCwgeTo1MVxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBQcmVjaXNpb24gKGRlZmF1bHQ6IDgpXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnRvRml4ZWQgPSBmdW5jdGlvbiAocHJlY2lzaW9uKSB7XG5cdGlmICh0eXBlb2YgcHJlY2lzaW9uID09PSAndW5kZWZpbmVkJykgeyBwcmVjaXNpb24gPSA4OyB9XG5cdHRoaXMueCA9IHRoaXMueC50b0ZpeGVkKHByZWNpc2lvbik7XG5cdHRoaXMueSA9IHRoaXMueS50b0ZpeGVkKHByZWNpc2lvbik7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gb2YgdGhlIFggYXhpcyB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMDAsIDEwMCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwMCwgMjAwKTtcbiAqXG4gKiAgICAgdmVjMS5taXhYKHZlYzIsIDAuNSk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxNTAsIHk6MTAwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLm1peFggPSBmdW5jdGlvbiAodmVjLCBhbW91bnQpIHtcblx0aWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0YW1vdW50ID0gMC41O1xuXHR9XG5cblx0dGhpcy54ID0gKDEgLSBhbW91bnQpICogdGhpcy54ICsgYW1vdW50ICogdmVjLng7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gb2YgdGhlIFkgYXhpcyB0b3dhcmRzIGFub3RoZXIgdmVjdG9yXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMDAsIDEwMCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwMCwgMjAwKTtcbiAqXG4gKiAgICAgdmVjMS5taXhZKHZlYzIsIDAuNSk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxMDAsIHk6MTUwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLm1peFkgPSBmdW5jdGlvbiAodmVjLCBhbW91bnQpIHtcblx0aWYgKHR5cGVvZiBhbW91bnQgPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0YW1vdW50ID0gMC41O1xuXHR9XG5cblx0dGhpcy55ID0gKDEgLSBhbW91bnQpICogdGhpcy55ICsgYW1vdW50ICogdmVjLnk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBQZXJmb3JtcyBhIGxpbmVhciBibGVuZCAvIGludGVycG9sYXRpb24gdG93YXJkcyBhbm90aGVyIHZlY3RvclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAwLCAxMDApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMDAsIDIwMCk7XG4gKlxuICogICAgIHZlYzEubWl4KHZlYzIsIDAuNSk7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxNTAsIHk6MTUwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgb3RoZXIgdmVjdG9yXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IFRoZSBibGVuZCBhbW91bnQgKG9wdGlvbmFsLCBkZWZhdWx0OiAwLjUpXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLm1peCA9IGZ1bmN0aW9uICh2ZWMsIGFtb3VudCkge1xuXHR0aGlzLm1peFgodmVjLCBhbW91bnQpO1xuXHR0aGlzLm1peFkodmVjLCBhbW91bnQpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogIyBQcm9kdWN0c1xuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIGNsb25lIG9mIHRoaXMgdmVjdG9yXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMCwgMTApO1xuICogICAgIHZhciB2ZWMyID0gdmVjMS5jbG9uZSgpO1xuICpcbiAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxMCwgeToxMFxuICpcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gQSBjbG9uZSBvZiB0aGUgdmVjdG9yXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gbmV3IFZpY3Rvcih0aGlzLngsIHRoaXMueSk7XG59O1xuXG4vKipcbiAqIENvcGllcyBhbm90aGVyIHZlY3RvcidzIFggY29tcG9uZW50IGluIHRvIGl0cyBvd25cbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwLCAxMCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwLCAyMCk7XG4gKiAgICAgdmFyIHZlYzIgPSB2ZWMxLmNvcHlYKHZlYzEpO1xuICpcbiAqICAgICB2ZWMyLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoyMCwgeToxMFxuICpcbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuY29weVggPSBmdW5jdGlvbiAodmVjKSB7XG5cdHRoaXMueCA9IHZlYy54O1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ29waWVzIGFub3RoZXIgdmVjdG9yJ3MgWSBjb21wb25lbnQgaW4gdG8gaXRzIG93blxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAsIDEwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAsIDIwKTtcbiAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weVkodmVjMSk7XG4gKlxuICogICAgIHZlYzIudG9TdHJpbmcoKTtcbiAqICAgICAvLyA9PiB4OjEwLCB5OjIwXG4gKlxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5jb3B5WSA9IGZ1bmN0aW9uICh2ZWMpIHtcblx0dGhpcy55ID0gdmVjLnk7XG5cdHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDb3BpZXMgYW5vdGhlciB2ZWN0b3IncyBYIGFuZCBZIGNvbXBvbmVudHMgaW4gdG8gaXRzIG93blxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAsIDEwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAsIDIwKTtcbiAqICAgICB2YXIgdmVjMiA9IHZlYzEuY29weSh2ZWMxKTtcbiAqXG4gKiAgICAgdmVjMi50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MjAsIHk6MjBcbiAqXG4gKiBAcmV0dXJuIHtWaWN0b3J9IGB0aGlzYCBmb3IgY2hhaW5pbmcgY2FwYWJpbGl0aWVzXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAodmVjKSB7XG5cdHRoaXMuY29weVgodmVjKTtcblx0dGhpcy5jb3B5WSh2ZWMpO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0cyB0aGUgdmVjdG9yIHRvIHplcm8gKDAsMClcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwLCAxMCk7XG4gKlx0XHQgdmFyMS56ZXJvKCk7XG4gKiAgICAgdmVjMS50b1N0cmluZygpO1xuICogICAgIC8vID0+IHg6MCwgeTowXG4gKlxuICogQHJldHVybiB7VmljdG9yfSBgdGhpc2AgZm9yIGNoYWluaW5nIGNhcGFiaWxpdGllc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS56ZXJvID0gZnVuY3Rpb24gKCkge1xuXHR0aGlzLnggPSB0aGlzLnkgPSAwO1xuXHRyZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZG90IHByb2R1Y3Qgb2YgdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMDAsIDYwKTtcbiAqXG4gKiAgICAgdmVjMS5kb3QodmVjMik7XG4gKiAgICAgLy8gPT4gMjMwMDBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IERvdCBwcm9kdWN0XG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmRvdCA9IGZ1bmN0aW9uICh2ZWMyKSB7XG5cdHJldHVybiB0aGlzLnggKiB2ZWMyLnggKyB0aGlzLnkgKiB2ZWMyLnk7XG59O1xuXG5WaWN0b3IucHJvdG90eXBlLmNyb3NzID0gZnVuY3Rpb24gKHZlYzIpIHtcblx0cmV0dXJuICh0aGlzLnggKiB2ZWMyLnkgKSAtICh0aGlzLnkgKiB2ZWMyLnggKTtcbn07XG5cbi8qKlxuICogUHJvamVjdHMgYSB2ZWN0b3Igb250byBhbm90aGVyIHZlY3Rvciwgc2V0dGluZyBpdHNlbGYgdG8gdGhlIHJlc3VsdC5cbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAwLCAwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMTAwLCAxMDApO1xuICpcbiAqICAgICB2ZWMucHJvamVjdE9udG8odmVjMik7XG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDo1MCwgeTo1MFxuICpcbiAqIEBwYXJhbSB7VmljdG9yfSB2ZWN0b3IgVGhlIG90aGVyIHZlY3RvciB5b3Ugd2FudCB0byBwcm9qZWN0IHRoaXMgdmVjdG9yIG9udG9cbiAqIEByZXR1cm4ge1ZpY3Rvcn0gYHRoaXNgIGZvciBjaGFpbmluZyBjYXBhYmlsaXRpZXNcbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUucHJvamVjdE9udG8gPSBmdW5jdGlvbiAodmVjMikge1xuICAgIHZhciBjb2VmZiA9ICggKHRoaXMueCAqIHZlYzIueCkrKHRoaXMueSAqIHZlYzIueSkgKSAvICgodmVjMi54KnZlYzIueCkrKHZlYzIueSp2ZWMyLnkpKTtcbiAgICB0aGlzLnggPSBjb2VmZiAqIHZlYzIueDtcbiAgICB0aGlzLnkgPSBjb2VmZiAqIHZlYzIueTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5cblxuVmljdG9yLnByb3RvdHlwZS5ob3Jpem9udGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcbn07XG5cblZpY3Rvci5wcm90b3R5cGUuaG9yaXpvbnRhbEFuZ2xlRGVnID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gcmFkaWFuMmRlZ3JlZXModGhpcy5ob3Jpem9udGFsQW5nbGUoKSk7XG59O1xuXG5WaWN0b3IucHJvdG90eXBlLnZlcnRpY2FsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiBNYXRoLmF0YW4yKHRoaXMueCwgdGhpcy55KTtcbn07XG5cblZpY3Rvci5wcm90b3R5cGUudmVydGljYWxBbmdsZURlZyA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHJhZGlhbjJkZWdyZWVzKHRoaXMudmVydGljYWxBbmdsZSgpKTtcbn07XG5cblZpY3Rvci5wcm90b3R5cGUuYW5nbGUgPSBWaWN0b3IucHJvdG90eXBlLmhvcml6b250YWxBbmdsZTtcblZpY3Rvci5wcm90b3R5cGUuYW5nbGVEZWcgPSBWaWN0b3IucHJvdG90eXBlLmhvcml6b250YWxBbmdsZURlZztcblZpY3Rvci5wcm90b3R5cGUuZGlyZWN0aW9uID0gVmljdG9yLnByb3RvdHlwZS5ob3Jpem9udGFsQW5nbGU7XG5cblZpY3Rvci5wcm90b3R5cGUucm90YXRlID0gZnVuY3Rpb24gKGFuZ2xlKSB7XG5cdHZhciBueCA9ICh0aGlzLnggKiBNYXRoLmNvcyhhbmdsZSkpIC0gKHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKSk7XG5cdHZhciBueSA9ICh0aGlzLnggKiBNYXRoLnNpbihhbmdsZSkpICsgKHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSk7XG5cblx0dGhpcy54ID0gbng7XG5cdHRoaXMueSA9IG55O1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxuVmljdG9yLnByb3RvdHlwZS5yb3RhdGVEZWcgPSBmdW5jdGlvbiAoYW5nbGUpIHtcblx0YW5nbGUgPSBkZWdyZWVzMnJhZGlhbihhbmdsZSk7XG5cdHJldHVybiB0aGlzLnJvdGF0ZShhbmdsZSk7XG59O1xuXG5WaWN0b3IucHJvdG90eXBlLnJvdGF0ZVRvID0gZnVuY3Rpb24ocm90YXRpb24pIHtcblx0cmV0dXJuIHRoaXMucm90YXRlKHJvdGF0aW9uLXRoaXMuYW5nbGUoKSk7XG59O1xuXG5WaWN0b3IucHJvdG90eXBlLnJvdGF0ZVRvRGVnID0gZnVuY3Rpb24ocm90YXRpb24pIHtcblx0cm90YXRpb24gPSBkZWdyZWVzMnJhZGlhbihyb3RhdGlvbik7XG5cdHJldHVybiB0aGlzLnJvdGF0ZVRvKHJvdGF0aW9uKTtcbn07XG5cblZpY3Rvci5wcm90b3R5cGUucm90YXRlQnkgPSBmdW5jdGlvbiAocm90YXRpb24pIHtcblx0dmFyIGFuZ2xlID0gdGhpcy5hbmdsZSgpICsgcm90YXRpb247XG5cblx0cmV0dXJuIHRoaXMucm90YXRlKGFuZ2xlKTtcbn07XG5cblZpY3Rvci5wcm90b3R5cGUucm90YXRlQnlEZWcgPSBmdW5jdGlvbiAocm90YXRpb24pIHtcblx0cm90YXRpb24gPSBkZWdyZWVzMnJhZGlhbihyb3RhdGlvbik7XG5cdHJldHVybiB0aGlzLnJvdGF0ZUJ5KHJvdGF0aW9uKTtcbn07XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZGlzdGFuY2Ugb2YgdGhlIFggYXhpcyBiZXR3ZWVuIHRoaXMgdmVjdG9yIGFuZCBhbm90aGVyXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMjAwLCA2MCk7XG4gKlxuICogICAgIHZlYzEuZGlzdGFuY2VYKHZlYzIpO1xuICogICAgIC8vID0+IC0xMDBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IERpc3RhbmNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmRpc3RhbmNlWCA9IGZ1bmN0aW9uICh2ZWMpIHtcblx0cmV0dXJuIHRoaXMueCAtIHZlYy54O1xufTtcblxuLyoqXG4gKiBTYW1lIGFzIGBkaXN0YW5jZVgoKWAgYnV0IGFsd2F5cyByZXR1cm5zIGFuIGFic29sdXRlIG51bWJlclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwMCwgNjApO1xuICpcbiAqICAgICB2ZWMxLmFic0Rpc3RhbmNlWCh2ZWMyKTtcbiAqICAgICAvLyA9PiAxMDBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmFic0Rpc3RhbmNlWCA9IGZ1bmN0aW9uICh2ZWMpIHtcblx0cmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VYKHZlYykpO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBkaXN0YW5jZSBvZiB0aGUgWSBheGlzIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMDAsIDYwKTtcbiAqXG4gKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gKiAgICAgLy8gPT4gLTEwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5kaXN0YW5jZVkgPSBmdW5jdGlvbiAodmVjKSB7XG5cdHJldHVybiB0aGlzLnkgLSB2ZWMueTtcbn07XG5cbi8qKlxuICogU2FtZSBhcyBgZGlzdGFuY2VZKClgIGJ1dCBhbHdheXMgcmV0dXJucyBhbiBhYnNvbHV0ZSBudW1iZXJcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMDAsIDYwKTtcbiAqXG4gKiAgICAgdmVjMS5kaXN0YW5jZVkodmVjMik7XG4gKiAgICAgLy8gPT4gMTBcbiAqXG4gKiBAcGFyYW0ge1ZpY3Rvcn0gdmVjdG9yIFRoZSBzZWNvbmQgdmVjdG9yXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFic29sdXRlIGRpc3RhbmNlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmFic0Rpc3RhbmNlWSA9IGZ1bmN0aW9uICh2ZWMpIHtcblx0cmV0dXJuIE1hdGguYWJzKHRoaXMuZGlzdGFuY2VZKHZlYykpO1xufTtcblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBldWNsaWRlYW4gZGlzdGFuY2UgYmV0d2VlbiB0aGlzIHZlY3RvciBhbmQgYW5vdGhlclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjMSA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmFyIHZlYzIgPSBuZXcgVmljdG9yKDIwMCwgNjApO1xuICpcbiAqICAgICB2ZWMxLmRpc3RhbmNlKHZlYzIpO1xuICogICAgIC8vID0+IDEwMC40OTg3NTYyMTEyMDg5XG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5kaXN0YW5jZSA9IGZ1bmN0aW9uICh2ZWMpIHtcblx0cmV0dXJuIE1hdGguc3FydCh0aGlzLmRpc3RhbmNlU3EodmVjKSk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHNxdWFyZWQgZXVjbGlkZWFuIGRpc3RhbmNlIGJldHdlZW4gdGhpcyB2ZWN0b3IgYW5kIGFub3RoZXJcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYzEgPSBuZXcgVmljdG9yKDEwMCwgNTApO1xuICogICAgIHZhciB2ZWMyID0gbmV3IFZpY3RvcigyMDAsIDYwKTtcbiAqXG4gKiAgICAgdmVjMS5kaXN0YW5jZVNxKHZlYzIpO1xuICogICAgIC8vID0+IDEwMTAwXG4gKlxuICogQHBhcmFtIHtWaWN0b3J9IHZlY3RvciBUaGUgc2Vjb25kIHZlY3RvclxuICogQHJldHVybiB7TnVtYmVyfSBEaXN0YW5jZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5kaXN0YW5jZVNxID0gZnVuY3Rpb24gKHZlYykge1xuXHR2YXIgZHggPSB0aGlzLmRpc3RhbmNlWCh2ZWMpLFxuXHRcdGR5ID0gdGhpcy5kaXN0YW5jZVkodmVjKTtcblxuXHRyZXR1cm4gZHggKiBkeCArIGR5ICogZHk7XG59O1xuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGxlbmd0aCBvciBtYWduaXR1ZGUgb2YgdGhlIHZlY3RvclxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqXG4gKiAgICAgdmVjLmxlbmd0aCgpO1xuICogICAgIC8vID0+IDExMS44MDMzOTg4NzQ5ODk0OFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gTGVuZ3RoIC8gTWFnbml0dWRlXG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIE1hdGguc3FydCh0aGlzLmxlbmd0aFNxKCkpO1xufTtcblxuLyoqXG4gKiBTcXVhcmVkIGxlbmd0aCAvIG1hZ25pdHVkZVxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqXG4gKiAgICAgdmVjLmxlbmd0aFNxKCk7XG4gKiAgICAgLy8gPT4gMTI1MDBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IExlbmd0aCAvIE1hZ25pdHVkZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5sZW5ndGhTcSA9IGZ1bmN0aW9uICgpIHtcblx0cmV0dXJuIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueTtcbn07XG5cblZpY3Rvci5wcm90b3R5cGUubWFnbml0dWRlID0gVmljdG9yLnByb3RvdHlwZS5sZW5ndGg7XG5cbi8qKlxuICogUmV0dXJucyBhIHRydWUgaWYgdmVjdG9yIGlzICgwLCAwKVxuICpcbiAqICMjIyBFeGFtcGxlczpcbiAqICAgICB2YXIgdmVjID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2ZWMuemVybygpO1xuICpcbiAqICAgICAvLyA9PiB0cnVlXG4gKlxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUuaXNaZXJvID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnggPT09IDAgJiYgdGhpcy55ID09PSAwO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgdHJ1ZSBpZiB0aGlzIHZlY3RvciBpcyB0aGUgc2FtZSBhcyBhbm90aGVyXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMxID0gbmV3IFZpY3RvcigxMDAsIDUwKTtcbiAqICAgICB2YXIgdmVjMiA9IG5ldyBWaWN0b3IoMTAwLCA1MCk7XG4gKiAgICAgdmVjMS5pc0VxdWFsVG8odmVjMik7XG4gKlxuICogICAgIC8vID0+IHRydWVcbiAqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS5pc0VxdWFsVG8gPSBmdW5jdGlvbih2ZWMyKSB7XG5cdHJldHVybiB0aGlzLnggPT09IHZlYzIueCAmJiB0aGlzLnkgPT09IHZlYzIueTtcbn07XG5cbi8qKlxuICogIyBVdGlsaXR5IE1ldGhvZHNcbiAqL1xuXG4vKipcbiAqIFJldHVybnMgYW4gc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAsIDIwKTtcbiAqXG4gKiAgICAgdmVjLnRvU3RyaW5nKCk7XG4gKiAgICAgLy8gPT4geDoxMCwgeToyMFxuICpcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHVibGljXG4gKi9cblZpY3Rvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdHJldHVybiAneDonICsgdGhpcy54ICsgJywgeTonICsgdGhpcy55O1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIGFycmF5IHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2ZWN0b3JcbiAqXG4gKiAjIyMgRXhhbXBsZXM6XG4gKiAgICAgdmFyIHZlYyA9IG5ldyBWaWN0b3IoMTAsIDIwKTtcbiAqXG4gKiAgICAgdmVjLnRvQXJyYXkoKTtcbiAqICAgICAvLyA9PiBbMTAsIDIwXVxuICpcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuVmljdG9yLnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4gWyB0aGlzLngsIHRoaXMueSBdO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmVjdG9yXG4gKlxuICogIyMjIEV4YW1wbGVzOlxuICogICAgIHZhciB2ZWMgPSBuZXcgVmljdG9yKDEwLCAyMCk7XG4gKlxuICogICAgIHZlYy50b09iamVjdCgpO1xuICogICAgIC8vID0+IHsgeDogMTAsIHk6IDIwIH1cbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5WaWN0b3IucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24gKCkge1xuXHRyZXR1cm4geyB4OiB0aGlzLngsIHk6IHRoaXMueSB9O1xufTtcblxuXG52YXIgZGVncmVlcyA9IDE4MCAvIE1hdGguUEk7XG5cbmZ1bmN0aW9uIHJhbmRvbSAobWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcbn1cblxuZnVuY3Rpb24gcmFkaWFuMmRlZ3JlZXMgKHJhZCkge1xuXHRyZXR1cm4gcmFkICogZGVncmVlcztcbn1cblxuZnVuY3Rpb24gZGVncmVlczJyYWRpYW4gKGRlZykge1xuXHRyZXR1cm4gZGVnIC8gZGVncmVlcztcbn1cbiJdfQ==
