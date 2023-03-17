/*!For license information please see 4.7a9e4473.chunk.js.LICENSE.txt*/
(this["webpackJsonp@pancakeswap/interface"] = this["webpackJsonp@pancakeswap/interface"] || []).push([
    [4], Array(565).concat([function(e, t, r) {
        "use strict";
        var n = r(2),
            i = r(35),
            o = r(36),
            a = r(324),
            s = r(46),
            u = r(47);
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = r(602),
            f = c.__importDefault(r(863)),
            l = c.__importDefault(r(999)),
            h = c.__importDefault(r(1021)),
            d = r(617),
            p = r(1039),
            v = r(1091),
            g = r(1095),
            _ = r(1096),
            m = r(1111),
            y = r(1127),
            w = r(1130),
            b = function(e) {
                s(r, e);
                var t = u(r);

                function r(e) {
                    var o;
                    if (i(this, r), (o = t.call(this, {
                            pollingInterval: e.pollingInterval || 8e3
                        })).bridge = "https://bridge.walletconnect.org", o.qrcode = !0, o.qrcodeModalOptions = void 0, o.rpc = null, o.infuraId = "", o.http = null, o.isConnecting = !1, o.connected = !1, o.connectCallbacks = [], o.accounts = [], o.chainId = 1, o.networkId = 1, o.rpcUrl = "", o.bridge = e.connector ? e.connector.bridge : e.bridge || "https://bridge.walletconnect.org", o.qrcode = "undefined" === typeof e.qrcode || !1 !== e.qrcode, o.qrcodeModalOptions = e.qrcodeModalOptions, o.wc = e.connector || new f.default({
                            bridge: o.bridge,
                            qrcodeModal: o.qrcode ? l.default : void 0,
                            qrcodeModalOptions: o.qrcodeModalOptions
                        }), o.rpc = e.rpc || null, !o.rpc && (!e.infuraId || "string" !== typeof e.infuraId || !e.infuraId.trim())) throw new Error("Missing one of the required parameters: rpc or infuraId");
                    return o.infuraId = e.infuraId || "", o.chainId = "undefined" !== typeof e.chainId ? e.chainId : 1, o.networkId = o.chainId, o.updateRpcUrl(o.chainId), o.addProvider(new g({
                        eth_hashrate: "0x00",
                        eth_mining: !1,
                        eth_syncing: !0,
                        net_listening: !0,
                        web3_clientVersion: "WalletConnect/v1.x.x/javascript"
                    })), o.addProvider(new v), o.addProvider(new w), o.addProvider(new _), o.addProvider(new y), o.addProvider(new m({
                        getAccounts: function(e) {
                            return c.__awaiter(a(o), void 0, void 0, n.mark((function t() {
                                var r, i;
                                return n.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.getWalletConnector();
                                        case 3:
                                            r = t.sent, (i = r.accounts) && i.length ? e(null, i) : e(new Error("Failed to get accounts")), t.next = 11;
                                            break;
                                        case 8:
                                            t.prev = 8, t.t0 = t.catch(0), e(t.t0);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 8]
                                ])
                            })))
                        },
                        processMessage: function(e, t) {
                            return c.__awaiter(a(o), void 0, void 0, n.mark((function r() {
                                var i, o;
                                return n.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, r.next = 3, this.getWalletConnector();
                                        case 3:
                                            return i = r.sent, r.next = 6, i.signMessage([e.from, e.data]);
                                        case 6:
                                            o = r.sent, t(null, o), r.next = 13;
                                            break;
                                        case 10:
                                            r.prev = 10, r.t0 = r.catch(0), t(r.t0);
                                        case 13:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, this, [
                                    [0, 10]
                                ])
                            })))
                        },
                        processPersonalMessage: function(e, t) {
                            return c.__awaiter(a(o), void 0, void 0, n.mark((function r() {
                                var i, o;
                                return n.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, r.next = 3, this.getWalletConnector();
                                        case 3:
                                            return i = r.sent, r.next = 6, i.signPersonalMessage([e.data, e.from]);
                                        case 6:
                                            o = r.sent, t(null, o), r.next = 13;
                                            break;
                                        case 10:
                                            r.prev = 10, r.t0 = r.catch(0), t(r.t0);
                                        case 13:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, this, [
                                    [0, 10]
                                ])
                            })))
                        },
                        processSignTransaction: function(e, t) {
                            return c.__awaiter(a(o), void 0, void 0, n.mark((function r() {
                                var i, o;
                                return n.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, r.next = 3, this.getWalletConnector();
                                        case 3:
                                            return i = r.sent, r.next = 6, i.signTransaction(e);
                                        case 6:
                                            o = r.sent, t(null, o), r.next = 13;
                                            break;
                                        case 10:
                                            r.prev = 10, r.t0 = r.catch(0), t(r.t0);
                                        case 13:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, this, [
                                    [0, 10]
                                ])
                            })))
                        },
                        processTransaction: function(e, t) {
                            return c.__awaiter(a(o), void 0, void 0, n.mark((function r() {
                                var i, o;
                                return n.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, r.next = 3, this.getWalletConnector();
                                        case 3:
                                            return i = r.sent, r.next = 6, i.sendTransaction(e);
                                        case 6:
                                            o = r.sent, t(null, o), r.next = 13;
                                            break;
                                        case 10:
                                            r.prev = 10, r.t0 = r.catch(0), t(r.t0);
                                        case 13:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, this, [
                                    [0, 10]
                                ])
                            })))
                        },
                        processTypedMessage: function(e, t) {
                            return c.__awaiter(a(o), void 0, void 0, n.mark((function r() {
                                var i, o;
                                return n.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, r.next = 3, this.getWalletConnector();
                                        case 3:
                                            return i = r.sent, r.next = 6, i.signTypedData([e.from, e.data]);
                                        case 6:
                                            o = r.sent, t(null, o), r.next = 13;
                                            break;
                                        case 10:
                                            r.prev = 10, r.t0 = r.catch(0), t(r.t0);
                                        case 13:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, this, [
                                    [0, 10]
                                ])
                            })))
                        }
                    })), o.addProvider({
                        handleRequest: function(e, t, r) {
                            return c.__awaiter(a(o), void 0, void 0, n.mark((function t() {
                                var i, o;
                                return n.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, this.handleRequest(e);
                                        case 3:
                                            i = t.sent, o = i.result, r(null, o), t.next = 11;
                                            break;
                                        case 8:
                                            t.prev = 8, t.t0 = t.catch(0), r(t.t0);
                                        case 11:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 8]
                                ])
                            })))
                        },
                        setEngine: function(e) {
                            return e
                        }
                    }), o
                }
                return o(r, [{
                    key: "isWalletConnect",
                    get: function() {
                        return !0
                    }
                }, {
                    key: "connector",
                    get: function() {
                        return this.wc
                    }
                }, {
                    key: "walletMeta",
                    get: function() {
                        return this.wc.peerMeta
                    }
                }, {
                    key: "enable",
                    value: function() {
                        var e = this;
                        return new Promise((function(t, r) {
                            return c.__awaiter(e, void 0, void 0, n.mark((function e() {
                                var i;
                                return n.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.getWalletConnector();
                                        case 3:
                                            if (!(i = e.sent)) {
                                                e.next = 10;
                                                break
                                            }
                                            this.start(), this.subscribeWalletConnector(), t(i.accounts), e.next = 11;
                                            break;
                                        case 10:
                                            return e.abrupt("return", r(new Error("Failed to connect to WalleConnect")));
                                        case 11:
                                            e.next = 16;
                                            break;
                                        case 13:
                                            return e.prev = 13, e.t0 = e.catch(0), e.abrupt("return", r(e.t0));
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 13]
                                ])
                            })))
                        }))
                    }
                }, {
                    key: "request",
                    value: function(e) {
                        return c.__awaiter(this, void 0, void 0, n.mark((function t() {
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.abrupt("return", this.send(e));
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "send",
                    value: function(e, t) {
                        return c.__awaiter(this, void 0, void 0, n.mark((function r() {
                            var i, o;
                            return n.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if ("string" !== typeof e) {
                                            r.next = 4;
                                            break
                                        }
                                        return i = e, o = t, r.abrupt("return", this.sendAsyncPromise(i, o));
                                    case 4:
                                        if (e = Object.assign({
                                                id: d.payloadId(),
                                                jsonrpc: "2.0"
                                            }, e), !t) {
                                            r.next = 8;
                                            break
                                        }
                                        return this.sendAsync(e, t), r.abrupt("return");
                                    case 8:
                                        return r.abrupt("return", this.sendAsyncPromise(e.method, e.params));
                                    case 9:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, this)
                        })))
                    }
                }, {
                    key: "onConnect",
                    value: function(e) {
                        this.connectCallbacks.push(e)
                    }
                }, {
                    key: "triggerConnect",
                    value: function(e) {
                        this.connectCallbacks && this.connectCallbacks.length && this.connectCallbacks.forEach((function(t) {
                            return t(e)
                        }))
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        return c.__awaiter(this, void 0, void 0, n.mark((function e() {
                            return n.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        this.close();
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })))
                    }
                }, {
                    key: "close",
                    value: function() {
                        return c.__awaiter(this, void 0, void 0, n.mark((function e() {
                            var t;
                            return n.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getWalletConnector({
                                            disableSessionCreation: !0
                                        });
                                    case 2:
                                        return t = e.sent, e.next = 5, t.killSession();
                                    case 5:
                                        return e.next = 7, this.onDisconnect();
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })))
                    }
                }, {
                    key: "handleRequest",
                    value: function(e) {
                        return c.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i, o;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, i = null, t.next = 4, this.getWalletConnector();
                                    case 4:
                                        o = t.sent, t.t0 = e.method, t.next = "wc_killSession" === t.t0 ? 8 : "eth_accounts" === t.t0 ? 12 : "eth_coinbase" === t.t0 ? 14 : "eth_chainId" === t.t0 ? 16 : "net_version" === t.t0 ? 18 : "eth_uninstallFilter" === t.t0 ? 20 : 23;
                                        break;
                                    case 8:
                                        return t.next = 10, this.close();
                                    case 10:
                                        return i = null, t.abrupt("break", 26);
                                    case 12:
                                        return i = o.accounts, t.abrupt("break", 26);
                                    case 14:
                                        return i = o.accounts[0], t.abrupt("break", 26);
                                    case 16:
                                        return i = o.chainId, t.abrupt("break", 26);
                                    case 18:
                                        return i = o.networkId || o.chainId, t.abrupt("break", 26);
                                    case 20:
                                        return this.sendAsync(e, (function(e) {
                                            return e
                                        })), i = !0, t.abrupt("break", 26);
                                    case 23:
                                        return t.next = 25, this.handleOtherRequests(e);
                                    case 25:
                                        r = t.sent;
                                    case 26:
                                        if (!r) {
                                            t.next = 28;
                                            break
                                        }
                                        return t.abrupt("return", r);
                                    case 28:
                                        return t.abrupt("return", this.formatResponse(e, i));
                                    case 31:
                                        throw t.prev = 31, t.t1 = t.catch(0), this.emit("error", t.t1), t.t1;
                                    case 35:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [0, 31]
                            ])
                        })))
                    }
                }, {
                    key: "handleOtherRequests",
                    value: function(e) {
                        return c.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (d.signingMethods.includes(e.method) || !e.method.startsWith("eth_")) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", this.handleReadRequests(e));
                                    case 2:
                                        return t.next = 4, this.getWalletConnector();
                                    case 4:
                                        return r = t.sent, t.next = 7, r.sendCustomRequest(e);
                                    case 7:
                                        return i = t.sent, t.abrupt("return", this.formatResponse(e, i));
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "handleReadRequests",
                    value: function(e) {
                        return c.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this.http) {
                                            t.next = 4;
                                            break
                                        }
                                        throw r = new Error("HTTP Connection not available"), this.emit("error", r), r;
                                    case 4:
                                        return t.abrupt("return", this.http.send(e));
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "formatResponse",
                    value: function(e, t) {
                        return {
                            id: e.id,
                            jsonrpc: e.jsonrpc,
                            result: t
                        }
                    }
                }, {
                    key: "getWalletConnector",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = t.disableSessionCreation,
                            n = void 0 !== r && r;
                        return new Promise((function(t, r) {
                            var i = e.wc;
                            if (e.isConnecting) e.onConnect((function(e) {
                                return t(e)
                            }));
                            else if (i.connected || n) e.connected || (e.connected = !0, e.updateState(i.session)), t(i);
                            else {
                                e.isConnecting = !0;
                                var o = e.chainId ? {
                                    chainId: e.chainId
                                } : void 0;
                                i.on("modal_closed", (function() {
                                    r(new Error("User closed modal"))
                                })), i.createSession(o).then((function() {
                                    i.on("connect", (function(n, o) {
                                        if (n) return e.isConnecting = !1, r(n);
                                        e.isConnecting = !1, e.connected = !0, o && e.updateState(o.params[0]), e.emit("connect"), e.triggerConnect(i), t(i)
                                    }))
                                })).catch((function(t) {
                                    e.isConnecting = !1, r(t)
                                }))
                            }
                        }))
                    }
                }, {
                    key: "subscribeWalletConnector",
                    value: function() {
                        return c.__awaiter(this, void 0, void 0, n.mark((function e() {
                            var t, r = this;
                            return n.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.getWalletConnector();
                                    case 2:
                                        (t = e.sent).on("disconnect", (function(e) {
                                            e ? r.emit("error", e) : r.onDisconnect()
                                        })), t.on("session_update", (function(e, t) {
                                            e ? r.emit("error", e) : r.updateState(t.params[0])
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })))
                    }
                }, {
                    key: "onDisconnect",
                    value: function() {
                        return c.__awaiter(this, void 0, void 0, n.mark((function e() {
                            return n.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, this.stop();
                                    case 2:
                                        this.emit("close", 1e3, "Connection closed"), this.emit("disconnect", 1e3, "Connection disconnected");
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })))
                    }
                }, {
                    key: "updateState",
                    value: function(e) {
                        return c.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i, o, a;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        r = e.accounts, i = e.chainId, o = e.networkId, a = e.rpcUrl, (!this.accounts || r && this.accounts !== r) && (this.accounts = r, this.emit("accountsChanged", r)), (!this.chainId || i && this.chainId !== i) && (this.chainId = i, this.emit("chainChanged", i)), (!this.networkId || o && this.networkId !== o) && (this.networkId = o, this.emit("networkChanged", o)), this.updateRpcUrl(this.chainId, a || "");
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "updateRpcUrl",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = {
                                1: "mainnet",
                                3: "ropsten",
                                4: "rinkeby",
                                5: "goerli",
                                42: "kovan"
                            },
                            n = r[e];
                        t || (this.rpc && this.rpc[e] ? t = this.rpc[e] : n && (t = "https://".concat(n, ".infura.io/v3/").concat(this.infuraId))), t ? (this.rpcUrl = t, this.updateHttpConnection()) : this.emit("error", new Error("No RPC Url available for chainId: ".concat(e)))
                    }
                }, {
                    key: "updateHttpConnection",
                    value: function() {
                        var e = this;
                        this.rpcUrl && (this.http = new h.default(this.rpcUrl), this.http.on("payload", (function(t) {
                            return e.emit("payload", t)
                        })), this.http.on("error", (function(t) {
                            return e.emit("error", t)
                        })))
                    }
                }, {
                    key: "sendAsyncPromise",
                    value: function(e, t) {
                        var r = this;
                        return new Promise((function(n, i) {
                            r.sendAsync({
                                id: d.payloadId(),
                                jsonrpc: "2.0",
                                method: e,
                                params: t || []
                            }, (function(e, t) {
                                e ? i(e) : n(t.result)
                            }))
                        }))
                    }
                }]), r
            }(p);
        t.default = b
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(664),
                i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = i(r(757)),
                a = i(r(877)),
                s = "hex",
                u = "utf8",
                c = "0";

            function f(e) {
                return new Uint8Array(e)
            }

            function l(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = e.toString(s);
                return t ? j(r) : r
            }

            function h(e) {
                return e.toString(u)
            }

            function d(e) {
                return e.readUIntBE(0, e.length)
            }

            function p(e) {
                return a.default(e)
            }

            function v(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return l(p(e), t)
            }

            function g(e) {
                return h(p(e))
            }

            function _(e) {
                return d(p(e))
            }

            function m(e) {
                return Array.from(e).map(k).join("")
            }

            function y(t) {
                return e.from(U(t), s)
            }

            function w(e) {
                return f(y(e))
            }

            function b(e) {
                return m(w(e))
            }

            function E(t) {
                return e.from(t, u)
            }

            function x(e) {
                return f(E(e))
            }

            function k(e) {
                return B((e >>> 0).toString(2))
            }

            function S(e) {
                return p(R(e))
            }

            function R(e) {
                return new Uint8Array(I(e).map((function(e) {
                    return parseInt(e, 2)
                })))
            }

            function A(e, t) {
                return v(R(e), t)
            }

            function M(e) {
                return !("string" !== typeof e || !new RegExp(/^[01]+$/).test(e)) && e.length % 8 === 0
            }

            function T(e, t) {
                return !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
            }

            function O(t) {
                return e.isBuffer(t)
            }

            function C(e) {
                return o.default.strict(e) && !O(e)
            }

            function P(e) {
                return !C(e) && !O(e) && "undefined" !== typeof e.byteLength
            }

            function N(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
                    r = e % t;
                return r ? (e - r) / t * t + t : e
            }

            function I(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
                    r = B(e).match(new RegExp(".{".concat(t, "}"), "gi"));
                return Array.from(r || [])
            }

            function L(e) {
                return I(e).map(D).join("")
            }

            function B(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
                return H(e, N(e.length, t), r)
            }

            function H(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
                return q(e, t, !0, r)
            }

            function U(e) {
                return e.replace(/^0x/, "")
            }

            function j(e) {
                return e.startsWith("0x") ? e : "0x".concat(e)
            }

            function D(e) {
                return e.split("").reverse().join("")
            }

            function q(e, t, r) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c,
                    i = t - e.length,
                    o = e;
                if (i > 0) {
                    var a = n.repeat(i);
                    o = r ? a + e : e + a
                }
                return o
            }
            t.bufferToArray = f, t.bufferToHex = l, t.bufferToUtf8 = h, t.bufferToNumber = d, t.bufferToBinary = function(e) {
                return m(f(e))
            }, t.arrayToBuffer = p, t.arrayToHex = v, t.arrayToUtf8 = g, t.arrayToNumber = _, t.arrayToBinary = m, t.hexToBuffer = y, t.hexToArray = w, t.hexToUtf8 = function(e) {
                return h(y(e))
            }, t.hexToNumber = function(e) {
                return _(w(e))
            }, t.hexToBinary = b, t.utf8ToBuffer = E, t.utf8ToArray = x, t.utf8ToHex = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return l(E(e), t)
            }, t.utf8ToNumber = function(e) {
                var t = parseInt(e, 10);
                return function(e, t) {
                    if (!e) throw new Error(t)
                }(! function(e) {
                    return "undefined" === typeof e
                }(t), "Number can only safely store up to 53 bits"), t
            }, t.utf8ToBinary = function(e) {
                return m(x(e))
            }, t.numberToBuffer = function(e) {
                return S(k(e))
            }, t.numberToArray = function(e) {
                return R(k(e))
            }, t.numberToHex = function(e, t) {
                return A(k(e), t)
            }, t.numberToUtf8 = function(e) {
                return "".concat(e)
            }, t.numberToBinary = k, t.binaryToBuffer = S, t.binaryToArray = R, t.binaryToHex = A, t.binaryToUtf8 = function(e) {
                return g(R(e))
            }, t.binaryToNumber = function(e) {
                return _(R(e))
            }, t.isBinaryString = M, t.isHexString = T, t.isBuffer = O, t.isTypedArray = C, t.isArrayBuffer = P, t.getType = function(e) {
                return O(e) ? "buffer" : C(e) ? "typed-array" : P(e) ? "array-buffer" : Array.isArray(e) ? "array" : typeof e
            }, t.getEncoding = function(e) {
                return M(e) ? "binary" : T(e) ? s : u
            }, t.concatBuffers = function() {
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                var i = e.concat(r);
                return i
            }, t.concatArrays = function() {
                for (var e = [], t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
                return r.forEach((function(t) {
                    return e = e.concat(Array.from(t))
                })), new Uint8Array(n(e))
            }, t.trimLeft = function(e, t) {
                var r = e.length - t;
                return r > 0 && (e = e.slice(r)), e
            }, t.trimRight = function(e, t) {
                return e.slice(0, t)
            }, t.calcByteLength = N, t.splitBytes = I, t.swapBytes = L, t.swapHex = function(e) {
                return A(L(b(e)))
            }, t.sanitizeBytes = B, t.padLeft = H, t.padRight = function(e, t) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c;
                return q(e, t, !1, r)
            }, t.removeHexPrefix = U, t.addHexPrefix = j, t.sanitizeHex = function(e) {
                return (e = B(e = U(e), 2)) && (e = j(e)), e
            }, t.removeHexLeadingZeros = function(e) {
                var t = e.startsWith("0x");
                return e = (e = U(e)).startsWith(c) ? e.substring(1) : e, t ? j(e) : e
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }),
            i = this && this.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), i(r(665), t), i(r(762), t), i(r(987), t), i(r(988), t), i(r(989), t)
    }, , , function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(602);
        n.__exportStar(r(751), t), n.__exportStar(r(755), t), n.__exportStar(r(756), t), n.__exportStar(r(878), t), n.__exportStar(r(758), t), n.__exportStar(r(893), t), n.__exportStar(r(894), t), n.__exportStar(r(761), t), n.__exportStar(r(760), t)
    }, , , , , function(e, t) {
        var r, n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
        t.getSymbolSize = function(e) {
            if (!e) throw new Error('"version" cannot be null or undefined');
            if (e < 1 || e > 40) throw new Error('"version" should be in range from 1 to 40');
            return 4 * e + 17
        }, t.getSymbolTotalCodewords = function(e) {
            return n[e]
        }, t.getBCHDigit = function(e) {
            for (var t = 0; 0 !== e;) t++, e >>>= 1;
            return t
        }, t.setToSJISFunction = function(e) {
            if ("function" !== typeof e) throw new Error('"toSJISFunc" is not a valid function.');
            r = e
        }, t.isKanjiModeEnabled = function() {
            return "undefined" !== typeof r
        }, t.toSJIS = function(e) {
            return r(e)
        }
    }, function(e, t, r) {
        var n = r(821),
            i = r(822);
        t.NUMERIC = {
            id: "Numeric",
            bit: 1,
            ccBits: [10, 12, 14]
        }, t.ALPHANUMERIC = {
            id: "Alphanumeric",
            bit: 2,
            ccBits: [9, 11, 13]
        }, t.BYTE = {
            id: "Byte",
            bit: 4,
            ccBits: [8, 16, 16]
        }, t.KANJI = {
            id: "Kanji",
            bit: 8,
            ccBits: [8, 10, 12]
        }, t.MIXED = {
            bit: -1
        }, t.getCharCountIndicator = function(e, t) {
            if (!e.ccBits) throw new Error("Invalid mode: " + e);
            if (!n.isValid(t)) throw new Error("Invalid version: " + t);
            return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
        }, t.getBestModeForData = function(e) {
            return i.testNumeric(e) ? t.NUMERIC : i.testAlphanumeric(e) ? t.ALPHANUMERIC : i.testKanji(e) ? t.KANJI : t.BYTE
        }, t.toString = function(e) {
            if (e && e.id) return e.id;
            throw new Error("Invalid mode")
        }, t.isValid = function(e) {
            return e && e.bit && e.ccBits
        }, t.from = function(e, r) {
            if (t.isValid(e)) return e;
            try {
                return function(e) {
                    if ("string" !== typeof e) throw new Error("Param is not a string");
                    switch (e.toLowerCase()) {
                        case "numeric":
                            return t.NUMERIC;
                        case "alphanumeric":
                            return t.ALPHANUMERIC;
                        case "kanji":
                            return t.KANJI;
                        case "byte":
                            return t.BYTE;
                        default:
                            throw new Error("Unknown mode: " + e)
                    }
                }(e)
            } catch (n) {
                return r
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isAsync = void 0;
        var n, i = r(1079),
            o = (n = i) && n.__esModule ? n : {
                default: n
            };
        var a = "function" === typeof Symbol;

        function s(e) {
            return a && "AsyncFunction" === e[Symbol.toStringTag]
        }
        t.default = function(e) {
            return s(e) ? (0, o.default)(e) : e
        }, t.isAsync = s
    }, , , , , , , , , , , , function(e, t, r) {
        "use strict";
        var n = r(715);
        o.TYPED_ARRAY_SUPPORT = function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === e.foo()
            } catch (t) {
                return !1
            }
        }();
        var i = o.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;

        function o(e, t, r) {
            return o.TYPED_ARRAY_SUPPORT || this instanceof o ? "number" === typeof e ? u(this, e) : function(e, t, r, n) {
                if ("number" === typeof t) throw new TypeError('"value" argument must not be a number');
                if ("undefined" !== typeof ArrayBuffer && t instanceof ArrayBuffer) return function(e, t, r, n) {
                    if (r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
                    var i;
                    i = void 0 === r && void 0 === n ? new Uint8Array(t) : void 0 === n ? new Uint8Array(t, r) : new Uint8Array(t, r, n);
                    o.TYPED_ARRAY_SUPPORT ? i.__proto__ = o.prototype : i = c(e, i);
                    return i
                }(e, t, r, n);
                if ("string" === typeof t) return function(e, t) {
                    var r = 0 | l(t),
                        n = s(e, r),
                        i = n.write(t);
                    i !== r && (n = n.slice(0, i));
                    return n
                }(e, t);
                return function(e, t) {
                    if (o.isBuffer(t)) {
                        var r = 0 | a(t.length),
                            n = s(e, r);
                        return 0 === n.length || t.copy(n, 0, 0, r), n
                    }
                    if (t) {
                        if ("undefined" !== typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" !== typeof t.length || (i = t.length) !== i ? s(e, 0) : c(e, t);
                        if ("Buffer" === t.type && Array.isArray(t.data)) return c(e, t.data)
                    }
                    var i;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }(this, e, t, r) : new o(e, t, r)
        }

        function a(e) {
            if (e >= i) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
            return 0 | e
        }

        function s(e, t) {
            var r;
            return o.TYPED_ARRAY_SUPPORT ? (r = new Uint8Array(t)).__proto__ = o.prototype : (null === (r = e) && (r = new o(t)), r.length = t), r
        }

        function u(e, t) {
            var r = s(e, t < 0 ? 0 : 0 | a(t));
            if (!o.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n) r[n] = 0;
            return r
        }

        function c(e, t) {
            for (var r = t.length < 0 ? 0 : 0 | a(t.length), n = s(e, r), i = 0; i < r; i += 1) n[i] = 255 & t[i];
            return n
        }

        function f(e, t) {
            var r;
            t = t || 1 / 0;
            for (var n = e.length, i = null, o = [], a = 0; a < n; ++a) {
                if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                    if (!i) {
                        if (r > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === n) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, r < 128) {
                    if ((t -= 1) < 0) break;
                    o.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return o
        }

        function l(e) {
            return o.isBuffer(e) ? e.length : "undefined" !== typeof ArrayBuffer && "function" === typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer) ? e.byteLength : ("string" !== typeof e && (e = "" + e), 0 === e.length ? 0 : f(e).length)
        }
        o.TYPED_ARRAY_SUPPORT && (o.prototype.__proto__ = Uint8Array.prototype, o.__proto__ = Uint8Array, "undefined" !== typeof Symbol && Symbol.species && o[Symbol.species] === o && Object.defineProperty(o, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1
        })), o.prototype.write = function(e, t, r) {
            void 0 === t || void 0 === r && "string" === typeof t ? (r = this.length, t = 0) : isFinite(t) && (t |= 0, isFinite(r) ? r |= 0 : r = void 0);
            var n = this.length - t;
            if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            return function(e, t, r, n) {
                return function(e, t, r, n) {
                    for (var i = 0; i < n && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                    return i
                }(f(t, e.length - r), e, r, n)
            }(this, e, t, r)
        }, o.prototype.slice = function(e, t) {
            var r, n = this.length;
            if ((e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e), o.TYPED_ARRAY_SUPPORT)(r = this.subarray(e, t)).__proto__ = o.prototype;
            else {
                var i = t - e;
                r = new o(i, void 0);
                for (var a = 0; a < i; ++a) r[a] = this[a + e]
            }
            return r
        }, o.prototype.copy = function(e, t, r, n) {
            if (r || (r = 0), n || 0 === n || (n = this.length), t >= e.length && (t = e.length), t || (t = 0), n > 0 && n < r && (n = r), n === r) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
            if (n < 0) throw new RangeError("sourceEnd out of bounds");
            n > this.length && (n = this.length), e.length - t < n - r && (n = e.length - t + r);
            var i, a = n - r;
            if (this === e && r < t && t < n)
                for (i = a - 1; i >= 0; --i) e[i + t] = this[i + r];
            else if (a < 1e3 || !o.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < a; ++i) e[i + t] = this[i + r];
            else Uint8Array.prototype.set.call(e, this.subarray(r, r + a), t);
            return a
        }, o.prototype.fill = function(e, t, r) {
            if ("string" === typeof e) {
                if ("string" === typeof t ? (t = 0, r = this.length) : "string" === typeof r && (r = this.length), 1 === e.length) {
                    var n = e.charCodeAt(0);
                    n < 256 && (e = n)
                }
            } else "number" === typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
            if (r <= t) return this;
            var i;
            if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" === typeof e)
                for (i = t; i < r; ++i) this[i] = e;
            else {
                var a = o.isBuffer(e) ? e : new o(e),
                    s = a.length;
                for (i = 0; i < r - t; ++i) this[i + t] = a[i % s]
            }
            return this
        }, o.concat = function(e, t) {
            if (!n(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return s(null, 0);
            var r;
            if (void 0 === t)
                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
            var i = u(null, t),
                a = 0;
            for (r = 0; r < e.length; ++r) {
                var c = e[r];
                if (!o.isBuffer(c)) throw new TypeError('"list" argument must be an Array of Buffers');
                c.copy(i, a), a += c.length
            }
            return i
        }, o.byteLength = l, o.prototype._isBuffer = !0, o.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, e.exports.alloc = function(e) {
            var t = new o(e);
            return t.fill(0), t
        }, e.exports.from = function(e) {
            return new o(e)
        }
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            var n = r(830),
                i = r(1053);

            function o(e) {
                var t = e;
                if ("string" !== typeof t) throw new Error("[ethjs-util] while padding to even, value must be string, is currently " + typeof t + ", while padToEven.");
                return t.length % 2 && (t = "0" + t), t
            }

            function a(e) {
                return "0x" + e.toString(16)
            }
            e.exports = {
                arrayContainsArray: function(e, t, r) {
                    if (!0 !== Array.isArray(e)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'superset' to be an array got type '" + typeof e + "'");
                    if (!0 !== Array.isArray(t)) throw new Error("[ethjs-util] method arrayContainsArray requires input 'subset' to be an array got type '" + typeof t + "'");
                    return t[Boolean(r) ? "some" : "every"]((function(t) {
                        return e.indexOf(t) >= 0
                    }))
                },
                intToBuffer: function(e) {
                    var r = a(e);
                    return new t(o(r.slice(2)), "hex")
                },
                getBinarySize: function(e) {
                    if ("string" !== typeof e) throw new Error("[ethjs-util] while getting binary size, method getBinarySize requires input 'str' to be type String, got '" + typeof e + "'.");
                    return t.byteLength(e, "utf8")
                },
                isHexPrefixed: n,
                stripHexPrefix: i,
                padToEven: o,
                intToHex: a,
                fromAscii: function(e) {
                    for (var t = "", r = 0; r < e.length; r++) {
                        var n = e.charCodeAt(r).toString(16);
                        t += n.length < 2 ? "0" + n : n
                    }
                    return "0x" + t
                },
                fromUtf8: function(e) {
                    return "0x" + o(new t(e, "utf8").toString("hex")).replace(/^0+|0+$/g, "")
                },
                toAscii: function(e) {
                    var t = "",
                        r = 0,
                        n = e.length;
                    for ("0x" === e.substring(0, 2) && (r = 2); r < n; r += 2) {
                        var i = parseInt(e.substr(r, 2), 16);
                        t += String.fromCharCode(i)
                    }
                    return t
                },
                toUtf8: function(e) {
                    return new t(o(i(e).replace(/^0+|0+$/g, "")), "hex").toString("utf8")
                },
                getKeys: function(e, t, r) {
                    if (!Array.isArray(e)) throw new Error("[ethjs-util] method getKeys expecting type Array as 'params' input, got '" + typeof e + "'");
                    if ("string" !== typeof t) throw new Error("[ethjs-util] method getKeys expecting type String for input 'key' got '" + typeof t + "'.");
                    for (var n = [], i = 0; i < e.length; i++) {
                        var o = e[i][t];
                        if (r && !o) o = "";
                        else if ("string" !== typeof o) throw new Error("invalid abi");
                        n.push(o)
                    }
                    return n
                },
                isHexString: function(e, t) {
                    return !("string" !== typeof e || !e.match(/^0x[0-9A-Fa-f]*$/)) && (!t || e.length === 2 + 2 * t)
                }
            }
        }).call(this, r(321).Buffer)
    }, , , , , , , , , , , function(e, t, r) {
        "use strict";
        var n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            i = r(827),
            o = i.keccak224,
            a = i.keccak384,
            s = i.keccak256,
            u = i.keccak512,
            c = r(1047),
            f = r(718),
            l = r(673),
            h = r(25),
            d = r(619),
            p = r(599).Buffer;
        Object.assign(t, r(637)), t.MAX_INTEGER = new h("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), t.TWO_POW256 = new h("10000000000000000000000000000000000000000000000000000000000000000", 16), t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.SHA3_NULL_S = t.KECCAK256_NULL_S, t.KECCAK256_NULL = p.from(t.KECCAK256_NULL_S, "hex"), t.SHA3_NULL = t.KECCAK256_NULL, t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.SHA3_RLP_ARRAY_S = t.KECCAK256_RLP_ARRAY_S, t.KECCAK256_RLP_ARRAY = p.from(t.KECCAK256_RLP_ARRAY_S, "hex"), t.SHA3_RLP_ARRAY = t.KECCAK256_RLP_ARRAY, t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.SHA3_RLP_S = t.KECCAK256_RLP_S, t.KECCAK256_RLP = p.from(t.KECCAK256_RLP_S, "hex"), t.SHA3_RLP = t.KECCAK256_RLP, t.BN = h, t.rlp = l, t.secp256k1 = c, t.zeros = function(e) {
            return p.allocUnsafe(e).fill(0)
        }, t.zeroAddress = function() {
            var e = t.zeros(20);
            return t.bufferToHex(e)
        }, t.setLengthLeft = t.setLength = function(e, r, n) {
            var i = t.zeros(r);
            return e = t.toBuffer(e), n ? e.length < r ? (e.copy(i), i) : e.slice(0, r) : e.length < r ? (e.copy(i, r - e.length), i) : e.slice(-r)
        }, t.setLengthRight = function(e, r) {
            return t.setLength(e, r, !0)
        }, t.unpad = t.stripZeros = function(e) {
            for (var r = (e = t.stripHexPrefix(e))[0]; e.length > 0 && "0" === r.toString();) r = (e = e.slice(1))[0];
            return e
        }, t.toBuffer = function(e) {
            if (!p.isBuffer(e))
                if (Array.isArray(e)) e = p.from(e);
                else if ("string" === typeof e) e = t.isHexString(e) ? p.from(t.padToEven(t.stripHexPrefix(e)), "hex") : p.from(e);
            else if ("number" === typeof e) e = t.intToBuffer(e);
            else if (null === e || void 0 === e) e = p.allocUnsafe(0);
            else if (h.isBN(e)) e = e.toArrayLike(p);
            else {
                if (!e.toArray) throw new Error("invalid type");
                e = p.from(e.toArray())
            }
            return e
        }, t.bufferToInt = function(e) {
            return new h(t.toBuffer(e)).toNumber()
        }, t.bufferToHex = function(e) {
            return "0x" + (e = t.toBuffer(e)).toString("hex")
        }, t.fromSigned = function(e) {
            return new h(e).fromTwos(256)
        }, t.toUnsigned = function(e) {
            return p.from(e.toTwos(256).toArray())
        }, t.keccak = function(e, r) {
            switch (e = t.toBuffer(e), r || (r = 256), r) {
                case 224:
                    return o(e);
                case 256:
                    return s(e);
                case 384:
                    return a(e);
                case 512:
                    return u(e);
                default:
                    throw new Error("Invald algorithm: keccak" + r)
            }
        }, t.keccak256 = function(e) {
            return t.keccak(e)
        }, t.sha3 = t.keccak, t.sha256 = function(e) {
            return e = t.toBuffer(e), d("sha256").update(e).digest()
        }, t.ripemd160 = function(e, r) {
            e = t.toBuffer(e);
            var n = d("rmd160").update(e).digest();
            return !0 === r ? t.setLength(n, 32) : n
        }, t.rlphash = function(e) {
            return t.keccak(l.encode(e))
        }, t.isValidPrivate = function(e) {
            return c.privateKeyVerify(e)
        }, t.isValidPublic = function(e, t) {
            return 64 === e.length ? c.publicKeyVerify(p.concat([p.from([4]), e])) : !!t && c.publicKeyVerify(e)
        }, t.pubToAddress = t.publicToAddress = function(e, r) {
            return e = t.toBuffer(e), r && 64 !== e.length && (e = c.publicKeyConvert(e, !1).slice(1)), f(64 === e.length), t.keccak(e).slice(-20)
        };
        var v = t.privateToPublic = function(e) {
            return e = t.toBuffer(e), c.publicKeyCreate(e, !1).slice(1)
        };
        t.importPublic = function(e) {
            return 64 !== (e = t.toBuffer(e)).length && (e = c.publicKeyConvert(e, !1).slice(1)), e
        }, t.ecsign = function(e, t) {
            var r = c.sign(e, t),
                n = {};
            return n.r = r.signature.slice(0, 32), n.s = r.signature.slice(32, 64), n.v = r.recovery + 27, n
        }, t.hashPersonalMessage = function(e) {
            var r = t.toBuffer("\x19Ethereum Signed Message:\n" + e.length.toString());
            return t.keccak(p.concat([r, e]))
        }, t.ecrecover = function(e, r, n, i) {
            var o = p.concat([t.setLength(n, 32), t.setLength(i, 32)], 64),
                a = r - 27;
            if (0 !== a && 1 !== a) throw new Error("Invalid signature v value");
            var s = c.recover(e, o, a);
            return c.publicKeyConvert(s, !1).slice(1)
        }, t.toRpcSig = function(e, r, n) {
            if (27 !== e && 28 !== e) throw new Error("Invalid recovery id");
            return t.bufferToHex(p.concat([t.setLengthLeft(r, 32), t.setLengthLeft(n, 32), t.toBuffer(e - 27)]))
        }, t.fromRpcSig = function(e) {
            if (65 !== (e = t.toBuffer(e)).length) throw new Error("Invalid signature length");
            var r = e[64];
            return r < 27 && (r += 27), {
                v: r,
                r: e.slice(0, 32),
                s: e.slice(32, 64)
            }
        }, t.privateToAddress = function(e) {
            return t.publicToAddress(v(e))
        }, t.isValidAddress = function(e) {
            return /^0x[0-9a-fA-F]{40}$/.test(e)
        }, t.isZeroAddress = function(e) {
            return t.zeroAddress() === t.addHexPrefix(e)
        }, t.toChecksumAddress = function(e) {
            e = t.stripHexPrefix(e).toLowerCase();
            for (var r = t.keccak(e).toString("hex"), n = "0x", i = 0; i < e.length; i++) parseInt(r[i], 16) >= 8 ? n += e[i].toUpperCase() : n += e[i];
            return n
        }, t.isValidChecksumAddress = function(e) {
            return t.isValidAddress(e) && t.toChecksumAddress(e) === e
        }, t.generateAddress = function(e, r) {
            return e = t.toBuffer(e), r = (r = new h(r)).isZero() ? null : p.from(r.toArray()), t.rlphash([e, r]).slice(-20)
        }, t.isPrecompiled = function(e) {
            var r = t.unpad(e);
            return 1 === r.length && r[0] >= 1 && r[0] <= 8
        }, t.addHexPrefix = function(e) {
            return "string" !== typeof e || t.isHexPrefixed(e) ? e : "0x" + e
        }, t.isValidSignature = function(e, t, r, n) {
            var i = new h("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                o = new h("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
            return 32 === t.length && 32 === r.length && ((27 === e || 28 === e) && (t = new h(t), r = new h(r), !(t.isZero() || t.gt(o) || r.isZero() || r.gt(o)) && (!1 !== n || 1 !== new h(r).cmp(i))))
        }, t.baToJSON = function(e) {
            if (p.isBuffer(e)) return "0x" + e.toString("hex");
            if (e instanceof Array) {
                for (var r = [], n = 0; n < e.length; n++) r.push(t.baToJSON(e[n]));
                return r
            }
        }, t.defineProperties = function(e, r, i) {
            if (e.raw = [], e._fields = [], e.toJSON = function(r) {
                    if (r) {
                        var n = {};
                        return e._fields.forEach((function(t) {
                            n[t] = "0x" + e[t].toString("hex")
                        })), n
                    }
                    return t.baToJSON(this.raw)
                }, e.serialize = function() {
                    return l.encode(e.raw)
                }, r.forEach((function(r, n) {
                    function i() {
                        return e.raw[n]
                    }

                    function o(i) {
                        "00" !== (i = t.toBuffer(i)).toString("hex") || r.allowZero || (i = p.allocUnsafe(0)), r.allowLess && r.length ? (i = t.stripZeros(i), f(r.length >= i.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === i.length || !r.length || f(r.length === i.length, "The field " + r.name + " must have byte length of " + r.length), e.raw[n] = i
                    }
                    e._fields.push(r.name), Object.defineProperty(e, r.name, {
                        enumerable: !0,
                        configurable: !0,
                        get: i,
                        set: o
                    }), r.default && (e[r.name] = r.default), r.alias && Object.defineProperty(e, r.alias, {
                        enumerable: !1,
                        configurable: !0,
                        set: o,
                        get: i
                    })
                })), i)
                if ("string" === typeof i && (i = p.from(t.stripHexPrefix(i), "hex")), p.isBuffer(i) && (i = l.decode(i)), Array.isArray(i)) {
                    if (i.length > e._fields.length) throw new Error("wrong number of fields in data");
                    i.forEach((function(r, n) {
                        e[e._fields[n]] = t.toBuffer(r)
                    }))
                } else {
                    if ("object" !== ("undefined" === typeof i ? "undefined" : n(i))) throw new Error("invalid data");
                    var o = Object.keys(i);
                    r.forEach((function(t) {
                        -1 !== o.indexOf(t.name) && (e[t.name] = i[t.name]), -1 !== o.indexOf(t.alias) && (e[t.alias] = i[t.alias])
                    }))
                }
        }
    }, , function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.baToJSON = t.addHexPrefix = t.toUnsigned = t.fromSigned = t.bufferToHex = t.bufferToInt = t.toBuffer = t.stripZeros = t.unpad = t.setLengthRight = t.setLength = t.setLengthLeft = t.zeros = void 0;
            var n = r(637),
                i = r(25);
            t.zeros = function(t) {
                return e.allocUnsafe(t).fill(0)
            }, t.setLengthLeft = function(e, r, n) {
                void 0 === n && (n = !1);
                var i = t.zeros(r);
                return e = t.toBuffer(e), n ? e.length < r ? (e.copy(i), i) : e.slice(0, r) : e.length < r ? (e.copy(i, r - e.length), i) : e.slice(-r)
            }, t.setLength = t.setLengthLeft, t.setLengthRight = function(e, r) {
                return t.setLength(e, r, !0)
            }, t.unpad = function(e) {
                for (var t = (e = n.stripHexPrefix(e))[0]; e.length > 0 && "0" === t.toString();) t = (e = e.slice(1))[0];
                return e
            }, t.stripZeros = t.unpad, t.toBuffer = function(t) {
                if (!e.isBuffer(t))
                    if (Array.isArray(t)) t = e.from(t);
                    else if ("string" === typeof t) {
                    if (!n.isHexString(t)) throw new Error("Cannot convert string to buffer. toBuffer only supports 0x-prefixed hex strings and this string was given: " + t);
                    t = e.from(n.padToEven(n.stripHexPrefix(t)), "hex")
                } else if ("number" === typeof t) t = n.intToBuffer(t);
                else if (null === t || void 0 === t) t = e.allocUnsafe(0);
                else if (i.isBN(t)) t = t.toArrayLike(e);
                else {
                    if (!t.toArray) throw new Error("invalid type");
                    t = e.from(t.toArray())
                }
                return t
            }, t.bufferToInt = function(e) {
                return new i(t.toBuffer(e)).toNumber()
            }, t.bufferToHex = function(e) {
                return "0x" + (e = t.toBuffer(e)).toString("hex")
            }, t.fromSigned = function(e) {
                return new i(e).fromTwos(256)
            }, t.toUnsigned = function(t) {
                return e.from(t.toTwos(256).toArray())
            }, t.addHexPrefix = function(e) {
                return "string" !== typeof e || n.isHexPrefixed(e) ? e : "0x" + e
            }, t.baToJSON = function(r) {
                if (e.isBuffer(r)) return "0x" + r.toString("hex");
                if (r instanceof Array) {
                    for (var n = [], i = 0; i < r.length; i++) n.push(t.baToJSON(r[i]));
                    return n
                }
            }
        }).call(this, r(321).Buffer)
    }, , , , , , , , , , , , , , , function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ERROR_BAD_MAC = t.EMPTY_UINT_ARRAY = t.MAX_MSG_LENGTH = t.MAX_KEY_LENGTH = t.PREFIXED_KEY_LENGTH = t.MAC_LENGTH = t.IV_LENGTH = t.KEY_LENGTH = t.PREFIX_LENGTH = t.RIPEMD160_NODE_ALGO = t.SHA512_NODE_ALGO = t.SHA256_NODE_ALGO = t.HMAC_NODE_ALGO = t.AES_NODE_ALGO = t.SHA512_BROWSER_ALGO = t.SHA256_BROWSER_ALGO = t.HMAC_BROWSER = t.HMAC_BROWSER_ALGO = t.AES_BROWSER_ALGO = t.HMAC_LENGTH = t.AES_LENGTH = t.LENGTH_1024 = t.LENGTH_512 = t.LENGTH_256 = t.LENGTH_128 = t.LENGTH_64 = t.LENGTH_32 = t.LENGTH_16 = t.LENGTH_1 = t.LENGTH_0 = t.VERIFY_OP = t.SIGN_OP = t.DECRYPT_OP = t.ENCRYPT_OP = t.UTF8_ENC = t.HEX_ENC = void 0, t.HEX_ENC = "hex", t.UTF8_ENC = "utf8", t.ENCRYPT_OP = "encrypt", t.DECRYPT_OP = "decrypt", t.SIGN_OP = "sign", t.VERIFY_OP = "verify", t.LENGTH_0 = 0, t.LENGTH_1 = 1, t.LENGTH_16 = 16, t.LENGTH_32 = 32, t.LENGTH_64 = 64, t.LENGTH_128 = 128, t.LENGTH_256 = 256, t.LENGTH_512 = 512, t.LENGTH_1024 = 1024, t.AES_LENGTH = t.LENGTH_256, t.HMAC_LENGTH = t.LENGTH_256, t.AES_BROWSER_ALGO = "AES-CBC", t.HMAC_BROWSER_ALGO = "SHA-".concat(t.AES_LENGTH), t.HMAC_BROWSER = "HMAC", t.SHA256_BROWSER_ALGO = "SHA-256", t.SHA512_BROWSER_ALGO = "SHA-512", t.AES_NODE_ALGO = "aes-".concat(t.AES_LENGTH, "-cbc"), t.HMAC_NODE_ALGO = "sha".concat(t.HMAC_LENGTH), t.SHA256_NODE_ALGO = "sha256", t.SHA512_NODE_ALGO = "sha512", t.RIPEMD160_NODE_ALGO = "ripemd160", t.PREFIX_LENGTH = t.LENGTH_1, t.KEY_LENGTH = t.LENGTH_32, t.IV_LENGTH = t.LENGTH_16, t.MAC_LENGTH = t.LENGTH_32, t.PREFIXED_KEY_LENGTH = t.KEY_LENGTH + t.PREFIX_LENGTH, t.MAX_KEY_LENGTH = t.LENGTH_1024, t.MAX_MSG_LENGTH = t.LENGTH_32, t.EMPTY_UINT_ARRAY = new Uint8Array(t.LENGTH_0), t.ERROR_BAD_MAC = "Bad MAC"
    }, , , , , , , , function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLength = t.decode = t.encode = void 0;
            var n = r(25);

            function i(e, t) {
                if ("00" === e.slice(0, 2)) throw new Error("invalid RLP: extra zeros");
                return parseInt(e, t)
            }

            function o(t, r) {
                if (t < 56) return e.from([t + r]);
                var n = u(t),
                    i = u(r + 55 + n.length / 2);
                return e.from(i + n, "hex")
            }

            function a(t) {
                var r, n, o, s, u, c = [],
                    f = t[0];
                if (f <= 127) return {
                    data: t.slice(0, 1),
                    remainder: t.slice(1)
                };
                if (f <= 183) {
                    if (r = f - 127, o = 128 === f ? e.from([]) : t.slice(1, r), 2 === r && o[0] < 128) throw new Error("invalid rlp encoding: byte must be less 0x80");
                    return {
                        data: o,
                        remainder: t.slice(r)
                    }
                }
                if (f <= 191) {
                    if (n = f - 182, t.length - 1 < n) throw new Error("invalid RLP: not enough bytes for string length");
                    if ((r = i(t.slice(1, n).toString("hex"), 16)) <= 55) throw new Error("invalid RLP: expected string length to be greater than 55");
                    if ((o = t.slice(n, r + n)).length < r) throw new Error("invalid RLP: not enough bytes for string");
                    return {
                        data: o,
                        remainder: t.slice(r + n)
                    }
                }
                if (f <= 247) {
                    for (r = f - 191, s = t.slice(1, r); s.length;) u = a(s), c.push(u.data), s = u.remainder;
                    return {
                        data: c,
                        remainder: t.slice(r)
                    }
                }
                var l = (n = f - 246) + (r = i(t.slice(1, n).toString("hex"), 16));
                if (l > t.length) throw new Error("invalid rlp: total length is larger than the data");
                if (0 === (s = t.slice(n, l)).length) throw new Error("invalid rlp, List has a invalid length");
                for (; s.length;) u = a(s), c.push(u.data), s = u.remainder;
                return {
                    data: c,
                    remainder: t.slice(l)
                }
            }

            function s(e) {
                return "0x" === e.slice(0, 2)
            }

            function u(e) {
                if (e < 0) throw new Error("Invalid integer as argument, must be unsigned!");
                var t = e.toString(16);
                return t.length % 2 ? "0" + t : t
            }

            function c(t) {
                if (!e.isBuffer(t)) {
                    if ("string" === typeof t) return s(t) ? e.from((r = "string" !== typeof(i = t) ? i : s(i) ? i.slice(2) : i).length % 2 ? "0" + r : r, "hex") : e.from(t);
                    if ("number" === typeof t || "bigint" === typeof t) return t ? function(t) {
                        var r = u(t);
                        return e.from(r, "hex")
                    }(t) : e.from([]);
                    if (null === t || void 0 === t) return e.from([]);
                    if (t instanceof Uint8Array) return e.from(t);
                    if (n.isBN(t)) return e.from(t.toArray());
                    throw new Error("invalid type")
                }
                var r, i;
                return t
            }
            t.encode = function t(r) {
                if (Array.isArray(r)) {
                    for (var n = [], i = 0; i < r.length; i++) n.push(t(r[i]));
                    var a = e.concat(n);
                    return e.concat([o(a.length, 192), a])
                }
                var s = c(r);
                return 1 === s.length && s[0] < 128 ? s : e.concat([o(s.length, 128), s])
            }, t.decode = function(t, r) {
                if (void 0 === r && (r = !1), !t || 0 === t.length) return e.from([]);
                var n = a(c(t));
                if (r) return n;
                if (0 !== n.remainder.length) throw new Error("invalid remainder");
                return n.data
            }, t.getLength = function(t) {
                if (!t || 0 === t.length) return e.from([]);
                var r = c(t),
                    n = r[0];
                if (n <= 127) return r.length;
                if (n <= 183) return n - 127;
                if (n <= 191) return n - 182;
                if (n <= 247) return n - 191;
                var o = n - 246;
                return o + i(r.slice(1, o).toString("hex"), 16)
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        var n = r(329),
            i = r(836);
        e.exports = function(e) {
            return null != e && i(e.length) && !n(e)
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            t |= 0;
            for (var r = Math.max(e.length - t, 0), n = Array(r), i = 0; i < r; i++) n[i] = e[t + i];
            return n
        }, e.exports = t.default
    }, function(e, t, r) {
        var n = r(721);

        function i() {}
        e.exports = i, i.prototype.setEngine = function(e) {
            var t = this;
            t.engine || (t.engine = e, e.on("block", (function(e) {
                t.currentBlock = e
            })), e.on("start", (function() {
                t.start()
            })), e.on("stop", (function() {
                t.stop()
            })))
        }, i.prototype.handleRequest = function(e, t, r) {
            throw new Error("Subproviders should override `handleRequest`.")
        }, i.prototype.emitPayload = function(e, t) {
            this.engine.sendAsync(n(e), t)
        }, i.prototype.stop = function() {}, i.prototype.start = function() {}
    }, , , , , , , , , , , , , , , , , , function(e, t, r) {
        "use strict";
        var n, i = r(326);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.STANDARD_ERROR_MAP = t.SERVER_ERROR_CODE_RANGE = t.RESERVED_ERROR_CODES = t.SERVER_ERROR = t.INTERNAL_ERROR = t.INVALID_PARAMS = t.METHOD_NOT_FOUND = t.INVALID_REQUEST = t.PARSE_ERROR = void 0, t.PARSE_ERROR = "PARSE_ERROR", t.INVALID_REQUEST = "INVALID_REQUEST", t.METHOD_NOT_FOUND = "METHOD_NOT_FOUND", t.INVALID_PARAMS = "INVALID_PARAMS", t.INTERNAL_ERROR = "INTERNAL_ERROR", t.SERVER_ERROR = "SERVER_ERROR", t.RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603], t.SERVER_ERROR_CODE_RANGE = [-32e3, -32099], t.STANDARD_ERROR_MAP = (i(n = {}, t.PARSE_ERROR, {
            code: -32700,
            message: "Parse error"
        }), i(n, t.INVALID_REQUEST, {
            code: -32600,
            message: "Invalid Request"
        }), i(n, t.METHOD_NOT_FOUND, {
            code: -32601,
            message: "Method not found"
        }), i(n, t.INVALID_PARAMS, {
            code: -32602,
            message: "Invalid params"
        }), i(n, t.INTERNAL_ERROR, {
            code: -32603,
            message: "Internal error"
        }), i(n, t.SERVER_ERROR, {
            code: -32e3,
            message: "Server error"
        }), n)
    }, function(e, t, r) {
        "use strict";
        var n = r(35);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.IEvents = void 0;
        t.IEvents = function e() {
            n(this, e)
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(35),
            i = r(46),
            o = r(47);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.IJsonRpcProvider = t.IBaseJsonRpcProvider = t.IJsonRpcConnection = void 0;
        var a = r(695),
            s = function(e) {
                i(r, e);
                var t = o(r);

                function r(e) {
                    return n(this, r), t.call(this)
                }
                return r
            }(a.IEvents);
        t.IJsonRpcConnection = s;
        var u = function(e) {
            i(r, e);
            var t = o(r);

            function r() {
                return n(this, r), t.call(this)
            }
            return r
        }(a.IEvents);
        t.IBaseJsonRpcProvider = u;
        var c = function(e) {
            i(r, e);
            var t = o(r);

            function r(e) {
                return n(this, r), t.call(this)
            }
            return r
        }(u);
        t.IJsonRpcProvider = c
    }, , , , , , , , , , , , , , , , , , , function(e, t) {
        var r = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == r.call(e)
        }
    }, function(e, t) {
        t.L = {
            bit: 1
        }, t.M = {
            bit: 0
        }, t.Q = {
            bit: 3
        }, t.H = {
            bit: 2
        }, t.isValid = function(e) {
            return e && "undefined" !== typeof e.bit && e.bit >= 0 && e.bit < 4
        }, t.from = function(e, r) {
            if (t.isValid(e)) return e;
            try {
                return function(e) {
                    if ("string" !== typeof e) throw new Error("Param is not a string");
                    switch (e.toLowerCase()) {
                        case "l":
                        case "low":
                            return t.L;
                        case "m":
                        case "medium":
                            return t.M;
                        case "q":
                        case "quartile":
                            return t.Q;
                        case "h":
                        case "high":
                            return t.H;
                        default:
                            throw new Error("Unknown EC Level: " + e)
                    }
                }(e)
            } catch (n) {
                return r
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
            function e() {
                this.listeners = {}
            }
            return e.prototype.addEventListener = function(e, t) {
                e = e.toLowerCase(), this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(t.handleEvent || t)
            }, e.prototype.removeEventListener = function(e, t) {
                if (e = e.toLowerCase(), this.listeners[e]) {
                    var r = this.listeners[e].indexOf(t.handleEvent || t);
                    r < 0 || this.listeners[e].splice(r, 1)
                }
            }, e.prototype.dispatchEvent = function(e) {
                var t = e.type.toLowerCase();
                if (e.target = this, this.listeners[t])
                    for (var r = 0, n = this.listeners[t]; r < n.length; r++) {
                        n[r].call(this, e)
                    }
                var i = this["on" + t];
                return i && i.call(this, e), !0
            }, e
        }();
        t.XMLHttpRequestEventTarget = n
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            var n = r(62);

            function i(e, t) {
                if (e === t) return 0;
                for (var r = e.length, n = t.length, i = 0, o = Math.min(r, n); i < o; ++i)
                    if (e[i] !== t[i]) {
                        r = e[i], n = t[i];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }

            function o(e) {
                return t.Buffer && "function" === typeof t.Buffer.isBuffer ? t.Buffer.isBuffer(e) : !(null == e || !e._isBuffer)
            }
            var a = r(213),
                s = Object.prototype.hasOwnProperty,
                u = Array.prototype.slice,
                c = "foo" === function() {}.name;

            function f(e) {
                return Object.prototype.toString.call(e)
            }

            function l(e) {
                return !o(e) && ("function" === typeof t.ArrayBuffer && ("function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : !!e && (e instanceof DataView || !!(e.buffer && e.buffer instanceof ArrayBuffer))))
            }
            var h = e.exports = m,
                d = /\s*function\s+([^\(\s]*)\s*/;

            function p(e) {
                if (a.isFunction(e)) {
                    if (c) return e.name;
                    var t = e.toString().match(d);
                    return t && t[1]
                }
            }

            function v(e, t) {
                return "string" === typeof e ? e.length < t ? e : e.slice(0, t) : e
            }

            function g(e) {
                if (c || !a.isFunction(e)) return a.inspect(e);
                var t = p(e);
                return "[Function" + (t ? ": " + t : "") + "]"
            }

            function _(e, t, r, n, i) {
                throw new h.AssertionError({
                    message: r,
                    actual: e,
                    expected: t,
                    operator: n,
                    stackStartFunction: i
                })
            }

            function m(e, t) {
                e || _(e, !0, t, "==", h.ok)
            }

            function y(e, t, r, n) {
                if (e === t) return !0;
                if (o(e) && o(t)) return 0 === i(e, t);
                if (a.isDate(e) && a.isDate(t)) return e.getTime() === t.getTime();
                if (a.isRegExp(e) && a.isRegExp(t)) return e.source === t.source && e.global === t.global && e.multiline === t.multiline && e.lastIndex === t.lastIndex && e.ignoreCase === t.ignoreCase;
                if (null !== e && "object" === typeof e || null !== t && "object" === typeof t) {
                    if (l(e) && l(t) && f(e) === f(t) && !(e instanceof Float32Array || e instanceof Float64Array)) return 0 === i(new Uint8Array(e.buffer), new Uint8Array(t.buffer));
                    if (o(e) !== o(t)) return !1;
                    var s = (n = n || {
                        actual: [],
                        expected: []
                    }).actual.indexOf(e);
                    return -1 !== s && s === n.expected.indexOf(t) || (n.actual.push(e), n.expected.push(t), function(e, t, r, n) {
                        if (null === e || void 0 === e || null === t || void 0 === t) return !1;
                        if (a.isPrimitive(e) || a.isPrimitive(t)) return e === t;
                        if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
                        var i = w(e),
                            o = w(t);
                        if (i && !o || !i && o) return !1;
                        if (i) return y(e = u.call(e), t = u.call(t), r);
                        var s, c, f = x(e),
                            l = x(t);
                        if (f.length !== l.length) return !1;
                        for (f.sort(), l.sort(), c = f.length - 1; c >= 0; c--)
                            if (f[c] !== l[c]) return !1;
                        for (c = f.length - 1; c >= 0; c--)
                            if (!y(e[s = f[c]], t[s], r, n)) return !1;
                        return !0
                    }(e, t, r, n))
                }
                return r ? e === t : e == t
            }

            function w(e) {
                return "[object Arguments]" == Object.prototype.toString.call(e)
            }

            function b(e, t) {
                if (!e || !t) return !1;
                if ("[object RegExp]" == Object.prototype.toString.call(t)) return t.test(e);
                try {
                    if (e instanceof t) return !0
                } catch (r) {}
                return !Error.isPrototypeOf(t) && !0 === t.call({}, e)
            }

            function E(e, t, r, n) {
                var i;
                if ("function" !== typeof t) throw new TypeError('"block" argument must be a function');
                "string" === typeof r && (n = r, r = null), i = function(e) {
                    var t;
                    try {
                        e()
                    } catch (r) {
                        t = r
                    }
                    return t
                }(t), n = (r && r.name ? " (" + r.name + ")." : ".") + (n ? " " + n : "."), e && !i && _(i, r, "Missing expected exception" + n);
                var o = "string" === typeof n,
                    s = !e && i && !r;
                if ((!e && a.isError(i) && o && b(i, r) || s) && _(i, r, "Got unwanted exception" + n), e && i && r && !b(i, r) || !e && i) throw i
            }
            h.AssertionError = function(e) {
                this.name = "AssertionError", this.actual = e.actual, this.expected = e.expected, this.operator = e.operator, e.message ? (this.message = e.message, this.generatedMessage = !1) : (this.message = function(e) {
                    return v(g(e.actual), 128) + " " + e.operator + " " + v(g(e.expected), 128)
                }(this), this.generatedMessage = !0);
                var t = e.stackStartFunction || _;
                if (Error.captureStackTrace) Error.captureStackTrace(this, t);
                else {
                    var r = new Error;
                    if (r.stack) {
                        var n = r.stack,
                            i = p(t),
                            o = n.indexOf("\n" + i);
                        if (o >= 0) {
                            var a = n.indexOf("\n", o + 1);
                            n = n.substring(a + 1)
                        }
                        this.stack = n
                    }
                }
            }, a.inherits(h.AssertionError, Error), h.fail = _, h.ok = m, h.equal = function(e, t, r) {
                e != t && _(e, t, r, "==", h.equal)
            }, h.notEqual = function(e, t, r) {
                e == t && _(e, t, r, "!=", h.notEqual)
            }, h.deepEqual = function(e, t, r) {
                y(e, t, !1) || _(e, t, r, "deepEqual", h.deepEqual)
            }, h.deepStrictEqual = function(e, t, r) {
                y(e, t, !0) || _(e, t, r, "deepStrictEqual", h.deepStrictEqual)
            }, h.notDeepEqual = function(e, t, r) {
                y(e, t, !1) && _(e, t, r, "notDeepEqual", h.notDeepEqual)
            }, h.notDeepStrictEqual = function e(t, r, n) {
                y(t, r, !0) && _(t, r, n, "notDeepStrictEqual", e)
            }, h.strictEqual = function(e, t, r) {
                e !== t && _(e, t, r, "===", h.strictEqual)
            }, h.notStrictEqual = function(e, t, r) {
                e === t && _(e, t, r, "!==", h.notStrictEqual)
            }, h.throws = function(e, t, r) {
                E(!0, e, t, r)
            }, h.doesNotThrow = function(e, t, r) {
                E(!1, e, t, r)
            }, h.ifError = function(e) {
                if (e) throw e
            }, h.strict = n((function e(t, r) {
                t || _(t, !0, r, "==", e)
            }), h, {
                equal: h.strictEqual,
                deepEqual: h.deepStrictEqual,
                notEqual: h.notStrictEqual,
                notDeepEqual: h.notDeepStrictEqual
            }), h.strict.strict = h.strict;
            var x = Object.keys || function(e) {
                var t = [];
                for (var r in e) s.call(e, r) && t.push(r);
                return t
            }
        }).call(this, r(67))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return function() {
                if (null !== e) {
                    var t = e;
                    e = null, t.apply(this, arguments)
                }
            }
        }, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return function() {
                if (null === e) throw new Error("Callback was already called.");
                var t = e;
                e = null, t.apply(this, arguments)
            }
        }, e.exports = t.default
    }, function(e, t, r) {
        var n = r(1090),
            i = r(671);
        e.exports = function(e) {
            return i({
                id: n(),
                jsonrpc: "2.0",
                params: []
            }, e)
        }
    }, function(e, t, r) {
        var n = r(35),
            i = r(36),
            o = r(46),
            a = r(47),
            s = function(e) {
                "use strict";
                o(r, e);
                var t = a(r);

                function r(e) {
                    var i;
                    if (n(this, r), i = t.call(this), !e) throw new Error("JsonRpcEngineMiddlewareSubprovider - no constructorFn specified");
                    return i._constructorFn = e, i
                }
                return i(r, [{
                    key: "setEngine",
                    value: function(e) {
                        if (this.middleware) throw new Error("JsonRpcEngineMiddlewareSubprovider - subprovider added to engine twice");
                        var t = e._blockTracker,
                            r = this._constructorFn({
                                engine: e,
                                provider: e,
                                blockTracker: t
                            });
                        if (!r) throw new Error("JsonRpcEngineMiddlewareSubprovider - _constructorFn did not return middleware");
                        if ("function" !== typeof r) throw new Error("JsonRpcEngineMiddlewareSubprovider - specified middleware is not a function");
                        this.middleware = r
                    }
                }, {
                    key: "handleRequest",
                    value: function(e, t, r) {
                        var n = {
                            id: e.id
                        };
                        this.middleware(e, n, (function(e) {
                            t((function(t, r, i) {
                                t ? (delete n.result, n.error = {
                                    message: t.message || t
                                }) : n.result = r, e ? e(i) : i()
                            }))
                        }), (function(e) {
                            if (e) return r(e);
                            r(null, n.result)
                        }))
                    }
                }]), r
            }(r(676));
        e.exports = s
    }, , , , , function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ecdhUnsafe = t.ecdh = t.recover = t.verify = t.sign = t.signatureImportLax = t.signatureImport = t.signatureExport = t.signatureNormalize = t.publicKeyCombine = t.publicKeyTweakMul = t.publicKeyTweakAdd = t.publicKeyVerify = t.publicKeyConvert = t.publicKeyCreate = t.privateKeyTweakMul = t.privateKeyTweakAdd = t.privateKeyModInverse = t.privateKeyNegate = t.privateKeyImport = t.privateKeyExport = t.privateKeyVerify = void 0;
            var n = r(828),
                i = r(1119),
                o = r(1120);
            t.privateKeyVerify = function(e) {
                return 32 === e.length && n.privateKeyVerify(Uint8Array.from(e))
            }, t.privateKeyExport = function(e, t) {
                if (32 !== e.length) throw new RangeError("private key length is invalid");
                var r = i.privateKeyExport(e, t);
                return o.privateKeyExport(e, r, t)
            }, t.privateKeyImport = function(e) {
                if (null !== (e = o.privateKeyImport(e)) && 32 === e.length && t.privateKeyVerify(e)) return e;
                throw new Error("couldn't import from DER format")
            }, t.privateKeyNegate = function(t) {
                return e.from(n.privateKeyNegate(Uint8Array.from(t)))
            }, t.privateKeyModInverse = function(t) {
                if (32 !== t.length) throw new Error("private key length is invalid");
                return e.from(i.privateKeyModInverse(Uint8Array.from(t)))
            }, t.privateKeyTweakAdd = function(t, r) {
                return e.from(n.privateKeyTweakAdd(Uint8Array.from(t), r))
            }, t.privateKeyTweakMul = function(t, r) {
                return e.from(n.privateKeyTweakMul(Uint8Array.from(t), Uint8Array.from(r)))
            }, t.publicKeyCreate = function(t, r) {
                return e.from(n.publicKeyCreate(Uint8Array.from(t), r))
            }, t.publicKeyConvert = function(t, r) {
                return e.from(n.publicKeyConvert(Uint8Array.from(t), r))
            }, t.publicKeyVerify = function(e) {
                return (33 === e.length || 65 === e.length) && n.publicKeyVerify(Uint8Array.from(e))
            }, t.publicKeyTweakAdd = function(t, r, i) {
                return e.from(n.publicKeyTweakAdd(Uint8Array.from(t), Uint8Array.from(r), i))
            }, t.publicKeyTweakMul = function(t, r, i) {
                return e.from(n.publicKeyTweakMul(Uint8Array.from(t), Uint8Array.from(r), i))
            }, t.publicKeyCombine = function(t, r) {
                var i = [];
                return t.forEach((function(e) {
                    i.push(Uint8Array.from(e))
                })), e.from(n.publicKeyCombine(i, r))
            }, t.signatureNormalize = function(t) {
                return e.from(n.signatureNormalize(Uint8Array.from(t)))
            }, t.signatureExport = function(t) {
                return e.from(n.signatureExport(Uint8Array.from(t)))
            }, t.signatureImport = function(t) {
                return e.from(n.signatureImport(Uint8Array.from(t)))
            }, t.signatureImportLax = function(e) {
                if (0 === e.length) throw new RangeError("signature length is invalid");
                var t = o.signatureImportLax(e);
                if (null === t) throw new Error("couldn't parse DER signature");
                return i.signatureImport(t)
            }, t.sign = function(t, r, i) {
                if (null === i) throw new TypeError("options should be an Object");
                var o = void 0;
                if (i) {
                    if (o = {}, null === i.data) throw new TypeError("options.data should be a Buffer");
                    if (i.data) {
                        if (32 != i.data.length) throw new RangeError("options.data length is invalid");
                        o.data = new Uint8Array(i.data)
                    }
                    if (null === i.noncefn) throw new TypeError("options.noncefn should be a Function");
                    i.noncefn && (o.noncefn = function(t, r, n, o, a) {
                        var s = null != n ? e.from(n) : null,
                            u = null != o ? e.from(o) : null,
                            c = e.from("");
                        return i.noncefn && (c = i.noncefn(e.from(t), e.from(r), s, u, a)), new Uint8Array(c)
                    })
                }
                var a = n.ecdsaSign(Uint8Array.from(t), Uint8Array.from(r), o);
                return {
                    signature: e.from(a.signature),
                    recovery: a.recid
                }
            }, t.verify = function(e, t, r) {
                return n.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r)
            }, t.recover = function(t, r, i, o) {
                return e.from(n.ecdsaRecover(Uint8Array.from(r), i, Uint8Array.from(t), o))
            }, t.ecdh = function(t, r) {
                return e.from(n.ecdh(Uint8Array.from(t), Uint8Array.from(r), {}))
            }, t.ecdhUnsafe = function(t, r, n) {
                if (33 !== t.length && 65 !== t.length) throw new RangeError("public key length is invalid");
                if (32 !== r.length) throw new RangeError("private key length is invalid");
                return e.from(i.ecdhUnsafe(Uint8Array.from(t), Uint8Array.from(r), n))
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.rlphash = t.ripemd160 = t.sha256 = t.keccak256 = t.keccak = void 0;
            var n = r(827),
                i = n.keccak224,
                o = n.keccak384,
                a = n.keccak256,
                s = n.keccak512,
                u = r(619),
                c = r(637),
                f = r(673),
                l = r(650);
            t.keccak = function(t, r) {
                switch (void 0 === r && (r = 256), t = "string" !== typeof t || c.isHexString(t) ? l.toBuffer(t) : e.from(t, "utf8"), r || (r = 256), r) {
                    case 224:
                        return i(t);
                    case 256:
                        return a(t);
                    case 384:
                        return o(t);
                    case 512:
                        return s(t);
                    default:
                        throw new Error("Invald algorithm: keccak" + r)
                }
            }, t.keccak256 = function(e) {
                return t.keccak(e)
            }, t.sha256 = function(e) {
                return e = l.toBuffer(e), u("sha256").update(e).digest()
            }, t.ripemd160 = function(e, t) {
                e = l.toBuffer(e);
                var r = u("rmd160").update(e).digest();
                return !0 === t ? l.setLength(r, 32) : r
            }, t.rlphash = function(e) {
                return t.keccak(f.encode(e))
            }
        }).call(this, r(321).Buffer)
    }, , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(602);
        n.__exportStar(r(752), t), n.__exportStar(r(753), t), n.__exportStar(r(754), t), n.__exportStar(r(870), t), n.__exportStar(r(871), t)
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getClientMeta = t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = t.isBrowser = t.isNode = t.isMobile = t.isIOS = t.detectOS = t.detectEnv = void 0;
        var n = r(602),
            i = n.__importStar(r(865)),
            o = n.__importStar(r(867)),
            a = r(868);

        function s(e) {
            return a.detect(e)
        }

        function u() {
            var e = s();
            return e && e.os ? e.os : void 0
        }

        function c() {
            var e = s();
            return !(!e || !e.name) && "node" === e.name.toLowerCase()
        }
        t.detectEnv = s, t.detectOS = u, t.isIOS = function() {
            var e = u();
            return !!e && e.toLowerCase().includes("ios")
        }, t.isMobile = function() {
            var e = u();
            return !!e && (e.toLowerCase().includes("android") || e.toLowerCase().includes("ios"))
        }, t.isNode = c, t.isBrowser = function() {
            return !c() && !!t.getNavigator()
        }, t.getFromWindow = o.getFromWindow, t.getFromWindowOrThrow = o.getFromWindowOrThrow, t.getDocumentOrThrow = o.getDocumentOrThrow, t.getDocument = o.getDocument, t.getNavigatorOrThrow = o.getNavigatorOrThrow, t.getNavigator = o.getNavigator, t.getLocationOrThrow = o.getLocationOrThrow, t.getLocation = o.getLocation, t.getCryptoOrThrow = o.getCryptoOrThrow, t.getCrypto = o.getCrypto, t.getLocalStorageOrThrow = o.getLocalStorageOrThrow, t.getLocalStorage = o.getLocalStorage, t.getClientMeta = function() {
            return i.getWindowMetadata()
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.safeJsonStringify = t.safeJsonParse = void 0;
        var n = r(602).__importStar(r(869));
        t.safeJsonParse = n.safeJsonParse, t.safeJsonStringify = n.safeJsonStringify
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.removeLocal = t.getLocal = t.setLocal = void 0;
        var n = r(753),
            i = r(752);
        t.setLocal = function(e, t) {
            var r = n.safeJsonStringify(t),
                o = i.getLocalStorage();
            o && o.setItem(e, r)
        }, t.getLocal = function(e) {
            var t = null,
                r = i.getLocalStorage();
            return r && (t = r.getItem(e)), n.safeJsonParse(t)
        }, t.removeLocal = function(e) {
            var t = i.getLocalStorage();
            t && t.removeItem(e)
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.stateMethods = t.signingMethods = t.reservedEvents = void 0, t.reservedEvents = ["session_request", "session_update", "exchange_key", "connect", "disconnect", "display_uri", "modal_closed", "transport_open", "transport_close", "transport_error"], t.signingMethods = ["eth_sendTransaction", "eth_signTransaction", "eth_sign", "eth_signTypedData", "eth_signTypedData_v1", "eth_signTypedData_v2", "eth_signTypedData_v3", "eth_signTypedData_v4", "personal_sign"], t.stateMethods = ["eth_accounts", "eth_chainId", "net_version"]
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.convertNumberToHex = t.convertNumberToUtf8 = t.convertNumberToArrayBuffer = t.convertNumberToBuffer = t.convertHexToNumber = t.convertHexToUtf8 = t.convertHexToArrayBuffer = t.convertHexToBuffer = t.convertUtf8ToNumber = t.convertUtf8ToHex = t.convertUtf8ToBuffer = t.convertUtf8ToArrayBuffer = t.concatBuffers = t.convertBufferToNumber = t.convertBufferToHex = t.convertBufferToUtf8 = t.convertBufferToArrayBuffer = t.concatArrayBuffers = t.convertArrayBufferToNumber = t.convertArrayBufferToHex = t.convertArrayBufferToUtf8 = t.convertArrayBufferToBuffer = void 0;
        var n = r(602),
            i = n.__importDefault(r(872)),
            o = n.__importStar(r(613));
        t.convertArrayBufferToBuffer = function(e) {
            return o.arrayToBuffer(new Uint8Array(e))
        }, t.convertArrayBufferToUtf8 = function(e) {
            return o.arrayToUtf8(new Uint8Array(e))
        }, t.convertArrayBufferToHex = function(e, t) {
            return o.arrayToHex(new Uint8Array(e), !t)
        }, t.convertArrayBufferToNumber = function(e) {
            return o.arrayToNumber(new Uint8Array(e))
        }, t.concatArrayBuffers = function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return o.hexToArray(t.map((function(e) {
                return o.arrayToHex(new Uint8Array(e))
            })).join("")).buffer
        }, t.convertBufferToArrayBuffer = function(e) {
            return o.bufferToArray(e).buffer
        }, t.convertBufferToUtf8 = function(e) {
            return o.bufferToUtf8(e)
        }, t.convertBufferToHex = function(e, t) {
            return o.bufferToHex(e, !t)
        }, t.convertBufferToNumber = function(e) {
            return o.bufferToNumber(e)
        }, t.concatBuffers = function() {
            return o.concatBuffers.apply(o, arguments)
        }, t.convertUtf8ToArrayBuffer = function(e) {
            return o.utf8ToArray(e).buffer
        }, t.convertUtf8ToBuffer = function(e) {
            return o.utf8ToBuffer(e)
        }, t.convertUtf8ToHex = function(e, t) {
            return o.utf8ToHex(e, !t)
        }, t.convertUtf8ToNumber = function(e) {
            return new i.default(e, 10).toNumber()
        }, t.convertHexToBuffer = function(e) {
            return o.hexToBuffer(e)
        }, t.convertHexToArrayBuffer = function(e) {
            return o.hexToArray(e).buffer
        }, t.convertHexToUtf8 = function(e) {
            return o.hexToUtf8(e)
        }, t.convertHexToNumber = function(e) {
            return new i.default(o.removeHexPrefix(e), "hex").toNumber()
        }, t.convertNumberToBuffer = function(e) {
            return o.numberToBuffer(e)
        }, t.convertNumberToArrayBuffer = function(e) {
            return o.numberToArray(e).buffer
        }, t.convertNumberToUtf8 = function(e) {
            return new i.default(e).toString()
        }, t.convertNumberToHex = function(e, t) {
            var r = o.removeHexPrefix(o.sanitizeHex(new i.default(e).toString(16)));
            return t ? r : o.addHexPrefix(r)
        }
    }, function(e, t) {
        e.exports = i, i.strict = o, i.loose = a;
        var r = Object.prototype.toString,
            n = {
                "[object Int8Array]": !0,
                "[object Int16Array]": !0,
                "[object Int32Array]": !0,
                "[object Uint8Array]": !0,
                "[object Uint8ClampedArray]": !0,
                "[object Uint16Array]": !0,
                "[object Uint32Array]": !0,
                "[object Float32Array]": !0,
                "[object Float64Array]": !0
            };

        function i(e) {
            return o(e) || a(e)
        }

        function o(e) {
            return e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Uint8Array || e instanceof Uint8ClampedArray || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Float32Array || e instanceof Float64Array
        }

        function a(e) {
            return n[r.call(e)]
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.logDeprecationWarning = t.uuid = t.payloadId = t.removeHexLeadingZeros = t.removeHexPrefix = t.addHexPrefix = t.sanitizeHex = void 0;
        var n = r(602),
            i = n.__importStar(r(613)),
            o = n.__importStar(r(881));
        t.sanitizeHex = function(e) {
            return i.sanitizeHex(e)
        }, t.addHexPrefix = function(e) {
            return i.addHexPrefix(e)
        }, t.removeHexPrefix = function(e) {
            return i.removeHexPrefix(e)
        }, t.removeHexLeadingZeros = function(e) {
            return i.removeHexLeadingZeros(i.addHexPrefix(e))
        }, t.payloadId = o.payloadId, t.uuid = function() {
            return function(e, t) {
                for (t = e = ""; e++ < 36; t += 51 * e & 52 ? (15 ^ e ? 8 ^ Math.random() * (20 ^ e ? 16 : 4) : 4).toString(16) : "-");
                return t
            }()
        }, t.logDeprecationWarning = function() {
            console.warn("DEPRECATION WARNING: This WalletConnect client library will be deprecated in favor of @walletconnect/client. Please check docs.walletconnect.org to learn more about this migration!")
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.validateJsonRpcError = t.getErrorByCode = t.getError = t.isValidErrorCode = t.isReservedErrorCode = t.isServerErrorCode = void 0;
        var n = r(694);

        function i(e) {
            return e <= n.SERVER_ERROR_CODE_RANGE[0] && e >= n.SERVER_ERROR_CODE_RANGE[1]
        }

        function o(e) {
            return n.RESERVED_ERROR_CODES.includes(e)
        }

        function a(e) {
            return i(e) || o(e)
        }

        function s(e) {
            var t = Object.values(n.STANDARD_ERROR_MAP).find((function(t) {
                return t.code === e
            }));
            return t || n.STANDARD_ERROR_MAP[n.INTERNAL_ERROR]
        }
        t.isServerErrorCode = i, t.isReservedErrorCode = o, t.isValidErrorCode = a, t.getError = function(e) {
            return Object.keys(n.STANDARD_ERROR_MAP).includes(e) ? n.STANDARD_ERROR_MAP[e] : n.STANDARD_ERROR_MAP[n.INTERNAL_ERROR]
        }, t.getErrorByCode = s, t.validateJsonRpcError = function(e) {
            if ("undefined" === typeof e.error.code) return {
                valid: !1,
                error: "Missing code for JSON-RPC error"
            };
            if ("undefined" === typeof e.error.message) return {
                valid: !1,
                error: "Missing message for JSON-RPC error"
            };
            if (!a(e.error.code)) return {
                valid: !1,
                error: "Invalid error code for JSON-RPC error code: ".concat(e.error.code)
            };
            if (o(e.error.code)) {
                var t = s(e.error.code);
                if (t.message !== n.STANDARD_ERROR_MAP[n.INTERNAL_ERROR].message && e.error.message === t.message) return {
                    valid: !1,
                    error: "Invalid error message for JSON-RPC error code: ".concat(e.error.code)
                }
            }
            return {
                valid: !0
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isSilentPayload = t.isReservedEvent = t.isInternalEvent = t.isJsonRpcResponseError = t.isJsonRpcResponseSuccess = t.isJsonRpcRequest = t.isJsonRpcSubscription = t.isHexString = t.getEncoding = t.getType = t.isArrayBuffer = t.isTypedArray = t.isBuffer = t.isEmptyArray = t.isEmptyString = void 0;
        var n = r(602).__importStar(r(613)),
            i = r(755);
        t.isEmptyString = function(e) {
            return "" === e || "string" === typeof e && "" === e.trim()
        }, t.isEmptyArray = function(e) {
            return !(e && e.length)
        }, t.isBuffer = function(e) {
            return n.isBuffer(e)
        }, t.isTypedArray = function(e) {
            return n.isTypedArray(e)
        }, t.isArrayBuffer = function(e) {
            return n.isArrayBuffer(e)
        }, t.getType = function(e) {
            return n.getType(e)
        }, t.getEncoding = function(e) {
            return n.getEncoding(e)
        }, t.isHexString = function(e, t) {
            return n.isHexString(e, t)
        }, t.isJsonRpcSubscription = function(e) {
            return "object" === typeof e.params
        }, t.isJsonRpcRequest = function(e) {
            return "undefined" !== typeof e.method
        }, t.isJsonRpcResponseSuccess = function(e) {
            return "undefined" !== typeof e.result
        }, t.isJsonRpcResponseError = function(e) {
            return "undefined" !== typeof e.error
        }, t.isInternalEvent = function(e) {
            return "undefined" !== typeof e.event
        }, t.isReservedEvent = function(e) {
            return i.reservedEvents.includes(e) || e.startsWith("wc_")
        }, t.isSilentPayload = function(e) {
            return !!e.method.startsWith("wc_") || !i.signingMethods.includes(e.method)
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formatQueryString = t.parseQueryString = t.appendToQueryString = t.getQueryString = void 0;
        var n = r(602).__importStar(r(895));

        function i(e) {
            return n.parse(e)
        }

        function o(e) {
            return n.stringify(e)
        }
        t.getQueryString = function(e) {
            var t = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0;
            return "undefined" !== typeof t ? e.substr(t) : ""
        }, t.appendToQueryString = function(e, t) {
            var r = i(e);
            return e = o(r = Object.assign(Object.assign({}, r), t))
        }, t.parseQueryString = i, t.formatQueryString = o
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }),
            i = this && this.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), i(r(909), t), i(r(910), t), i(r(912), t)
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
        var n = r(716),
            i = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
            o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
        t.getBlocksCount = function(e, t) {
            switch (t) {
                case n.L:
                    return i[4 * (e - 1) + 0];
                case n.M:
                    return i[4 * (e - 1) + 1];
                case n.Q:
                    return i[4 * (e - 1) + 2];
                case n.H:
                    return i[4 * (e - 1) + 3];
                default:
                    return
            }
        }, t.getTotalCodewordsCount = function(e, t) {
            switch (t) {
                case n.L:
                    return o[4 * (e - 1) + 0];
                case n.M:
                    return o[4 * (e - 1) + 1];
                case n.Q:
                    return o[4 * (e - 1) + 2];
                case n.H:
                    return o[4 * (e - 1) + 3];
                default:
                    return
            }
        }
    }, function(e, t) {
        t.isValid = function(e) {
            return !isNaN(e) && e >= 1 && e <= 40
        }
    }, function(e, t) {
        var r = "[0-9]+",
            n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
            i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
        t.KANJI = new RegExp(n, "g"), t.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = new RegExp(i, "g"), t.NUMERIC = new RegExp(r, "g"), t.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g");
        var o = new RegExp("^" + n + "$"),
            a = new RegExp("^[0-9]+$"),
            s = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
        t.testKanji = function(e) {
            return o.test(e)
        }, t.testNumeric = function(e) {
            return a.test(e)
        }, t.testAlphanumeric = function(e) {
            return s.test(e)
        }
    }, function(e, t) {
        function r(e) {
            if ("number" === typeof e && (e = e.toString()), "string" !== typeof e) throw new Error("Color should be defined as hex string");
            var t = e.slice().replace("#", "").split("");
            if (t.length < 3 || 5 === t.length || t.length > 8) throw new Error("Invalid hex color: " + e);
            3 !== t.length && 4 !== t.length || (t = Array.prototype.concat.apply([], t.map((function(e) {
                return [e, e]
            })))), 6 === t.length && t.push("F", "F");
            var r = parseInt(t.join(""), 16);
            return {
                r: r >> 24 & 255,
                g: r >> 16 & 255,
                b: r >> 8 & 255,
                a: 255 & r,
                hex: "#" + t.slice(0, 6).join("")
            }
        }
        t.getOptions = function(e) {
            e || (e = {}), e.color || (e.color = {});
            var t = "undefined" === typeof e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                n = e.width && e.width >= 21 ? e.width : void 0,
                i = e.scale || 4;
            return {
                width: n,
                scale: n ? 4 : i,
                margin: t,
                color: {
                    dark: r(e.color.dark || "#000000ff"),
                    light: r(e.color.light || "#ffffffff")
                },
                type: e.type,
                rendererOpts: e.rendererOpts || {}
            }
        }, t.getScale = function(e, t) {
            return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
        }, t.getImageWidth = function(e, r) {
            var n = t.getScale(e, r);
            return Math.floor((e + 2 * r.margin) * n)
        }, t.qrToImageData = function(e, r, n) {
            for (var i = r.modules.size, o = r.modules.data, a = t.getScale(i, n), s = Math.floor((i + 2 * n.margin) * a), u = n.margin * a, c = [n.color.light, n.color.dark], f = 0; f < s; f++)
                for (var l = 0; l < s; l++) {
                    var h = 4 * (f * s + l),
                        d = n.color.light;
                    if (f >= u && l >= u && f < s - u && l < s - u) d = c[o[Math.floor((f - u) / a) * i + Math.floor((l - u) / a)] ? 1 : 0];
                    e[h++] = d.r, e[h++] = d.g, e[h++] = d.b, e[h] = d.a
                }
        }
    }, function(e, t, r) {
        (function(e) {
            var n = r(1025),
                i = r(826),
                o = r(671),
                a = r(1027),
                s = r(672),
                u = t;
            u.request = function(t, r) {
                t = "string" === typeof t ? s.parse(t) : o(t);
                var i = -1 === e.location.protocol.search(/^https?:$/) ? "http:" : "",
                    a = t.protocol || i,
                    u = t.hostname || t.host,
                    c = t.port,
                    f = t.path || "/";
                u && -1 !== u.indexOf(":") && (u = "[" + u + "]"), t.url = (u ? a + "//" + u : "") + (c ? ":" + c : "") + f, t.method = (t.method || "GET").toUpperCase(), t.headers = t.headers || {};
                var l = new n(t);
                return r && l.on("response", r), l
            }, u.get = function(e, t) {
                var r = u.request(e, t);
                return r.end(), r
            }, u.ClientRequest = n, u.IncomingMessage = i.IncomingMessage, u.Agent = function() {}, u.Agent.defaultMaxSockets = 4, u.globalAgent = new u.Agent, u.STATUS_CODES = a, u.METHODS = ["CHECKOUT", "CONNECT", "COPY", "DELETE", "GET", "HEAD", "LOCK", "M-SEARCH", "MERGE", "MKACTIVITY", "MKCOL", "MOVE", "NOTIFY", "OPTIONS", "PATCH", "POST", "PROPFIND", "PROPPATCH", "PURGE", "PUT", "REPORT", "SEARCH", "SUBSCRIBE", "TRACE", "UNLOCK", "UNSUBSCRIBE"]
        }).call(this, r(67))
    }, function(e, t, r) {
        (function(e) {
            t.fetch = s(e.fetch) && s(e.ReadableStream), t.writableStream = s(e.WritableStream), t.abortController = s(e.AbortController), t.blobConstructor = !1;
            try {
                new Blob([new ArrayBuffer(1)]), t.blobConstructor = !0
            } catch (u) {}
            var r;

            function n() {
                if (void 0 !== r) return r;
                if (e.XMLHttpRequest) {
                    r = new e.XMLHttpRequest;
                    try {
                        r.open("GET", e.XDomainRequest ? "/" : "https://example.com")
                    } catch (u) {
                        r = null
                    }
                } else r = null;
                return r
            }

            function i(e) {
                var t = n();
                if (!t) return !1;
                try {
                    return t.responseType = e, t.responseType === e
                } catch (u) {}
                return !1
            }
            var o = "undefined" !== typeof e.ArrayBuffer,
                a = o && s(e.ArrayBuffer.prototype.slice);

            function s(e) {
                return "function" === typeof e
            }
            t.arraybuffer = t.fetch || o && i("arraybuffer"), t.msstream = !t.fetch && a && i("ms-stream"), t.mozchunkedarraybuffer = !t.fetch && o && i("moz-chunked-arraybuffer"), t.overrideMimeType = t.fetch || !!n() && s(n().overrideMimeType), t.vbArray = s(e.VBArray), r = null
        }).call(this, r(67))
    }, function(e, t, r) {
        (function(e, n, i) {
            var o = r(825),
                a = r(210),
                s = r(644),
                u = t.readyStates = {
                    UNSENT: 0,
                    OPENED: 1,
                    HEADERS_RECEIVED: 2,
                    LOADING: 3,
                    DONE: 4
                },
                c = t.IncomingMessage = function(t, r, a, u) {
                    var c = this;
                    if (s.Readable.call(c), c._mode = a, c.headers = {}, c.rawHeaders = [], c.trailers = {}, c.rawTrailers = [], c.on("end", (function() {
                            e.nextTick((function() {
                                c.emit("close")
                            }))
                        })), "fetch" === a) {
                        if (c._fetchResponse = r, c.url = r.url, c.statusCode = r.status, c.statusMessage = r.statusText, r.headers.forEach((function(e, t) {
                                c.headers[t.toLowerCase()] = e, c.rawHeaders.push(t, e)
                            })), o.writableStream) {
                            var f = new WritableStream({
                                write: function(e) {
                                    return new Promise((function(t, r) {
                                        c._destroyed ? r() : c.push(new i(e)) ? t() : c._resumeFetch = t
                                    }))
                                },
                                close: function() {
                                    n.clearTimeout(u), c._destroyed || c.push(null)
                                },
                                abort: function(e) {
                                    c._destroyed || c.emit("error", e)
                                }
                            });
                            try {
                                return void r.body.pipeTo(f).catch((function(e) {
                                    n.clearTimeout(u), c._destroyed || c.emit("error", e)
                                }))
                            } catch (p) {}
                        }
                        var l = r.body.getReader();
                        ! function e() {
                            l.read().then((function(t) {
                                if (!c._destroyed) {
                                    if (t.done) return n.clearTimeout(u), void c.push(null);
                                    c.push(new i(t.value)), e()
                                }
                            })).catch((function(e) {
                                n.clearTimeout(u), c._destroyed || c.emit("error", e)
                            }))
                        }()
                    } else {
                        if (c._xhr = t, c._pos = 0, c.url = t.responseURL, c.statusCode = t.status, c.statusMessage = t.statusText, t.getAllResponseHeaders().split(/\r?\n/).forEach((function(e) {
                                var t = e.match(/^([^:]+):\s*(.*)/);
                                if (t) {
                                    var r = t[1].toLowerCase();
                                    "set-cookie" === r ? (void 0 === c.headers[r] && (c.headers[r] = []), c.headers[r].push(t[2])) : void 0 !== c.headers[r] ? c.headers[r] += ", " + t[2] : c.headers[r] = t[2], c.rawHeaders.push(t[1], t[2])
                                }
                            })), c._charset = "x-user-defined", !o.overrideMimeType) {
                            var h = c.rawHeaders["mime-type"];
                            if (h) {
                                var d = h.match(/;\s*charset=([^;])(;|$)/);
                                d && (c._charset = d[1].toLowerCase())
                            }
                            c._charset || (c._charset = "utf-8")
                        }
                    }
                };
            a(c, s.Readable), c.prototype._read = function() {
                var e = this._resumeFetch;
                e && (this._resumeFetch = null, e())
            }, c.prototype._onXHRProgress = function() {
                var e = this,
                    t = e._xhr,
                    r = null;
                switch (e._mode) {
                    case "text:vbarray":
                        if (t.readyState !== u.DONE) break;
                        try {
                            r = new n.VBArray(t.responseBody).toArray()
                        } catch (f) {}
                        if (null !== r) {
                            e.push(new i(r));
                            break
                        }
                    case "text":
                        try {
                            r = t.responseText
                        } catch (f) {
                            e._mode = "text:vbarray";
                            break
                        }
                        if (r.length > e._pos) {
                            var o = r.substr(e._pos);
                            if ("x-user-defined" === e._charset) {
                                for (var a = new i(o.length), s = 0; s < o.length; s++) a[s] = 255 & o.charCodeAt(s);
                                e.push(a)
                            } else e.push(o, e._charset);
                            e._pos = r.length
                        }
                        break;
                    case "arraybuffer":
                        if (t.readyState !== u.DONE || !t.response) break;
                        r = t.response, e.push(new i(new Uint8Array(r)));
                        break;
                    case "moz-chunked-arraybuffer":
                        if (r = t.response, t.readyState !== u.LOADING || !r) break;
                        e.push(new i(new Uint8Array(r)));
                        break;
                    case "ms-stream":
                        if (r = t.response, t.readyState !== u.LOADING) break;
                        var c = new n.MSStreamReader;
                        c.onprogress = function() {
                            c.result.byteLength > e._pos && (e.push(new i(new Uint8Array(c.result.slice(e._pos)))), e._pos = c.result.byteLength)
                        }, c.onload = function() {
                            e.push(null)
                        }, c.readAsArrayBuffer(r)
                }
                e._xhr.readyState === u.DONE && "ms-stream" !== e._mode && e.push(null)
            }
        }).call(this, r(111), r(67), r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(1040),
            i = r(1041);
        t.keccak224 = n.createHashFunction((function() {
            return i("keccak224")
        })), t.keccak256 = n.createHashFunction((function() {
            return i("keccak256")
        })), t.keccak384 = n.createHashFunction((function() {
            return i("keccak384")
        })), t.keccak512 = n.createHashFunction((function() {
            return i("keccak512")
        }))
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function s(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            },
            i = this && this.__generator || function(e, t) {
                var r, n, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (r) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, n && (i = 2 & o[0] ? n.return : o[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, o[1])).done) return i;
                                switch (n = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, n = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (s) {
                                o = [6, s], n = 0
                            } finally {
                                r = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(829),
            a = r(1050);
        t.createPrivateKey = function() {
                return n(this, void 0, void 0, (function() {
                    var e;
                    return i(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, a.getRandomBytes(32)];
                            case 1:
                                return e = t.sent(), o.privateKeyVerify(e) ? [2, e] : [3, 0];
                            case 2:
                                return [2]
                        }
                    }))
                }))
            }, t.createPrivateKeySync = function() {
                for (;;) {
                    var e = a.getRandomBytesSync(32);
                    if (o.privateKeyVerify(e)) return e
                }
            },
            function(e) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
            }(r(829))
    }, function(e, t, r) {
        e.exports = r(1048)(r(1049))
    }, function(e, t) {
        e.exports = function(e) {
            if ("string" !== typeof e) throw new Error("[is-hex-prefixed] value must be type 'string', is currently type " + typeof e + ", while checking isHexPrefixed.");
            return "0x" === e.slice(0, 2)
        }
    }, , , , , function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, r) {
            ((0, n.default)(e) ? h : d)(e, (0, f.default)(t), r)
        };
        var n = l(r(674)),
            i = l(r(837)),
            o = l(r(1060)),
            a = l(r(839)),
            s = l(r(171)),
            u = l(r(719)),
            c = l(r(720)),
            f = l(r(624));

        function l(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function h(e, t, r) {
            r = (0, u.default)(r || s.default);
            var n = 0,
                o = 0,
                a = e.length;

            function f(e, t) {
                e ? r(e) : ++o !== a && t !== i.default || r(null)
            }
            for (0 === a && r(null); n < a; n++) t(e[n], n, (0, c.default)(f))
        }
        var d = (0, a.default)(o.default, 1 / 0);
        e.exports = t.default
    }, function(e, t) {
        e.exports = function(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = {}, e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return function(t, r, u) {
                if (u = (0, i.default)(u || n.default), e <= 0 || !t) return u(null);
                var c = (0, o.default)(t),
                    f = !1,
                    l = 0,
                    h = !1;

                function d(e, t) {
                    if (l -= 1, e) f = !0, u(e);
                    else {
                        if (t === s.default || f && l <= 0) return f = !0, u(null);
                        h || p()
                    }
                }

                function p() {
                    for (h = !0; l < e && !f;) {
                        var t = c();
                        if (null === t) return f = !0, void(l <= 0 && u(null));
                        l += 1, r(t.value, t.key, (0, a.default)(d))
                    }
                    h = !1
                }
                p()
            }
        };
        var n = u(r(171)),
            i = u(r(719)),
            o = u(r(1061)),
            a = u(r(720)),
            s = u(r(837));

        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            return function(r, n, i) {
                return e(r, t, n, i)
            }
        }, e.exports = t.default
    }, function(e, t, r) {
        var n = r(841);

        function i(e) {
            return "never" !== s(e)
        }

        function o(e) {
            var t = a(e);
            return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t)
        }

        function a(e) {
            switch (e.method) {
                case "eth_getStorageAt":
                    return 2;
                case "eth_getBalance":
                case "eth_getCode":
                case "eth_getTransactionCount":
                case "eth_call":
                case "eth_estimateGas":
                    return 1;
                case "eth_getBlockByNumber":
                    return 0;
                default:
                    return
            }
        }

        function s(e) {
            switch (e.method) {
                case "web3_clientVersion":
                case "web3_sha3":
                case "eth_protocolVersion":
                case "eth_getBlockTransactionCountByHash":
                case "eth_getUncleCountByBlockHash":
                case "eth_getCode":
                case "eth_getBlockByHash":
                case "eth_getTransactionByHash":
                case "eth_getTransactionByBlockHashAndIndex":
                case "eth_getTransactionReceipt":
                case "eth_getUncleByBlockHashAndIndex":
                case "eth_getCompilers":
                case "eth_compileLLL":
                case "eth_compileSolidity":
                case "eth_compileSerpent":
                case "shh_version":
                    return "perma";
                case "eth_getBlockByNumber":
                case "eth_getBlockTransactionCountByNumber":
                case "eth_getUncleCountByBlockNumber":
                case "eth_getTransactionByBlockNumberAndIndex":
                case "eth_getUncleByBlockNumberAndIndex":
                    return "fork";
                case "eth_gasPrice":
                case "eth_getBalance":
                case "eth_getStorageAt":
                case "eth_getTransactionCount":
                case "eth_call":
                case "eth_estimateGas":
                case "eth_getFilterLogs":
                case "eth_getLogs":
                case "eth_blockNumber":
                    return "block";
                case "net_version":
                case "net_peerCount":
                case "net_listening":
                case "eth_syncing":
                case "eth_sign":
                case "eth_coinbase":
                case "eth_mining":
                case "eth_hashrate":
                case "eth_accounts":
                case "eth_sendTransaction":
                case "eth_sendRawTransaction":
                case "eth_newFilter":
                case "eth_newBlockFilter":
                case "eth_newPendingTransactionFilter":
                case "eth_uninstallFilter":
                case "eth_getFilterChanges":
                case "eth_getWork":
                case "eth_submitWork":
                case "eth_submitHashrate":
                case "db_putString":
                case "db_getString":
                case "db_putHex":
                case "db_getHex":
                case "shh_post":
                case "shh_newIdentity":
                case "shh_hasIdentity":
                case "shh_newGroup":
                case "shh_addToGroup":
                case "shh_newFilter":
                case "shh_uninstallFilter":
                case "shh_getFilterChanges":
                case "shh_getMessages":
                    return "never"
            }
        }
        e.exports = {
            cacheIdentifierForPayload: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!i(e)) return null;
                var r = t.includeBlockRef,
                    a = r ? e.params : o(e);
                return e.method + ":" + n(a)
            },
            canCache: i,
            blockTagForPayload: function(e) {
                var t = a(e);
                if (t >= e.params.length) return null;
                return e.params[t]
            },
            paramsWithoutBlockTag: o,
            blockTagParamIndex: a,
            cacheTypeForPayload: s
        }
    }, function(e, t, r) {
        var n = "undefined" !== typeof JSON ? JSON : r(1087);
        e.exports = function(e, t) {
            t || (t = {}), "function" === typeof t && (t = {
                cmp: t
            });
            var r = t.space || "";
            "number" === typeof r && (r = Array(r + 1).join(" "));
            var a, s = "boolean" === typeof t.cycles && t.cycles,
                u = t.replacer || function(e, t) {
                    return t
                },
                c = t.cmp && (a = t.cmp, function(e) {
                    return function(t, r) {
                        var n = {
                                key: t,
                                value: e[t]
                            },
                            i = {
                                key: r,
                                value: e[r]
                            };
                        return a(n, i)
                    }
                }),
                f = [];
            return function e(t, a, l, h) {
                var d = r ? "\n" + new Array(h + 1).join(r) : "",
                    p = r ? ": " : ":";
                if (l && l.toJSON && "function" === typeof l.toJSON && (l = l.toJSON()), void 0 !== (l = u.call(t, a, l))) {
                    if ("object" !== typeof l || null === l) return n.stringify(l);
                    if (i(l)) {
                        for (var v = [], g = 0; g < l.length; g++) {
                            var _ = e(l, g, l[g], h + 1) || n.stringify(null);
                            v.push(d + r + _)
                        }
                        return "[" + v.join(",") + d + "]"
                    }
                    if (-1 !== f.indexOf(l)) {
                        if (s) return n.stringify("__cycle__");
                        throw new TypeError("Converting circular structure to JSON")
                    }
                    f.push(l);
                    var m = o(l).sort(c && c(l));
                    for (v = [], g = 0; g < m.length; g++) {
                        var y = e(l, a = m[g], l[a], h + 1);
                        if (y) {
                            var w = n.stringify(a) + p + y;
                            v.push(d + r + w)
                        }
                    }
                    return f.splice(f.indexOf(l), 1), "{" + v.join(",") + d + "}"
                }
            }({
                "": e
            }, "", e, 0)
        };
        var i = Array.isArray || function(e) {
                return "[object Array]" === {}.toString.call(e)
            },
            o = Object.keys || function(e) {
                var t = Object.prototype.hasOwnProperty || function() {
                        return !0
                    },
                    r = [];
                for (var n in e) t.call(e, n) && r.push(n);
                return r
            }
    }, , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
        "use strict";
        var n = r(35),
            i = r(46),
            o = r(47);
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(602),
            s = a.__importDefault(r(864)),
            u = a.__importStar(r(905)),
            c = function(e) {
                i(r, e);
                var t = o(r);

                function r(e, i) {
                    return n(this, r), t.call(this, {
                        cryptoLib: u,
                        connectorOpts: e,
                        pushServerOpts: i
                    })
                }
                return r
            }(s.default);
        t.default = c
    }, function(e, t, r) {
        "use strict";
        var n = r(2),
            i = r(35),
            o = r(36);
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = r(602),
            s = r(617),
            u = a.__importDefault(r(899)),
            c = r(902),
            f = a.__importDefault(r(903)),
            l = a.__importDefault(r(904)),
            h = function() {
                function e(t) {
                    if (i(this, e), this.protocol = "wc", this.version = 1, this._bridge = "", this._key = null, this._clientId = "", this._clientMeta = null, this._peerId = "", this._peerMeta = null, this._handshakeId = 0, this._handshakeTopic = "", this._connected = !1, this._accounts = [], this._chainId = 0, this._networkId = 0, this._rpcUrl = "", this._eventManager = new f.default, this._clientMeta = s.getClientMeta() || t.connectorOpts.clientMeta || null, this._cryptoLib = t.cryptoLib, this._sessionStorage = t.sessionStorage || new l.default, this._qrcodeModal = t.connectorOpts.qrcodeModal, this._qrcodeModalOptions = t.connectorOpts.qrcodeModalOptions, !t.connectorOpts.bridge && !t.connectorOpts.uri && !t.connectorOpts.session) throw new Error(c.ERROR_MISSING_REQUIRED);
                    t.connectorOpts.bridge && (this.bridge = t.connectorOpts.bridge), t.connectorOpts.uri && (this.uri = t.connectorOpts.uri);
                    var r = t.connectorOpts.session || this._getStorageSession();
                    r && (this.session = r), this.handshakeId && this._subscribeToSessionResponse(this.handshakeId, "Session request rejected"), this._transport = t.transport || new u.default({
                        protocol: this.protocol,
                        version: this.version,
                        url: this.bridge,
                        subscriptions: [this.clientId]
                    }), this._subscribeToInternalEvents(), this._initTransport(), t.connectorOpts.uri && this._subscribeToSessionRequest(), t.pushServerOpts && this._registerPushServer(t.pushServerOpts)
                }
                return o(e, [{
                    key: "bridge",
                    get: function() {
                        return this._bridge
                    },
                    set: function(e) {
                        e && (this._bridge = e)
                    }
                }, {
                    key: "key",
                    get: function() {
                        return this._key ? s.convertArrayBufferToHex(this._key, !0) : ""
                    },
                    set: function(e) {
                        if (e) {
                            var t = s.convertHexToArrayBuffer(e);
                            this._key = t
                        }
                    }
                }, {
                    key: "clientId",
                    get: function() {
                        var e = this._clientId;
                        return e || (e = this._clientId = s.uuid()), this._clientId
                    },
                    set: function(e) {
                        e && (this._clientId = e)
                    }
                }, {
                    key: "peerId",
                    get: function() {
                        return this._peerId
                    },
                    set: function(e) {
                        e && (this._peerId = e)
                    }
                }, {
                    key: "clientMeta",
                    get: function() {
                        var e = this._clientMeta;
                        return e || (e = this._clientMeta = s.getClientMeta()), e
                    },
                    set: function(e) {}
                }, {
                    key: "peerMeta",
                    get: function() {
                        return this._peerMeta
                    },
                    set: function(e) {
                        this._peerMeta = e
                    }
                }, {
                    key: "handshakeTopic",
                    get: function() {
                        return this._handshakeTopic
                    },
                    set: function(e) {
                        e && (this._handshakeTopic = e)
                    }
                }, {
                    key: "handshakeId",
                    get: function() {
                        return this._handshakeId
                    },
                    set: function(e) {
                        e && (this._handshakeId = e)
                    }
                }, {
                    key: "uri",
                    get: function() {
                        return this._formatUri()
                    },
                    set: function(e) {
                        if (e) {
                            var t = this._parseUri(e),
                                r = t.handshakeTopic,
                                n = t.bridge,
                                i = t.key;
                            this.handshakeTopic = r, this.bridge = n, this.key = i
                        }
                    }
                }, {
                    key: "chainId",
                    get: function() {
                        return this._chainId
                    },
                    set: function(e) {
                        this._chainId = e
                    }
                }, {
                    key: "networkId",
                    get: function() {
                        return this._networkId
                    },
                    set: function(e) {
                        this._networkId = e
                    }
                }, {
                    key: "accounts",
                    get: function() {
                        return this._accounts
                    },
                    set: function(e) {
                        this._accounts = e
                    }
                }, {
                    key: "rpcUrl",
                    get: function() {
                        return this._rpcUrl
                    },
                    set: function(e) {
                        this._rpcUrl = e
                    }
                }, {
                    key: "connected",
                    get: function() {
                        return this._connected
                    },
                    set: function(e) {}
                }, {
                    key: "pending",
                    get: function() {
                        return !!this._handshakeTopic
                    },
                    set: function(e) {}
                }, {
                    key: "session",
                    get: function() {
                        return {
                            connected: this.connected,
                            accounts: this.accounts,
                            chainId: this.chainId,
                            bridge: this.bridge,
                            key: this.key,
                            clientId: this.clientId,
                            clientMeta: this.clientMeta,
                            peerId: this.peerId,
                            peerMeta: this.peerMeta,
                            handshakeId: this.handshakeId,
                            handshakeTopic: this.handshakeTopic
                        }
                    },
                    set: function(e) {
                        e && (this._connected = e.connected, this.accounts = e.accounts, this.chainId = e.chainId, this.bridge = e.bridge, this.key = e.key, this.clientId = e.clientId, this.clientMeta = e.clientMeta, this.peerId = e.peerId, this.peerMeta = e.peerMeta, this.handshakeId = e.handshakeId, this.handshakeTopic = e.handshakeTopic)
                    }
                }, {
                    key: "on",
                    value: function(e, t) {
                        var r = {
                            event: e,
                            callback: t
                        };
                        this._eventManager.subscribe(r)
                    }
                }, {
                    key: "createInstantRequest",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i, o, a = this;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this._generateKey();
                                    case 2:
                                        return this._key = t.sent, r = this._formatRequest({
                                            method: "wc_instantRequest",
                                            params: [{
                                                peerId: this.clientId,
                                                peerMeta: this.clientMeta,
                                                request: this._formatRequest(e)
                                            }]
                                        }), this.handshakeId = r.id, this.handshakeTopic = s.uuid(), this._eventManager.trigger({
                                            event: "display_uri",
                                            params: [this.uri]
                                        }), this.on("modal_closed", (function() {
                                            throw new Error(c.ERROR_QRCODE_MODAL_USER_CLOSED)
                                        })), i = function() {
                                            a.killSession()
                                        }, t.prev = 9, t.next = 12, this._sendCallRequest(r);
                                    case 12:
                                        return (o = t.sent) && i(), t.abrupt("return", o);
                                    case 17:
                                        throw t.prev = 17, t.t0 = t.catch(9), i(), t.t0;
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [9, 17]
                            ])
                        })))
                    }
                }, {
                    key: "connect",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r = this;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._qrcodeModal) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error(c.ERROR_QRCODE_MODAL_NOT_PROVIDED);
                                    case 2:
                                        if (!this.connected) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return", {
                                            chainId: this.chainId,
                                            accounts: this.accounts
                                        });
                                    case 4:
                                        return t.next = 6, this.createSession(e);
                                    case 6:
                                        return t.abrupt("return", new Promise((function(e, t) {
                                            return a.__awaiter(r, void 0, void 0, n.mark((function r() {
                                                return n.wrap((function(r) {
                                                    for (;;) switch (r.prev = r.next) {
                                                        case 0:
                                                            this.on("modal_closed", (function() {
                                                                return t(new Error(c.ERROR_QRCODE_MODAL_USER_CLOSED))
                                                            })), this.on("connect", (function(r, n) {
                                                                if (r) return t(r);
                                                                e(n.params[0])
                                                            }));
                                                        case 2:
                                                        case "end":
                                                            return r.stop()
                                                    }
                                                }), r, this)
                                            })))
                                        })));
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "createSession",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!this._connected) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error(c.ERROR_SESSION_CONNECTED);
                                    case 2:
                                        if (!this.pending) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6, this._generateKey();
                                    case 6:
                                        this._key = t.sent, r = this._formatRequest({
                                            method: "wc_sessionRequest",
                                            params: [{
                                                peerId: this.clientId,
                                                peerMeta: this.clientMeta,
                                                chainId: e && e.chainId ? e.chainId : null
                                            }]
                                        }), this.handshakeId = r.id, this.handshakeTopic = s.uuid(), this._sendSessionRequest(r, "Session update rejected", {
                                            topic: this.handshakeTopic
                                        }), this._eventManager.trigger({
                                            event: "display_uri",
                                            params: [this.uri]
                                        });
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "approveSession",
                    value: function(e) {
                        if (this._connected) throw new Error(c.ERROR_SESSION_CONNECTED);
                        this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
                        var t = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl,
                                peerId: this.clientId,
                                peerMeta: this.clientMeta
                            },
                            r = {
                                id: this.handshakeId,
                                jsonrpc: "2.0",
                                result: t
                            };
                        this._sendResponse(r), this._connected = !0, this._setStorageSession(), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })
                    }
                }, {
                    key: "rejectSession",
                    value: function(e) {
                        if (this._connected) throw new Error(c.ERROR_SESSION_CONNECTED);
                        var t = e && e.message ? e.message : c.ERROR_SESSION_REJECTED,
                            r = this._formatResponse({
                                id: this.handshakeId,
                                error: {
                                    message: t
                                }
                            });
                        this._sendResponse(r), this._connected = !1, this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: t
                            }]
                        }), this._removeStorageSession()
                    }
                }, {
                    key: "updateSession",
                    value: function(e) {
                        if (!this._connected) throw new Error(c.ERROR_SESSION_DISCONNECTED);
                        this.chainId = e.chainId, this.accounts = e.accounts, this.networkId = e.networkId || 0, this.rpcUrl = e.rpcUrl || "";
                        var t = {
                                approved: !0,
                                chainId: this.chainId,
                                networkId: this.networkId,
                                accounts: this.accounts,
                                rpcUrl: this.rpcUrl
                            },
                            r = this._formatRequest({
                                method: "wc_sessionUpdate",
                                params: [t]
                            });
                        this._sendSessionRequest(r, "Session update rejected"), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        }), this._manageStorageSession()
                    }
                }, {
                    key: "killSession",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i, o;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = e ? e.message : "Session Disconnected", i = {
                                            approved: !1,
                                            chainId: null,
                                            networkId: null,
                                            accounts: null
                                        }, o = this._formatRequest({
                                            method: "wc_sessionUpdate",
                                            params: [i]
                                        }), t.next = 5, this._sendRequest(o);
                                    case 5:
                                        this._handleSessionDisconnect(r);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "sendTransaction",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i, o;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._connected) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error(c.ERROR_SESSION_DISCONNECTED);
                                    case 2:
                                        return r = s.parseTransactionData(e), i = this._formatRequest({
                                            method: "eth_sendTransaction",
                                            params: [r]
                                        }), t.next = 6, this._sendCallRequest(i);
                                    case 6:
                                        return o = t.sent, t.abrupt("return", o);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "signTransaction",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i, o;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._connected) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error(c.ERROR_SESSION_DISCONNECTED);
                                    case 2:
                                        return r = s.parseTransactionData(e), i = this._formatRequest({
                                            method: "eth_signTransaction",
                                            params: [r]
                                        }), t.next = 6, this._sendCallRequest(i);
                                    case 6:
                                        return o = t.sent, t.abrupt("return", o);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "signMessage",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._connected) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error(c.ERROR_SESSION_DISCONNECTED);
                                    case 2:
                                        return r = this._formatRequest({
                                            method: "eth_sign",
                                            params: e
                                        }), t.next = 5, this._sendCallRequest(r);
                                    case 5:
                                        return i = t.sent, t.abrupt("return", i);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "signPersonalMessage",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._connected) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error(c.ERROR_SESSION_DISCONNECTED);
                                    case 2:
                                        return e = s.parsePersonalSign(e), r = this._formatRequest({
                                            method: "personal_sign",
                                            params: e
                                        }), t.next = 6, this._sendCallRequest(r);
                                    case 6:
                                        return i = t.sent, t.abrupt("return", i);
                                    case 8:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "signTypedData",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._connected) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error(c.ERROR_SESSION_DISCONNECTED);
                                    case 2:
                                        return r = this._formatRequest({
                                            method: "eth_signTypedData",
                                            params: e
                                        }), t.next = 5, this._sendCallRequest(r);
                                    case 5:
                                        return i = t.sent, t.abrupt("return", i);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "updateChain",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._connected) {
                                            t.next = 2;
                                            break
                                        }
                                        throw new Error("Session currently disconnected");
                                    case 2:
                                        return r = this._formatRequest({
                                            method: "wallet_updateChain",
                                            params: [e]
                                        }), t.next = 5, this._sendCallRequest(r);
                                    case 5:
                                        return i = t.sent, t.abrupt("return", i);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "unsafeSend",
                    value: function(e, t) {
                        var r = this;
                        return this._sendRequest(e, t), new Promise((function(t, n) {
                            r._subscribeToResponse(e.id, (function(e, r) {
                                if (e) n(e);
                                else {
                                    if (!r) throw new Error(c.ERROR_MISSING_JSON_RPC);
                                    t(r)
                                }
                            }))
                        }))
                    }
                }, {
                    key: "sendCustomRequest",
                    value: function(e, t) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function r() {
                            var i, o;
                            return n.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (this._connected) {
                                            r.next = 2;
                                            break
                                        }
                                        throw new Error(c.ERROR_SESSION_DISCONNECTED);
                                    case 2:
                                        r.t0 = e.method, r.next = "eth_accounts" === r.t0 ? 5 : "eth_chainId" === r.t0 ? 6 : "eth_sendTransaction" === r.t0 || "eth_signTransaction" === r.t0 ? 7 : "personal_sign" === r.t0 ? 9 : 11;
                                        break;
                                    case 5:
                                        return r.abrupt("return", this.accounts);
                                    case 6:
                                        return r.abrupt("return", s.convertNumberToHex(this.chainId));
                                    case 7:
                                        return e.params && (e.params[0] = s.parseTransactionData(e.params[0])), r.abrupt("break", 12);
                                    case 9:
                                        return e.params && (e.params = s.parsePersonalSign(e.params)), r.abrupt("break", 12);
                                    case 11:
                                        return r.abrupt("break", 12);
                                    case 12:
                                        return i = this._formatRequest(e), r.next = 15, this._sendCallRequest(i, t);
                                    case 15:
                                        return o = r.sent, r.abrupt("return", o);
                                    case 17:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, this)
                        })))
                    }
                }, {
                    key: "approveRequest",
                    value: function(e) {
                        if (!s.isJsonRpcResponseSuccess(e)) throw new Error(c.ERROR_MISSING_RESULT);
                        var t = this._formatResponse(e);
                        this._sendResponse(t)
                    }
                }, {
                    key: "rejectRequest",
                    value: function(e) {
                        if (!s.isJsonRpcResponseError(e)) throw new Error(c.ERROR_MISSING_ERROR);
                        var t = this._formatResponse(e);
                        this._sendResponse(t)
                    }
                }, {
                    key: "_sendRequest",
                    value: function(e, t) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function r() {
                            var i, o, a, u, c;
                            return n.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return i = this._formatRequest(e), r.next = 3, this._encrypt(i);
                                    case 3:
                                        o = r.sent, a = "undefined" !== typeof(null === t || void 0 === t ? void 0 : t.topic) ? t.topic : this.peerId, u = JSON.stringify(o), c = "undefined" !== typeof(null === t || void 0 === t ? void 0 : t.forcePushNotification) ? !t.forcePushNotification : s.isSilentPayload(i), this._transport.send(u, a, c);
                                    case 8:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, this)
                        })))
                    }
                }, {
                    key: "_sendResponse",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i, o;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, this._encrypt(e);
                                    case 2:
                                        r = t.sent, i = this.peerId, o = JSON.stringify(r), !0, this._transport.send(o, i, true);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "_sendSessionRequest",
                    value: function(e, t, r) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function i() {
                            return n.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        this._sendRequest(e, r), this._subscribeToSessionResponse(e.id, t);
                                    case 2:
                                    case "end":
                                        return n.stop()
                                }
                            }), i, this)
                        })))
                    }
                }, {
                    key: "_sendCallRequest",
                    value: function(e, t) {
                        if (this._sendRequest(e, t), this._eventManager.trigger({
                                event: "call_request_sent",
                                params: [{
                                    request: e,
                                    options: t
                                }]
                            }), s.isMobile() && s.signingMethods.includes(e.method)) {
                            var r = s.getLocal(s.mobileLinkChoiceKey);
                            r && (window.location.href = r.href)
                        }
                        return this._subscribeToCallResponse(e.id)
                    }
                }, {
                    key: "_formatRequest",
                    value: function(e) {
                        if ("undefined" === typeof e.method) throw new Error(c.ERROR_MISSING_METHOD);
                        return {
                            id: "undefined" === typeof e.id ? s.payloadId() : e.id,
                            jsonrpc: "2.0",
                            method: e.method,
                            params: "undefined" === typeof e.params ? [] : e.params
                        }
                    }
                }, {
                    key: "_formatResponse",
                    value: function(e) {
                        if ("undefined" === typeof e.id) throw new Error(c.ERROR_MISSING_ID);
                        var t = {
                            id: e.id,
                            jsonrpc: "2.0"
                        };
                        if (s.isJsonRpcResponseError(e)) {
                            var r = s.formatRpcError(e.error);
                            return Object.assign(Object.assign(Object.assign({}, t), e), {
                                error: r
                            })
                        }
                        if (s.isJsonRpcResponseSuccess(e)) return Object.assign(Object.assign({}, t), e);
                        throw new Error(c.ERROR_INVALID_RESPONSE)
                    }
                }, {
                    key: "_handleSessionDisconnect",
                    value: function(e) {
                        var t = e || "Session Disconnected";
                        this._connected || (this._qrcodeModal && this._qrcodeModal.close(), s.removeLocal(s.mobileLinkChoiceKey)), this._connected && (this._connected = !1), this._handshakeId && (this._handshakeId = 0), this._handshakeTopic && (this._handshakeTopic = ""), this._eventManager.trigger({
                            event: "disconnect",
                            params: [{
                                message: t
                            }]
                        }), this._removeStorageSession(), this._transport.close()
                    }
                }, {
                    key: "_handleSessionResponse",
                    value: function(e, t) {
                        t && t.approved ? (this._connected ? (t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), this._eventManager.trigger({
                            event: "session_update",
                            params: [{
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })) : (this._connected = !0, t.chainId && (this.chainId = t.chainId), t.accounts && (this.accounts = t.accounts), t.peerId && !this.peerId && (this.peerId = t.peerId), t.peerMeta && !this.peerMeta && (this.peerMeta = t.peerMeta), this._eventManager.trigger({
                            event: "connect",
                            params: [{
                                peerId: this.peerId,
                                peerMeta: this.peerMeta,
                                chainId: this.chainId,
                                accounts: this.accounts
                            }]
                        })), this._manageStorageSession()) : this._handleSessionDisconnect(e)
                    }
                }, {
                    key: "_handleIncomingMessages",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if ([this.clientId, this.handshakeTopic].includes(e.topic)) {
                                            t.next = 3;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 3:
                                        t.prev = 3, r = JSON.parse(e.payload), t.next = 10;
                                        break;
                                    case 7:
                                        return t.prev = 7, t.t0 = t.catch(3), t.abrupt("return");
                                    case 10:
                                        return t.next = 12, this._decrypt(r);
                                    case 12:
                                        (i = t.sent) && this._eventManager.trigger(i);
                                    case 14:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [3, 7]
                            ])
                        })))
                    }
                }, {
                    key: "_subscribeToSessionRequest",
                    value: function() {
                        this._transport.subscribe(this.handshakeTopic)
                    }
                }, {
                    key: "_subscribeToResponse",
                    value: function(e, t) {
                        this.on("response:".concat(e), t)
                    }
                }, {
                    key: "_subscribeToSessionResponse",
                    value: function(e, t) {
                        var r = this;
                        this._subscribeToResponse(e, (function(e, n) {
                            e ? r._handleSessionResponse(e.message) : n.result ? r._handleSessionResponse(t, n.result) : n.error && n.error.message ? r._handleSessionResponse(n.error.message) : r._handleSessionResponse(t)
                        }))
                    }
                }, {
                    key: "_subscribeToCallResponse",
                    value: function(e) {
                        var t = this;
                        return new Promise((function(r, n) {
                            t._subscribeToResponse(e, (function(e, t) {
                                e ? n(e) : t.result ? r(t.result) : t.error && t.error.message ? n(new Error(t.error.message)) : n(new Error(c.ERROR_INVALID_RESPONSE))
                            }))
                        }))
                    }
                }, {
                    key: "_subscribeToInternalEvents",
                    value: function() {
                        var e = this;
                        this.on("display_uri", (function() {
                            e._qrcodeModal && e._qrcodeModal.open(e.uri, (function() {
                                e._eventManager.trigger({
                                    event: "modal_closed",
                                    params: []
                                })
                            }), e._qrcodeModalOptions)
                        })), this.on("connect", (function() {
                            e._qrcodeModal && e._qrcodeModal.close()
                        })), this.on("wc_sessionRequest", (function(t, r) {
                            t && e._eventManager.trigger({
                                event: "error",
                                params: [{
                                    code: "SESSION_REQUEST_ERROR",
                                    message: t.toString()
                                }]
                            }), e.handshakeId = r.id, e.peerId = r.params[0].peerId, e.peerMeta = r.params[0].peerMeta;
                            var n = Object.assign(Object.assign({}, r), {
                                method: "session_request"
                            });
                            e._eventManager.trigger(n)
                        })), this.on("wc_sessionUpdate", (function(t, r) {
                            t && e._handleSessionResponse(t.message), e._handleSessionResponse("Session disconnected", r.params[0])
                        }))
                    }
                }, {
                    key: "_initTransport",
                    value: function() {
                        var e = this;
                        this._transport.on("message", (function(t) {
                            return e._handleIncomingMessages(t)
                        })), this._transport.on("open", (function() {
                            return e._eventManager.trigger({
                                event: "transport_open",
                                params: []
                            })
                        })), this._transport.on("close", (function() {
                            return e._eventManager.trigger({
                                event: "transport_close",
                                params: []
                            })
                        })), this._transport.on("error", (function() {
                            return e._eventManager.trigger({
                                event: "transport_error",
                                params: ["Websocket connection failed"]
                            })
                        })), this._transport.open()
                    }
                }, {
                    key: "_formatUri",
                    value: function() {
                        var e = this.protocol,
                            t = this.handshakeTopic,
                            r = this.version,
                            n = encodeURIComponent(this.bridge),
                            i = this.key;
                        return "".concat(e, ":").concat(t, "@").concat(r, "?bridge=").concat(n, "&key=").concat(i)
                    }
                }, {
                    key: "_parseUri",
                    value: function(e) {
                        var t = s.parseWalletConnectUri(e);
                        if (t.protocol === this.protocol) {
                            if (!t.handshakeTopic) throw Error("Invalid or missing handshakeTopic parameter value");
                            var r = t.handshakeTopic;
                            if (!t.bridge) throw Error("Invalid or missing bridge url parameter value");
                            var n = decodeURIComponent(t.bridge);
                            if (!t.key) throw Error("Invalid or missing key parameter value");
                            return {
                                handshakeTopic: r,
                                bridge: n,
                                key: t.key
                            }
                        }
                        throw new Error(c.ERROR_INVALID_URI)
                    }
                }, {
                    key: "_generateKey",
                    value: function() {
                        return a.__awaiter(this, void 0, void 0, n.mark((function e() {
                            var t;
                            return n.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this._cryptoLib) {
                                            e.next = 5;
                                            break
                                        }
                                        return e.next = 3, this._cryptoLib.generateKey();
                                    case 3:
                                        return t = e.sent, e.abrupt("return", t);
                                    case 5:
                                        return e.abrupt("return", null);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        })))
                    }
                }, {
                    key: "_encrypt",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = this._key, !this._cryptoLib || !r) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 4, this._cryptoLib.encrypt(e, r);
                                    case 4:
                                        return i = t.sent, t.abrupt("return", i);
                                    case 6:
                                        return t.abrupt("return", null);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "_decrypt",
                    value: function(e) {
                        return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                            var r, i;
                            return n.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (r = this._key, !this._cryptoLib || !r) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 4, this._cryptoLib.decrypt(e, r);
                                    case 4:
                                        return i = t.sent, t.abrupt("return", i);
                                    case 6:
                                        return t.abrupt("return", null);
                                    case 7:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this)
                        })))
                    }
                }, {
                    key: "_getStorageSession",
                    value: function() {
                        var e = null;
                        return this._sessionStorage && (e = this._sessionStorage.getSession()), e
                    }
                }, {
                    key: "_setStorageSession",
                    value: function() {
                        this._sessionStorage && this._sessionStorage.setSession(this.session)
                    }
                }, {
                    key: "_removeStorageSession",
                    value: function() {
                        this._sessionStorage && this._sessionStorage.removeSession()
                    }
                }, {
                    key: "_manageStorageSession",
                    value: function() {
                        this._connected ? this._setStorageSession() : this._removeStorageSession()
                    }
                }, {
                    key: "_registerPushServer",
                    value: function(e) {
                        var t = this;
                        if (!e.url || "string" !== typeof e.url) throw Error("Invalid or missing pushServerOpts.url parameter value");
                        if (!e.type || "string" !== typeof e.type) throw Error("Invalid or missing pushServerOpts.type parameter value");
                        if (!e.token || "string" !== typeof e.token) throw Error("Invalid or missing pushServerOpts.token parameter value");
                        var r = {
                            bridge: this.bridge,
                            topic: this.clientId,
                            type: e.type,
                            token: e.token,
                            peerName: "",
                            language: e.language || ""
                        };
                        this.on("connect", (function(i, o) {
                            return a.__awaiter(t, void 0, void 0, n.mark((function t() {
                                var a, s;
                                return n.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!i) {
                                                t.next = 2;
                                                break
                                            }
                                            throw i;
                                        case 2:
                                            return e.peerMeta && (a = o.params[0].peerMeta.name, r.peerName = a), t.prev = 3, t.next = 6, fetch("".concat(e.url, "/new"), {
                                                method: "POST",
                                                headers: {
                                                    Accept: "application/json",
                                                    "Content-Type": "application/json"
                                                },
                                                body: JSON.stringify(r)
                                            });
                                        case 6:
                                            return s = t.sent, t.next = 9, s.json();
                                        case 9:
                                            if (t.sent.success) {
                                                t.next = 12;
                                                break
                                            }
                                            throw Error("Failed to register in Push Server");
                                        case 12:
                                            t.next = 17;
                                            break;
                                        case 14:
                                            throw t.prev = 14, t.t0 = t.catch(3), Error("Failed to register in Push Server");
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [3, 14]
                                ])
                            })))
                        }))
                    }
                }]), e
            }();
        t.default = h
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(866);
        t.getWindowMetadata = function() {
            var e, t;
            try {
                e = n.getDocumentOrThrow(), t = n.getLocationOrThrow()
            } catch (o) {
                return null
            }

            function r() {
                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                for (var i = e.getElementsByTagName("meta"), o = function(e) {
                        var t = i[e],
                            n = ["itemprop", "property", "name"].map((function(e) {
                                return t.getAttribute(e)
                            })).filter((function(e) {
                                return !!e && r.includes(e)
                            }));
                        if (n.length && n) {
                            var o = t.getAttribute("content");
                            if (o) return {
                                v: o
                            }
                        }
                    }, a = 0; a < i.length; a++) {
                    var s = o(a);
                    if ("object" === typeof s) return s.v
                }
                return ""
            }
            var i = function() {
                var t = r("name", "og:site_name", "og:title", "twitter:title");
                return t || (t = e.title), t
            }();
            return {
                description: r("description", "og:description", "twitter:description", "keywords"),
                url: t.origin,
                icons: function() {
                    for (var r = e.getElementsByTagName("link"), n = [], i = 0; i < r.length; i++) {
                        var o = r[i],
                            a = o.getAttribute("rel");
                        if (a && a.toLowerCase().indexOf("icon") > -1) {
                            var s = o.getAttribute("href");
                            if (s)
                                if (-1 === s.toLowerCase().indexOf("https:") && -1 === s.toLowerCase().indexOf("http:") && 0 !== s.indexOf("//")) {
                                    var u = t.protocol + "//" + t.host;
                                    if (0 === s.indexOf("/")) u += s;
                                    else {
                                        var c = t.pathname.split("/");
                                        c.pop(), u += c.join("/") + "/" + s
                                    }
                                    n.push(u)
                                } else if (0 === s.indexOf("//")) {
                                var f = t.protocol + s;
                                n.push(f)
                            } else n.push(s)
                        }
                    }
                    return n
                }(),
                name: i
            }
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            var t = void 0;
            return "undefined" !== typeof window && "undefined" !== typeof window[e] && (t = window[e]), t
        }

        function i(e) {
            var t = n(e);
            if (!t) throw new Error("".concat(e, " is not defined in Window"));
            return t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getFromWindow = n, t.getFromWindowOrThrow = i, t.getDocumentOrThrow = function() {
            return i("document")
        }, t.getDocument = function() {
            return n("document")
        }, t.getNavigatorOrThrow = function() {
            return i("navigator")
        }, t.getNavigator = function() {
            return n("navigator")
        }, t.getLocationOrThrow = function() {
            return i("location")
        }, t.getLocation = function() {
            return n("location")
        }, t.getCryptoOrThrow = function() {
            return i("crypto")
        }, t.getCrypto = function() {
            return n("crypto")
        }, t.getLocalStorageOrThrow = function() {
            return i("localStorage")
        }, t.getLocalStorage = function() {
            return n("localStorage")
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            var t = void 0;
            return "undefined" !== typeof window && "undefined" !== typeof window[e] && (t = window[e]), t
        }

        function i(e) {
            var t = n(e);
            if (!t) throw new Error("".concat(e, " is not defined in Window"));
            return t
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getFromWindow = n, t.getFromWindowOrThrow = i, t.getDocumentOrThrow = function() {
            return i("document")
        }, t.getDocument = function() {
            return n("document")
        }, t.getNavigatorOrThrow = function() {
            return i("navigator")
        }, t.getNavigator = function() {
            return n("navigator")
        }, t.getLocationOrThrow = function() {
            return i("location")
        }, t.getLocation = function() {
            return n("location")
        }, t.getCryptoOrThrow = function() {
            return i("crypto")
        }, t.getCrypto = function() {
            return n("crypto")
        }, t.getLocalStorageOrThrow = function() {
            return i("localStorage")
        }, t.getLocalStorage = function() {
            return n("localStorage")
        }
    }, function(e, t, r) {
        "use strict";
        r.r(t),
            function(e) {
                r.d(t, "BrowserInfo", (function() {
                    return i
                })), r.d(t, "NodeInfo", (function() {
                    return o
                })), r.d(t, "SearchBotDeviceInfo", (function() {
                    return a
                })), r.d(t, "BotInfo", (function() {
                    return s
                })), r.d(t, "ReactNativeInfo", (function() {
                    return u
                })), r.d(t, "detect", (function() {
                    return h
                })), r.d(t, "browserName", (function() {
                    return p
                })), r.d(t, "parseUserAgent", (function() {
                    return v
                })), r.d(t, "detectOS", (function() {
                    return g
                })), r.d(t, "getNodeVersion", (function() {
                    return _
                }));
                var n = function() {
                        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                        var n = Array(e),
                            i = 0;
                        for (t = 0; t < r; t++)
                            for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) n[i] = o[a];
                        return n
                    },
                    i = function(e, t, r) {
                        this.name = e, this.version = t, this.os = r, this.type = "browser"
                    },
                    o = function(t) {
                        this.version = t, this.type = "node", this.name = "node", this.os = e.platform
                    },
                    a = function(e, t, r, n) {
                        this.name = e, this.version = t, this.os = r, this.bot = n, this.type = "bot-device"
                    },
                    s = function() {
                        this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                    },
                    u = function() {
                        this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                    },
                    c = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                    f = [
                        ["aol", /AOLShield\/([0-9\._]+)/],
                        ["edge", /Edge\/([0-9\._]+)/],
                        ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                        ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                        ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                        ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                        ["silk", /\bSilk\/([0-9._-]+)\b/],
                        ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                        ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                        ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                        ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                        ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                        ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                        ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                        ["fxios", /FxiOS\/([0-9\.]+)/],
                        ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                        ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                        ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                        ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                        ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                        ["ie", /MSIE\s(7\.0)/],
                        ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                        ["android", /Android\s([0-9\.]+)/],
                        ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                        ["safari", /Version\/([0-9\._]+).*Safari/],
                        ["facebook", /FBAV\/([0-9\.]+)/],
                        ["instagram", /Instagram\s([0-9\.]+)/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                        ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                        ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                    ],
                    l = [
                        ["iOS", /iP(hone|od|ad)/],
                        ["Android OS", /Android/],
                        ["BlackBerry OS", /BlackBerry|BB10/],
                        ["Windows Mobile", /IEMobile/],
                        ["Amazon OS", /Kindle/],
                        ["Windows 3.11", /Win16/],
                        ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                        ["Windows 98", /(Windows 98)|(Win98)/],
                        ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                        ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                        ["Windows Server 2003", /(Windows NT 5.2)/],
                        ["Windows Vista", /(Windows NT 6.0)/],
                        ["Windows 7", /(Windows NT 6.1)/],
                        ["Windows 8", /(Windows NT 6.2)/],
                        ["Windows 8.1", /(Windows NT 6.3)/],
                        ["Windows 10", /(Windows NT 10.0)/],
                        ["Windows ME", /Windows ME/],
                        ["Open BSD", /OpenBSD/],
                        ["Sun OS", /SunOS/],
                        ["Chrome OS", /CrOS/],
                        ["Linux", /(Linux)|(X11)/],
                        ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                        ["QNX", /QNX/],
                        ["BeOS", /BeOS/],
                        ["OS/2", /OS\/2/]
                    ];

                function h(e) {
                    return e ? v(e) : "undefined" === typeof document && "undefined" !== typeof navigator && "ReactNative" === navigator.product ? new u : "undefined" !== typeof navigator ? v(navigator.userAgent) : _()
                }

                function d(e) {
                    return "" !== e && f.reduce((function(t, r) {
                        var n = r[0],
                            i = r[1];
                        if (t) return t;
                        var o = i.exec(e);
                        return !!o && [n, o]
                    }), !1)
                }

                function p(e) {
                    var t = d(e);
                    return t ? t[0] : null
                }

                function v(e) {
                    var t = d(e);
                    if (!t) return null;
                    var r = t[0],
                        o = t[1];
                    if ("searchbot" === r) return new s;
                    var u = o[1] && o[1].split(/[._]/).slice(0, 3);
                    u ? u.length < 3 && (u = n(u, function(e) {
                        for (var t = [], r = 0; r < e; r++) t.push("0");
                        return t
                    }(3 - u.length))) : u = [];
                    var f = u.join("."),
                        l = g(e),
                        h = c.exec(e);
                    return h && h[1] ? new a(r, f, l, h[1]) : new i(r, f, l)
                }

                function g(e) {
                    for (var t = 0, r = l.length; t < r; t++) {
                        var n = l[t],
                            i = n[0];
                        if (n[1].exec(e)) return i
                    }
                    return null
                }

                function _() {
                    return "undefined" !== typeof e && e.version ? new o(e.version.slice(1)) : null
                }
            }.call(this, r(111))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.safeJsonParse = function(e) {
            try {
                return JSON.parse(e)
            } catch (t) {
                return e
            }
        }, t.safeJsonStringify = function(e) {
            return "string" === typeof e ? e : JSON.stringify(e, (function(e, t) {
                return "undefined" === typeof t ? null : t
            }))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getMobileLinkRegistry = t.getMobileRegistryEntry = t.saveMobileLinkInfo = t.formatIOSMobile = t.mobileLinkChoiceKey = void 0;
        var n = r(754);

        function i(e, t) {
            return e.filter((function(e) {
                return e.name.toLowerCase().includes(t.toLowerCase())
            }))[0]
        }
        t.mobileLinkChoiceKey = "WALLETCONNECT_DEEPLINK_CHOICE", t.formatIOSMobile = function(e, t) {
            var r = encodeURIComponent(e);
            return t.universalLink ? "".concat(t.universalLink, "/wc?uri=").concat(r) : t.deepLink ? "".concat(t.deepLink).concat(t.deepLink.endsWith(":") ? "//" : "/", "wc?uri=").concat(r) : ""
        }, t.saveMobileLinkInfo = function(e) {
            var r = e.href.split("?")[0];
            n.setLocal(t.mobileLinkChoiceKey, Object.assign(Object.assign({}, e), {
                href: r
            }))
        }, t.getMobileRegistryEntry = i, t.getMobileLinkRegistry = function(e, t) {
            var r = e;
            return t && t.length && (r = t.map((function(t) {
                return i(e, t)
            }))), r
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formatMobileRegistry = t.formatMobileRegistryEntry = t.getAppLogoUrl = t.getDappRegistryUrl = t.getWalletRegistryUrl = void 0;
        var n = "https://registry.walletconnect.org";

        function i(e) {
            return n + "/logo/sm/" + e + ".jpeg"
        }

        function o(e) {
            return {
                name: e.name || "",
                shortName: e.metadata.shortName || "",
                color: e.metadata.colors.primary || "",
                logo: e.id ? i(e.id) : "",
                universalLink: e.mobile.universal || "",
                deepLink: e.mobile.native || ""
            }
        }
        t.getWalletRegistryUrl = function() {
            return n + "/data/wallets.json"
        }, t.getDappRegistryUrl = function() {
            return n + "/data/dapps.json"
        }, t.getAppLogoUrl = i, t.formatMobileRegistryEntry = o, t.formatMobileRegistry = function(e) {
            return Object.values(e).filter((function(e) {
                return !!e.mobile.universal || !!e.mobile.native
            })).map(o)
        }
    }, function(e, t, r) {
        (function(e) {
            ! function(e, t) {
                "use strict";

                function n(e, t) {
                    if (!e) throw new Error(t || "Assertion failed")
                }

                function i(e, t) {
                    e.super_ = t;
                    var r = function() {};
                    r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                }

                function o(e, t, r) {
                    if (o.isBN(e)) return e;
                    this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && ("le" !== t && "be" !== t || (r = t, t = 10), this._init(e || 0, t || 10, r || "be"))
                }
                var a;
                "object" === typeof e ? e.exports = o : t.BN = o, o.BN = o, o.wordSize = 26;
                try {
                    a = r(873).Buffer
                } catch (k) {}

                function s(e, t, r) {
                    for (var n = 0, i = Math.min(e.length, r), o = t; o < i; o++) {
                        var a = e.charCodeAt(o) - 48;
                        n <<= 4, n |= a >= 49 && a <= 54 ? a - 49 + 10 : a >= 17 && a <= 22 ? a - 17 + 10 : 15 & a
                    }
                    return n
                }

                function u(e, t, r, n) {
                    for (var i = 0, o = Math.min(e.length, r), a = t; a < o; a++) {
                        var s = e.charCodeAt(a) - 48;
                        i *= n, i += s >= 49 ? s - 49 + 10 : s >= 17 ? s - 17 + 10 : s
                    }
                    return i
                }
                o.isBN = function(e) {
                    return e instanceof o || null !== e && "object" === typeof e && e.constructor.wordSize === o.wordSize && Array.isArray(e.words)
                }, o.max = function(e, t) {
                    return e.cmp(t) > 0 ? e : t
                }, o.min = function(e, t) {
                    return e.cmp(t) < 0 ? e : t
                }, o.prototype._init = function(e, t, r) {
                    if ("number" === typeof e) return this._initNumber(e, t, r);
                    if ("object" === typeof e) return this._initArray(e, t, r);
                    "hex" === t && (t = 16), n(t === (0 | t) && t >= 2 && t <= 36);
                    var i = 0;
                    "-" === (e = e.toString().replace(/\s+/g, ""))[0] && i++, 16 === t ? this._parseHex(e, i) : this._parseBase(e, t, i), "-" === e[0] && (this.negative = 1), this.strip(), "le" === r && this._initArray(this.toArray(), t, r)
                }, o.prototype._initNumber = function(e, t, r) {
                    e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [67108863 & e, e / 67108864 & 67108863], this.length = 2) : (n(e < 9007199254740992), this.words = [67108863 & e, e / 67108864 & 67108863, 1], this.length = 3), "le" === r && this._initArray(this.toArray(), t, r)
                }, o.prototype._initArray = function(e, t, r) {
                    if (n("number" === typeof e.length), e.length <= 0) return this.words = [0], this.length = 1, this;
                    this.length = Math.ceil(e.length / 3), this.words = new Array(this.length);
                    for (var i = 0; i < this.length; i++) this.words[i] = 0;
                    var o, a, s = 0;
                    if ("be" === r)
                        for (i = e.length - 1, o = 0; i >= 0; i -= 3) a = e[i] | e[i - 1] << 8 | e[i - 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    else if ("le" === r)
                        for (i = 0, o = 0; i < e.length; i += 3) a = e[i] | e[i + 1] << 8 | e[i + 2] << 16, this.words[o] |= a << s & 67108863, this.words[o + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, o++);
                    return this.strip()
                }, o.prototype._parseHex = function(e, t) {
                    this.length = Math.ceil((e.length - t) / 6), this.words = new Array(this.length);
                    for (var r = 0; r < this.length; r++) this.words[r] = 0;
                    var n, i, o = 0;
                    for (r = e.length - 6, n = 0; r >= t; r -= 6) i = s(e, r, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303, (o += 24) >= 26 && (o -= 26, n++);
                    r + 6 !== t && (i = s(e, t, r + 6), this.words[n] |= i << o & 67108863, this.words[n + 1] |= i >>> 26 - o & 4194303), this.strip()
                }, o.prototype._parseBase = function(e, t, r) {
                    this.words = [0], this.length = 1;
                    for (var n = 0, i = 1; i <= 67108863; i *= t) n++;
                    n--, i = i / t | 0;
                    for (var o = e.length - r, a = o % n, s = Math.min(o, o - a) + r, c = 0, f = r; f < s; f += n) c = u(e, f, f + n, t), this.imuln(i), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c);
                    if (0 !== a) {
                        var l = 1;
                        for (c = u(e, f, e.length, t), f = 0; f < a; f++) l *= t;
                        this.imuln(l), this.words[0] + c < 67108864 ? this.words[0] += c : this._iaddn(c)
                    }
                }, o.prototype.copy = function(e) {
                    e.words = new Array(this.length);
                    for (var t = 0; t < this.length; t++) e.words[t] = this.words[t];
                    e.length = this.length, e.negative = this.negative, e.red = this.red
                }, o.prototype.clone = function() {
                    var e = new o(null);
                    return this.copy(e), e
                }, o.prototype._expand = function(e) {
                    for (; this.length < e;) this.words[this.length++] = 0;
                    return this
                }, o.prototype.strip = function() {
                    for (; this.length > 1 && 0 === this.words[this.length - 1];) this.length--;
                    return this._normSign()
                }, o.prototype._normSign = function() {
                    return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this
                }, o.prototype.inspect = function() {
                    return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
                };
                var c = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                    f = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                    l = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];

                function h(e, t, r) {
                    r.negative = t.negative ^ e.negative;
                    var n = e.length + t.length | 0;
                    r.length = n, n = n - 1 | 0;
                    var i = 0 | e.words[0],
                        o = 0 | t.words[0],
                        a = i * o,
                        s = 67108863 & a,
                        u = a / 67108864 | 0;
                    r.words[0] = s;
                    for (var c = 1; c < n; c++) {
                        for (var f = u >>> 26, l = 67108863 & u, h = Math.min(c, t.length - 1), d = Math.max(0, c - e.length + 1); d <= h; d++) {
                            var p = c - d | 0;
                            f += (a = (i = 0 | e.words[p]) * (o = 0 | t.words[d]) + l) / 67108864 | 0, l = 67108863 & a
                        }
                        r.words[c] = 0 | l, u = 0 | f
                    }
                    return 0 !== u ? r.words[c] = 0 | u : r.length--, r.strip()
                }
                o.prototype.toString = function(e, t) {
                    var r;
                    if (t = 0 | t || 1, 16 === (e = e || 10) || "hex" === e) {
                        r = "";
                        for (var i = 0, o = 0, a = 0; a < this.length; a++) {
                            var s = this.words[a],
                                u = (16777215 & (s << i | o)).toString(16);
                            r = 0 !== (o = s >>> 24 - i & 16777215) || a !== this.length - 1 ? c[6 - u.length] + u + r : u + r, (i += 2) >= 26 && (i -= 26, a--)
                        }
                        for (0 !== o && (r = o.toString(16) + r); r.length % t !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    if (e === (0 | e) && e >= 2 && e <= 36) {
                        var h = f[e],
                            d = l[e];
                        r = "";
                        var p = this.clone();
                        for (p.negative = 0; !p.isZero();) {
                            var v = p.modn(d).toString(e);
                            r = (p = p.idivn(d)).isZero() ? v + r : c[h - v.length] + v + r
                        }
                        for (this.isZero() && (r = "0" + r); r.length % t !== 0;) r = "0" + r;
                        return 0 !== this.negative && (r = "-" + r), r
                    }
                    n(!1, "Base should be between 2 and 36")
                }, o.prototype.toNumber = function() {
                    var e = this.words[0];
                    return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), 0 !== this.negative ? -e : e
                }, o.prototype.toJSON = function() {
                    return this.toString(16)
                }, o.prototype.toBuffer = function(e, t) {
                    return n("undefined" !== typeof a), this.toArrayLike(a, e, t)
                }, o.prototype.toArray = function(e, t) {
                    return this.toArrayLike(Array, e, t)
                }, o.prototype.toArrayLike = function(e, t, r) {
                    var i = this.byteLength(),
                        o = r || Math.max(1, i);
                    n(i <= o, "byte array longer than desired length"), n(o > 0, "Requested array length <= 0"), this.strip();
                    var a, s, u = "le" === t,
                        c = new e(o),
                        f = this.clone();
                    if (u) {
                        for (s = 0; !f.isZero(); s++) a = f.andln(255), f.iushrn(8), c[s] = a;
                        for (; s < o; s++) c[s] = 0
                    } else {
                        for (s = 0; s < o - i; s++) c[s] = 0;
                        for (s = 0; !f.isZero(); s++) a = f.andln(255), f.iushrn(8), c[o - s - 1] = a
                    }
                    return c
                }, Math.clz32 ? o.prototype._countBits = function(e) {
                    return 32 - Math.clz32(e)
                } : o.prototype._countBits = function(e) {
                    var t = e,
                        r = 0;
                    return t >= 4096 && (r += 13, t >>>= 13), t >= 64 && (r += 7, t >>>= 7), t >= 8 && (r += 4, t >>>= 4), t >= 2 && (r += 2, t >>>= 2), r + t
                }, o.prototype._zeroBits = function(e) {
                    if (0 === e) return 26;
                    var t = e,
                        r = 0;
                    return 0 === (8191 & t) && (r += 13, t >>>= 13), 0 === (127 & t) && (r += 7, t >>>= 7), 0 === (15 & t) && (r += 4, t >>>= 4), 0 === (3 & t) && (r += 2, t >>>= 2), 0 === (1 & t) && r++, r
                }, o.prototype.bitLength = function() {
                    var e = this.words[this.length - 1],
                        t = this._countBits(e);
                    return 26 * (this.length - 1) + t
                }, o.prototype.zeroBits = function() {
                    if (this.isZero()) return 0;
                    for (var e = 0, t = 0; t < this.length; t++) {
                        var r = this._zeroBits(this.words[t]);
                        if (e += r, 26 !== r) break
                    }
                    return e
                }, o.prototype.byteLength = function() {
                    return Math.ceil(this.bitLength() / 8)
                }, o.prototype.toTwos = function(e) {
                    return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone()
                }, o.prototype.fromTwos = function(e) {
                    return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone()
                }, o.prototype.isNeg = function() {
                    return 0 !== this.negative
                }, o.prototype.neg = function() {
                    return this.clone().ineg()
                }, o.prototype.ineg = function() {
                    return this.isZero() || (this.negative ^= 1), this
                }, o.prototype.iuor = function(e) {
                    for (; this.length < e.length;) this.words[this.length++] = 0;
                    for (var t = 0; t < e.length; t++) this.words[t] = this.words[t] | e.words[t];
                    return this.strip()
                }, o.prototype.ior = function(e) {
                    return n(0 === (this.negative | e.negative)), this.iuor(e)
                }, o.prototype.or = function(e) {
                    return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this)
                }, o.prototype.uor = function(e) {
                    return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this)
                }, o.prototype.iuand = function(e) {
                    var t;
                    t = this.length > e.length ? e : this;
                    for (var r = 0; r < t.length; r++) this.words[r] = this.words[r] & e.words[r];
                    return this.length = t.length, this.strip()
                }, o.prototype.iand = function(e) {
                    return n(0 === (this.negative | e.negative)), this.iuand(e)
                }, o.prototype.and = function(e) {
                    return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this)
                }, o.prototype.uand = function(e) {
                    return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this)
                }, o.prototype.iuxor = function(e) {
                    var t, r;
                    this.length > e.length ? (t = this, r = e) : (t = e, r = this);
                    for (var n = 0; n < r.length; n++) this.words[n] = t.words[n] ^ r.words[n];
                    if (this !== t)
                        for (; n < t.length; n++) this.words[n] = t.words[n];
                    return this.length = t.length, this.strip()
                }, o.prototype.ixor = function(e) {
                    return n(0 === (this.negative | e.negative)), this.iuxor(e)
                }, o.prototype.xor = function(e) {
                    return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this)
                }, o.prototype.uxor = function(e) {
                    return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this)
                }, o.prototype.inotn = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t = 0 | Math.ceil(e / 26),
                        r = e % 26;
                    this._expand(t), r > 0 && t--;
                    for (var i = 0; i < t; i++) this.words[i] = 67108863 & ~this.words[i];
                    return r > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - r), this.strip()
                }, o.prototype.notn = function(e) {
                    return this.clone().inotn(e)
                }, o.prototype.setn = function(e, t) {
                    n("number" === typeof e && e >= 0);
                    var r = e / 26 | 0,
                        i = e % 26;
                    return this._expand(r + 1), this.words[r] = t ? this.words[r] | 1 << i : this.words[r] & ~(1 << i), this.strip()
                }, o.prototype.iadd = function(e) {
                    var t, r, n;
                    if (0 !== this.negative && 0 === e.negative) return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
                    if (0 === this.negative && 0 !== e.negative) return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
                    this.length > e.length ? (r = this, n = e) : (r = e, n = this);
                    for (var i = 0, o = 0; o < n.length; o++) t = (0 | r.words[o]) + (0 | n.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                    for (; 0 !== i && o < r.length; o++) t = (0 | r.words[o]) + i, this.words[o] = 67108863 & t, i = t >>> 26;
                    if (this.length = r.length, 0 !== i) this.words[this.length] = i, this.length++;
                    else if (r !== this)
                        for (; o < r.length; o++) this.words[o] = r.words[o];
                    return this
                }, o.prototype.add = function(e) {
                    var t;
                    return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this)
                }, o.prototype.isub = function(e) {
                    if (0 !== e.negative) {
                        e.negative = 0;
                        var t = this.iadd(e);
                        return e.negative = 1, t._normSign()
                    }
                    if (0 !== this.negative) return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
                    var r, n, i = this.cmp(e);
                    if (0 === i) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                    i > 0 ? (r = this, n = e) : (r = e, n = this);
                    for (var o = 0, a = 0; a < n.length; a++) o = (t = (0 | r.words[a]) - (0 | n.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                    for (; 0 !== o && a < r.length; a++) o = (t = (0 | r.words[a]) + o) >> 26, this.words[a] = 67108863 & t;
                    if (0 === o && a < r.length && r !== this)
                        for (; a < r.length; a++) this.words[a] = r.words[a];
                    return this.length = Math.max(this.length, a), r !== this && (this.negative = 1), this.strip()
                }, o.prototype.sub = function(e) {
                    return this.clone().isub(e)
                };
                var d = function(e, t, r) {
                    var n, i, o, a = e.words,
                        s = t.words,
                        u = r.words,
                        c = 0,
                        f = 0 | a[0],
                        l = 8191 & f,
                        h = f >>> 13,
                        d = 0 | a[1],
                        p = 8191 & d,
                        v = d >>> 13,
                        g = 0 | a[2],
                        _ = 8191 & g,
                        m = g >>> 13,
                        y = 0 | a[3],
                        w = 8191 & y,
                        b = y >>> 13,
                        E = 0 | a[4],
                        x = 8191 & E,
                        k = E >>> 13,
                        S = 0 | a[5],
                        R = 8191 & S,
                        A = S >>> 13,
                        M = 0 | a[6],
                        T = 8191 & M,
                        O = M >>> 13,
                        C = 0 | a[7],
                        P = 8191 & C,
                        N = C >>> 13,
                        I = 0 | a[8],
                        L = 8191 & I,
                        B = I >>> 13,
                        H = 0 | a[9],
                        U = 8191 & H,
                        j = H >>> 13,
                        D = 0 | s[0],
                        q = 8191 & D,
                        K = D >>> 13,
                        z = 0 | s[1],
                        F = 8191 & z,
                        W = z >>> 13,
                        G = 0 | s[2],
                        V = 8191 & G,
                        J = G >>> 13,
                        Y = 0 | s[3],
                        Z = 8191 & Y,
                        X = Y >>> 13,
                        Q = 0 | s[4],
                        $ = 8191 & Q,
                        ee = Q >>> 13,
                        te = 0 | s[5],
                        re = 8191 & te,
                        ne = te >>> 13,
                        ie = 0 | s[6],
                        oe = 8191 & ie,
                        ae = ie >>> 13,
                        se = 0 | s[7],
                        ue = 8191 & se,
                        ce = se >>> 13,
                        fe = 0 | s[8],
                        le = 8191 & fe,
                        he = fe >>> 13,
                        de = 0 | s[9],
                        pe = 8191 & de,
                        ve = de >>> 13;
                    r.negative = e.negative ^ t.negative, r.length = 19;
                    var ge = (c + (n = Math.imul(l, q)) | 0) + ((8191 & (i = (i = Math.imul(l, K)) + Math.imul(h, q) | 0)) << 13) | 0;
                    c = ((o = Math.imul(h, K)) + (i >>> 13) | 0) + (ge >>> 26) | 0, ge &= 67108863, n = Math.imul(p, q), i = (i = Math.imul(p, K)) + Math.imul(v, q) | 0, o = Math.imul(v, K);
                    var _e = (c + (n = n + Math.imul(l, F) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, W) | 0) + Math.imul(h, F) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(h, W) | 0) + (i >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, n = Math.imul(_, q), i = (i = Math.imul(_, K)) + Math.imul(m, q) | 0, o = Math.imul(m, K), n = n + Math.imul(p, F) | 0, i = (i = i + Math.imul(p, W) | 0) + Math.imul(v, F) | 0, o = o + Math.imul(v, W) | 0;
                    var me = (c + (n = n + Math.imul(l, V) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, J) | 0) + Math.imul(h, V) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(h, J) | 0) + (i >>> 13) | 0) + (me >>> 26) | 0, me &= 67108863, n = Math.imul(w, q), i = (i = Math.imul(w, K)) + Math.imul(b, q) | 0, o = Math.imul(b, K), n = n + Math.imul(_, F) | 0, i = (i = i + Math.imul(_, W) | 0) + Math.imul(m, F) | 0, o = o + Math.imul(m, W) | 0, n = n + Math.imul(p, V) | 0, i = (i = i + Math.imul(p, J) | 0) + Math.imul(v, V) | 0, o = o + Math.imul(v, J) | 0;
                    var ye = (c + (n = n + Math.imul(l, Z) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, X) | 0) + Math.imul(h, Z) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(h, X) | 0) + (i >>> 13) | 0) + (ye >>> 26) | 0, ye &= 67108863, n = Math.imul(x, q), i = (i = Math.imul(x, K)) + Math.imul(k, q) | 0, o = Math.imul(k, K), n = n + Math.imul(w, F) | 0, i = (i = i + Math.imul(w, W) | 0) + Math.imul(b, F) | 0, o = o + Math.imul(b, W) | 0, n = n + Math.imul(_, V) | 0, i = (i = i + Math.imul(_, J) | 0) + Math.imul(m, V) | 0, o = o + Math.imul(m, J) | 0, n = n + Math.imul(p, Z) | 0, i = (i = i + Math.imul(p, X) | 0) + Math.imul(v, Z) | 0, o = o + Math.imul(v, X) | 0;
                    var we = (c + (n = n + Math.imul(l, $) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ee) | 0) + Math.imul(h, $) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(h, ee) | 0) + (i >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, n = Math.imul(R, q), i = (i = Math.imul(R, K)) + Math.imul(A, q) | 0, o = Math.imul(A, K), n = n + Math.imul(x, F) | 0, i = (i = i + Math.imul(x, W) | 0) + Math.imul(k, F) | 0, o = o + Math.imul(k, W) | 0, n = n + Math.imul(w, V) | 0, i = (i = i + Math.imul(w, J) | 0) + Math.imul(b, V) | 0, o = o + Math.imul(b, J) | 0, n = n + Math.imul(_, Z) | 0, i = (i = i + Math.imul(_, X) | 0) + Math.imul(m, Z) | 0, o = o + Math.imul(m, X) | 0, n = n + Math.imul(p, $) | 0, i = (i = i + Math.imul(p, ee) | 0) + Math.imul(v, $) | 0, o = o + Math.imul(v, ee) | 0;
                    var be = (c + (n = n + Math.imul(l, re) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ne) | 0) + Math.imul(h, re) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(h, ne) | 0) + (i >>> 13) | 0) + (be >>> 26) | 0, be &= 67108863, n = Math.imul(T, q), i = (i = Math.imul(T, K)) + Math.imul(O, q) | 0, o = Math.imul(O, K), n = n + Math.imul(R, F) | 0, i = (i = i + Math.imul(R, W) | 0) + Math.imul(A, F) | 0, o = o + Math.imul(A, W) | 0, n = n + Math.imul(x, V) | 0, i = (i = i + Math.imul(x, J) | 0) + Math.imul(k, V) | 0, o = o + Math.imul(k, J) | 0, n = n + Math.imul(w, Z) | 0, i = (i = i + Math.imul(w, X) | 0) + Math.imul(b, Z) | 0, o = o + Math.imul(b, X) | 0, n = n + Math.imul(_, $) | 0, i = (i = i + Math.imul(_, ee) | 0) + Math.imul(m, $) | 0, o = o + Math.imul(m, ee) | 0, n = n + Math.imul(p, re) | 0, i = (i = i + Math.imul(p, ne) | 0) + Math.imul(v, re) | 0, o = o + Math.imul(v, ne) | 0;
                    var Ee = (c + (n = n + Math.imul(l, oe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ae) | 0) + Math.imul(h, oe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(h, ae) | 0) + (i >>> 13) | 0) + (Ee >>> 26) | 0, Ee &= 67108863, n = Math.imul(P, q), i = (i = Math.imul(P, K)) + Math.imul(N, q) | 0, o = Math.imul(N, K), n = n + Math.imul(T, F) | 0, i = (i = i + Math.imul(T, W) | 0) + Math.imul(O, F) | 0, o = o + Math.imul(O, W) | 0, n = n + Math.imul(R, V) | 0, i = (i = i + Math.imul(R, J) | 0) + Math.imul(A, V) | 0, o = o + Math.imul(A, J) | 0, n = n + Math.imul(x, Z) | 0, i = (i = i + Math.imul(x, X) | 0) + Math.imul(k, Z) | 0, o = o + Math.imul(k, X) | 0, n = n + Math.imul(w, $) | 0, i = (i = i + Math.imul(w, ee) | 0) + Math.imul(b, $) | 0, o = o + Math.imul(b, ee) | 0, n = n + Math.imul(_, re) | 0, i = (i = i + Math.imul(_, ne) | 0) + Math.imul(m, re) | 0, o = o + Math.imul(m, ne) | 0, n = n + Math.imul(p, oe) | 0, i = (i = i + Math.imul(p, ae) | 0) + Math.imul(v, oe) | 0, o = o + Math.imul(v, ae) | 0;
                    var xe = (c + (n = n + Math.imul(l, ue) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ce) | 0) + Math.imul(h, ue) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(h, ce) | 0) + (i >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, n = Math.imul(L, q), i = (i = Math.imul(L, K)) + Math.imul(B, q) | 0, o = Math.imul(B, K), n = n + Math.imul(P, F) | 0, i = (i = i + Math.imul(P, W) | 0) + Math.imul(N, F) | 0, o = o + Math.imul(N, W) | 0, n = n + Math.imul(T, V) | 0, i = (i = i + Math.imul(T, J) | 0) + Math.imul(O, V) | 0, o = o + Math.imul(O, J) | 0, n = n + Math.imul(R, Z) | 0, i = (i = i + Math.imul(R, X) | 0) + Math.imul(A, Z) | 0, o = o + Math.imul(A, X) | 0, n = n + Math.imul(x, $) | 0, i = (i = i + Math.imul(x, ee) | 0) + Math.imul(k, $) | 0, o = o + Math.imul(k, ee) | 0, n = n + Math.imul(w, re) | 0, i = (i = i + Math.imul(w, ne) | 0) + Math.imul(b, re) | 0, o = o + Math.imul(b, ne) | 0, n = n + Math.imul(_, oe) | 0, i = (i = i + Math.imul(_, ae) | 0) + Math.imul(m, oe) | 0, o = o + Math.imul(m, ae) | 0, n = n + Math.imul(p, ue) | 0, i = (i = i + Math.imul(p, ce) | 0) + Math.imul(v, ue) | 0, o = o + Math.imul(v, ce) | 0;
                    var ke = (c + (n = n + Math.imul(l, le) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, he) | 0) + Math.imul(h, le) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(h, he) | 0) + (i >>> 13) | 0) + (ke >>> 26) | 0, ke &= 67108863, n = Math.imul(U, q), i = (i = Math.imul(U, K)) + Math.imul(j, q) | 0, o = Math.imul(j, K), n = n + Math.imul(L, F) | 0, i = (i = i + Math.imul(L, W) | 0) + Math.imul(B, F) | 0, o = o + Math.imul(B, W) | 0, n = n + Math.imul(P, V) | 0, i = (i = i + Math.imul(P, J) | 0) + Math.imul(N, V) | 0, o = o + Math.imul(N, J) | 0, n = n + Math.imul(T, Z) | 0, i = (i = i + Math.imul(T, X) | 0) + Math.imul(O, Z) | 0, o = o + Math.imul(O, X) | 0, n = n + Math.imul(R, $) | 0, i = (i = i + Math.imul(R, ee) | 0) + Math.imul(A, $) | 0, o = o + Math.imul(A, ee) | 0, n = n + Math.imul(x, re) | 0, i = (i = i + Math.imul(x, ne) | 0) + Math.imul(k, re) | 0, o = o + Math.imul(k, ne) | 0, n = n + Math.imul(w, oe) | 0, i = (i = i + Math.imul(w, ae) | 0) + Math.imul(b, oe) | 0, o = o + Math.imul(b, ae) | 0, n = n + Math.imul(_, ue) | 0, i = (i = i + Math.imul(_, ce) | 0) + Math.imul(m, ue) | 0, o = o + Math.imul(m, ce) | 0, n = n + Math.imul(p, le) | 0, i = (i = i + Math.imul(p, he) | 0) + Math.imul(v, le) | 0, o = o + Math.imul(v, he) | 0;
                    var Se = (c + (n = n + Math.imul(l, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(l, ve) | 0) + Math.imul(h, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(h, ve) | 0) + (i >>> 13) | 0) + (Se >>> 26) | 0, Se &= 67108863, n = Math.imul(U, F), i = (i = Math.imul(U, W)) + Math.imul(j, F) | 0, o = Math.imul(j, W), n = n + Math.imul(L, V) | 0, i = (i = i + Math.imul(L, J) | 0) + Math.imul(B, V) | 0, o = o + Math.imul(B, J) | 0, n = n + Math.imul(P, Z) | 0, i = (i = i + Math.imul(P, X) | 0) + Math.imul(N, Z) | 0, o = o + Math.imul(N, X) | 0, n = n + Math.imul(T, $) | 0, i = (i = i + Math.imul(T, ee) | 0) + Math.imul(O, $) | 0, o = o + Math.imul(O, ee) | 0, n = n + Math.imul(R, re) | 0, i = (i = i + Math.imul(R, ne) | 0) + Math.imul(A, re) | 0, o = o + Math.imul(A, ne) | 0, n = n + Math.imul(x, oe) | 0, i = (i = i + Math.imul(x, ae) | 0) + Math.imul(k, oe) | 0, o = o + Math.imul(k, ae) | 0, n = n + Math.imul(w, ue) | 0, i = (i = i + Math.imul(w, ce) | 0) + Math.imul(b, ue) | 0, o = o + Math.imul(b, ce) | 0, n = n + Math.imul(_, le) | 0, i = (i = i + Math.imul(_, he) | 0) + Math.imul(m, le) | 0, o = o + Math.imul(m, he) | 0;
                    var Re = (c + (n = n + Math.imul(p, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(p, ve) | 0) + Math.imul(v, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(v, ve) | 0) + (i >>> 13) | 0) + (Re >>> 26) | 0, Re &= 67108863, n = Math.imul(U, V), i = (i = Math.imul(U, J)) + Math.imul(j, V) | 0, o = Math.imul(j, J), n = n + Math.imul(L, Z) | 0, i = (i = i + Math.imul(L, X) | 0) + Math.imul(B, Z) | 0, o = o + Math.imul(B, X) | 0, n = n + Math.imul(P, $) | 0, i = (i = i + Math.imul(P, ee) | 0) + Math.imul(N, $) | 0, o = o + Math.imul(N, ee) | 0, n = n + Math.imul(T, re) | 0, i = (i = i + Math.imul(T, ne) | 0) + Math.imul(O, re) | 0, o = o + Math.imul(O, ne) | 0, n = n + Math.imul(R, oe) | 0, i = (i = i + Math.imul(R, ae) | 0) + Math.imul(A, oe) | 0, o = o + Math.imul(A, ae) | 0, n = n + Math.imul(x, ue) | 0, i = (i = i + Math.imul(x, ce) | 0) + Math.imul(k, ue) | 0, o = o + Math.imul(k, ce) | 0, n = n + Math.imul(w, le) | 0, i = (i = i + Math.imul(w, he) | 0) + Math.imul(b, le) | 0, o = o + Math.imul(b, he) | 0;
                    var Ae = (c + (n = n + Math.imul(_, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(_, ve) | 0) + Math.imul(m, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(m, ve) | 0) + (i >>> 13) | 0) + (Ae >>> 26) | 0, Ae &= 67108863, n = Math.imul(U, Z), i = (i = Math.imul(U, X)) + Math.imul(j, Z) | 0, o = Math.imul(j, X), n = n + Math.imul(L, $) | 0, i = (i = i + Math.imul(L, ee) | 0) + Math.imul(B, $) | 0, o = o + Math.imul(B, ee) | 0, n = n + Math.imul(P, re) | 0, i = (i = i + Math.imul(P, ne) | 0) + Math.imul(N, re) | 0, o = o + Math.imul(N, ne) | 0, n = n + Math.imul(T, oe) | 0, i = (i = i + Math.imul(T, ae) | 0) + Math.imul(O, oe) | 0, o = o + Math.imul(O, ae) | 0, n = n + Math.imul(R, ue) | 0, i = (i = i + Math.imul(R, ce) | 0) + Math.imul(A, ue) | 0, o = o + Math.imul(A, ce) | 0, n = n + Math.imul(x, le) | 0, i = (i = i + Math.imul(x, he) | 0) + Math.imul(k, le) | 0, o = o + Math.imul(k, he) | 0;
                    var Me = (c + (n = n + Math.imul(w, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(w, ve) | 0) + Math.imul(b, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(b, ve) | 0) + (i >>> 13) | 0) + (Me >>> 26) | 0, Me &= 67108863, n = Math.imul(U, $), i = (i = Math.imul(U, ee)) + Math.imul(j, $) | 0, o = Math.imul(j, ee), n = n + Math.imul(L, re) | 0, i = (i = i + Math.imul(L, ne) | 0) + Math.imul(B, re) | 0, o = o + Math.imul(B, ne) | 0, n = n + Math.imul(P, oe) | 0, i = (i = i + Math.imul(P, ae) | 0) + Math.imul(N, oe) | 0, o = o + Math.imul(N, ae) | 0, n = n + Math.imul(T, ue) | 0, i = (i = i + Math.imul(T, ce) | 0) + Math.imul(O, ue) | 0, o = o + Math.imul(O, ce) | 0, n = n + Math.imul(R, le) | 0, i = (i = i + Math.imul(R, he) | 0) + Math.imul(A, le) | 0, o = o + Math.imul(A, he) | 0;
                    var Te = (c + (n = n + Math.imul(x, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(x, ve) | 0) + Math.imul(k, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(k, ve) | 0) + (i >>> 13) | 0) + (Te >>> 26) | 0, Te &= 67108863, n = Math.imul(U, re), i = (i = Math.imul(U, ne)) + Math.imul(j, re) | 0, o = Math.imul(j, ne), n = n + Math.imul(L, oe) | 0, i = (i = i + Math.imul(L, ae) | 0) + Math.imul(B, oe) | 0, o = o + Math.imul(B, ae) | 0, n = n + Math.imul(P, ue) | 0, i = (i = i + Math.imul(P, ce) | 0) + Math.imul(N, ue) | 0, o = o + Math.imul(N, ce) | 0, n = n + Math.imul(T, le) | 0, i = (i = i + Math.imul(T, he) | 0) + Math.imul(O, le) | 0, o = o + Math.imul(O, he) | 0;
                    var Oe = (c + (n = n + Math.imul(R, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(R, ve) | 0) + Math.imul(A, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(A, ve) | 0) + (i >>> 13) | 0) + (Oe >>> 26) | 0, Oe &= 67108863, n = Math.imul(U, oe), i = (i = Math.imul(U, ae)) + Math.imul(j, oe) | 0, o = Math.imul(j, ae), n = n + Math.imul(L, ue) | 0, i = (i = i + Math.imul(L, ce) | 0) + Math.imul(B, ue) | 0, o = o + Math.imul(B, ce) | 0, n = n + Math.imul(P, le) | 0, i = (i = i + Math.imul(P, he) | 0) + Math.imul(N, le) | 0, o = o + Math.imul(N, he) | 0;
                    var Ce = (c + (n = n + Math.imul(T, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(T, ve) | 0) + Math.imul(O, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(O, ve) | 0) + (i >>> 13) | 0) + (Ce >>> 26) | 0, Ce &= 67108863, n = Math.imul(U, ue), i = (i = Math.imul(U, ce)) + Math.imul(j, ue) | 0, o = Math.imul(j, ce), n = n + Math.imul(L, le) | 0, i = (i = i + Math.imul(L, he) | 0) + Math.imul(B, le) | 0, o = o + Math.imul(B, he) | 0;
                    var Pe = (c + (n = n + Math.imul(P, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(P, ve) | 0) + Math.imul(N, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(N, ve) | 0) + (i >>> 13) | 0) + (Pe >>> 26) | 0, Pe &= 67108863, n = Math.imul(U, le), i = (i = Math.imul(U, he)) + Math.imul(j, le) | 0, o = Math.imul(j, he);
                    var Ne = (c + (n = n + Math.imul(L, pe) | 0) | 0) + ((8191 & (i = (i = i + Math.imul(L, ve) | 0) + Math.imul(B, pe) | 0)) << 13) | 0;
                    c = ((o = o + Math.imul(B, ve) | 0) + (i >>> 13) | 0) + (Ne >>> 26) | 0, Ne &= 67108863;
                    var Ie = (c + (n = Math.imul(U, pe)) | 0) + ((8191 & (i = (i = Math.imul(U, ve)) + Math.imul(j, pe) | 0)) << 13) | 0;
                    return c = ((o = Math.imul(j, ve)) + (i >>> 13) | 0) + (Ie >>> 26) | 0, Ie &= 67108863, u[0] = ge, u[1] = _e, u[2] = me, u[3] = ye, u[4] = we, u[5] = be, u[6] = Ee, u[7] = xe, u[8] = ke, u[9] = Se, u[10] = Re, u[11] = Ae, u[12] = Me, u[13] = Te, u[14] = Oe, u[15] = Ce, u[16] = Pe, u[17] = Ne, u[18] = Ie, 0 !== c && (u[19] = c, r.length++), r
                };

                function p(e, t, r) {
                    return (new v).mulp(e, t, r)
                }

                function v(e, t) {
                    this.x = e, this.y = t
                }
                Math.imul || (d = h), o.prototype.mulTo = function(e, t) {
                    var r = this.length + e.length;
                    return 10 === this.length && 10 === e.length ? d(this, e, t) : r < 63 ? h(this, e, t) : r < 1024 ? function(e, t, r) {
                        r.negative = t.negative ^ e.negative, r.length = e.length + t.length;
                        for (var n = 0, i = 0, o = 0; o < r.length - 1; o++) {
                            var a = i;
                            i = 0;
                            for (var s = 67108863 & n, u = Math.min(o, t.length - 1), c = Math.max(0, o - e.length + 1); c <= u; c++) {
                                var f = o - c,
                                    l = (0 | e.words[f]) * (0 | t.words[c]),
                                    h = 67108863 & l;
                                s = 67108863 & (h = h + s | 0), i += (a = (a = a + (l / 67108864 | 0) | 0) + (h >>> 26) | 0) >>> 26, a &= 67108863
                            }
                            r.words[o] = s, n = a, a = i
                        }
                        return 0 !== n ? r.words[o] = n : r.length--, r.strip()
                    }(this, e, t) : p(this, e, t)
                }, v.prototype.makeRBT = function(e) {
                    for (var t = new Array(e), r = o.prototype._countBits(e) - 1, n = 0; n < e; n++) t[n] = this.revBin(n, r, e);
                    return t
                }, v.prototype.revBin = function(e, t, r) {
                    if (0 === e || e === r - 1) return e;
                    for (var n = 0, i = 0; i < t; i++) n |= (1 & e) << t - i - 1, e >>= 1;
                    return n
                }, v.prototype.permute = function(e, t, r, n, i, o) {
                    for (var a = 0; a < o; a++) n[a] = t[e[a]], i[a] = r[e[a]]
                }, v.prototype.transform = function(e, t, r, n, i, o) {
                    this.permute(o, e, t, r, n, i);
                    for (var a = 1; a < i; a <<= 1)
                        for (var s = a << 1, u = Math.cos(2 * Math.PI / s), c = Math.sin(2 * Math.PI / s), f = 0; f < i; f += s)
                            for (var l = u, h = c, d = 0; d < a; d++) {
                                var p = r[f + d],
                                    v = n[f + d],
                                    g = r[f + d + a],
                                    _ = n[f + d + a],
                                    m = l * g - h * _;
                                _ = l * _ + h * g, g = m, r[f + d] = p + g, n[f + d] = v + _, r[f + d + a] = p - g, n[f + d + a] = v - _, d !== s && (m = u * l - c * h, h = u * h + c * l, l = m)
                            }
                }, v.prototype.guessLen13b = function(e, t) {
                    var r = 1 | Math.max(t, e),
                        n = 1 & r,
                        i = 0;
                    for (r = r / 2 | 0; r; r >>>= 1) i++;
                    return 1 << i + 1 + n
                }, v.prototype.conjugate = function(e, t, r) {
                    if (!(r <= 1))
                        for (var n = 0; n < r / 2; n++) {
                            var i = e[n];
                            e[n] = e[r - n - 1], e[r - n - 1] = i, i = t[n], t[n] = -t[r - n - 1], t[r - n - 1] = -i
                        }
                }, v.prototype.normalize13b = function(e, t) {
                    for (var r = 0, n = 0; n < t / 2; n++) {
                        var i = 8192 * Math.round(e[2 * n + 1] / t) + Math.round(e[2 * n] / t) + r;
                        e[n] = 67108863 & i, r = i < 67108864 ? 0 : i / 67108864 | 0
                    }
                    return e
                }, v.prototype.convert13b = function(e, t, r, i) {
                    for (var o = 0, a = 0; a < t; a++) o += 0 | e[a], r[2 * a] = 8191 & o, o >>>= 13, r[2 * a + 1] = 8191 & o, o >>>= 13;
                    for (a = 2 * t; a < i; ++a) r[a] = 0;
                    n(0 === o), n(0 === (-8192 & o))
                }, v.prototype.stub = function(e) {
                    for (var t = new Array(e), r = 0; r < e; r++) t[r] = 0;
                    return t
                }, v.prototype.mulp = function(e, t, r) {
                    var n = 2 * this.guessLen13b(e.length, t.length),
                        i = this.makeRBT(n),
                        o = this.stub(n),
                        a = new Array(n),
                        s = new Array(n),
                        u = new Array(n),
                        c = new Array(n),
                        f = new Array(n),
                        l = new Array(n),
                        h = r.words;
                    h.length = n, this.convert13b(e.words, e.length, a, n), this.convert13b(t.words, t.length, c, n), this.transform(a, o, s, u, n, i), this.transform(c, o, f, l, n, i);
                    for (var d = 0; d < n; d++) {
                        var p = s[d] * f[d] - u[d] * l[d];
                        u[d] = s[d] * l[d] + u[d] * f[d], s[d] = p
                    }
                    return this.conjugate(s, u, n), this.transform(s, u, h, o, n, i), this.conjugate(h, o, n), this.normalize13b(h, n), r.negative = e.negative ^ t.negative, r.length = e.length + t.length, r.strip()
                }, o.prototype.mul = function(e) {
                    var t = new o(null);
                    return t.words = new Array(this.length + e.length), this.mulTo(e, t)
                }, o.prototype.mulf = function(e) {
                    var t = new o(null);
                    return t.words = new Array(this.length + e.length), p(this, e, t)
                }, o.prototype.imul = function(e) {
                    return this.clone().mulTo(e, this)
                }, o.prototype.imuln = function(e) {
                    n("number" === typeof e), n(e < 67108864);
                    for (var t = 0, r = 0; r < this.length; r++) {
                        var i = (0 | this.words[r]) * e,
                            o = (67108863 & i) + (67108863 & t);
                        t >>= 26, t += i / 67108864 | 0, t += o >>> 26, this.words[r] = 67108863 & o
                    }
                    return 0 !== t && (this.words[r] = t, this.length++), this
                }, o.prototype.muln = function(e) {
                    return this.clone().imuln(e)
                }, o.prototype.sqr = function() {
                    return this.mul(this)
                }, o.prototype.isqr = function() {
                    return this.imul(this.clone())
                }, o.prototype.pow = function(e) {
                    var t = function(e) {
                        for (var t = new Array(e.bitLength()), r = 0; r < t.length; r++) {
                            var n = r / 26 | 0,
                                i = r % 26;
                            t[r] = (e.words[n] & 1 << i) >>> i
                        }
                        return t
                    }(e);
                    if (0 === t.length) return new o(1);
                    for (var r = this, n = 0; n < t.length && 0 === t[n]; n++, r = r.sqr());
                    if (++n < t.length)
                        for (var i = r.sqr(); n < t.length; n++, i = i.sqr()) 0 !== t[n] && (r = r.mul(i));
                    return r
                }, o.prototype.iushln = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t, r = e % 26,
                        i = (e - r) / 26,
                        o = 67108863 >>> 26 - r << 26 - r;
                    if (0 !== r) {
                        var a = 0;
                        for (t = 0; t < this.length; t++) {
                            var s = this.words[t] & o,
                                u = (0 | this.words[t]) - s << r;
                            this.words[t] = u | a, a = s >>> 26 - r
                        }
                        a && (this.words[t] = a, this.length++)
                    }
                    if (0 !== i) {
                        for (t = this.length - 1; t >= 0; t--) this.words[t + i] = this.words[t];
                        for (t = 0; t < i; t++) this.words[t] = 0;
                        this.length += i
                    }
                    return this.strip()
                }, o.prototype.ishln = function(e) {
                    return n(0 === this.negative), this.iushln(e)
                }, o.prototype.iushrn = function(e, t, r) {
                    var i;
                    n("number" === typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
                    var o = e % 26,
                        a = Math.min((e - o) / 26, this.length),
                        s = 67108863 ^ 67108863 >>> o << o,
                        u = r;
                    if (i -= a, i = Math.max(0, i), u) {
                        for (var c = 0; c < a; c++) u.words[c] = this.words[c];
                        u.length = a
                    }
                    if (0 === a);
                    else if (this.length > a)
                        for (this.length -= a, c = 0; c < this.length; c++) this.words[c] = this.words[c + a];
                    else this.words[0] = 0, this.length = 1;
                    var f = 0;
                    for (c = this.length - 1; c >= 0 && (0 !== f || c >= i); c--) {
                        var l = 0 | this.words[c];
                        this.words[c] = f << 26 - o | l >>> o, f = l & s
                    }
                    return u && 0 !== f && (u.words[u.length++] = f), 0 === this.length && (this.words[0] = 0, this.length = 1), this.strip()
                }, o.prototype.ishrn = function(e, t, r) {
                    return n(0 === this.negative), this.iushrn(e, t, r)
                }, o.prototype.shln = function(e) {
                    return this.clone().ishln(e)
                }, o.prototype.ushln = function(e) {
                    return this.clone().iushln(e)
                }, o.prototype.shrn = function(e) {
                    return this.clone().ishrn(e)
                }, o.prototype.ushrn = function(e) {
                    return this.clone().iushrn(e)
                }, o.prototype.testn = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26,
                        i = 1 << t;
                    return !(this.length <= r) && !!(this.words[r] & i)
                }, o.prototype.imaskn = function(e) {
                    n("number" === typeof e && e >= 0);
                    var t = e % 26,
                        r = (e - t) / 26;
                    if (n(0 === this.negative, "imaskn works only with positive numbers"), this.length <= r) return this;
                    if (0 !== t && r++, this.length = Math.min(r, this.length), 0 !== t) {
                        var i = 67108863 ^ 67108863 >>> t << t;
                        this.words[this.length - 1] &= i
                    }
                    return this.strip()
                }, o.prototype.maskn = function(e) {
                    return this.clone().imaskn(e)
                }, o.prototype.iaddn = function(e) {
                    return n("number" === typeof e), n(e < 67108864), e < 0 ? this.isubn(-e) : 0 !== this.negative ? 1 === this.length && (0 | this.words[0]) < e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this) : this._iaddn(e)
                }, o.prototype._iaddn = function(e) {
                    this.words[0] += e;
                    for (var t = 0; t < this.length && this.words[t] >= 67108864; t++) this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
                    return this.length = Math.max(this.length, t + 1), this
                }, o.prototype.isubn = function(e) {
                    if (n("number" === typeof e), n(e < 67108864), e < 0) return this.iaddn(-e);
                    if (0 !== this.negative) return this.negative = 0, this.iaddn(e), this.negative = 1, this;
                    if (this.words[0] -= e, 1 === this.length && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                    else
                        for (var t = 0; t < this.length && this.words[t] < 0; t++) this.words[t] += 67108864, this.words[t + 1] -= 1;
                    return this.strip()
                }, o.prototype.addn = function(e) {
                    return this.clone().iaddn(e)
                }, o.prototype.subn = function(e) {
                    return this.clone().isubn(e)
                }, o.prototype.iabs = function() {
                    return this.negative = 0, this
                }, o.prototype.abs = function() {
                    return this.clone().iabs()
                }, o.prototype._ishlnsubmul = function(e, t, r) {
                    var i, o, a = e.length + r;
                    this._expand(a);
                    var s = 0;
                    for (i = 0; i < e.length; i++) {
                        o = (0 | this.words[i + r]) + s;
                        var u = (0 | e.words[i]) * t;
                        s = ((o -= 67108863 & u) >> 26) - (u / 67108864 | 0), this.words[i + r] = 67108863 & o
                    }
                    for (; i < this.length - r; i++) s = (o = (0 | this.words[i + r]) + s) >> 26, this.words[i + r] = 67108863 & o;
                    if (0 === s) return this.strip();
                    for (n(-1 === s), s = 0, i = 0; i < this.length; i++) s = (o = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & o;
                    return this.negative = 1, this.strip()
                }, o.prototype._wordDiv = function(e, t) {
                    var r = (this.length, e.length),
                        n = this.clone(),
                        i = e,
                        a = 0 | i.words[i.length - 1];
                    0 !== (r = 26 - this._countBits(a)) && (i = i.ushln(r), n.iushln(r), a = 0 | i.words[i.length - 1]);
                    var s, u = n.length - i.length;
                    if ("mod" !== t) {
                        (s = new o(null)).length = u + 1, s.words = new Array(s.length);
                        for (var c = 0; c < s.length; c++) s.words[c] = 0
                    }
                    var f = n.clone()._ishlnsubmul(i, 1, u);
                    0 === f.negative && (n = f, s && (s.words[u] = 1));
                    for (var l = u - 1; l >= 0; l--) {
                        var h = 67108864 * (0 | n.words[i.length + l]) + (0 | n.words[i.length + l - 1]);
                        for (h = Math.min(h / a | 0, 67108863), n._ishlnsubmul(i, h, l); 0 !== n.negative;) h--, n.negative = 0, n._ishlnsubmul(i, 1, l), n.isZero() || (n.negative ^= 1);
                        s && (s.words[l] = h)
                    }
                    return s && s.strip(), n.strip(), "div" !== t && 0 !== r && n.iushrn(r), {
                        div: s || null,
                        mod: n
                    }
                }, o.prototype.divmod = function(e, t, r) {
                    return n(!e.isZero()), this.isZero() ? {
                        div: new o(0),
                        mod: new o(0)
                    } : 0 !== this.negative && 0 === e.negative ? (s = this.neg().divmod(e, t), "mod" !== t && (i = s.div.neg()), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.iadd(e)), {
                        div: i,
                        mod: a
                    }) : 0 === this.negative && 0 !== e.negative ? (s = this.divmod(e.neg(), t), "mod" !== t && (i = s.div.neg()), {
                        div: i,
                        mod: s.mod
                    }) : 0 !== (this.negative & e.negative) ? (s = this.neg().divmod(e.neg(), t), "div" !== t && (a = s.mod.neg(), r && 0 !== a.negative && a.isub(e)), {
                        div: s.div,
                        mod: a
                    }) : e.length > this.length || this.cmp(e) < 0 ? {
                        div: new o(0),
                        mod: this
                    } : 1 === e.length ? "div" === t ? {
                        div: this.divn(e.words[0]),
                        mod: null
                    } : "mod" === t ? {
                        div: null,
                        mod: new o(this.modn(e.words[0]))
                    } : {
                        div: this.divn(e.words[0]),
                        mod: new o(this.modn(e.words[0]))
                    } : this._wordDiv(e, t);
                    var i, a, s
                }, o.prototype.div = function(e) {
                    return this.divmod(e, "div", !1).div
                }, o.prototype.mod = function(e) {
                    return this.divmod(e, "mod", !1).mod
                }, o.prototype.umod = function(e) {
                    return this.divmod(e, "mod", !0).mod
                }, o.prototype.divRound = function(e) {
                    var t = this.divmod(e);
                    if (t.mod.isZero()) return t.div;
                    var r = 0 !== t.div.negative ? t.mod.isub(e) : t.mod,
                        n = e.ushrn(1),
                        i = e.andln(1),
                        o = r.cmp(n);
                    return o < 0 || 1 === i && 0 === o ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1)
                }, o.prototype.modn = function(e) {
                    n(e <= 67108863);
                    for (var t = (1 << 26) % e, r = 0, i = this.length - 1; i >= 0; i--) r = (t * r + (0 | this.words[i])) % e;
                    return r
                }, o.prototype.idivn = function(e) {
                    n(e <= 67108863);
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var i = (0 | this.words[r]) + 67108864 * t;
                        this.words[r] = i / e | 0, t = i % e
                    }
                    return this.strip()
                }, o.prototype.divn = function(e) {
                    return this.clone().idivn(e)
                }, o.prototype.egcd = function(e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t = this,
                        r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var i = new o(1), a = new o(0), s = new o(0), u = new o(1), c = 0; t.isEven() && r.isEven();) t.iushrn(1), r.iushrn(1), ++c;
                    for (var f = r.clone(), l = t.clone(); !t.isZero();) {
                        for (var h = 0, d = 1; 0 === (t.words[0] & d) && h < 26; ++h, d <<= 1);
                        if (h > 0)
                            for (t.iushrn(h); h-- > 0;)(i.isOdd() || a.isOdd()) && (i.iadd(f), a.isub(l)), i.iushrn(1), a.iushrn(1);
                        for (var p = 0, v = 1; 0 === (r.words[0] & v) && p < 26; ++p, v <<= 1);
                        if (p > 0)
                            for (r.iushrn(p); p-- > 0;)(s.isOdd() || u.isOdd()) && (s.iadd(f), u.isub(l)), s.iushrn(1), u.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r), i.isub(s), a.isub(u)) : (r.isub(t), s.isub(i), u.isub(a))
                    }
                    return {
                        a: s,
                        b: u,
                        gcd: r.iushln(c)
                    }
                }, o.prototype._invmp = function(e) {
                    n(0 === e.negative), n(!e.isZero());
                    var t = this,
                        r = e.clone();
                    t = 0 !== t.negative ? t.umod(e) : t.clone();
                    for (var i, a = new o(1), s = new o(0), u = r.clone(); t.cmpn(1) > 0 && r.cmpn(1) > 0;) {
                        for (var c = 0, f = 1; 0 === (t.words[0] & f) && c < 26; ++c, f <<= 1);
                        if (c > 0)
                            for (t.iushrn(c); c-- > 0;) a.isOdd() && a.iadd(u), a.iushrn(1);
                        for (var l = 0, h = 1; 0 === (r.words[0] & h) && l < 26; ++l, h <<= 1);
                        if (l > 0)
                            for (r.iushrn(l); l-- > 0;) s.isOdd() && s.iadd(u), s.iushrn(1);
                        t.cmp(r) >= 0 ? (t.isub(r), a.isub(s)) : (r.isub(t), s.isub(a))
                    }
                    return (i = 0 === t.cmpn(1) ? a : s).cmpn(0) < 0 && i.iadd(e), i
                }, o.prototype.gcd = function(e) {
                    if (this.isZero()) return e.abs();
                    if (e.isZero()) return this.abs();
                    var t = this.clone(),
                        r = e.clone();
                    t.negative = 0, r.negative = 0;
                    for (var n = 0; t.isEven() && r.isEven(); n++) t.iushrn(1), r.iushrn(1);
                    for (;;) {
                        for (; t.isEven();) t.iushrn(1);
                        for (; r.isEven();) r.iushrn(1);
                        var i = t.cmp(r);
                        if (i < 0) {
                            var o = t;
                            t = r, r = o
                        } else if (0 === i || 0 === r.cmpn(1)) break;
                        t.isub(r)
                    }
                    return r.iushln(n)
                }, o.prototype.invm = function(e) {
                    return this.egcd(e).a.umod(e)
                }, o.prototype.isEven = function() {
                    return 0 === (1 & this.words[0])
                }, o.prototype.isOdd = function() {
                    return 1 === (1 & this.words[0])
                }, o.prototype.andln = function(e) {
                    return this.words[0] & e
                }, o.prototype.bincn = function(e) {
                    n("number" === typeof e);
                    var t = e % 26,
                        r = (e - t) / 26,
                        i = 1 << t;
                    if (this.length <= r) return this._expand(r + 1), this.words[r] |= i, this;
                    for (var o = i, a = r; 0 !== o && a < this.length; a++) {
                        var s = 0 | this.words[a];
                        o = (s += o) >>> 26, s &= 67108863, this.words[a] = s
                    }
                    return 0 !== o && (this.words[a] = o, this.length++), this
                }, o.prototype.isZero = function() {
                    return 1 === this.length && 0 === this.words[0]
                }, o.prototype.cmpn = function(e) {
                    var t, r = e < 0;
                    if (0 !== this.negative && !r) return -1;
                    if (0 === this.negative && r) return 1;
                    if (this.strip(), this.length > 1) t = 1;
                    else {
                        r && (e = -e), n(e <= 67108863, "Number is too big");
                        var i = 0 | this.words[0];
                        t = i === e ? 0 : i < e ? -1 : 1
                    }
                    return 0 !== this.negative ? 0 | -t : t
                }, o.prototype.cmp = function(e) {
                    if (0 !== this.negative && 0 === e.negative) return -1;
                    if (0 === this.negative && 0 !== e.negative) return 1;
                    var t = this.ucmp(e);
                    return 0 !== this.negative ? 0 | -t : t
                }, o.prototype.ucmp = function(e) {
                    if (this.length > e.length) return 1;
                    if (this.length < e.length) return -1;
                    for (var t = 0, r = this.length - 1; r >= 0; r--) {
                        var n = 0 | this.words[r],
                            i = 0 | e.words[r];
                        if (n !== i) {
                            n < i ? t = -1 : n > i && (t = 1);
                            break
                        }
                    }
                    return t
                }, o.prototype.gtn = function(e) {
                    return 1 === this.cmpn(e)
                }, o.prototype.gt = function(e) {
                    return 1 === this.cmp(e)
                }, o.prototype.gten = function(e) {
                    return this.cmpn(e) >= 0
                }, o.prototype.gte = function(e) {
                    return this.cmp(e) >= 0
                }, o.prototype.ltn = function(e) {
                    return -1 === this.cmpn(e)
                }, o.prototype.lt = function(e) {
                    return -1 === this.cmp(e)
                }, o.prototype.lten = function(e) {
                    return this.cmpn(e) <= 0
                }, o.prototype.lte = function(e) {
                    return this.cmp(e) <= 0
                }, o.prototype.eqn = function(e) {
                    return 0 === this.cmpn(e)
                }, o.prototype.eq = function(e) {
                    return 0 === this.cmp(e)
                }, o.red = function(e) {
                    return new E(e)
                }, o.prototype.toRed = function(e) {
                    return n(!this.red, "Already a number in reduction context"), n(0 === this.negative, "red works only with positives"), e.convertTo(this)._forceRed(e)
                }, o.prototype.fromRed = function() {
                    return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
                }, o.prototype._forceRed = function(e) {
                    return this.red = e, this
                }, o.prototype.forceRed = function(e) {
                    return n(!this.red, "Already a number in reduction context"), this._forceRed(e)
                }, o.prototype.redAdd = function(e) {
                    return n(this.red, "redAdd works only with red numbers"), this.red.add(this, e)
                }, o.prototype.redIAdd = function(e) {
                    return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, e)
                }, o.prototype.redSub = function(e) {
                    return n(this.red, "redSub works only with red numbers"), this.red.sub(this, e)
                }, o.prototype.redISub = function(e) {
                    return n(this.red, "redISub works only with red numbers"), this.red.isub(this, e)
                }, o.prototype.redShl = function(e) {
                    return n(this.red, "redShl works only with red numbers"), this.red.shl(this, e)
                }, o.prototype.redMul = function(e) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.mul(this, e)
                }, o.prototype.redIMul = function(e) {
                    return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, e), this.red.imul(this, e)
                }, o.prototype.redSqr = function() {
                    return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
                }, o.prototype.redISqr = function() {
                    return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
                }, o.prototype.redSqrt = function() {
                    return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
                }, o.prototype.redInvm = function() {
                    return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
                }, o.prototype.redNeg = function() {
                    return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
                }, o.prototype.redPow = function(e) {
                    return n(this.red && !e.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, e)
                };
                var g = {
                    k256: null,
                    p224: null,
                    p192: null,
                    p25519: null
                };

                function _(e, t) {
                    this.name = e, this.p = new o(t, 16), this.n = this.p.bitLength(), this.k = new o(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
                }

                function m() {
                    _.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
                }

                function y() {
                    _.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
                }

                function w() {
                    _.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
                }

                function b() {
                    _.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
                }

                function E(e) {
                    if ("string" === typeof e) {
                        var t = o._prime(e);
                        this.m = t.p, this.prime = t
                    } else n(e.gtn(1), "modulus must be greater than 1"), this.m = e, this.prime = null
                }

                function x(e) {
                    E.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new o(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
                }
                _.prototype._tmp = function() {
                    var e = new o(null);
                    return e.words = new Array(Math.ceil(this.n / 13)), e
                }, _.prototype.ireduce = function(e) {
                    var t, r = e;
                    do {
                        this.split(r, this.tmp), t = (r = (r = this.imulK(r)).iadd(this.tmp)).bitLength()
                    } while (t > this.n);
                    var n = t < this.n ? -1 : r.ucmp(this.p);
                    return 0 === n ? (r.words[0] = 0, r.length = 1) : n > 0 ? r.isub(this.p) : r.strip(), r
                }, _.prototype.split = function(e, t) {
                    e.iushrn(this.n, 0, t)
                }, _.prototype.imulK = function(e) {
                    return e.imul(this.k)
                }, i(m, _), m.prototype.split = function(e, t) {
                    for (var r = 4194303, n = Math.min(e.length, 9), i = 0; i < n; i++) t.words[i] = e.words[i];
                    if (t.length = n, e.length <= 9) return e.words[0] = 0, void(e.length = 1);
                    var o = e.words[9];
                    for (t.words[t.length++] = o & r, i = 10; i < e.length; i++) {
                        var a = 0 | e.words[i];
                        e.words[i - 10] = (a & r) << 4 | o >>> 22, o = a
                    }
                    o >>>= 22, e.words[i - 10] = o, 0 === o && e.length > 10 ? e.length -= 10 : e.length -= 9
                }, m.prototype.imulK = function(e) {
                    e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 0 | e.words[r];
                        t += 977 * n, e.words[r] = 67108863 & t, t = 64 * n + (t / 67108864 | 0)
                    }
                    return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e
                }, i(y, _), i(w, _), i(b, _), b.prototype.imulK = function(e) {
                    for (var t = 0, r = 0; r < e.length; r++) {
                        var n = 19 * (0 | e.words[r]) + t,
                            i = 67108863 & n;
                        n >>>= 26, e.words[r] = i, t = n
                    }
                    return 0 !== t && (e.words[e.length++] = t), e
                }, o._prime = function(e) {
                    if (g[e]) return g[e];
                    var t;
                    if ("k256" === e) t = new m;
                    else if ("p224" === e) t = new y;
                    else if ("p192" === e) t = new w;
                    else {
                        if ("p25519" !== e) throw new Error("Unknown prime " + e);
                        t = new b
                    }
                    return g[e] = t, t
                }, E.prototype._verify1 = function(e) {
                    n(0 === e.negative, "red works only with positives"), n(e.red, "red works only with red numbers")
                }, E.prototype._verify2 = function(e, t) {
                    n(0 === (e.negative | t.negative), "red works only with positives"), n(e.red && e.red === t.red, "red works only with red numbers")
                }, E.prototype.imod = function(e) {
                    return this.prime ? this.prime.ireduce(e)._forceRed(this) : e.umod(this.m)._forceRed(this)
                }, E.prototype.neg = function(e) {
                    return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this)
                }, E.prototype.add = function(e, t) {
                    this._verify2(e, t);
                    var r = e.add(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r._forceRed(this)
                }, E.prototype.iadd = function(e, t) {
                    this._verify2(e, t);
                    var r = e.iadd(t);
                    return r.cmp(this.m) >= 0 && r.isub(this.m), r
                }, E.prototype.sub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.sub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r._forceRed(this)
                }, E.prototype.isub = function(e, t) {
                    this._verify2(e, t);
                    var r = e.isub(t);
                    return r.cmpn(0) < 0 && r.iadd(this.m), r
                }, E.prototype.shl = function(e, t) {
                    return this._verify1(e), this.imod(e.ushln(t))
                }, E.prototype.imul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.imul(t))
                }, E.prototype.mul = function(e, t) {
                    return this._verify2(e, t), this.imod(e.mul(t))
                }, E.prototype.isqr = function(e) {
                    return this.imul(e, e.clone())
                }, E.prototype.sqr = function(e) {
                    return this.mul(e, e)
                }, E.prototype.sqrt = function(e) {
                    if (e.isZero()) return e.clone();
                    var t = this.m.andln(3);
                    if (n(t % 2 === 1), 3 === t) {
                        var r = this.m.add(new o(1)).iushrn(2);
                        return this.pow(e, r)
                    }
                    for (var i = this.m.subn(1), a = 0; !i.isZero() && 0 === i.andln(1);) a++, i.iushrn(1);
                    n(!i.isZero());
                    var s = new o(1).toRed(this),
                        u = s.redNeg(),
                        c = this.m.subn(1).iushrn(1),
                        f = this.m.bitLength();
                    for (f = new o(2 * f * f).toRed(this); 0 !== this.pow(f, c).cmp(u);) f.redIAdd(u);
                    for (var l = this.pow(f, i), h = this.pow(e, i.addn(1).iushrn(1)), d = this.pow(e, i), p = a; 0 !== d.cmp(s);) {
                        for (var v = d, g = 0; 0 !== v.cmp(s); g++) v = v.redSqr();
                        n(g < p);
                        var _ = this.pow(l, new o(1).iushln(p - g - 1));
                        h = h.redMul(_), l = _.redSqr(), d = d.redMul(l), p = g
                    }
                    return h
                }, E.prototype.invm = function(e) {
                    var t = e._invmp(this.m);
                    return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t)
                }, E.prototype.pow = function(e, t) {
                    if (t.isZero()) return new o(1).toRed(this);
                    if (0 === t.cmpn(1)) return e.clone();
                    var r = new Array(16);
                    r[0] = new o(1).toRed(this), r[1] = e;
                    for (var n = 2; n < r.length; n++) r[n] = this.mul(r[n - 1], e);
                    var i = r[0],
                        a = 0,
                        s = 0,
                        u = t.bitLength() % 26;
                    for (0 === u && (u = 26), n = t.length - 1; n >= 0; n--) {
                        for (var c = t.words[n], f = u - 1; f >= 0; f--) {
                            var l = c >> f & 1;
                            i !== r[0] && (i = this.sqr(i)), 0 !== l || 0 !== a ? (a <<= 1, a |= l, (4 === ++s || 0 === n && 0 === f) && (i = this.mul(i, r[a]), s = 0, a = 0)) : s = 0
                        }
                        u = 26
                    }
                    return i
                }, E.prototype.convertTo = function(e) {
                    var t = e.umod(this.m);
                    return t === e ? t.clone() : t
                }, E.prototype.convertFrom = function(e) {
                    var t = e.clone();
                    return t.red = null, t
                }, o.mont = function(e) {
                    return new x(e)
                }, i(x, E), x.prototype.convertTo = function(e) {
                    return this.imod(e.ushln(this.shift))
                }, x.prototype.convertFrom = function(e) {
                    var t = this.imod(e.mul(this.rinv));
                    return t.red = null, t
                }, x.prototype.imul = function(e, t) {
                    if (e.isZero() || t.isZero()) return e.words[0] = 0, e.length = 1, e;
                    var r = e.imul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        o = i;
                    return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : i.cmpn(0) < 0 && (o = i.iadd(this.m)), o._forceRed(this)
                }, x.prototype.mul = function(e, t) {
                    if (e.isZero() || t.isZero()) return new o(0)._forceRed(this);
                    var r = e.mul(t),
                        n = r.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                        i = r.isub(n).iushrn(this.shift),
                        a = i;
                    return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : i.cmpn(0) < 0 && (a = i.iadd(this.m)), a._forceRed(this)
                }, x.prototype.invm = function(e) {
                    return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this)
                }
            }(e, this)
        }).call(this, r(144)(e))
    }, , , , , function(e, t, r) {
        (function(t) {
            var n = r(757).strict;
            e.exports = function(e) {
                if (n(e)) {
                    var r = t.from(e.buffer);
                    return e.byteLength !== e.buffer.byteLength && (r = r.slice(e.byteOffset, e.byteOffset + e.byteLength)), r
                }
                return t.from(e)
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseTransactionData = t.parsePersonalSign = t.isValidAddress = t.toChecksumAddress = void 0;
        var n = r(879),
            i = r(756),
            o = r(758),
            a = r(760),
            s = r(613);

        function u(e) {
            e = s.removeHexPrefix(e.toLowerCase());
            for (var t = s.removeHexPrefix(n.keccak_256(i.convertUtf8ToBuffer(e))), r = "", o = 0; o < e.length; o++) parseInt(t[o], 16) > 7 ? r += e[o].toUpperCase() : r += e[o];
            return s.addHexPrefix(r)
        }
        t.toChecksumAddress = u;
        t.isValidAddress = function(e) {
            return !!e && ("0x" === e.toLowerCase().substring(0, 2) && (!!/^(0x)?[0-9a-f]{40}$/i.test(e) && (!(!/^(0x)?[0-9a-f]{40}$/.test(e) && !/^(0x)?[0-9A-F]{40}$/.test(e)) || e === u(e))))
        }, t.parsePersonalSign = function(e) {
            return a.isEmptyArray(e) || a.isHexString(e[0]) || (e[0] = i.convertUtf8ToHex(e[0])), e
        }, t.parseTransactionData = function(e) {
            if ("undefined" === typeof e.from || !t.isValidAddress(e.from)) throw new Error("Transaction object must include a valid 'from' value.");

            function r(e) {
                var t = e;
                return ("number" === typeof e || "string" === typeof e && !a.isEmptyString(e)) && (a.isHexString(e) ? "string" === typeof e && (t = o.sanitizeHex(e)) : t = i.convertNumberToHex(e)), "string" === typeof t && (t = o.removeHexLeadingZeros(t)), t
            }
            var n = {
                    from: o.sanitizeHex(e.from),
                    to: "undefined" === typeof e.to ? "" : o.sanitizeHex(e.to),
                    gasPrice: "undefined" === typeof e.gasPrice ? "" : r(e.gasPrice),
                    gas: "undefined" === typeof e.gas ? "undefined" === typeof e.gasLimit ? "" : r(e.gasLimit) : r(e.gas),
                    value: "undefined" === typeof e.value ? "" : r(e.value),
                    nonce: "undefined" === typeof e.nonce ? "" : r(e.nonce),
                    data: "undefined" === typeof e.data ? "" : o.sanitizeHex(e.data) || "0x"
                },
                s = ["gasPrice", "gas", "value", "nonce"];
            return Object.keys(n).forEach((function(e) {
                !n[e].trim().length && s.includes(e) && delete n[e]
            })), n
        }
    }, function(e, t, r) {
        (function(n, i) {
            var o;
            ! function() {
                "use strict";
                var a = "input is invalid type",
                    s = "object" === typeof window,
                    u = s ? window : {};
                u.JS_SHA3_NO_WINDOW && (s = !1);
                var c = !s && "object" === typeof self;
                !u.JS_SHA3_NO_NODE_JS && "object" === typeof n && n.versions && n.versions.node ? u = i : c && (u = self);
                var f = !u.JS_SHA3_NO_COMMON_JS && "object" === typeof e && e.exports,
                    l = r(880),
                    h = !u.JS_SHA3_NO_ARRAY_BUFFER && "undefined" !== typeof ArrayBuffer,
                    d = "0123456789abcdef".split(""),
                    p = [4, 1024, 262144, 67108864],
                    v = [0, 8, 16, 24],
                    g = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648],
                    _ = [224, 256, 384, 512],
                    m = [128, 256],
                    y = ["hex", "buffer", "arrayBuffer", "array", "digest"],
                    w = {
                        128: 168,
                        256: 136
                    };
                !u.JS_SHA3_NO_NODE_JS && Array.isArray || (Array.isArray = function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e)
                }), !h || !u.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView || (ArrayBuffer.isView = function(e) {
                    return "object" === typeof e && e.buffer && e.buffer.constructor === ArrayBuffer
                });
                for (var b = function(e, t, r) {
                        return function(n) {
                            return new B(e, t, e).update(n)[r]()
                        }
                    }, E = function(e, t, r) {
                        return function(n, i) {
                            return new B(e, t, i).update(n)[r]()
                        }
                    }, x = function(e, t, r) {
                        return function(t, n, i, o) {
                            return M["cshake" + e].update(t, n, i, o)[r]()
                        }
                    }, k = function(e, t, r) {
                        return function(t, n, i, o) {
                            return M["kmac" + e].update(t, n, i, o)[r]()
                        }
                    }, S = function(e, t, r, n) {
                        for (var i = 0; i < y.length; ++i) {
                            var o = y[i];
                            e[o] = t(r, n, o)
                        }
                        return e
                    }, R = function(e, t) {
                        var r = b(e, t, "hex");
                        return r.create = function() {
                            return new B(e, t, e)
                        }, r.update = function(e) {
                            return r.create().update(e)
                        }, S(r, b, e, t)
                    }, A = [{
                        name: "keccak",
                        padding: [1, 256, 65536, 16777216],
                        bits: _,
                        createMethod: R
                    }, {
                        name: "sha3",
                        padding: [6, 1536, 393216, 100663296],
                        bits: _,
                        createMethod: R
                    }, {
                        name: "shake",
                        padding: [31, 7936, 2031616, 520093696],
                        bits: m,
                        createMethod: function(e, t) {
                            var r = E(e, t, "hex");
                            return r.create = function(r) {
                                return new B(e, t, r)
                            }, r.update = function(e, t) {
                                return r.create(t).update(e)
                            }, S(r, E, e, t)
                        }
                    }, {
                        name: "cshake",
                        padding: p,
                        bits: m,
                        createMethod: function(e, t) {
                            var r = w[e],
                                n = x(e, 0, "hex");
                            return n.create = function(n, i, o) {
                                return i || o ? new B(e, t, n).bytepad([i, o], r) : M["shake" + e].create(n)
                            }, n.update = function(e, t, r, i) {
                                return n.create(t, r, i).update(e)
                            }, S(n, x, e, t)
                        }
                    }, {
                        name: "kmac",
                        padding: p,
                        bits: m,
                        createMethod: function(e, t) {
                            var r = w[e],
                                n = k(e, 0, "hex");
                            return n.create = function(n, i, o) {
                                return new H(e, t, i).bytepad(["KMAC", o], r).bytepad([n], r)
                            }, n.update = function(e, t, r, i) {
                                return n.create(e, r, i).update(t)
                            }, S(n, k, e, t)
                        }
                    }], M = {}, T = [], O = 0; O < A.length; ++O)
                    for (var C = A[O], P = C.bits, N = 0; N < P.length; ++N) {
                        var I = C.name + "_" + P[N];
                        if (T.push(I), M[I] = C.createMethod(P[N], C.padding), "sha3" !== C.name) {
                            var L = C.name + P[N];
                            T.push(L), M[L] = M[I]
                        }
                    }

                function B(e, t, r) {
                    this.blocks = [], this.s = [], this.padding = t, this.outputBits = r, this.reset = !0, this.finalized = !1, this.block = 0, this.start = 0, this.blockCount = 1600 - (e << 1) >> 5, this.byteCount = this.blockCount << 2, this.outputBlocks = r >> 5, this.extraBytes = (31 & r) >> 3;
                    for (var n = 0; n < 50; ++n) this.s[n] = 0
                }

                function H(e, t, r) {
                    B.call(this, e, t, r)
                }
                B.prototype.update = function(e) {
                    if (this.finalized) throw new Error("finalize already called");
                    var t, r = typeof e;
                    if ("string" !== r) {
                        if ("object" !== r) throw new Error(a);
                        if (null === e) throw new Error(a);
                        if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) throw new Error(a);
                        t = !0
                    }
                    for (var n, i, o = this.blocks, s = this.byteCount, u = e.length, c = this.blockCount, f = 0, l = this.s; f < u;) {
                        if (this.reset)
                            for (this.reset = !1, o[0] = this.block, n = 1; n < c + 1; ++n) o[n] = 0;
                        if (t)
                            for (n = this.start; f < u && n < s; ++f) o[n >> 2] |= e[f] << v[3 & n++];
                        else
                            for (n = this.start; f < u && n < s; ++f)(i = e.charCodeAt(f)) < 128 ? o[n >> 2] |= i << v[3 & n++] : i < 2048 ? (o[n >> 2] |= (192 | i >> 6) << v[3 & n++], o[n >> 2] |= (128 | 63 & i) << v[3 & n++]) : i < 55296 || i >= 57344 ? (o[n >> 2] |= (224 | i >> 12) << v[3 & n++], o[n >> 2] |= (128 | i >> 6 & 63) << v[3 & n++], o[n >> 2] |= (128 | 63 & i) << v[3 & n++]) : (i = 65536 + ((1023 & i) << 10 | 1023 & e.charCodeAt(++f)), o[n >> 2] |= (240 | i >> 18) << v[3 & n++], o[n >> 2] |= (128 | i >> 12 & 63) << v[3 & n++], o[n >> 2] |= (128 | i >> 6 & 63) << v[3 & n++], o[n >> 2] |= (128 | 63 & i) << v[3 & n++]);
                        if (this.lastByteIndex = n, n >= s) {
                            for (this.start = n - s, this.block = o[c], n = 0; n < c; ++n) l[n] ^= o[n];
                            U(l), this.reset = !0
                        } else this.start = n
                    }
                    return this
                }, B.prototype.encode = function(e, t) {
                    var r = 255 & e,
                        n = 1,
                        i = [r];
                    for (r = 255 & (e >>= 8); r > 0;) i.unshift(r), r = 255 & (e >>= 8), ++n;
                    return t ? i.push(n) : i.unshift(n), this.update(i), i.length
                }, B.prototype.encodeString = function(e) {
                    var t, r = typeof e;
                    if ("string" !== r) {
                        if ("object" !== r) throw new Error(a);
                        if (null === e) throw new Error(a);
                        if (h && e.constructor === ArrayBuffer) e = new Uint8Array(e);
                        else if (!Array.isArray(e) && (!h || !ArrayBuffer.isView(e))) throw new Error(a);
                        t = !0
                    }
                    var n = 0,
                        i = e.length;
                    if (t) n = i;
                    else
                        for (var o = 0; o < e.length; ++o) {
                            var s = e.charCodeAt(o);
                            s < 128 ? n += 1 : s < 2048 ? n += 2 : s < 55296 || s >= 57344 ? n += 3 : (s = 65536 + ((1023 & s) << 10 | 1023 & e.charCodeAt(++o)), n += 4)
                        }
                    return n += this.encode(8 * n), this.update(e), n
                }, B.prototype.bytepad = function(e, t) {
                    for (var r = this.encode(t), n = 0; n < e.length; ++n) r += this.encodeString(e[n]);
                    var i = t - r % t,
                        o = [];
                    return o.length = i, this.update(o), this
                }, B.prototype.finalize = function() {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var e = this.blocks,
                            t = this.lastByteIndex,
                            r = this.blockCount,
                            n = this.s;
                        if (e[t >> 2] |= this.padding[3 & t], this.lastByteIndex === this.byteCount)
                            for (e[0] = e[r], t = 1; t < r + 1; ++t) e[t] = 0;
                        for (e[r - 1] |= 2147483648, t = 0; t < r; ++t) n[t] ^= e[t];
                        U(n)
                    }
                }, B.prototype.toString = B.prototype.hex = function() {
                    this.finalize();
                    for (var e, t = this.blockCount, r = this.s, n = this.outputBlocks, i = this.extraBytes, o = 0, a = 0, s = ""; a < n;) {
                        for (o = 0; o < t && a < n; ++o, ++a) e = r[o], s += d[e >> 4 & 15] + d[15 & e] + d[e >> 12 & 15] + d[e >> 8 & 15] + d[e >> 20 & 15] + d[e >> 16 & 15] + d[e >> 28 & 15] + d[e >> 24 & 15];
                        a % t === 0 && (U(r), o = 0)
                    }
                    return i && (e = r[o], s += d[e >> 4 & 15] + d[15 & e], i > 1 && (s += d[e >> 12 & 15] + d[e >> 8 & 15]), i > 2 && (s += d[e >> 20 & 15] + d[e >> 16 & 15])), s
                }, B.prototype.arrayBuffer = function() {
                    this.finalize();
                    var e, t = this.blockCount,
                        r = this.s,
                        n = this.outputBlocks,
                        i = this.extraBytes,
                        o = 0,
                        a = 0,
                        s = this.outputBits >> 3;
                    e = i ? new ArrayBuffer(n + 1 << 2) : new ArrayBuffer(s);
                    for (var u = new Uint32Array(e); a < n;) {
                        for (o = 0; o < t && a < n; ++o, ++a) u[a] = r[o];
                        a % t === 0 && U(r)
                    }
                    return i && (u[o] = r[o], e = e.slice(0, s)), e
                }, B.prototype.buffer = B.prototype.arrayBuffer, B.prototype.digest = B.prototype.array = function() {
                    this.finalize();
                    for (var e, t, r = this.blockCount, n = this.s, i = this.outputBlocks, o = this.extraBytes, a = 0, s = 0, u = []; s < i;) {
                        for (a = 0; a < r && s < i; ++a, ++s) e = s << 2, t = n[a], u[e] = 255 & t, u[e + 1] = t >> 8 & 255, u[e + 2] = t >> 16 & 255, u[e + 3] = t >> 24 & 255;
                        s % r === 0 && U(n)
                    }
                    return o && (e = s << 2, t = n[a], u[e] = 255 & t, o > 1 && (u[e + 1] = t >> 8 & 255), o > 2 && (u[e + 2] = t >> 16 & 255)), u
                }, H.prototype = new B, H.prototype.finalize = function() {
                    return this.encode(this.outputBits, !0), B.prototype.finalize.call(this)
                };
                var U = function(e) {
                    var t, r, n, i, o, a, s, u, c, f, l, h, d, p, v, _, m, y, w, b, E, x, k, S, R, A, M, T, O, C, P, N, I, L, B, H, U, j, D, q, K, z, F, W, G, V, J, Y, Z, X, Q, $, ee, te, re, ne, ie, oe, ae, se, ue, ce, fe;
                    for (n = 0; n < 48; n += 2) i = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40], o = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41], a = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42], s = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43], u = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44], c = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45], f = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46], l = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47], t = (h = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48]) ^ (a << 1 | s >>> 31), r = (d = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49]) ^ (s << 1 | a >>> 31), e[0] ^= t, e[1] ^= r, e[10] ^= t, e[11] ^= r, e[20] ^= t, e[21] ^= r, e[30] ^= t, e[31] ^= r, e[40] ^= t, e[41] ^= r, t = i ^ (u << 1 | c >>> 31), r = o ^ (c << 1 | u >>> 31), e[2] ^= t, e[3] ^= r, e[12] ^= t, e[13] ^= r, e[22] ^= t, e[23] ^= r, e[32] ^= t, e[33] ^= r, e[42] ^= t, e[43] ^= r, t = a ^ (f << 1 | l >>> 31), r = s ^ (l << 1 | f >>> 31), e[4] ^= t, e[5] ^= r, e[14] ^= t, e[15] ^= r, e[24] ^= t, e[25] ^= r, e[34] ^= t, e[35] ^= r, e[44] ^= t, e[45] ^= r, t = u ^ (h << 1 | d >>> 31), r = c ^ (d << 1 | h >>> 31), e[6] ^= t, e[7] ^= r, e[16] ^= t, e[17] ^= r, e[26] ^= t, e[27] ^= r, e[36] ^= t, e[37] ^= r, e[46] ^= t, e[47] ^= r, t = f ^ (i << 1 | o >>> 31), r = l ^ (o << 1 | i >>> 31), e[8] ^= t, e[9] ^= r, e[18] ^= t, e[19] ^= r, e[28] ^= t, e[29] ^= r, e[38] ^= t, e[39] ^= r, e[48] ^= t, e[49] ^= r, p = e[0], v = e[1], V = e[11] << 4 | e[10] >>> 28, J = e[10] << 4 | e[11] >>> 28, T = e[20] << 3 | e[21] >>> 29, O = e[21] << 3 | e[20] >>> 29, se = e[31] << 9 | e[30] >>> 23, ue = e[30] << 9 | e[31] >>> 23, z = e[40] << 18 | e[41] >>> 14, F = e[41] << 18 | e[40] >>> 14, L = e[2] << 1 | e[3] >>> 31, B = e[3] << 1 | e[2] >>> 31, _ = e[13] << 12 | e[12] >>> 20, m = e[12] << 12 | e[13] >>> 20, Y = e[22] << 10 | e[23] >>> 22, Z = e[23] << 10 | e[22] >>> 22, C = e[33] << 13 | e[32] >>> 19, P = e[32] << 13 | e[33] >>> 19, ce = e[42] << 2 | e[43] >>> 30, fe = e[43] << 2 | e[42] >>> 30, te = e[5] << 30 | e[4] >>> 2, re = e[4] << 30 | e[5] >>> 2, H = e[14] << 6 | e[15] >>> 26, U = e[15] << 6 | e[14] >>> 26, y = e[25] << 11 | e[24] >>> 21, w = e[24] << 11 | e[25] >>> 21, X = e[34] << 15 | e[35] >>> 17, Q = e[35] << 15 | e[34] >>> 17, N = e[45] << 29 | e[44] >>> 3, I = e[44] << 29 | e[45] >>> 3, S = e[6] << 28 | e[7] >>> 4, R = e[7] << 28 | e[6] >>> 4, ne = e[17] << 23 | e[16] >>> 9, ie = e[16] << 23 | e[17] >>> 9, j = e[26] << 25 | e[27] >>> 7, D = e[27] << 25 | e[26] >>> 7, b = e[36] << 21 | e[37] >>> 11, E = e[37] << 21 | e[36] >>> 11, $ = e[47] << 24 | e[46] >>> 8, ee = e[46] << 24 | e[47] >>> 8, W = e[8] << 27 | e[9] >>> 5, G = e[9] << 27 | e[8] >>> 5, A = e[18] << 20 | e[19] >>> 12, M = e[19] << 20 | e[18] >>> 12, oe = e[29] << 7 | e[28] >>> 25, ae = e[28] << 7 | e[29] >>> 25, q = e[38] << 8 | e[39] >>> 24, K = e[39] << 8 | e[38] >>> 24, x = e[48] << 14 | e[49] >>> 18, k = e[49] << 14 | e[48] >>> 18, e[0] = p ^ ~_ & y, e[1] = v ^ ~m & w, e[10] = S ^ ~A & T, e[11] = R ^ ~M & O, e[20] = L ^ ~H & j, e[21] = B ^ ~U & D, e[30] = W ^ ~V & Y, e[31] = G ^ ~J & Z, e[40] = te ^ ~ne & oe, e[41] = re ^ ~ie & ae, e[2] = _ ^ ~y & b, e[3] = m ^ ~w & E, e[12] = A ^ ~T & C, e[13] = M ^ ~O & P, e[22] = H ^ ~j & q, e[23] = U ^ ~D & K, e[32] = V ^ ~Y & X, e[33] = J ^ ~Z & Q, e[42] = ne ^ ~oe & se, e[43] = ie ^ ~ae & ue, e[4] = y ^ ~b & x, e[5] = w ^ ~E & k, e[14] = T ^ ~C & N, e[15] = O ^ ~P & I, e[24] = j ^ ~q & z, e[25] = D ^ ~K & F, e[34] = Y ^ ~X & $, e[35] = Z ^ ~Q & ee, e[44] = oe ^ ~se & ce, e[45] = ae ^ ~ue & fe, e[6] = b ^ ~x & p, e[7] = E ^ ~k & v, e[16] = C ^ ~N & S, e[17] = P ^ ~I & R, e[26] = q ^ ~z & L, e[27] = K ^ ~F & B, e[36] = X ^ ~$ & W, e[37] = Q ^ ~ee & G, e[46] = se ^ ~ce & te, e[47] = ue ^ ~fe & re, e[8] = x ^ ~p & _, e[9] = k ^ ~v & m, e[18] = N ^ ~S & A, e[19] = I ^ ~R & M, e[28] = z ^ ~L & H, e[29] = F ^ ~B & U, e[38] = $ ^ ~W & V, e[39] = ee ^ ~G & J, e[48] = ce ^ ~te & ne, e[49] = fe ^ ~re & ie, e[0] ^= g[n], e[1] ^= g[n + 1]
                };
                if (f) e.exports = M;
                else {
                    for (O = 0; O < T.length; ++O) u[T[O]] = M[T[O]];
                    l && (void 0 === (o = function() {
                        return M
                    }.call(t, r, t, e)) || (e.exports = o))
                }
            }()
        }).call(this, r(111), r(67))
    }, function(e, t) {
        (function(t) {
            e.exports = t
        }).call(this, {})
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(602);
        n.__exportStar(r(694), t), n.__exportStar(r(759), t), n.__exportStar(r(882), t), n.__exportStar(r(883), t), n.__exportStar(r(884), t), n.__exportStar(r(892), t)
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formatErrorMessage = t.formatJsonRpcError = t.formatJsonRpcResult = t.formatJsonRpcRequest = t.payloadId = void 0;
        var n = r(759),
            i = r(694);

        function o() {
            return Date.now() * Math.pow(10, 3) + Math.floor(Math.random() * Math.pow(10, 3))
        }

        function a(e) {
            if ("undefined" === typeof e) return n.getError(i.INTERNAL_ERROR);
            if ("string" === typeof e && (e = Object.assign(Object.assign({}, n.getError(i.SERVER_ERROR)), {
                    message: e
                })), n.isReservedErrorCode(e.code) && (e = n.getErrorByCode(e.code)), !n.isServerErrorCode(e.code)) throw new Error("Error code is not in server code range");
            return e
        }
        t.payloadId = o, t.formatJsonRpcRequest = function(e, t, r) {
            return {
                id: r || o(),
                jsonrpc: "2.0",
                method: e,
                params: t
            }
        }, t.formatJsonRpcResult = function(e, t) {
            return {
                id: e,
                jsonrpc: "2.0",
                result: t
            }
        }, t.formatJsonRpcError = function(e, t) {
            return {
                id: e,
                jsonrpc: "2.0",
                error: a(t)
            }
        }, t.formatErrorMessage = a
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return "*" === e
        }

        function i(e) {
            return !!n(e) || !!e.includes("*") && (2 === e.split("*").length && 1 === e.split("*").filter((function(e) {
                return "" === e.trim()
            })).length)
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isValidTrailingWildcardRoute = t.isValidLeadingWildcardRoute = t.isValidWildcardRoute = t.isValidDefaultRoute = t.isValidRoute = void 0, t.isValidRoute = function(e) {
            return e.includes("*") ? i(e) : !/\W/g.test(e)
        }, t.isValidDefaultRoute = n, t.isValidWildcardRoute = i, t.isValidLeadingWildcardRoute = function(e) {
            return !n(e) && i(e) && !e.split("*")[0].trim()
        }, t.isValidTrailingWildcardRoute = function(e) {
            return !n(e) && i(e) && !e.split("*")[1].trim()
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), r(602).__exportStar(r(885), t)
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(602);
        n.__exportStar(r(886), t), n.__exportStar(r(887), t), n.__exportStar(r(695), t), n.__exportStar(r(888), t), n.__exportStar(r(696), t), n.__exportStar(r(889), t), n.__exportStar(r(890), t), n.__exportStar(r(891), t)
    }, function(e, t, r) {
        "use strict";
        var n = r(46),
            i = r(47),
            o = r(35);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.IBlockchainProvider = t.IBlockchainAuthenticator = t.IPendingRequests = void 0;
        var a = r(695),
            s = r(696);
        t.IPendingRequests = function e(t) {
            o(this, e), this.storage = t
        };
        var u = function(e) {
            n(r, e);
            var t = i(r);

            function r(e) {
                var n;
                return o(this, r), (n = t.call(this)).config = e, n
            }
            return r
        }(a.IEvents);
        t.IBlockchainAuthenticator = u;
        var c = function(e) {
            n(r, e);
            var t = i(r);

            function r(e, n) {
                return o(this, r), t.call(this, e)
            }
            return r
        }(s.IJsonRpcProvider);
        t.IBlockchainProvider = c
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, function(e, t, r) {
        "use strict";
        var n = r(35),
            i = r(46),
            o = r(47);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.IMultiServiceProvider = void 0;
        var a = function(e) {
            i(r, e);
            var t = o(r);

            function r(e) {
                var i;
                return n(this, r), (i = t.call(this)).config = e, i
            }
            return r
        }(r(696).IBaseJsonRpcProvider);
        t.IMultiServiceProvider = a
    }, function(e, t, r) {
        "use strict";
        var n = r(35);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.IJsonRpcRouter = void 0;
        t.IJsonRpcRouter = function e(t) {
            n(this, e), this.routes = t
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, function(e, t, r) {
        "use strict";
        var n = r(35);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.IJsonRpcValidator = void 0;
        t.IJsonRpcValidator = function e(t) {
            n(this, e), this.schemas = t
        }
    }, function(e, t, r) {
        "use strict";

        function n(e) {
            return "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isJsonRpcValidationInvalid = t.isJsonRpcError = t.isJsonRpcResult = t.isJsonRpcResponse = t.isJsonRpcRequest = t.isJsonRpcPayload = void 0, t.isJsonRpcPayload = n, t.isJsonRpcRequest = function(e) {
            return n(e) && "method" in e
        }, t.isJsonRpcResponse = function(e) {
            return n(e) && ("result" in e || "error" in e)
        }, t.isJsonRpcResult = function(e) {
            return "result" in e
        }, t.isJsonRpcError = function(e) {
            return "error" in e
        }, t.isJsonRpcValidationInvalid = function(e) {
            return "error" in e && !1 === e.valid
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.formatRpcError = t.promisify = void 0;
        var i = r(602);
        t.promisify = function(e, t) {
            var r = this;
            return function() {
                for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                return i.__awaiter(r, void 0, void 0, n.mark((function r() {
                    return n.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.abrupt("return", new Promise((function(r, n) {
                                    e.apply(t, [].concat(a, [function(e, t) {
                                        null !== e && "undefined" !== typeof e || n(e), r(t)
                                    }]))
                                })));
                            case 1:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })))
            }
        }, t.formatRpcError = function(e) {
            var t = e.message || "Failed or Rejected Request",
                r = -32e3;
            if (e && !e.code) switch (t) {
                case "Parse error":
                    r = -32700;
                    break;
                case "Invalid request":
                    r = -32600;
                    break;
                case "Method not found":
                    r = -32601;
                    break;
                case "Invalid params":
                    r = -32602;
                    break;
                case "Internal error":
                    r = -32603;
                    break;
                default:
                    r = -32e3
            }
            return {
                code: r,
                message: t
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.parseWalletConnectUri = t.isWalletConnectSession = void 0;
        var n = r(761);
        t.isWalletConnectSession = function(e) {
            return "undefined" !== typeof e.bridge
        }, t.parseWalletConnectUri = function(e) {
            var t = e.indexOf(":"),
                r = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                i = e.substring(0, t),
                o = function(e) {
                    var t = e.split("@");
                    return {
                        handshakeTopic: t[0],
                        version: parseInt(t[1], 10)
                    }
                }(e.substring(t + 1, r)),
                a = function(e) {
                    var t = n.parseQueryString(e);
                    return {
                        key: t.key || "",
                        bridge: t.bridge || ""
                    }
                }("undefined" !== typeof r ? e.substr(r) : "");
            return Object.assign(Object.assign({
                protocol: i
            }, o), a)
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(212),
            i = r(95),
            o = r(664),
            a = r(896),
            s = r(897),
            u = r(898);

        function c(e) {
            if ("string" !== typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string")
        }

        function f(e, t) {
            return t.encode ? t.strict ? a(e) : encodeURIComponent(e) : e
        }

        function l(e, t) {
            return t.decode ? s(e) : e
        }

        function h(e) {
            return Array.isArray(e) ? e.sort() : "object" === typeof e ? h(Object.keys(e)).sort((function(e, t) {
                return Number(e) - Number(t)
            })).map((function(t) {
                return e[t]
            })) : e
        }

        function d(e) {
            var t = e.indexOf("#");
            return -1 !== t && (e = e.slice(0, t)), e
        }

        function p(e) {
            var t = (e = d(e)).indexOf("?");
            return -1 === t ? "" : e.slice(t + 1)
        }

        function v(e, t) {
            return t.parseNumbers && !Number.isNaN(Number(e)) && "string" === typeof e && "" !== e.trim() ? e = Number(e) : !t.parseBooleans || null === e || "true" !== e.toLowerCase() && "false" !== e.toLowerCase() || (e = "true" === e.toLowerCase()), e
        }

        function g(e, t) {
            c((t = Object.assign({
                decode: !0,
                sort: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
                parseNumbers: !1,
                parseBooleans: !1
            }, t)).arrayFormatSeparator);
            var r = function(e) {
                    var t;
                    switch (e.arrayFormat) {
                        case "index":
                            return function(e, r, n) {
                                t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === n[e] && (n[e] = {}), n[e][t[1]] = r) : n[e] = r
                            };
                        case "bracket":
                            return function(e, r, n) {
                                t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== n[e] ? n[e] = [].concat(n[e], r) : n[e] = [r] : n[e] = r
                            };
                        case "comma":
                        case "separator":
                            return function(t, r, n) {
                                var i = "string" === typeof r && r.split("").indexOf(e.arrayFormatSeparator) > -1 ? r.split(e.arrayFormatSeparator).map((function(t) {
                                    return l(t, e)
                                })) : null === r ? r : l(r, e);
                                n[t] = i
                            };
                        default:
                            return function(e, t, r) {
                                void 0 !== r[e] ? r[e] = [].concat(r[e], t) : r[e] = t
                            }
                    }
                }(t),
                o = Object.create(null);
            if ("string" !== typeof e) return o;
            if (!(e = e.trim().replace(/^[?#&]/, ""))) return o;
            var a, s = i(e.split("&"));
            try {
                for (s.s(); !(a = s.n()).done;) {
                    var f = a.value,
                        d = u(t.decode ? f.replace(/\+/g, " ") : f, "="),
                        p = n(d, 2),
                        g = p[0],
                        _ = p[1];
                    _ = void 0 === _ ? null : ["comma", "separator"].includes(t.arrayFormat) ? _ : l(_, t), r(l(g, t), _, o)
                }
            } catch (S) {
                s.e(S)
            } finally {
                s.f()
            }
            for (var m = 0, y = Object.keys(o); m < y.length; m++) {
                var w = y[m],
                    b = o[w];
                if ("object" === typeof b && null !== b)
                    for (var E = 0, x = Object.keys(b); E < x.length; E++) {
                        var k = x[E];
                        b[k] = v(b[k], t)
                    } else o[w] = v(b, t)
            }
            return !1 === t.sort ? o : (!0 === t.sort ? Object.keys(o).sort() : Object.keys(o).sort(t.sort)).reduce((function(e, t) {
                var r = o[t];
                return Boolean(r) && "object" === typeof r && !Array.isArray(r) ? e[t] = h(r) : e[t] = r, e
            }), Object.create(null))
        }
        t.extract = p, t.parse = g, t.stringify = function(e, t) {
            if (!e) return "";
            c((t = Object.assign({
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ","
            }, t)).arrayFormatSeparator);
            for (var r = function(r) {
                    return t.skipNull && (null === (n = e[r]) || void 0 === n) || t.skipEmptyString && "" === e[r];
                    var n
                }, n = function(e) {
                    switch (e.arrayFormat) {
                        case "index":
                            return function(t) {
                                return function(r, n) {
                                    var i = r.length;
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(o(r), null === n ? [
                                        [f(t, e), "[", i, "]"].join("")
                                    ] : [
                                        [f(t, e), "[", f(i, e), "]=", f(n, e)].join("")
                                    ])
                                }
                            };
                        case "bracket":
                            return function(t) {
                                return function(r, n) {
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(o(r), null === n ? [
                                        [f(t, e), "[]"].join("")
                                    ] : [
                                        [f(t, e), "[]=", f(n, e)].join("")
                                    ])
                                }
                            };
                        case "comma":
                        case "separator":
                            return function(t) {
                                return function(r, n) {
                                    return null === n || void 0 === n || 0 === n.length ? r : 0 === r.length ? [
                                        [f(t, e), "=", f(n, e)].join("")
                                    ] : [
                                        [r, f(n, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            };
                        default:
                            return function(t) {
                                return function(r, n) {
                                    return void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? r : [].concat(o(r), null === n ? [f(t, e)] : [
                                        [f(t, e), "=", f(n, e)].join("")
                                    ])
                                }
                            }
                    }
                }(t), i = {}, a = 0, s = Object.keys(e); a < s.length; a++) {
                var u = s[a];
                r(u) || (i[u] = e[u])
            }
            var l = Object.keys(i);
            return !1 !== t.sort && l.sort(t.sort), l.map((function(r) {
                var i = e[r];
                return void 0 === i ? "" : null === i ? f(r, t) : Array.isArray(i) ? i.reduce(n(r), []).join("&") : f(r, t) + "=" + f(i, t)
            })).filter((function(e) {
                return e.length > 0
            })).join("&")
        }, t.parseUrl = function(e, t) {
            t = Object.assign({
                decode: !0
            }, t);
            var r = u(e, "#"),
                i = n(r, 2),
                o = i[0],
                a = i[1];
            return Object.assign({
                url: o.split("?")[0] || "",
                query: g(p(e), t)
            }, t && t.parseFragmentIdentifier && a ? {
                fragmentIdentifier: l(a, t)
            } : {})
        }, t.stringifyUrl = function(e, r) {
            r = Object.assign({
                encode: !0,
                strict: !0
            }, r);
            var n = d(e.url).split("?")[0] || "",
                i = t.extract(e.url),
                o = t.parse(i, {
                    sort: !1
                }),
                a = Object.assign(o, e.query),
                s = t.stringify(a, r);
            s && (s = "?".concat(s));
            var u = function(e) {
                var t = "",
                    r = e.indexOf("#");
                return -1 !== r && (t = e.slice(r)), t
            }(e.url);
            return e.fragmentIdentifier && (u = "#".concat(f(e.fragmentIdentifier, r))), "".concat(n).concat(s).concat(u)
        }
    }, function(e, t, r) {
        "use strict";
        e.exports = function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, (function(e) {
                return "%".concat(e.charCodeAt(0).toString(16).toUpperCase())
            }))
        }
    }, function(e, t, r) {
        "use strict";
        var n = "%[a-f0-9]{2}",
            i = new RegExp(n, "gi"),
            o = new RegExp("(" + n + ")+", "gi");

        function a(e, t) {
            try {
                return decodeURIComponent(e.join(""))
            } catch (i) {}
            if (1 === e.length) return e;
            t = t || 1;
            var r = e.slice(0, t),
                n = e.slice(t);
            return Array.prototype.concat.call([], a(r), a(n))
        }

        function s(e) {
            try {
                return decodeURIComponent(e)
            } catch (n) {
                for (var t = e.match(i), r = 1; r < t.length; r++) t = (e = a(t, r).join("")).match(i);
                return e
            }
        }
        e.exports = function(e) {
            if ("string" !== typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
            try {
                return e = e.replace(/\+/g, " "), decodeURIComponent(e)
            } catch (t) {
                return function(e) {
                    for (var r = {
                            "%FE%FF": "\ufffd\ufffd",
                            "%FF%FE": "\ufffd\ufffd"
                        }, n = o.exec(e); n;) {
                        try {
                            r[n[0]] = decodeURIComponent(n[0])
                        } catch (t) {
                            var i = s(n[0]);
                            i !== n[0] && (r[n[0]] = i)
                        }
                        n = o.exec(e)
                    }
                    r["%C2"] = "\ufffd";
                    for (var a = Object.keys(r), u = 0; u < a.length; u++) {
                        var c = a[u];
                        e = e.replace(new RegExp(c, "g"), r[c])
                    }
                    return e
                }(e)
            }
        }
    }, function(e, t, r) {
        "use strict";
        e.exports = function(e, t) {
            if ("string" !== typeof e || "string" !== typeof t) throw new TypeError("Expected the arguments to be of type `string`");
            if ("" === t) return [e];
            var r = e.indexOf(t);
            return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(2),
                i = r(35),
                o = r(36);
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(602),
                s = r(617),
                u = a.__importDefault(r(900)),
                c = "undefined" !== typeof e.WebSocket ? e.WebSocket : r(901),
                f = function() {
                    function e(t) {
                        var r = this;
                        if (i(this, e), this._queue = [], this._events = [], this._subscriptions = [], this._protocol = t.protocol, this._version = t.version, this._url = "", this._netMonitor = null, this._socket = null, this._nextSocket = null, this._subscriptions = t.subscriptions || [], this._netMonitor = t.netMonitor || new u.default, !t.url || "string" !== typeof t.url) throw new Error("Missing or invalid WebSocket url");
                        this._url = t.url, this._netMonitor.on("online", (function() {
                            return r._socketCreate()
                        }))
                    }
                    return o(e, [{
                        key: "readyState",
                        get: function() {
                            return this._socket ? this._socket.readyState : -1
                        },
                        set: function(e) {}
                    }, {
                        key: "connecting",
                        get: function() {
                            return 0 === this.readyState
                        },
                        set: function(e) {}
                    }, {
                        key: "connected",
                        get: function() {
                            return 1 === this.readyState
                        },
                        set: function(e) {}
                    }, {
                        key: "closing",
                        get: function() {
                            return 2 === this.readyState
                        },
                        set: function(e) {}
                    }, {
                        key: "closed",
                        get: function() {
                            return 3 === this.readyState
                        },
                        set: function(e) {}
                    }, {
                        key: "open",
                        value: function() {
                            this._socketCreate()
                        }
                    }, {
                        key: "close",
                        value: function() {
                            this._socketClose()
                        }
                    }, {
                        key: "send",
                        value: function(e, t, r) {
                            if (!t || "string" !== typeof t) throw new Error("Missing or invalid topic field");
                            this._socketSend({
                                topic: t,
                                type: "pub",
                                payload: e,
                                silent: !!r
                            })
                        }
                    }, {
                        key: "subscribe",
                        value: function(e) {
                            this._socketSend({
                                topic: e,
                                type: "sub",
                                payload: "",
                                silent: !0
                            })
                        }
                    }, {
                        key: "on",
                        value: function(e, t) {
                            this._events.push({
                                event: e,
                                callback: t
                            })
                        }
                    }, {
                        key: "_socketCreate",
                        value: function() {
                            var e = this;
                            if (!this._nextSocket) {
                                var t = function(e, t, r) {
                                    var n, i, o = (e.startsWith("https") ? e.replace("https", "wss") : e.startsWith("http") ? e.replace("http", "ws") : e).split("?"),
                                        a = s.isBrowser() ? {
                                            protocol: t,
                                            version: r,
                                            env: "browser",
                                            host: (null === (n = s.getLocation()) || void 0 === n ? void 0 : n.host) || ""
                                        } : {
                                            protocol: t,
                                            version: r,
                                            env: (null === (i = s.detectEnv()) || void 0 === i ? void 0 : i.name) || ""
                                        },
                                        u = s.appendToQueryString(s.getQueryString(o[1] || ""), a);
                                    return o[0] + "?" + u
                                }(this._url, this._protocol, this._version);
                                if (this._nextSocket = new c(t), !this._nextSocket) throw new Error("Failed to create socket");
                                this._nextSocket.onmessage = function(t) {
                                    return e._socketReceive(t)
                                }, this._nextSocket.onopen = function() {
                                    return e._socketOpen()
                                }, this._nextSocket.onerror = function(t) {
                                    return e._socketError(t)
                                }, this._nextSocket.onclose = function() {
                                    e._nextSocket = null, e._socketCreate()
                                }
                            }
                        }
                    }, {
                        key: "_socketOpen",
                        value: function() {
                            this._socketClose(), this._socket = this._nextSocket, this._nextSocket = null, this._queueSubscriptions(), this._pushQueue()
                        }
                    }, {
                        key: "_socketClose",
                        value: function() {
                            this._socket && (this._socket.onclose = function() {}, this._socket.close())
                        }
                    }, {
                        key: "_socketSend",
                        value: function(e) {
                            var t = JSON.stringify(e);
                            this._socket && 1 === this._socket.readyState ? this._socket.send(t) : (this._setToQueue(e), this._socketCreate())
                        }
                    }, {
                        key: "_socketReceive",
                        value: function(e) {
                            return a.__awaiter(this, void 0, void 0, n.mark((function t() {
                                var r, i;
                                return n.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            t.prev = 0, r = JSON.parse(e.data), t.next = 7;
                                            break;
                                        case 4:
                                            return t.prev = 4, t.t0 = t.catch(0), t.abrupt("return");
                                        case 7:
                                            this._socketSend({
                                                topic: r.topic,
                                                type: "ack",
                                                payload: "",
                                                silent: !0
                                            }), this._socket && 1 === this._socket.readyState && (i = this._events.filter((function(e) {
                                                return "message" === e.event
                                            }))) && i.length && i.forEach((function(e) {
                                                return e.callback(r)
                                            }));
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, this, [
                                    [0, 4]
                                ])
                            })))
                        }
                    }, {
                        key: "_socketError",
                        value: function(e) {
                            var t = this._events.filter((function(e) {
                                return "error" === e.event
                            }));
                            t && t.length && t.forEach((function(t) {
                                return t.callback(e)
                            }))
                        }
                    }, {
                        key: "_queueSubscriptions",
                        value: function() {
                            var e = this;
                            this._subscriptions.forEach((function(t) {
                                return e._queue.push({
                                    topic: t,
                                    type: "sub",
                                    payload: "",
                                    silent: !0
                                })
                            })), this._subscriptions = []
                        }
                    }, {
                        key: "_setToQueue",
                        value: function(e) {
                            this._queue.push(e)
                        }
                    }, {
                        key: "_pushQueue",
                        value: function() {
                            var e = this;
                            this._queue.forEach((function(t) {
                                return e._socketSend(t)
                            })), this._queue = []
                        }
                    }]), e
                }();
            t.default = f
        }).call(this, r(67))
    }, function(e, t, r) {
        "use strict";
        var n = r(35),
            i = r(36);
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function() {
            function e() {
                var t = this;
                n(this, e), this._eventEmitters = [], "undefined" !== typeof window && "undefined" !== typeof window.addEventListener && (window.addEventListener("online", (function() {
                    return t.trigger("online")
                })), window.addEventListener("offline", (function() {
                    return t.trigger("offline")
                })))
            }
            return i(e, [{
                key: "on",
                value: function(e, t) {
                    this._eventEmitters.push({
                        event: e,
                        callback: t
                    })
                }
            }, {
                key: "trigger",
                value: function(e) {
                    var t = [];
                    e && (t = this._eventEmitters.filter((function(t) {
                        return t.event === e
                    }))), t.forEach((function(e) {
                        e.callback()
                    }))
                }
            }]), e
        }();
        t.default = o
    }, function(e, t, r) {
        "use strict";
        e.exports = function() {
            throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ERROR_QRCODE_MODAL_USER_CLOSED = t.ERROR_QRCODE_MODAL_NOT_PROVIDED = t.ERROR_INVALID_URI = t.ERROR_INVALID_RESPONSE = t.ERROR_MISSING_REQUIRED = t.ERROR_MISSING_ID = t.ERROR_MISSING_METHOD = t.ERROR_MISSING_ERROR = t.ERROR_MISSING_RESULT = t.ERROR_MISSING_JSON_RPC = t.ERROR_SESSION_REJECTED = t.ERROR_SESSION_DISCONNECTED = t.ERROR_SESSION_CONNECTED = void 0, t.ERROR_SESSION_CONNECTED = "Session currently connected", t.ERROR_SESSION_DISCONNECTED = "Session currently disconnected", t.ERROR_SESSION_REJECTED = "Session Rejected", t.ERROR_MISSING_JSON_RPC = "Missing JSON RPC response", t.ERROR_MISSING_RESULT = 'JSON-RPC success response must include "result" field', t.ERROR_MISSING_ERROR = 'JSON-RPC error response must include "error" field', t.ERROR_MISSING_METHOD = 'JSON RPC request must have valid "method" value', t.ERROR_MISSING_ID = 'JSON RPC request must have valid "id" value', t.ERROR_MISSING_REQUIRED = "Missing one of the required parameters: bridge / uri / session", t.ERROR_INVALID_RESPONSE = "JSON RPC response format is invalid", t.ERROR_INVALID_URI = "URI format is invalid", t.ERROR_QRCODE_MODAL_NOT_PROVIDED = "QRCode Modal not provided", t.ERROR_QRCODE_MODAL_USER_CLOSED = "User close QRCode Modal"
    }, function(e, t, r) {
        "use strict";
        var n = r(35),
            i = r(36);
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(617),
            a = function() {
                function e() {
                    n(this, e), this._eventEmitters = []
                }
                return i(e, [{
                    key: "subscribe",
                    value: function(e) {
                        this._eventEmitters.push(e)
                    }
                }, {
                    key: "trigger",
                    value: function(e) {
                        var t, r = [];
                        (t = o.isJsonRpcRequest(e) ? e.method : o.isJsonRpcResponseSuccess(e) || o.isJsonRpcResponseError(e) ? "response:".concat(e.id) : o.isInternalEvent(e) ? e.event : "") && (r = this._eventEmitters.filter((function(e) {
                            return e.event === t
                        }))), r && r.length || o.isReservedEvent(t) || o.isInternalEvent(t) || (r = this._eventEmitters.filter((function(e) {
                            return "call_request" === e.event
                        }))), r.forEach((function(t) {
                            if (o.isJsonRpcResponseError(e)) {
                                var r = new Error(e.error.message);
                                t.callback(r, null)
                            } else t.callback(null, e)
                        }))
                    }
                }]), e
            }();
        t.default = a
    }, function(e, t, r) {
        "use strict";
        var n = r(35),
            i = r(36);
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = r(617),
            a = function() {
                function e() {
                    n(this, e), this.storageId = "walletconnect"
                }
                return i(e, [{
                    key: "getSession",
                    value: function() {
                        var e = null,
                            t = o.getLocal(this.storageId);
                        return t && o.isWalletConnectSession(t) && (e = t), e
                    }
                }, {
                    key: "setSession",
                    value: function(e) {
                        return o.setLocal(this.storageId, e), e
                    }
                }, {
                    key: "removeSession",
                    value: function() {
                        o.removeLocal(this.storageId)
                    }
                }]), e
            }();
        t.default = a
    }, function(e, t, r) {
        "use strict";
        var n = r(2);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.decrypt = t.encrypt = t.verifyHmac = t.generateKey = void 0;
        var i = r(602),
            o = i.__importStar(r(906)),
            a = i.__importStar(r(613)),
            s = r(617);

        function u(e) {
            return i.__awaiter(this, void 0, void 0, n.mark((function t() {
                var r, i, u;
                return n.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return r = (e || 256) / 8, i = o.randomBytes(r), u = s.convertBufferToArrayBuffer(a.arrayToBuffer(i)), t.abrupt("return", u);
                        case 4:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))
        }

        function c(e, t) {
            return i.__awaiter(this, void 0, void 0, n.mark((function r() {
                var i, s, u, c, f, l, h;
                return n.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            return i = a.hexToArray(e.data), s = a.hexToArray(e.iv), u = a.hexToArray(e.hmac), c = a.arrayToHex(u, !1), f = a.concatArrays(i, s), r.next = 7, o.hmacSha256Sign(t, f);
                        case 7:
                            if (l = r.sent, h = a.arrayToHex(l, !1), a.removeHexPrefix(c) !== a.removeHexPrefix(h)) {
                                r.next = 11;
                                break
                            }
                            return r.abrupt("return", !0);
                        case 11:
                            return r.abrupt("return", !1);
                        case 12:
                        case "end":
                            return r.stop()
                    }
                }), r)
            })))
        }
        t.generateKey = u, t.verifyHmac = c, t.encrypt = function(e, t, r) {
            return i.__awaiter(this, void 0, void 0, n.mark((function i() {
                var c, f, l, h, d, p, v, g, _, m, y;
                return n.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (c = a.bufferToArray(s.convertArrayBufferToBuffer(t)), n.t0 = r, n.t0) {
                                n.next = 6;
                                break
                            }
                            return n.next = 5, u(128);
                        case 5:
                            n.t0 = n.sent;
                        case 6:
                            return f = n.t0, l = a.bufferToArray(s.convertArrayBufferToBuffer(f)), h = a.arrayToHex(l, !1), d = JSON.stringify(e), p = a.utf8ToArray(d), n.next = 13, o.aesCbcEncrypt(l, c, p);
                        case 13:
                            return v = n.sent, g = a.arrayToHex(v, !1), _ = a.concatArrays(v, l), n.next = 18, o.hmacSha256Sign(c, _);
                        case 18:
                            return m = n.sent, y = a.arrayToHex(m, !1), n.abrupt("return", {
                                data: g,
                                hmac: y,
                                iv: h
                            });
                        case 21:
                        case "end":
                            return n.stop()
                    }
                }), i)
            })))
        }, t.decrypt = function(e, t) {
            return i.__awaiter(this, void 0, void 0, n.mark((function r() {
                var i, u, f, l, h, d;
                return n.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            if (i = a.bufferToArray(s.convertArrayBufferToBuffer(t))) {
                                r.next = 3;
                                break
                            }
                            throw new Error("Missing key: required for decryption");
                        case 3:
                            return r.next = 5, c(e, i);
                        case 5:
                            if (r.sent) {
                                r.next = 8;
                                break
                            }
                            return r.abrupt("return", null);
                        case 8:
                            return u = a.hexToArray(e.data), f = a.hexToArray(e.iv), r.next = 12, o.aesCbcDecrypt(f, i, u);
                        case 12:
                            l = r.sent, h = a.arrayToUtf8(l), r.prev = 14, d = JSON.parse(h), r.next = 21;
                            break;
                        case 18:
                            return r.prev = 18, r.t0 = r.catch(14), r.abrupt("return", null);
                        case 21:
                            return r.abrupt("return", d);
                        case 22:
                        case "end":
                            return r.stop()
                    }
                }), r, null, [
                    [14, 18]
                ])
            })))
        }
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }),
            i = this && this.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), i(r(907), t), i(r(614), t), i(r(991), t), i(r(994), t), i(r(996), t)
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }),
            i = this && this.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), i(r(908), t), i(r(990), t)
    }, function(e, t, r) {
        "use strict";
        var n = r(2),
            i = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function s(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.aesCbcDecrypt = t.aesCbcEncrypt = void 0;
        var o = r(614);
        t.aesCbcEncrypt = function(e, t, r) {
            return i(this, void 0, void 0, n.mark((function i() {
                var a;
                return n.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (!o.isBrowser()) {
                                n.next = 6;
                                break
                            }
                            return n.next = 3, o.browserAesEncrypt(e, t, r);
                        case 3:
                            a = n.sent, n.next = 7;
                            break;
                        case 6:
                            a = o.isNode() ? o.nodeAesEncrypt(e, t, r) : o.fallbackAesEncrypt(e, t, r);
                        case 7:
                            return n.abrupt("return", a);
                        case 8:
                        case "end":
                            return n.stop()
                    }
                }), i)
            })))
        }, t.aesCbcDecrypt = function(e, t, r) {
            return i(this, void 0, void 0, n.mark((function i() {
                var a;
                return n.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (!o.isBrowser()) {
                                n.next = 6;
                                break
                            }
                            return n.next = 3, o.browserAesDecrypt(e, t, r);
                        case 3:
                            a = n.sent, n.next = 7;
                            break;
                        case 6:
                            a = o.isNode() ? o.nodeAesDecrypt(e, t, r) : o.fallbackAesDecrypt(e, t, r);
                        case 7:
                            return n.abrupt("return", a);
                        case 8:
                        case "end":
                            return n.stop()
                    }
                }), i)
            })))
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(2),
                i = this && this.__awaiter || function(e, t, r, n) {
                    return new(r || (r = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                u(n.next(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function s(e) {
                            try {
                                u(n.throw(e))
                            } catch (t) {
                                o(t)
                            }
                        }

                        function u(e) {
                            var t;
                            e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                                e(t)
                            }))).then(a, s)
                        }
                        u((n = n.apply(e, t || [])).next())
                    }))
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.browserSha512 = t.browserSha256 = t.browserHmacSha512Sign = t.browserHmacSha256Sign = t.browserAesDecrypt = t.browserAesEncrypt = t.browserImportKey = t.browserExportKey = t.getOps = t.getAlgo = t.getSubtleCrypto = t.getBrowerCrypto = void 0;
            var o = r(665);

            function a() {
                return (null === e || void 0 === e ? void 0 : e.crypto) || (null === e || void 0 === e ? void 0 : e.msCrypto) || {}
            }

            function s() {
                var e = a();
                return e.subtle || e.webkitSubtle
            }

            function u(e) {
                return e === o.AES_BROWSER_ALGO ? {
                    length: o.AES_LENGTH,
                    name: o.AES_BROWSER_ALGO
                } : {
                    hash: {
                        name: o.HMAC_BROWSER_ALGO
                    },
                    name: o.HMAC_BROWSER
                }
            }

            function c(e) {
                return e === o.AES_BROWSER_ALGO ? [o.ENCRYPT_OP, o.DECRYPT_OP] : [o.SIGN_OP, o.VERIFY_OP]
            }

            function f(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.AES_BROWSER_ALGO;
                return i(this, void 0, void 0, n.mark((function r() {
                    return n.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return r.abrupt("return", s().importKey("raw", e, u(t), !0, c(t)));
                            case 1:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })))
            }
            t.getBrowerCrypto = a, t.getSubtleCrypto = s, t.getAlgo = u, t.getOps = c, t.browserExportKey = function(e) {
                return arguments.length > 1 && void 0 !== arguments[1] || o.AES_BROWSER_ALGO, i(this, void 0, void 0, n.mark((function t() {
                    var r;
                    return n.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = s(), t.t0 = Uint8Array, t.next = 4, r.exportKey("raw", e);
                            case 4:
                                return t.t1 = t.sent, t.abrupt("return", new t.t0(t.t1));
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))
            }, t.browserImportKey = f, t.browserAesEncrypt = function(e, t, r) {
                return i(this, void 0, void 0, n.mark((function i() {
                    var a, u, c;
                    return n.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return a = s(), n.next = 3, f(t, o.AES_BROWSER_ALGO);
                            case 3:
                                return u = n.sent, n.next = 6, a.encrypt({
                                    iv: e,
                                    name: o.AES_BROWSER_ALGO
                                }, u, r);
                            case 6:
                                return c = n.sent, n.abrupt("return", new Uint8Array(c));
                            case 8:
                            case "end":
                                return n.stop()
                        }
                    }), i)
                })))
            }, t.browserAesDecrypt = function(e, t, r) {
                return i(this, void 0, void 0, n.mark((function i() {
                    var a, u, c;
                    return n.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return a = s(), n.next = 3, f(t, o.AES_BROWSER_ALGO);
                            case 3:
                                return u = n.sent, n.next = 6, a.decrypt({
                                    iv: e,
                                    name: o.AES_BROWSER_ALGO
                                }, u, r);
                            case 6:
                                return c = n.sent, n.abrupt("return", new Uint8Array(c));
                            case 8:
                            case "end":
                                return n.stop()
                        }
                    }), i)
                })))
            }, t.browserHmacSha256Sign = function(e, t) {
                return i(this, void 0, void 0, n.mark((function r() {
                    var i, a, u;
                    return n.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return i = s(), r.next = 3, f(e, o.HMAC_BROWSER);
                            case 3:
                                return a = r.sent, r.next = 6, i.sign({
                                    length: o.HMAC_LENGTH,
                                    name: o.HMAC_BROWSER
                                }, a, t);
                            case 6:
                                return u = r.sent, r.abrupt("return", new Uint8Array(u));
                            case 8:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })))
            }, t.browserHmacSha512Sign = function(e, t) {
                return i(this, void 0, void 0, n.mark((function r() {
                    var i, a, u;
                    return n.wrap((function(r) {
                        for (;;) switch (r.prev = r.next) {
                            case 0:
                                return i = s(), r.next = 3, f(e, o.HMAC_BROWSER);
                            case 3:
                                return a = r.sent, r.next = 6, i.sign({
                                    length: o.LENGTH_512,
                                    name: o.HMAC_BROWSER
                                }, a, t);
                            case 6:
                                return u = r.sent, r.abrupt("return", new Uint8Array(u));
                            case 8:
                            case "end":
                                return r.stop()
                        }
                    }), r)
                })))
            }, t.browserSha256 = function(e) {
                return i(this, void 0, void 0, n.mark((function t() {
                    var r, i;
                    return n.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = s(), t.next = 3, r.digest({
                                    name: o.SHA256_BROWSER_ALGO
                                }, e);
                            case 3:
                                return i = t.sent, t.abrupt("return", new Uint8Array(i));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))
            }, t.browserSha512 = function(e) {
                return i(this, void 0, void 0, n.mark((function t() {
                    var r, i;
                    return n.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return r = s(), t.next = 3, r.digest({
                                    name: o.SHA512_BROWSER_ALGO
                                }, e);
                            case 3:
                                return i = t.sent, t.abrupt("return", new Uint8Array(i));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))
            }
        }).call(this, r(67))
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }),
            i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && n(t, e, r);
                return i(t, e), t
            },
            a = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.fallbackRipemd160 = t.fallbackSha512 = t.fallbackSha256 = t.fallbackHmacSha512Sign = t.fallbackHmacSha256Sign = t.fallbackAesDecrypt = t.fallbackAesEncrypt = void 0;
        var s = a(r(911)),
            u = o(r(83)),
            c = r(613),
            f = r(665),
            l = r(614);
        t.fallbackAesEncrypt = function(e, t, r) {
            var n = new s.default.ModeOfOperation.cbc(t, e),
                i = l.pkcs7.pad(r),
                o = n.encrypt(i);
            return new Uint8Array(o)
        }, t.fallbackAesDecrypt = function(e, t, r) {
            var n = new s.default.ModeOfOperation.cbc(t, e).decrypt(r),
                i = new Uint8Array(n);
            return l.pkcs7.unpad(i)
        }, t.fallbackHmacSha256Sign = function(e, t) {
            var r = u.hmac(u[f.SHA256_NODE_ALGO], e).update(t).digest(f.HEX_ENC);
            return c.hexToArray(r)
        }, t.fallbackHmacSha512Sign = function(e, t) {
            var r = u.hmac(u[f.SHA512_NODE_ALGO], e).update(t).digest(f.HEX_ENC);
            return c.hexToArray(r)
        }, t.fallbackSha256 = function(e) {
            var t = u.sha256().update(e).digest(f.HEX_ENC);
            return c.hexToArray(t)
        }, t.fallbackSha512 = function(e) {
            var t = u.sha512().update(e).digest(f.HEX_ENC);
            return c.hexToArray(t)
        }, t.fallbackRipemd160 = function(e) {
            var t = u.ripemd160().update(e).digest(f.HEX_ENC);
            return c.hexToArray(t)
        }
    }, function(e, t, r) {
        ! function(t) {
            "use strict";

            function r(e) {
                return parseInt(e) === e
            }

            function n(e) {
                if (!r(e.length)) return !1;
                for (var t = 0; t < e.length; t++)
                    if (!r(e[t]) || e[t] < 0 || e[t] > 255) return !1;
                return !0
            }

            function i(e, t) {
                if (e.buffer && "Uint8Array" === e.name) return t && (e = e.slice ? e.slice() : Array.prototype.slice.call(e)), e;
                if (Array.isArray(e)) {
                    if (!n(e)) throw new Error("Array contains invalid value: " + e);
                    return new Uint8Array(e)
                }
                if (r(e.length) && n(e)) return new Uint8Array(e);
                throw new Error("unsupported array-like object")
            }

            function o(e) {
                return new Uint8Array(e)
            }

            function a(e, t, r, n, i) {
                null == n && null == i || (e = e.slice ? e.slice(n, i) : Array.prototype.slice.call(e, n, i)), t.set(e, r)
            }
            var s = {
                    toBytes: function(e) {
                        var t = [],
                            r = 0;
                        for (e = encodeURI(e); r < e.length;) {
                            var n = e.charCodeAt(r++);
                            37 === n ? (t.push(parseInt(e.substr(r, 2), 16)), r += 2) : t.push(n)
                        }
                        return i(t)
                    },
                    fromBytes: function(e) {
                        for (var t = [], r = 0; r < e.length;) {
                            var n = e[r];
                            n < 128 ? (t.push(String.fromCharCode(n)), r++) : n > 191 && n < 224 ? (t.push(String.fromCharCode((31 & n) << 6 | 63 & e[r + 1])), r += 2) : (t.push(String.fromCharCode((15 & n) << 12 | (63 & e[r + 1]) << 6 | 63 & e[r + 2])), r += 3)
                        }
                        return t.join("")
                    }
                },
                u = function() {
                    var e = "0123456789abcdef";
                    return {
                        toBytes: function(e) {
                            for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
                            return t
                        },
                        fromBytes: function(t) {
                            for (var r = [], n = 0; n < t.length; n++) {
                                var i = t[n];
                                r.push(e[(240 & i) >> 4] + e[15 & i])
                            }
                            return r.join("")
                        }
                    }
                }(),
                c = {
                    16: 10,
                    24: 12,
                    32: 14
                },
                f = [1, 2, 4, 8, 16, 32, 64, 128, 27, 54, 108, 216, 171, 77, 154, 47, 94, 188, 99, 198, 151, 53, 106, 212, 179, 125, 250, 239, 197, 145],
                l = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
                h = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94, 21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234, 151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125],
                d = [3328402341, 4168907908, 4000806809, 4135287693, 4294111757, 3597364157, 3731845041, 2445657428, 1613770832, 33620227, 3462883241, 1445669757, 3892248089, 3050821474, 1303096294, 3967186586, 2412431941, 528646813, 2311702848, 4202528135, 4026202645, 2992200171, 2387036105, 4226871307, 1101901292, 3017069671, 1604494077, 1169141738, 597466303, 1403299063, 3832705686, 2613100635, 1974974402, 3791519004, 1033081774, 1277568618, 1815492186, 2118074177, 4126668546, 2211236943, 1748251740, 1369810420, 3521504564, 4193382664, 3799085459, 2883115123, 1647391059, 706024767, 134480908, 2512897874, 1176707941, 2646852446, 806885416, 932615841, 168101135, 798661301, 235341577, 605164086, 461406363, 3756188221, 3454790438, 1311188841, 2142417613, 3933566367, 302582043, 495158174, 1479289972, 874125870, 907746093, 3698224818, 3025820398, 1537253627, 2756858614, 1983593293, 3084310113, 2108928974, 1378429307, 3722699582, 1580150641, 327451799, 2790478837, 3117535592, 0, 3253595436, 1075847264, 3825007647, 2041688520, 3059440621, 3563743934, 2378943302, 1740553945, 1916352843, 2487896798, 2555137236, 2958579944, 2244988746, 3151024235, 3320835882, 1336584933, 3992714006, 2252555205, 2588757463, 1714631509, 293963156, 2319795663, 3925473552, 67240454, 4269768577, 2689618160, 2017213508, 631218106, 1269344483, 2723238387, 1571005438, 2151694528, 93294474, 1066570413, 563977660, 1882732616, 4059428100, 1673313503, 2008463041, 2950355573, 1109467491, 537923632, 3858759450, 4260623118, 3218264685, 2177748300, 403442708, 638784309, 3287084079, 3193921505, 899127202, 2286175436, 773265209, 2479146071, 1437050866, 4236148354, 2050833735, 3362022572, 3126681063, 840505643, 3866325909, 3227541664, 427917720, 2655997905, 2749160575, 1143087718, 1412049534, 999329963, 193497219, 2353415882, 3354324521, 1807268051, 672404540, 2816401017, 3160301282, 369822493, 2916866934, 3688947771, 1681011286, 1949973070, 336202270, 2454276571, 201721354, 1210328172, 3093060836, 2680341085, 3184776046, 1135389935, 3294782118, 965841320, 831886756, 3554993207, 4068047243, 3588745010, 2345191491, 1849112409, 3664604599, 26054028, 2983581028, 2622377682, 1235855840, 3630984372, 2891339514, 4092916743, 3488279077, 3395642799, 4101667470, 1202630377, 268961816, 1874508501, 4034427016, 1243948399, 1546530418, 941366308, 1470539505, 1941222599, 2546386513, 3421038627, 2715671932, 3899946140, 1042226977, 2521517021, 1639824860, 227249030, 260737669, 3765465232, 2084453954, 1907733956, 3429263018, 2420656344, 100860677, 4160157185, 470683154, 3261161891, 1781871967, 2924959737, 1773779408, 394692241, 2579611992, 974986535, 664706745, 3655459128, 3958962195, 731420851, 571543859, 3530123707, 2849626480, 126783113, 865375399, 765172662, 1008606754, 361203602, 3387549984, 2278477385, 2857719295, 1344809080, 2782912378, 59542671, 1503764984, 160008576, 437062935, 1707065306, 3622233649, 2218934982, 3496503480, 2185314755, 697932208, 1512910199, 504303377, 2075177163, 2824099068, 1841019862, 739644986],
                p = [2781242211, 2230877308, 2582542199, 2381740923, 234877682, 3184946027, 2984144751, 1418839493, 1348481072, 50462977, 2848876391, 2102799147, 434634494, 1656084439, 3863849899, 2599188086, 1167051466, 2636087938, 1082771913, 2281340285, 368048890, 3954334041, 3381544775, 201060592, 3963727277, 1739838676, 4250903202, 3930435503, 3206782108, 4149453988, 2531553906, 1536934080, 3262494647, 484572669, 2923271059, 1783375398, 1517041206, 1098792767, 49674231, 1334037708, 1550332980, 4098991525, 886171109, 150598129, 2481090929, 1940642008, 1398944049, 1059722517, 201851908, 1385547719, 1699095331, 1587397571, 674240536, 2704774806, 252314885, 3039795866, 151914247, 908333586, 2602270848, 1038082786, 651029483, 1766729511, 3447698098, 2682942837, 454166793, 2652734339, 1951935532, 775166490, 758520603, 3000790638, 4004797018, 4217086112, 4137964114, 1299594043, 1639438038, 3464344499, 2068982057, 1054729187, 1901997871, 2534638724, 4121318227, 1757008337, 0, 750906861, 1614815264, 535035132, 3363418545, 3988151131, 3201591914, 1183697867, 3647454910, 1265776953, 3734260298, 3566750796, 3903871064, 1250283471, 1807470800, 717615087, 3847203498, 384695291, 3313910595, 3617213773, 1432761139, 2484176261, 3481945413, 283769337, 100925954, 2180939647, 4037038160, 1148730428, 3123027871, 3813386408, 4087501137, 4267549603, 3229630528, 2315620239, 2906624658, 3156319645, 1215313976, 82966005, 3747855548, 3245848246, 1974459098, 1665278241, 807407632, 451280895, 251524083, 1841287890, 1283575245, 337120268, 891687699, 801369324, 3787349855, 2721421207, 3431482436, 959321879, 1469301956, 4065699751, 2197585534, 1199193405, 2898814052, 3887750493, 724703513, 2514908019, 2696962144, 2551808385, 3516813135, 2141445340, 1715741218, 2119445034, 2872807568, 2198571144, 3398190662, 700968686, 3547052216, 1009259540, 2041044702, 3803995742, 487983883, 1991105499, 1004265696, 1449407026, 1316239930, 504629770, 3683797321, 168560134, 1816667172, 3837287516, 1570751170, 1857934291, 4014189740, 2797888098, 2822345105, 2754712981, 936633572, 2347923833, 852879335, 1133234376, 1500395319, 3084545389, 2348912013, 1689376213, 3533459022, 3762923945, 3034082412, 4205598294, 133428468, 634383082, 2949277029, 2398386810, 3913789102, 403703816, 3580869306, 2297460856, 1867130149, 1918643758, 607656988, 4049053350, 3346248884, 1368901318, 600565992, 2090982877, 2632479860, 557719327, 3717614411, 3697393085, 2249034635, 2232388234, 2430627952, 1115438654, 3295786421, 2865522278, 3633334344, 84280067, 33027830, 303828494, 2747425121, 1600795957, 4188952407, 3496589753, 2434238086, 1486471617, 658119965, 3106381470, 953803233, 334231800, 3005978776, 857870609, 3151128937, 1890179545, 2298973838, 2805175444, 3056442267, 574365214, 2450884487, 550103529, 1233637070, 4289353045, 2018519080, 2057691103, 2399374476, 4166623649, 2148108681, 387583245, 3664101311, 836232934, 3330556482, 3100665960, 3280093505, 2955516313, 2002398509, 287182607, 3413881008, 4238890068, 3597515707, 975967766],
                v = [1671808611, 2089089148, 2006576759, 2072901243, 4061003762, 1807603307, 1873927791, 3310653893, 810573872, 16974337, 1739181671, 729634347, 4263110654, 3613570519, 2883997099, 1989864566, 3393556426, 2191335298, 3376449993, 2106063485, 4195741690, 1508618841, 1204391495, 4027317232, 2917941677, 3563566036, 2734514082, 2951366063, 2629772188, 2767672228, 1922491506, 3227229120, 3082974647, 4246528509, 2477669779, 644500518, 911895606, 1061256767, 4144166391, 3427763148, 878471220, 2784252325, 3845444069, 4043897329, 1905517169, 3631459288, 827548209, 356461077, 67897348, 3344078279, 593839651, 3277757891, 405286936, 2527147926, 84871685, 2595565466, 118033927, 305538066, 2157648768, 3795705826, 3945188843, 661212711, 2999812018, 1973414517, 152769033, 2208177539, 745822252, 439235610, 455947803, 1857215598, 1525593178, 2700827552, 1391895634, 994932283, 3596728278, 3016654259, 695947817, 3812548067, 795958831, 2224493444, 1408607827, 3513301457, 0, 3979133421, 543178784, 4229948412, 2982705585, 1542305371, 1790891114, 3410398667, 3201918910, 961245753, 1256100938, 1289001036, 1491644504, 3477767631, 3496721360, 4012557807, 2867154858, 4212583931, 1137018435, 1305975373, 861234739, 2241073541, 1171229253, 4178635257, 33948674, 2139225727, 1357946960, 1011120188, 2679776671, 2833468328, 1374921297, 2751356323, 1086357568, 2408187279, 2460827538, 2646352285, 944271416, 4110742005, 3168756668, 3066132406, 3665145818, 560153121, 271589392, 4279952895, 4077846003, 3530407890, 3444343245, 202643468, 322250259, 3962553324, 1608629855, 2543990167, 1154254916, 389623319, 3294073796, 2817676711, 2122513534, 1028094525, 1689045092, 1575467613, 422261273, 1939203699, 1621147744, 2174228865, 1339137615, 3699352540, 577127458, 712922154, 2427141008, 2290289544, 1187679302, 3995715566, 3100863416, 339486740, 3732514782, 1591917662, 186455563, 3681988059, 3762019296, 844522546, 978220090, 169743370, 1239126601, 101321734, 611076132, 1558493276, 3260915650, 3547250131, 2901361580, 1655096418, 2443721105, 2510565781, 3828863972, 2039214713, 3878868455, 3359869896, 928607799, 1840765549, 2374762893, 3580146133, 1322425422, 2850048425, 1823791212, 1459268694, 4094161908, 3928346602, 1706019429, 2056189050, 2934523822, 135794696, 3134549946, 2022240376, 628050469, 779246638, 472135708, 2800834470, 3032970164, 3327236038, 3894660072, 3715932637, 1956440180, 522272287, 1272813131, 3185336765, 2340818315, 2323976074, 1888542832, 1044544574, 3049550261, 1722469478, 1222152264, 50660867, 4127324150, 236067854, 1638122081, 895445557, 1475980887, 3117443513, 2257655686, 3243809217, 489110045, 2662934430, 3778599393, 4162055160, 2561878936, 288563729, 1773916777, 3648039385, 2391345038, 2493985684, 2612407707, 505560094, 2274497927, 3911240169, 3460925390, 1442818645, 678973480, 3749357023, 2358182796, 2717407649, 2306869641, 219617805, 3218761151, 3862026214, 1120306242, 1756942440, 1103331905, 2578459033, 762796589, 252780047, 2966125488, 1425844308, 3151392187, 372911126],
                g = [1667474886, 2088535288, 2004326894, 2071694838, 4075949567, 1802223062, 1869591006, 3318043793, 808472672, 16843522, 1734846926, 724270422, 4278065639, 3621216949, 2880169549, 1987484396, 3402253711, 2189597983, 3385409673, 2105378810, 4210693615, 1499065266, 1195886990, 4042263547, 2913856577, 3570689971, 2728590687, 2947541573, 2627518243, 2762274643, 1920112356, 3233831835, 3082273397, 4261223649, 2475929149, 640051788, 909531756, 1061110142, 4160160501, 3435941763, 875846760, 2779116625, 3857003729, 4059105529, 1903268834, 3638064043, 825316194, 353713962, 67374088, 3351728789, 589522246, 3284360861, 404236336, 2526454071, 84217610, 2593830191, 117901582, 303183396, 2155911963, 3806477791, 3958056653, 656894286, 2998062463, 1970642922, 151591698, 2206440989, 741110872, 437923380, 454765878, 1852748508, 1515908788, 2694904667, 1381168804, 993742198, 3604373943, 3014905469, 690584402, 3823320797, 791638366, 2223281939, 1398011302, 3520161977, 0, 3991743681, 538992704, 4244381667, 2981218425, 1532751286, 1785380564, 3419096717, 3200178535, 960056178, 1246420628, 1280103576, 1482221744, 3486468741, 3503319995, 4025428677, 2863326543, 4227536621, 1128514950, 1296947098, 859002214, 2240123921, 1162203018, 4193849577, 33687044, 2139062782, 1347481760, 1010582648, 2678045221, 2829640523, 1364325282, 2745433693, 1077985408, 2408548869, 2459086143, 2644360225, 943212656, 4126475505, 3166494563, 3065430391, 3671750063, 555836226, 269496352, 4294908645, 4092792573, 3537006015, 3452783745, 202118168, 320025894, 3974901699, 1600119230, 2543297077, 1145359496, 387397934, 3301201811, 2812801621, 2122220284, 1027426170, 1684319432, 1566435258, 421079858, 1936954854, 1616945344, 2172753945, 1330631070, 3705438115, 572679748, 707427924, 2425400123, 2290647819, 1179044492, 4008585671, 3099120491, 336870440, 3739122087, 1583276732, 185277718, 3688593069, 3772791771, 842159716, 976899700, 168435220, 1229577106, 101059084, 606366792, 1549591736, 3267517855, 3553849021, 2897014595, 1650632388, 2442242105, 2509612081, 3840161747, 2038008818, 3890688725, 3368567691, 926374254, 1835907034, 2374863873, 3587531953, 1313788572, 2846482505, 1819063512, 1448540844, 4109633523, 3941213647, 1701162954, 2054852340, 2930698567, 134748176, 3132806511, 2021165296, 623210314, 774795868, 471606328, 2795958615, 3031746419, 3334885783, 3907527627, 3722280097, 1953799400, 522133822, 1263263126, 3183336545, 2341176845, 2324333839, 1886425312, 1044267644, 3048588401, 1718004428, 1212733584, 50529542, 4143317495, 235803164, 1633788866, 892690282, 1465383342, 3115962473, 2256965911, 3250673817, 488449850, 2661202215, 3789633753, 4177007595, 2560144171, 286339874, 1768537042, 3654906025, 2391705863, 2492770099, 2610673197, 505291324, 2273808917, 3924369609, 3469625735, 1431699370, 673740880, 3755965093, 2358021891, 2711746649, 2307489801, 218961690, 3217021541, 3873845719, 1111672452, 1751693520, 1094828930, 2576986153, 757954394, 252645662, 2964376443, 1414855848, 3149649517, 370555436],
                _ = [1374988112, 2118214995, 437757123, 975658646, 1001089995, 530400753, 2902087851, 1273168787, 540080725, 2910219766, 2295101073, 4110568485, 1340463100, 3307916247, 641025152, 3043140495, 3736164937, 632953703, 1172967064, 1576976609, 3274667266, 2169303058, 2370213795, 1809054150, 59727847, 361929877, 3211623147, 2505202138, 3569255213, 1484005843, 1239443753, 2395588676, 1975683434, 4102977912, 2572697195, 666464733, 3202437046, 4035489047, 3374361702, 2110667444, 1675577880, 3843699074, 2538681184, 1649639237, 2976151520, 3144396420, 4269907996, 4178062228, 1883793496, 2403728665, 2497604743, 1383856311, 2876494627, 1917518562, 3810496343, 1716890410, 3001755655, 800440835, 2261089178, 3543599269, 807962610, 599762354, 33778362, 3977675356, 2328828971, 2809771154, 4077384432, 1315562145, 1708848333, 101039829, 3509871135, 3299278474, 875451293, 2733856160, 92987698, 2767645557, 193195065, 1080094634, 1584504582, 3178106961, 1042385657, 2531067453, 3711829422, 1306967366, 2438237621, 1908694277, 67556463, 1615861247, 429456164, 3602770327, 2302690252, 1742315127, 2968011453, 126454664, 3877198648, 2043211483, 2709260871, 2084704233, 4169408201, 0, 159417987, 841739592, 504459436, 1817866830, 4245618683, 260388950, 1034867998, 908933415, 168810852, 1750902305, 2606453969, 607530554, 202008497, 2472011535, 3035535058, 463180190, 2160117071, 1641816226, 1517767529, 470948374, 3801332234, 3231722213, 1008918595, 303765277, 235474187, 4069246893, 766945465, 337553864, 1475418501, 2943682380, 4003061179, 2743034109, 4144047775, 1551037884, 1147550661, 1543208500, 2336434550, 3408119516, 3069049960, 3102011747, 3610369226, 1113818384, 328671808, 2227573024, 2236228733, 3535486456, 2935566865, 3341394285, 496906059, 3702665459, 226906860, 2009195472, 733156972, 2842737049, 294930682, 1206477858, 2835123396, 2700099354, 1451044056, 573804783, 2269728455, 3644379585, 2362090238, 2564033334, 2801107407, 2776292904, 3669462566, 1068351396, 742039012, 1350078989, 1784663195, 1417561698, 4136440770, 2430122216, 775550814, 2193862645, 2673705150, 1775276924, 1876241833, 3475313331, 3366754619, 270040487, 3902563182, 3678124923, 3441850377, 1851332852, 3969562369, 2203032232, 3868552805, 2868897406, 566021896, 4011190502, 3135740889, 1248802510, 3936291284, 699432150, 832877231, 708780849, 3332740144, 899835584, 1951317047, 4236429990, 3767586992, 866637845, 4043610186, 1106041591, 2144161806, 395441711, 1984812685, 1139781709, 3433712980, 3835036895, 2664543715, 1282050075, 3240894392, 1181045119, 2640243204, 25965917, 4203181171, 4211818798, 3009879386, 2463879762, 3910161971, 1842759443, 2597806476, 933301370, 1509430414, 3943906441, 3467192302, 3076639029, 3776767469, 2051518780, 2631065433, 1441952575, 404016761, 1942435775, 1408749034, 1610459739, 3745345300, 2017778566, 3400528769, 3110650942, 941896748, 3265478751, 371049330, 3168937228, 675039627, 4279080257, 967311729, 135050206, 3635733660, 1683407248, 2076935265, 3576870512, 1215061108, 3501741890],
                m = [1347548327, 1400783205, 3273267108, 2520393566, 3409685355, 4045380933, 2880240216, 2471224067, 1428173050, 4138563181, 2441661558, 636813900, 4233094615, 3620022987, 2149987652, 2411029155, 1239331162, 1730525723, 2554718734, 3781033664, 46346101, 310463728, 2743944855, 3328955385, 3875770207, 2501218972, 3955191162, 3667219033, 768917123, 3545789473, 692707433, 1150208456, 1786102409, 2029293177, 1805211710, 3710368113, 3065962831, 401639597, 1724457132, 3028143674, 409198410, 2196052529, 1620529459, 1164071807, 3769721975, 2226875310, 486441376, 2499348523, 1483753576, 428819965, 2274680428, 3075636216, 598438867, 3799141122, 1474502543, 711349675, 129166120, 53458370, 2592523643, 2782082824, 4063242375, 2988687269, 3120694122, 1559041666, 730517276, 2460449204, 4042459122, 2706270690, 3446004468, 3573941694, 533804130, 2328143614, 2637442643, 2695033685, 839224033, 1973745387, 957055980, 2856345839, 106852767, 1371368976, 4181598602, 1033297158, 2933734917, 1179510461, 3046200461, 91341917, 1862534868, 4284502037, 605657339, 2547432937, 3431546947, 2003294622, 3182487618, 2282195339, 954669403, 3682191598, 1201765386, 3917234703, 3388507166, 0, 2198438022, 1211247597, 2887651696, 1315723890, 4227665663, 1443857720, 507358933, 657861945, 1678381017, 560487590, 3516619604, 975451694, 2970356327, 261314535, 3535072918, 2652609425, 1333838021, 2724322336, 1767536459, 370938394, 182621114, 3854606378, 1128014560, 487725847, 185469197, 2918353863, 3106780840, 3356761769, 2237133081, 1286567175, 3152976349, 4255350624, 2683765030, 3160175349, 3309594171, 878443390, 1988838185, 3704300486, 1756818940, 1673061617, 3403100636, 272786309, 1075025698, 545572369, 2105887268, 4174560061, 296679730, 1841768865, 1260232239, 4091327024, 3960309330, 3497509347, 1814803222, 2578018489, 4195456072, 575138148, 3299409036, 446754879, 3629546796, 4011996048, 3347532110, 3252238545, 4270639778, 915985419, 3483825537, 681933534, 651868046, 2755636671, 3828103837, 223377554, 2607439820, 1649704518, 3270937875, 3901806776, 1580087799, 4118987695, 3198115200, 2087309459, 2842678573, 3016697106, 1003007129, 2802849917, 1860738147, 2077965243, 164439672, 4100872472, 32283319, 2827177882, 1709610350, 2125135846, 136428751, 3874428392, 3652904859, 3460984630, 3572145929, 3593056380, 2939266226, 824852259, 818324884, 3224740454, 930369212, 2801566410, 2967507152, 355706840, 1257309336, 4148292826, 243256656, 790073846, 2373340630, 1296297904, 1422699085, 3756299780, 3818836405, 457992840, 3099667487, 2135319889, 77422314, 1560382517, 1945798516, 788204353, 1521706781, 1385356242, 870912086, 325965383, 2358957921, 2050466060, 2388260884, 2313884476, 4006521127, 901210569, 3990953189, 1014646705, 1503449823, 1062597235, 2031621326, 3212035895, 3931371469, 1533017514, 350174575, 2256028891, 2177544179, 1052338372, 741876788, 1606591296, 1914052035, 213705253, 2334669897, 1107234197, 1899603969, 3725069491, 2631447780, 2422494913, 1635502980, 1893020342, 1950903388, 1120974935],
                y = [2807058932, 1699970625, 2764249623, 1586903591, 1808481195, 1173430173, 1487645946, 59984867, 4199882800, 1844882806, 1989249228, 1277555970, 3623636965, 3419915562, 1149249077, 2744104290, 1514790577, 459744698, 244860394, 3235995134, 1963115311, 4027744588, 2544078150, 4190530515, 1608975247, 2627016082, 2062270317, 1507497298, 2200818878, 567498868, 1764313568, 3359936201, 2305455554, 2037970062, 1047239e3, 1910319033, 1337376481, 2904027272, 2892417312, 984907214, 1243112415, 830661914, 861968209, 2135253587, 2011214180, 2927934315, 2686254721, 731183368, 1750626376, 4246310725, 1820824798, 4172763771, 3542330227, 48394827, 2404901663, 2871682645, 671593195, 3254988725, 2073724613, 145085239, 2280796200, 2779915199, 1790575107, 2187128086, 472615631, 3029510009, 4075877127, 3802222185, 4107101658, 3201631749, 1646252340, 4270507174, 1402811438, 1436590835, 3778151818, 3950355702, 3963161475, 4020912224, 2667994737, 273792366, 2331590177, 104699613, 95345982, 3175501286, 2377486676, 1560637892, 3564045318, 369057872, 4213447064, 3919042237, 1137477952, 2658625497, 1119727848, 2340947849, 1530455833, 4007360968, 172466556, 266959938, 516552836, 0, 2256734592, 3980931627, 1890328081, 1917742170, 4294704398, 945164165, 3575528878, 958871085, 3647212047, 2787207260, 1423022939, 775562294, 1739656202, 3876557655, 2530391278, 2443058075, 3310321856, 547512796, 1265195639, 437656594, 3121275539, 719700128, 3762502690, 387781147, 218828297, 3350065803, 2830708150, 2848461854, 428169201, 122466165, 3720081049, 1627235199, 648017665, 4122762354, 1002783846, 2117360635, 695634755, 3336358691, 4234721005, 4049844452, 3704280881, 2232435299, 574624663, 287343814, 612205898, 1039717051, 840019705, 2708326185, 793451934, 821288114, 1391201670, 3822090177, 376187827, 3113855344, 1224348052, 1679968233, 2361698556, 1058709744, 752375421, 2431590963, 1321699145, 3519142200, 2734591178, 188127444, 2177869557, 3727205754, 2384911031, 3215212461, 2648976442, 2450346104, 3432737375, 1180849278, 331544205, 3102249176, 4150144569, 2952102595, 2159976285, 2474404304, 766078933, 313773861, 2570832044, 2108100632, 1668212892, 3145456443, 2013908262, 418672217, 3070356634, 2594734927, 1852171925, 3867060991, 3473416636, 3907448597, 2614737639, 919489135, 164948639, 2094410160, 2997825956, 590424639, 2486224549, 1723872674, 3157750862, 3399941250, 3501252752, 3625268135, 2555048196, 3673637356, 1343127501, 4130281361, 3599595085, 2957853679, 1297403050, 81781910, 3051593425, 2283490410, 532201772, 1367295589, 3926170974, 895287692, 1953757831, 1093597963, 492483431, 3528626907, 1446242576, 1192455638, 1636604631, 209336225, 344873464, 1015671571, 669961897, 3375740769, 3857572124, 2973530695, 3747192018, 1933530610, 3464042516, 935293895, 3454686199, 2858115069, 1863638845, 3683022916, 4085369519, 3292445032, 875313188, 1080017571, 3279033885, 621591778, 1233856572, 2504130317, 24197544, 3017672716, 3835484340, 3247465558, 2220981195, 3060847922, 1551124588, 1463996600],
                w = [4104605777, 1097159550, 396673818, 660510266, 2875968315, 2638606623, 4200115116, 3808662347, 821712160, 1986918061, 3430322568, 38544885, 3856137295, 718002117, 893681702, 1654886325, 2975484382, 3122358053, 3926825029, 4274053469, 796197571, 1290801793, 1184342925, 3556361835, 2405426947, 2459735317, 1836772287, 1381620373, 3196267988, 1948373848, 3764988233, 3385345166, 3263785589, 2390325492, 1480485785, 3111247143, 3780097726, 2293045232, 548169417, 3459953789, 3746175075, 439452389, 1362321559, 1400849762, 1685577905, 1806599355, 2174754046, 137073913, 1214797936, 1174215055, 3731654548, 2079897426, 1943217067, 1258480242, 529487843, 1437280870, 3945269170, 3049390895, 3313212038, 923313619, 679998e3, 3215307299, 57326082, 377642221, 3474729866, 2041877159, 133361907, 1776460110, 3673476453, 96392454, 878845905, 2801699524, 777231668, 4082475170, 2330014213, 4142626212, 2213296395, 1626319424, 1906247262, 1846563261, 562755902, 3708173718, 1040559837, 3871163981, 1418573201, 3294430577, 114585348, 1343618912, 2566595609, 3186202582, 1078185097, 3651041127, 3896688048, 2307622919, 425408743, 3371096953, 2081048481, 1108339068, 2216610296, 0, 2156299017, 736970802, 292596766, 1517440620, 251657213, 2235061775, 2933202493, 758720310, 265905162, 1554391400, 1532285339, 908999204, 174567692, 1474760595, 4002861748, 2610011675, 3234156416, 3693126241, 2001430874, 303699484, 2478443234, 2687165888, 585122620, 454499602, 151849742, 2345119218, 3064510765, 514443284, 4044981591, 1963412655, 2581445614, 2137062819, 19308535, 1928707164, 1715193156, 4219352155, 1126790795, 600235211, 3992742070, 3841024952, 836553431, 1669664834, 2535604243, 3323011204, 1243905413, 3141400786, 4180808110, 698445255, 2653899549, 2989552604, 2253581325, 3252932727, 3004591147, 1891211689, 2487810577, 3915653703, 4237083816, 4030667424, 2100090966, 865136418, 1229899655, 953270745, 3399679628, 3557504664, 4118925222, 2061379749, 3079546586, 2915017791, 983426092, 2022837584, 1607244650, 2118541908, 2366882550, 3635996816, 972512814, 3283088770, 1568718495, 3499326569, 3576539503, 621982671, 2895723464, 410887952, 2623762152, 1002142683, 645401037, 1494807662, 2595684844, 1335535747, 2507040230, 4293295786, 3167684641, 367585007, 3885750714, 1865862730, 2668221674, 2960971305, 2763173681, 1059270954, 2777952454, 2724642869, 1320957812, 2194319100, 2429595872, 2815956275, 77089521, 3973773121, 3444575871, 2448830231, 1305906550, 4021308739, 2857194700, 2516901860, 3518358430, 1787304780, 740276417, 1699839814, 1592394909, 2352307457, 2272556026, 188821243, 1729977011, 3687994002, 274084841, 3594982253, 3613494426, 2701949495, 4162096729, 322734571, 2837966542, 1640576439, 484830689, 1202797690, 3537852828, 4067639125, 349075736, 3342319475, 4157467219, 4255800159, 1030690015, 1155237496, 2951971274, 1757691577, 607398968, 2738905026, 499347990, 3794078908, 1011452712, 227885567, 2818666809, 213114376, 3034881240, 1455525988, 3414450555, 850817237, 1817998408, 3092726480],
                b = [0, 235474187, 470948374, 303765277, 941896748, 908933415, 607530554, 708780849, 1883793496, 2118214995, 1817866830, 1649639237, 1215061108, 1181045119, 1417561698, 1517767529, 3767586992, 4003061179, 4236429990, 4069246893, 3635733660, 3602770327, 3299278474, 3400528769, 2430122216, 2664543715, 2362090238, 2193862645, 2835123396, 2801107407, 3035535058, 3135740889, 3678124923, 3576870512, 3341394285, 3374361702, 3810496343, 3977675356, 4279080257, 4043610186, 2876494627, 2776292904, 3076639029, 3110650942, 2472011535, 2640243204, 2403728665, 2169303058, 1001089995, 899835584, 666464733, 699432150, 59727847, 226906860, 530400753, 294930682, 1273168787, 1172967064, 1475418501, 1509430414, 1942435775, 2110667444, 1876241833, 1641816226, 2910219766, 2743034109, 2976151520, 3211623147, 2505202138, 2606453969, 2302690252, 2269728455, 3711829422, 3543599269, 3240894392, 3475313331, 3843699074, 3943906441, 4178062228, 4144047775, 1306967366, 1139781709, 1374988112, 1610459739, 1975683434, 2076935265, 1775276924, 1742315127, 1034867998, 866637845, 566021896, 800440835, 92987698, 193195065, 429456164, 395441711, 1984812685, 2017778566, 1784663195, 1683407248, 1315562145, 1080094634, 1383856311, 1551037884, 101039829, 135050206, 437757123, 337553864, 1042385657, 807962610, 573804783, 742039012, 2531067453, 2564033334, 2328828971, 2227573024, 2935566865, 2700099354, 3001755655, 3168937228, 3868552805, 3902563182, 4203181171, 4102977912, 3736164937, 3501741890, 3265478751, 3433712980, 1106041591, 1340463100, 1576976609, 1408749034, 2043211483, 2009195472, 1708848333, 1809054150, 832877231, 1068351396, 766945465, 599762354, 159417987, 126454664, 361929877, 463180190, 2709260871, 2943682380, 3178106961, 3009879386, 2572697195, 2538681184, 2236228733, 2336434550, 3509871135, 3745345300, 3441850377, 3274667266, 3910161971, 3877198648, 4110568485, 4211818798, 2597806476, 2497604743, 2261089178, 2295101073, 2733856160, 2902087851, 3202437046, 2968011453, 3936291284, 3835036895, 4136440770, 4169408201, 3535486456, 3702665459, 3467192302, 3231722213, 2051518780, 1951317047, 1716890410, 1750902305, 1113818384, 1282050075, 1584504582, 1350078989, 168810852, 67556463, 371049330, 404016761, 841739592, 1008918595, 775550814, 540080725, 3969562369, 3801332234, 4035489047, 4269907996, 3569255213, 3669462566, 3366754619, 3332740144, 2631065433, 2463879762, 2160117071, 2395588676, 2767645557, 2868897406, 3102011747, 3069049960, 202008497, 33778362, 270040487, 504459436, 875451293, 975658646, 675039627, 641025152, 2084704233, 1917518562, 1615861247, 1851332852, 1147550661, 1248802510, 1484005843, 1451044056, 933301370, 967311729, 733156972, 632953703, 260388950, 25965917, 328671808, 496906059, 1206477858, 1239443753, 1543208500, 1441952575, 2144161806, 1908694277, 1675577880, 1842759443, 3610369226, 3644379585, 3408119516, 3307916247, 4011190502, 3776767469, 4077384432, 4245618683, 2809771154, 2842737049, 3144396420, 3043140495, 2673705150, 2438237621, 2203032232, 2370213795],
                E = [0, 185469197, 370938394, 487725847, 741876788, 657861945, 975451694, 824852259, 1483753576, 1400783205, 1315723890, 1164071807, 1950903388, 2135319889, 1649704518, 1767536459, 2967507152, 3152976349, 2801566410, 2918353863, 2631447780, 2547432937, 2328143614, 2177544179, 3901806776, 3818836405, 4270639778, 4118987695, 3299409036, 3483825537, 3535072918, 3652904859, 2077965243, 1893020342, 1841768865, 1724457132, 1474502543, 1559041666, 1107234197, 1257309336, 598438867, 681933534, 901210569, 1052338372, 261314535, 77422314, 428819965, 310463728, 3409685355, 3224740454, 3710368113, 3593056380, 3875770207, 3960309330, 4045380933, 4195456072, 2471224067, 2554718734, 2237133081, 2388260884, 3212035895, 3028143674, 2842678573, 2724322336, 4138563181, 4255350624, 3769721975, 3955191162, 3667219033, 3516619604, 3431546947, 3347532110, 2933734917, 2782082824, 3099667487, 3016697106, 2196052529, 2313884476, 2499348523, 2683765030, 1179510461, 1296297904, 1347548327, 1533017514, 1786102409, 1635502980, 2087309459, 2003294622, 507358933, 355706840, 136428751, 53458370, 839224033, 957055980, 605657339, 790073846, 2373340630, 2256028891, 2607439820, 2422494913, 2706270690, 2856345839, 3075636216, 3160175349, 3573941694, 3725069491, 3273267108, 3356761769, 4181598602, 4063242375, 4011996048, 3828103837, 1033297158, 915985419, 730517276, 545572369, 296679730, 446754879, 129166120, 213705253, 1709610350, 1860738147, 1945798516, 2029293177, 1239331162, 1120974935, 1606591296, 1422699085, 4148292826, 4233094615, 3781033664, 3931371469, 3682191598, 3497509347, 3446004468, 3328955385, 2939266226, 2755636671, 3106780840, 2988687269, 2198438022, 2282195339, 2501218972, 2652609425, 1201765386, 1286567175, 1371368976, 1521706781, 1805211710, 1620529459, 2105887268, 1988838185, 533804130, 350174575, 164439672, 46346101, 870912086, 954669403, 636813900, 788204353, 2358957921, 2274680428, 2592523643, 2441661558, 2695033685, 2880240216, 3065962831, 3182487618, 3572145929, 3756299780, 3270937875, 3388507166, 4174560061, 4091327024, 4006521127, 3854606378, 1014646705, 930369212, 711349675, 560487590, 272786309, 457992840, 106852767, 223377554, 1678381017, 1862534868, 1914052035, 2031621326, 1211247597, 1128014560, 1580087799, 1428173050, 32283319, 182621114, 401639597, 486441376, 768917123, 651868046, 1003007129, 818324884, 1503449823, 1385356242, 1333838021, 1150208456, 1973745387, 2125135846, 1673061617, 1756818940, 2970356327, 3120694122, 2802849917, 2887651696, 2637442643, 2520393566, 2334669897, 2149987652, 3917234703, 3799141122, 4284502037, 4100872472, 3309594171, 3460984630, 3545789473, 3629546796, 2050466060, 1899603969, 1814803222, 1730525723, 1443857720, 1560382517, 1075025698, 1260232239, 575138148, 692707433, 878443390, 1062597235, 243256656, 91341917, 409198410, 325965383, 3403100636, 3252238545, 3704300486, 3620022987, 3874428392, 3990953189, 4042459122, 4227665663, 2460449204, 2578018489, 2226875310, 2411029155, 3198115200, 3046200461, 2827177882, 2743944855],
                x = [0, 218828297, 437656594, 387781147, 875313188, 958871085, 775562294, 590424639, 1750626376, 1699970625, 1917742170, 2135253587, 1551124588, 1367295589, 1180849278, 1265195639, 3501252752, 3720081049, 3399941250, 3350065803, 3835484340, 3919042237, 4270507174, 4085369519, 3102249176, 3051593425, 2734591178, 2952102595, 2361698556, 2177869557, 2530391278, 2614737639, 3145456443, 3060847922, 2708326185, 2892417312, 2404901663, 2187128086, 2504130317, 2555048196, 3542330227, 3727205754, 3375740769, 3292445032, 3876557655, 3926170974, 4246310725, 4027744588, 1808481195, 1723872674, 1910319033, 2094410160, 1608975247, 1391201670, 1173430173, 1224348052, 59984867, 244860394, 428169201, 344873464, 935293895, 984907214, 766078933, 547512796, 1844882806, 1627235199, 2011214180, 2062270317, 1507497298, 1423022939, 1137477952, 1321699145, 95345982, 145085239, 532201772, 313773861, 830661914, 1015671571, 731183368, 648017665, 3175501286, 2957853679, 2807058932, 2858115069, 2305455554, 2220981195, 2474404304, 2658625497, 3575528878, 3625268135, 3473416636, 3254988725, 3778151818, 3963161475, 4213447064, 4130281361, 3599595085, 3683022916, 3432737375, 3247465558, 3802222185, 4020912224, 4172763771, 4122762354, 3201631749, 3017672716, 2764249623, 2848461854, 2331590177, 2280796200, 2431590963, 2648976442, 104699613, 188127444, 472615631, 287343814, 840019705, 1058709744, 671593195, 621591778, 1852171925, 1668212892, 1953757831, 2037970062, 1514790577, 1463996600, 1080017571, 1297403050, 3673637356, 3623636965, 3235995134, 3454686199, 4007360968, 3822090177, 4107101658, 4190530515, 2997825956, 3215212461, 2830708150, 2779915199, 2256734592, 2340947849, 2627016082, 2443058075, 172466556, 122466165, 273792366, 492483431, 1047239e3, 861968209, 612205898, 695634755, 1646252340, 1863638845, 2013908262, 1963115311, 1446242576, 1530455833, 1277555970, 1093597963, 1636604631, 1820824798, 2073724613, 1989249228, 1436590835, 1487645946, 1337376481, 1119727848, 164948639, 81781910, 331544205, 516552836, 1039717051, 821288114, 669961897, 719700128, 2973530695, 3157750862, 2871682645, 2787207260, 2232435299, 2283490410, 2667994737, 2450346104, 3647212047, 3564045318, 3279033885, 3464042516, 3980931627, 3762502690, 4150144569, 4199882800, 3070356634, 3121275539, 2904027272, 2686254721, 2200818878, 2384911031, 2570832044, 2486224549, 3747192018, 3528626907, 3310321856, 3359936201, 3950355702, 3867060991, 4049844452, 4234721005, 1739656202, 1790575107, 2108100632, 1890328081, 1402811438, 1586903591, 1233856572, 1149249077, 266959938, 48394827, 369057872, 418672217, 1002783846, 919489135, 567498868, 752375421, 209336225, 24197544, 376187827, 459744698, 945164165, 895287692, 574624663, 793451934, 1679968233, 1764313568, 2117360635, 1933530610, 1343127501, 1560637892, 1243112415, 1192455638, 3704280881, 3519142200, 3336358691, 3419915562, 3907448597, 3857572124, 4075877127, 4294704398, 3029510009, 3113855344, 2927934315, 2744104290, 2159976285, 2377486676, 2594734927, 2544078150],
                k = [0, 151849742, 303699484, 454499602, 607398968, 758720310, 908999204, 1059270954, 1214797936, 1097159550, 1517440620, 1400849762, 1817998408, 1699839814, 2118541908, 2001430874, 2429595872, 2581445614, 2194319100, 2345119218, 3034881240, 3186202582, 2801699524, 2951971274, 3635996816, 3518358430, 3399679628, 3283088770, 4237083816, 4118925222, 4002861748, 3885750714, 1002142683, 850817237, 698445255, 548169417, 529487843, 377642221, 227885567, 77089521, 1943217067, 2061379749, 1640576439, 1757691577, 1474760595, 1592394909, 1174215055, 1290801793, 2875968315, 2724642869, 3111247143, 2960971305, 2405426947, 2253581325, 2638606623, 2487810577, 3808662347, 3926825029, 4044981591, 4162096729, 3342319475, 3459953789, 3576539503, 3693126241, 1986918061, 2137062819, 1685577905, 1836772287, 1381620373, 1532285339, 1078185097, 1229899655, 1040559837, 923313619, 740276417, 621982671, 439452389, 322734571, 137073913, 19308535, 3871163981, 4021308739, 4104605777, 4255800159, 3263785589, 3414450555, 3499326569, 3651041127, 2933202493, 2815956275, 3167684641, 3049390895, 2330014213, 2213296395, 2566595609, 2448830231, 1305906550, 1155237496, 1607244650, 1455525988, 1776460110, 1626319424, 2079897426, 1928707164, 96392454, 213114376, 396673818, 514443284, 562755902, 679998e3, 865136418, 983426092, 3708173718, 3557504664, 3474729866, 3323011204, 4180808110, 4030667424, 3945269170, 3794078908, 2507040230, 2623762152, 2272556026, 2390325492, 2975484382, 3092726480, 2738905026, 2857194700, 3973773121, 3856137295, 4274053469, 4157467219, 3371096953, 3252932727, 3673476453, 3556361835, 2763173681, 2915017791, 3064510765, 3215307299, 2156299017, 2307622919, 2459735317, 2610011675, 2081048481, 1963412655, 1846563261, 1729977011, 1480485785, 1362321559, 1243905413, 1126790795, 878845905, 1030690015, 645401037, 796197571, 274084841, 425408743, 38544885, 188821243, 3613494426, 3731654548, 3313212038, 3430322568, 4082475170, 4200115116, 3780097726, 3896688048, 2668221674, 2516901860, 2366882550, 2216610296, 3141400786, 2989552604, 2837966542, 2687165888, 1202797690, 1320957812, 1437280870, 1554391400, 1669664834, 1787304780, 1906247262, 2022837584, 265905162, 114585348, 499347990, 349075736, 736970802, 585122620, 972512814, 821712160, 2595684844, 2478443234, 2293045232, 2174754046, 3196267988, 3079546586, 2895723464, 2777952454, 3537852828, 3687994002, 3234156416, 3385345166, 4142626212, 4293295786, 3841024952, 3992742070, 174567692, 57326082, 410887952, 292596766, 777231668, 660510266, 1011452712, 893681702, 1108339068, 1258480242, 1343618912, 1494807662, 1715193156, 1865862730, 1948373848, 2100090966, 2701949495, 2818666809, 3004591147, 3122358053, 2235061775, 2352307457, 2535604243, 2653899549, 3915653703, 3764988233, 4219352155, 4067639125, 3444575871, 3294430577, 3746175075, 3594982253, 836553431, 953270745, 600235211, 718002117, 367585007, 484830689, 133361907, 251657213, 2041877159, 1891211689, 1806599355, 1654886325, 1568718495, 1418573201, 1335535747, 1184342925];

            function S(e) {
                for (var t = [], r = 0; r < e.length; r += 4) t.push(e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3]);
                return t
            }
            var R = function e(t) {
                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                Object.defineProperty(this, "key", {
                    value: i(t, !0)
                }), this._prepare()
            };
            R.prototype._prepare = function() {
                var e = c[this.key.length];
                if (null == e) throw new Error("invalid key size (must be 16, 24 or 32 bytes)");
                this._Ke = [], this._Kd = [];
                for (var t = 0; t <= e; t++) this._Ke.push([0, 0, 0, 0]), this._Kd.push([0, 0, 0, 0]);
                var r, n = 4 * (e + 1),
                    i = this.key.length / 4,
                    o = S(this.key);
                for (t = 0; t < i; t++) r = t >> 2, this._Ke[r][t % 4] = o[t], this._Kd[e - r][t % 4] = o[t];
                for (var a, s = 0, u = i; u < n;) {
                    if (a = o[i - 1], o[0] ^= l[a >> 16 & 255] << 24 ^ l[a >> 8 & 255] << 16 ^ l[255 & a] << 8 ^ l[a >> 24 & 255] ^ f[s] << 24, s += 1, 8 != i)
                        for (t = 1; t < i; t++) o[t] ^= o[t - 1];
                    else {
                        for (t = 1; t < i / 2; t++) o[t] ^= o[t - 1];
                        a = o[i / 2 - 1], o[i / 2] ^= l[255 & a] ^ l[a >> 8 & 255] << 8 ^ l[a >> 16 & 255] << 16 ^ l[a >> 24 & 255] << 24;
                        for (t = i / 2 + 1; t < i; t++) o[t] ^= o[t - 1]
                    }
                    for (t = 0; t < i && u < n;) h = u >> 2, d = u % 4, this._Ke[h][d] = o[t], this._Kd[e - h][d] = o[t++], u++
                }
                for (var h = 1; h < e; h++)
                    for (var d = 0; d < 4; d++) a = this._Kd[h][d], this._Kd[h][d] = b[a >> 24 & 255] ^ E[a >> 16 & 255] ^ x[a >> 8 & 255] ^ k[255 & a]
            }, R.prototype.encrypt = function(e) {
                if (16 != e.length) throw new Error("invalid plaintext size (must be 16 bytes)");
                for (var t = this._Ke.length - 1, r = [0, 0, 0, 0], n = S(e), i = 0; i < 4; i++) n[i] ^= this._Ke[0][i];
                for (var a = 1; a < t; a++) {
                    for (i = 0; i < 4; i++) r[i] = d[n[i] >> 24 & 255] ^ p[n[(i + 1) % 4] >> 16 & 255] ^ v[n[(i + 2) % 4] >> 8 & 255] ^ g[255 & n[(i + 3) % 4]] ^ this._Ke[a][i];
                    n = r.slice()
                }
                var s, u = o(16);
                for (i = 0; i < 4; i++) s = this._Ke[t][i], u[4 * i] = 255 & (l[n[i] >> 24 & 255] ^ s >> 24), u[4 * i + 1] = 255 & (l[n[(i + 1) % 4] >> 16 & 255] ^ s >> 16), u[4 * i + 2] = 255 & (l[n[(i + 2) % 4] >> 8 & 255] ^ s >> 8), u[4 * i + 3] = 255 & (l[255 & n[(i + 3) % 4]] ^ s);
                return u
            }, R.prototype.decrypt = function(e) {
                if (16 != e.length) throw new Error("invalid ciphertext size (must be 16 bytes)");
                for (var t = this._Kd.length - 1, r = [0, 0, 0, 0], n = S(e), i = 0; i < 4; i++) n[i] ^= this._Kd[0][i];
                for (var a = 1; a < t; a++) {
                    for (i = 0; i < 4; i++) r[i] = _[n[i] >> 24 & 255] ^ m[n[(i + 3) % 4] >> 16 & 255] ^ y[n[(i + 2) % 4] >> 8 & 255] ^ w[255 & n[(i + 1) % 4]] ^ this._Kd[a][i];
                    n = r.slice()
                }
                var s, u = o(16);
                for (i = 0; i < 4; i++) s = this._Kd[t][i], u[4 * i] = 255 & (h[n[i] >> 24 & 255] ^ s >> 24), u[4 * i + 1] = 255 & (h[n[(i + 3) % 4] >> 16 & 255] ^ s >> 16), u[4 * i + 2] = 255 & (h[n[(i + 2) % 4] >> 8 & 255] ^ s >> 8), u[4 * i + 3] = 255 & (h[255 & n[(i + 1) % 4]] ^ s);
                return u
            };
            var A = function e(t) {
                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                this.description = "Electronic Code Block", this.name = "ecb", this._aes = new R(t)
            };
            A.prototype.encrypt = function(e) {
                if ((e = i(e)).length % 16 !== 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
                for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) a(e, r, 0, n, n + 16), a(r = this._aes.encrypt(r), t, n);
                return t
            }, A.prototype.decrypt = function(e) {
                if ((e = i(e)).length % 16 !== 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) a(e, r, 0, n, n + 16), a(r = this._aes.decrypt(r), t, n);
                return t
            };
            var M = function e(t, r) {
                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                if (this.description = "Cipher Block Chaining", this.name = "cbc", r) {
                    if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
                } else r = o(16);
                this._lastCipherblock = i(r, !0), this._aes = new R(t)
            };
            M.prototype.encrypt = function(e) {
                if ((e = i(e)).length % 16 !== 0) throw new Error("invalid plaintext size (must be multiple of 16 bytes)");
                for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
                    a(e, r, 0, n, n + 16);
                    for (var s = 0; s < 16; s++) r[s] ^= this._lastCipherblock[s];
                    this._lastCipherblock = this._aes.encrypt(r), a(this._lastCipherblock, t, n)
                }
                return t
            }, M.prototype.decrypt = function(e) {
                if ((e = i(e)).length % 16 !== 0) throw new Error("invalid ciphertext size (must be multiple of 16 bytes)");
                for (var t = o(e.length), r = o(16), n = 0; n < e.length; n += 16) {
                    a(e, r, 0, n, n + 16), r = this._aes.decrypt(r);
                    for (var s = 0; s < 16; s++) t[n + s] = r[s] ^ this._lastCipherblock[s];
                    a(e, this._lastCipherblock, 0, n, n + 16)
                }
                return t
            };
            var T = function e(t, r, n) {
                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                if (this.description = "Cipher Feedback", this.name = "cfb", r) {
                    if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 size)")
                } else r = o(16);
                n || (n = 1), this.segmentSize = n, this._shiftRegister = i(r, !0), this._aes = new R(t)
            };
            T.prototype.encrypt = function(e) {
                if (e.length % this.segmentSize != 0) throw new Error("invalid plaintext size (must be segmentSize bytes)");
                for (var t, r = i(e, !0), n = 0; n < r.length; n += this.segmentSize) {
                    t = this._aes.encrypt(this._shiftRegister);
                    for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= t[o];
                    a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(r, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
                }
                return r
            }, T.prototype.decrypt = function(e) {
                if (e.length % this.segmentSize != 0) throw new Error("invalid ciphertext size (must be segmentSize bytes)");
                for (var t, r = i(e, !0), n = 0; n < r.length; n += this.segmentSize) {
                    t = this._aes.encrypt(this._shiftRegister);
                    for (var o = 0; o < this.segmentSize; o++) r[n + o] ^= t[o];
                    a(this._shiftRegister, this._shiftRegister, 0, this.segmentSize), a(e, this._shiftRegister, 16 - this.segmentSize, n, n + this.segmentSize)
                }
                return r
            };
            var O = function e(t, r) {
                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                if (this.description = "Output Feedback", this.name = "ofb", r) {
                    if (16 != r.length) throw new Error("invalid initialation vector size (must be 16 bytes)")
                } else r = o(16);
                this._lastPrecipher = i(r, !0), this._lastPrecipherIndex = 16, this._aes = new R(t)
            };
            O.prototype.encrypt = function(e) {
                for (var t = i(e, !0), r = 0; r < t.length; r++) 16 === this._lastPrecipherIndex && (this._lastPrecipher = this._aes.encrypt(this._lastPrecipher), this._lastPrecipherIndex = 0), t[r] ^= this._lastPrecipher[this._lastPrecipherIndex++];
                return t
            }, O.prototype.decrypt = O.prototype.encrypt;
            var C = function e(t) {
                if (!(this instanceof e)) throw Error("Counter must be instanitated with `new`");
                0 === t || t || (t = 1), "number" === typeof t ? (this._counter = o(16), this.setValue(t)) : this.setBytes(t)
            };
            C.prototype.setValue = function(e) {
                if ("number" !== typeof e || parseInt(e) != e) throw new Error("invalid counter value (must be an integer)");
                if (e > Number.MAX_SAFE_INTEGER) throw new Error("integer value out of safe range");
                for (var t = 15; t >= 0; --t) this._counter[t] = e % 256, e = parseInt(e / 256)
            }, C.prototype.setBytes = function(e) {
                if (16 != (e = i(e, !0)).length) throw new Error("invalid counter bytes size (must be 16 bytes)");
                this._counter = e
            }, C.prototype.increment = function() {
                for (var e = 15; e >= 0; e--) {
                    if (255 !== this._counter[e]) {
                        this._counter[e]++;
                        break
                    }
                    this._counter[e] = 0
                }
            };
            var P = function e(t, r) {
                if (!(this instanceof e)) throw Error("AES must be instanitated with `new`");
                this.description = "Counter", this.name = "ctr", r instanceof C || (r = new C(r)), this._counter = r, this._remainingCounter = null, this._remainingCounterIndex = 16, this._aes = new R(t)
            };
            P.prototype.encrypt = function(e) {
                for (var t = i(e, !0), r = 0; r < t.length; r++) 16 === this._remainingCounterIndex && (this._remainingCounter = this._aes.encrypt(this._counter._counter), this._remainingCounterIndex = 0, this._counter.increment()), t[r] ^= this._remainingCounter[this._remainingCounterIndex++];
                return t
            }, P.prototype.decrypt = P.prototype.encrypt;
            var N = {
                AES: R,
                Counter: C,
                ModeOfOperation: {
                    ecb: A,
                    cbc: M,
                    cfb: T,
                    ofb: O,
                    ctr: P
                },
                utils: {
                    hex: u,
                    utf8: s
                },
                padding: {
                    pkcs7: {
                        pad: function(e) {
                            var t = 16 - (e = i(e, !0)).length % 16,
                                r = o(e.length + t);
                            a(e, r);
                            for (var n = e.length; n < r.length; n++) r[n] = t;
                            return r
                        },
                        strip: function(e) {
                            if ((e = i(e, !0)).length < 16) throw new Error("PKCS#7 invalid length");
                            var t = e[e.length - 1];
                            if (t > 16) throw new Error("PKCS#7 padding byte out of range");
                            for (var r = e.length - t, n = 0; n < t; n++)
                                if (e[r + n] !== t) throw new Error("PKCS#7 invalid padding byte");
                            var s = o(r);
                            return a(e, s, 0, 0, r), s
                        }
                    }
                },
                _arrayTest: {
                    coerceArray: i,
                    createArray: o,
                    copyArray: a
                }
            };
            e.exports = N
        }()
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.nodeRipemd160 = t.nodeSha512 = t.nodeSha256 = t.nodeHmacSha512Sign = t.nodeHmacSha256Sign = t.nodeAesDecrypt = t.nodeAesEncrypt = void 0;
        var i = n(r(642)),
            o = r(613),
            a = r(665);
        t.nodeAesEncrypt = function(e, t, r) {
            var n = i.default.createCipheriv(a.AES_NODE_ALGO, t, e);
            return o.bufferToArray(o.concatBuffers(n.update(r), n.final()))
        }, t.nodeAesDecrypt = function(e, t, r) {
            var n = i.default.createDecipheriv(a.AES_NODE_ALGO, t, e);
            return o.bufferToArray(o.concatBuffers(n.update(r), n.final()))
        }, t.nodeHmacSha256Sign = function(e, t) {
            var r = i.default.createHmac(a.HMAC_NODE_ALGO, new Uint8Array(e)).update(t).digest();
            return o.bufferToArray(r)
        }, t.nodeHmacSha512Sign = function(e, t) {
            var r = i.default.createHmac(a.SHA512_NODE_ALGO, new Uint8Array(e)).update(t).digest();
            return o.bufferToArray(r)
        }, t.nodeSha256 = function(e) {
            var t = i.default.createHash(a.SHA256_NODE_ALGO).update(e).digest();
            return o.bufferToArray(t)
        }, t.nodeSha512 = function(e) {
            var t = i.default.createHash(a.SHA512_NODE_ALGO).update(e).digest();
            return o.bufferToArray(t)
        }, t.nodeRipemd160 = function(e) {
            var t = i.default.createHash(a.RIPEMD160_NODE_ALGO).update(e).digest();
            return o.bufferToArray(t)
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.pkcs7 = void 0;
        var n = [
            [16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16, 16],
            [15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15],
            [14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14],
            [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13],
            [12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
            [11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
            [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            [9, 9, 9, 9, 9, 9, 9, 9, 9],
            [8, 8, 8, 8, 8, 8, 8, 8],
            [7, 7, 7, 7, 7, 7, 7],
            [6, 6, 6, 6, 6, 6],
            [5, 5, 5, 5, 5],
            [4, 4, 4, 4],
            [3, 3, 3],
            [2, 2],
            [1]
        ];
        t.pkcs7 = {
            pad: function(e) {
                var t = n[e.byteLength % 16 || 0],
                    r = new Uint8Array(e.byteLength + t.length);
                return r.set(e), r.set(t, e.byteLength), r
            },
            unpad: function(e) {
                return e.subarray(0, e.byteLength - e[e.byteLength - 1])
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isConstantTime = t.isNode = t.isBrowser = t.assert = void 0;
            var n = r(762);
            t.assert = function(e, t) {
                if (!e) throw new Error(t || "Assertion failed")
            }, t.isBrowser = function() {
                return !!n.getBrowerCrypto() && !!n.getSubtleCrypto()
            }, t.isNode = function() {
                return "undefined" !== typeof e && "undefined" !== typeof e.versions && "undefined" !== typeof e.versions.node
            }, t.isConstantTime = function(e, t) {
                if (e.length !== t.length) return !1;
                for (var r = 0, n = 0; n < e.length; n++) r |= e[n] ^ t[n];
                return 0 === r
            }
        }).call(this, r(111))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.aesCbcDecryptSync = t.aesCbcEncryptSync = void 0;
        var n = r(614);
        t.aesCbcEncryptSync = function(e, t, r) {
            return n.isNode() ? n.nodeAesEncrypt(e, t, r) : n.fallbackAesEncrypt(e, t, r)
        }, t.aesCbcDecryptSync = function(e, t, r) {
            return n.isNode() ? n.nodeAesDecrypt(e, t, r) : n.fallbackAesDecrypt(e, t, r)
        }
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }),
            i = this && this.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), i(r(992), t), i(r(993), t)
    }, function(e, t, r) {
        "use strict";
        var n = r(2),
            i = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function s(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hmacSha512Verify = t.hmacSha512Sign = t.hmacSha256Verify = t.hmacSha256Sign = void 0;
        var o = r(614);
        t.hmacSha256Sign = function(e, t) {
            return i(this, void 0, void 0, n.mark((function r() {
                var i;
                return n.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            if (!o.isBrowser()) {
                                r.next = 6;
                                break
                            }
                            return r.next = 3, o.browserHmacSha256Sign(e, t);
                        case 3:
                            i = r.sent, r.next = 7;
                            break;
                        case 6:
                            i = o.isNode() ? o.nodeHmacSha256Sign(e, t) : o.fallbackHmacSha256Sign(e, t);
                        case 7:
                            return r.abrupt("return", i);
                        case 8:
                        case "end":
                            return r.stop()
                    }
                }), r)
            })))
        }, t.hmacSha256Verify = function(e, t, r) {
            return i(this, void 0, void 0, n.mark((function i() {
                var a, s, u, c;
                return n.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            if (!o.isBrowser()) {
                                n.next = 7;
                                break
                            }
                            return n.next = 3, o.browserHmacSha256Sign(e, t);
                        case 3:
                            s = n.sent, a = o.isConstantTime(s, r), n.next = 8;
                            break;
                        case 7:
                            o.isNode() ? (u = o.nodeHmacSha256Sign(e, t), a = o.isConstantTime(u, r)) : (c = o.fallbackHmacSha256Sign(e, t), a = o.isConstantTime(c, r));
                        case 8:
                            return n.abrupt("return", a);
                        case 9:
                        case "end":
                            return n.stop()
                    }
                }), i)
            })))
        }, t.hmacSha512Sign = function(e, t) {
            return i(this, void 0, void 0, n.mark((function r() {
                var i;
                return n.wrap((function(r) {
                    for (;;) switch (r.prev = r.next) {
                        case 0:
                            if (!o.isBrowser()) {
                                r.next = 6;
                                break
                            }
                            return r.next = 3, o.browserHmacSha512Sign(e, t);
                        case 3:
                            i = r.sent, r.next = 7;
                            break;
                        case 6:
                            i = o.isNode() ? o.nodeHmacSha512Sign(e, t) : o.fallbackHmacSha512Sign(e, t);
                        case 7:
                            return r.abrupt("return", i);
                        case 8:
                        case "end":
                            return r.stop()
                    }
                }), r)
            })))
        }, t.hmacSha512Verify = function(e, t, r) {
            return i(this, void 0, void 0, n.mark((function i() {
                var a, s, u;
                return n.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return o.isNode() ? (s = o.nodeHmacSha512Sign(e, t), a = o.isConstantTime(s, r)) : (u = o.fallbackHmacSha512Sign(e, t), a = o.isConstantTime(u, r)), n.abrupt("return", a);
                        case 2:
                        case "end":
                            return n.stop()
                    }
                }), i)
            })))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hmacSha512VerifySync = t.hmacSha512SignSync = t.hmacSha256VerifySync = t.hmacSha256SignSync = void 0;
        var n = r(614);
        t.hmacSha256SignSync = function(e, t) {
            return n.isNode() ? n.nodeHmacSha256Sign(e, t) : n.fallbackHmacSha256Sign(e, t)
        }, t.hmacSha256VerifySync = function(e, t, r) {
            var i;
            if (n.isNode()) {
                var o = n.nodeHmacSha256Sign(e, t);
                i = n.isConstantTime(o, r)
            } else {
                var a = n.fallbackHmacSha256Sign(e, t);
                i = n.isConstantTime(a, r)
            }
            return i
        }, t.hmacSha512SignSync = function(e, t) {
            return n.isNode() ? n.nodeHmacSha512Sign(e, t) : n.fallbackHmacSha512Sign(e, t)
        }, t.hmacSha512VerifySync = function(e, t, r) {
            var i;
            if (n.isNode()) {
                var o = n.nodeHmacSha512Sign(e, t);
                i = n.isConstantTime(o, r)
            } else {
                var a = n.fallbackHmacSha512Sign(e, t);
                i = n.isConstantTime(a, r)
            }
            return i
        }
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }),
            i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e.default = t
            }),
            o = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) "default" !== r && Object.hasOwnProperty.call(e, r) && n(t, e, r);
                return i(t, e), t
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.randomBytes = void 0;
        var a = o(r(995));
        t.randomBytes = function(e) {
            return a.randomBytes(e)
        }
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.randomBytes = void 0;
        var i = n(r(642)),
            o = r(613);
        t.randomBytes = function(e) {
            var t = i.default.randomBytes(e);
            return o.bufferToArray(t)
        }
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }),
            i = this && this.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), i(r(997), t), i(r(998), t)
    }, function(e, t, r) {
        "use strict";
        var n = r(2),
            i = this && this.__awaiter || function(e, t, r, n) {
                return new(r || (r = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            u(n.next(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function s(e) {
                        try {
                            u(n.throw(e))
                        } catch (t) {
                            o(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    u((n = n.apply(e, t || [])).next())
                }))
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ripemd160 = t.sha512 = t.sha256 = void 0;
        var o = r(614);
        t.sha256 = function(e) {
            return i(this, void 0, void 0, n.mark((function t() {
                var r;
                return n.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (r = o.EMPTY_UINT_ARRAY, !o.isBrowser()) {
                                t.next = 7;
                                break
                            }
                            return t.next = 4, o.browserSha256(e);
                        case 4:
                            r = t.sent, t.next = 8;
                            break;
                        case 7:
                            r = o.isNode() ? o.nodeSha256(e) : o.fallbackSha256(e);
                        case 8:
                            return t.abrupt("return", r);
                        case 9:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))
        }, t.sha512 = function(e) {
            return i(this, void 0, void 0, n.mark((function t() {
                var r;
                return n.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            if (r = o.EMPTY_UINT_ARRAY, !o.isBrowser()) {
                                t.next = 7;
                                break
                            }
                            return t.next = 4, o.browserSha512(e);
                        case 4:
                            r = t.sent, t.next = 8;
                            break;
                        case 7:
                            r = o.isNode() ? o.nodeSha512(e) : o.fallbackSha512(e);
                        case 8:
                            return t.abrupt("return", r);
                        case 9:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))
        }, t.ripemd160 = function(e) {
            return i(this, void 0, void 0, n.mark((function t() {
                var r;
                return n.wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return r = o.EMPTY_UINT_ARRAY, r = o.isNode() ? o.nodeRipemd160(e) : o.fallbackRipemd160(e), t.abrupt("return", r);
                        case 3:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ripemd160Sync = t.sha512Sync = t.sha256Sync = void 0;
        var n = r(614);
        t.sha256Sync = function(e) {
            return n.EMPTY_UINT_ARRAY, n.isNode() ? n.nodeSha256(e) : n.fallbackSha256(e)
        }, t.sha512Sync = function(e) {
            return n.EMPTY_UINT_ARRAY, n.isNode() ? n.nodeSha512(e) : n.fallbackSha512(e)
        }, t.ripemd160Sync = function(e) {
            return n.EMPTY_UINT_ARRAY, n.isNode() ? n.nodeRipemd160(e) : n.fallbackRipemd160(e)
        }
    }, function(e, t, r) {
        (function(t) {
            var n, i = r(751),
                o = (n = r(1e3)) && "object" === typeof n && "default" in n ? n.default : n,
                a = r(1179);
            var s = "walletconnect-wrapper",
                u = "walletconnect-style-sheet",
                c = "walletconnect-qrcode-modal",
                f = "walletconnect-qrcode-text";

            function l(e) {
                return a.createElement("div", {
                    className: "walletconnect-modal__header"
                }, a.createElement("img", {
                    src: "data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8'?%3E %3Csvg width='300px' height='185px' viewBox='0 0 300 185' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E %3C!-- Generator: Sketch 49.3 (51167) - http://www.bohemiancoding.com/sketch --%3E %3Ctitle%3EWalletConnect%3C/title%3E %3Cdesc%3ECreated with Sketch.%3C/desc%3E %3Cdefs%3E%3C/defs%3E %3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E %3Cg id='walletconnect-logo-alt' fill='%233B99FC' fill-rule='nonzero'%3E %3Cpath d='M61.4385429,36.2562612 C110.349767,-11.6319051 189.65053,-11.6319051 238.561752,36.2562612 L244.448297,42.0196786 C246.893858,44.4140867 246.893858,48.2961898 244.448297,50.690599 L224.311602,70.406102 C223.088821,71.6033071 221.106302,71.6033071 219.883521,70.406102 L211.782937,62.4749541 C177.661245,29.0669724 122.339051,29.0669724 88.2173582,62.4749541 L79.542302,70.9685592 C78.3195204,72.1657633 76.337001,72.1657633 75.1142214,70.9685592 L54.9775265,51.2530561 C52.5319653,48.8586469 52.5319653,44.9765439 54.9775265,42.5821357 L61.4385429,36.2562612 Z M280.206339,77.0300061 L298.128036,94.5769031 C300.573585,96.9713 300.573599,100.85338 298.128067,103.247793 L217.317896,182.368927 C214.872352,184.763353 210.907314,184.76338 208.461736,182.368989 C208.461726,182.368979 208.461714,182.368967 208.461704,182.368957 L151.107561,126.214385 C150.496171,125.615783 149.504911,125.615783 148.893521,126.214385 C148.893517,126.214389 148.893514,126.214393 148.89351,126.214396 L91.5405888,182.368927 C89.095052,184.763359 85.1300133,184.763399 82.6844276,182.369014 C82.6844133,182.369 82.684398,182.368986 82.6843827,182.36897 L1.87196327,103.246785 C-0.573596939,100.852377 -0.573596939,96.9702735 1.87196327,94.5758653 L19.7936929,77.028998 C22.2392531,74.6345898 26.2042918,74.6345898 28.6498531,77.028998 L86.0048306,133.184355 C86.6162214,133.782957 87.6074796,133.782957 88.2188704,133.184355 C88.2188796,133.184346 88.2188878,133.184338 88.2188969,133.184331 L145.571,77.028998 C148.016505,74.6345347 151.981544,74.6344449 154.427161,77.028798 C154.427195,77.0288316 154.427229,77.0288653 154.427262,77.028899 L211.782164,133.184331 C212.393554,133.782932 213.384814,133.782932 213.996204,133.184331 L271.350179,77.0300061 C273.79574,74.6355969 277.760778,74.6355969 280.206339,77.0300061 Z' id='WalletConnect'%3E%3C/path%3E %3C/g%3E %3C/g%3E %3C/svg%3E",
                    className: "walletconnect-modal__headerLogo"
                }), a.createElement("p", null, "WalletConnect"), a.createElement("div", {
                    className: "walletconnect-modal__close__wrapper",
                    onClick: e.onClose
                }, a.createElement("div", {
                    id: "walletconnect-qrcode-close",
                    className: "walletconnect-modal__close__icon"
                }, a.createElement("div", {
                    className: "walletconnect-modal__close__line1"
                }), a.createElement("div", {
                    className: "walletconnect-modal__close__line2"
                }))))
            }
            "undefined" !== typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" !== typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));

            function h(e) {
                return a.createElement("a", {
                    className: "walletconnect-connect__button",
                    href: e.href,
                    id: "walletconnect-connect-button-" + e.name,
                    onClick: e.onClick,
                    rel: "noopener noreferrer",
                    style: {
                        backgroundColor: e.color
                    },
                    target: "_blank"
                }, e.name)
            }

            function d(e) {
                var t = e.color,
                    r = e.href,
                    n = e.name,
                    i = e.logo,
                    o = e.onClick;
                return a.createElement("a", {
                    className: "walletconnect-modal__base__row",
                    href: r,
                    onClick: o,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, a.createElement("h3", {
                    className: "walletconnect-modal__base__row__h3"
                }, n), a.createElement("div", {
                    className: "walletconnect-modal__base__row__right"
                }, a.createElement("div", {
                    className: "walletconnect-modal__base__row__right__app-icon",
                    style: {
                        background: "url('" + i + "') " + t,
                        backgroundSize: "100%"
                    }
                }), a.createElement("img", {
                    src: "data:image/svg+xml,%3Csvg width='8' height='18' viewBox='0 0 8 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0.586301 0.213898C0.150354 0.552968 0.0718197 1.18124 0.41089 1.61719L5.2892 7.88931C5.57007 8.25042 5.57007 8.75608 5.2892 9.11719L0.410889 15.3893C0.071819 15.8253 0.150353 16.4535 0.586301 16.7926C1.02225 17.1317 1.65052 17.0531 1.98959 16.6172L6.86791 10.3451C7.7105 9.26174 7.7105 7.74476 6.86791 6.66143L1.98959 0.38931C1.65052 -0.0466374 1.02225 -0.125172 0.586301 0.213898Z' fill='%233C4252'/%3E %3C/svg%3E",
                    className: "walletconnect-modal__base__row__right__caret"
                })))
            }

            function p(e) {
                var t = e.color,
                    r = e.href,
                    n = e.name,
                    i = e.logo,
                    o = e.onClick;
                return a.createElement("a", {
                    className: "walletconnect-connect__button__icon_anchor",
                    href: r,
                    onClick: o,
                    rel: "noopener noreferrer",
                    target: "_blank"
                }, a.createElement("div", {
                    className: "walletconnect-connect__button__icon",
                    style: {
                        background: "url('" + i + "') " + t,
                        backgroundSize: "100%"
                    }
                }), a.createElement("div", {
                    style: {
                        fontSize: (n.length > 8 ? 2.5 : 2.7) + "vw"
                    },
                    className: "walletconnect-connect__button__text"
                }, n))
            }

            function v(e) {
                var t = i.isIOS(),
                    r = e.qrcodeModalOptions && e.qrcodeModalOptions.mobileLinks ? e.qrcodeModalOptions.mobileLinks : void 0,
                    n = a.useState(1),
                    o = n[0],
                    s = n[1],
                    u = a.useState(!1),
                    c = u[0],
                    l = u[1],
                    v = a.useState([]),
                    g = v[0],
                    _ = v[1];
                a.useEffect((function() {
                    ! function() {
                        try {
                            if (!t) return Promise.resolve();
                            var e = function(e, t) {
                                try {
                                    var r = e()
                                } catch (n) {
                                    return t(n)
                                }
                                return r && r.then ? r.then(void 0, t) : r
                            }((function() {
                                var e = i.getWalletRegistryUrl();
                                return Promise.resolve(fetch(e).then((function(e) {
                                    return e.json()
                                }))).then((function(e) {
                                    var t = i.getMobileLinkRegistry(i.formatMobileRegistry(e), r);
                                    _(t)
                                }))
                            }), (function(e) {
                                console.error(e), l(!0)
                            }));
                            Promise.resolve(e && e.then ? e.then((function() {})) : void 0)
                        } catch (n) {
                            return Promise.reject(n)
                        }
                    }()
                }), []);
                var m = g.length > 5,
                    y = Math.ceil(g.length / 12),
                    w = [12 * (o - 1) + 1, 12 * o],
                    b = g.length ? g.filter((function(e, t) {
                        return t + 1 >= w[0] && t + 1 <= w[1]
                    })) : [];
                return a.createElement("div", null, a.createElement("p", {
                    id: f,
                    className: "walletconnect-qrcode__text"
                }, t ? e.text.choose_preferred_wallet : e.text.connect_mobile_wallet), a.createElement("div", {
                    className: "walletconnect-connect__buttons__wrapper" + (t ? m ? "__wrap" : "" : "__android")
                }, t ? b.length ? b.map((function(t) {
                    var r = t.color,
                        n = t.name,
                        o = t.shortName,
                        s = t.logo,
                        u = i.formatIOSMobile(e.uri, t),
                        c = a.useCallback((function() {
                            i.saveMobileLinkInfo({
                                name: n,
                                href: u
                            })
                        }), []);
                    return m ? a.createElement(p, {
                        color: r,
                        href: u,
                        name: o,
                        logo: s,
                        onClick: c
                    }) : a.createElement(d, {
                        color: r,
                        href: u,
                        name: n,
                        logo: s,
                        onClick: c
                    })
                })) : a.createElement(a.Fragment, null, a.createElement("p", null, c ? "Something went wrong" : "Loading...")) : a.createElement(h, {
                    name: e.text.connect,
                    color: "rgb(64, 153, 255)",
                    href: e.uri,
                    onClick: a.useCallback((function() {
                        i.saveMobileLinkInfo({
                            name: "Unknown",
                            href: e.uri
                        })
                    }), [])
                })), !!(t && y > 1) && a.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, Array(y).fill(0).map((function(e, t) {
                    var r = t + 1,
                        n = o === r;
                    return a.createElement("a", {
                        style: {
                            margin: "auto 10px",
                            fontWeight: n ? "bold" : "normal"
                        },
                        onClick: function() {
                            return s(r)
                        }
                    }, r)
                }))))
            }

            function g(e) {
                var t = !!e.message.trim();
                return a.createElement("div", {
                    className: "walletconnect-qrcode__notification" + (t ? " notification__show" : "")
                }, e.message)
            }

            function _(e) {
                var t = a.useState(""),
                    r = t[0],
                    n = t[1],
                    i = a.useState(""),
                    s = i[0],
                    u = i[1];
                a.useEffect((function() {
                    try {
                        return Promise.resolve(function(e) {
                            try {
                                var t = "";
                                return Promise.resolve(o.toString(e, {
                                    margin: 0,
                                    type: "svg"
                                })).then((function(e) {
                                    return "string" === typeof e && (t = e.replace("<svg", '<svg class="walletconnect-qrcode__image"')), t
                                }))
                            } catch (r) {
                                return Promise.reject(r)
                            }
                        }(e.uri)).then((function(e) {
                            u(e)
                        }))
                    } catch (t) {
                        Promise.reject(t)
                    }
                }), []);
                return a.createElement("div", null, a.createElement("p", {
                    id: f,
                    className: "walletconnect-qrcode__text"
                }, e.text.scan_qrcode_with_wallet), a.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                }), a.createElement("div", {
                    className: "walletconnect-modal__footer"
                }, a.createElement("a", {
                    onClick: function() {
                        var t = document.createElement("input");
                        t.value = e.uri, document.body.appendChild(t), t.select(), document.execCommand("copy"), t.remove(), n(e.text.copied_to_clipboard), setInterval((function() {
                            return n("")
                        }), 1200)
                    }
                }, e.text.copy_to_clipboard)), a.createElement(g, {
                    message: r
                }))
            }

            function m(e) {
                var t = i.isMobile(),
                    r = a.useState(!t),
                    n = r[0],
                    o = r[1],
                    s = {
                        text: e.text,
                        uri: e.uri,
                        qrcodeModalOptions: e.qrcodeModalOptions
                    };
                return a.createElement("div", {
                    id: c,
                    className: "walletconnect-qrcode__base animated fadeIn"
                }, a.createElement("div", {
                    className: "walletconnect-modal__base"
                }, a.createElement(l, {
                    onClose: e.onClose
                }), t && a.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle" + (n ? " right__selected" : "")
                }, a.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle_selector"
                }), a.createElement("a", {
                    onClick: function() {
                        return o(!1)
                    }
                }, e.text.mobile), a.createElement("a", {
                    onClick: function() {
                        return o(!0)
                    }
                }, e.text.qrcode)), a.createElement("div", null, n ? a.createElement(_, Object.assign({}, s)) : a.createElement(v, Object.assign({}, s)))))
            }
            var y = {
                de: {
                    choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
                    connect_mobile_wallet: "Verbinde mit Mobile Wallet",
                    scan_qrcode_with_wallet: "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
                    connect: "Verbinden",
                    qrcode: "QR-Code",
                    mobile: "Mobile",
                    copy_to_clipboard: "In die Zwischenablage kopieren",
                    copied_to_clipboard: "In die Zwischenablage kopiert!"
                },
                en: {
                    choose_preferred_wallet: "Choose your preferred wallet",
                    connect_mobile_wallet: "Connect to Mobile Wallet",
                    scan_qrcode_with_wallet: "Scan QR code with a WalletConnect-compatible wallet",
                    connect: "Connect",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    copy_to_clipboard: "Copy to clipboard",
                    copied_to_clipboard: "Copied to clipboard!"
                },
                es: {
                    choose_preferred_wallet: "Elige tu billetera preferida",
                    connect_mobile_wallet: "Conectar a billetera m\xf3vil",
                    scan_qrcode_with_wallet: "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vil",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!"
                },
                fr: {
                    choose_preferred_wallet: "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
                    connect_mobile_wallet: "Se connecter au portefeuille mobile",
                    scan_qrcode_with_wallet: "Scannez le QR code avec un portefeuille compatible WalletConnect",
                    connect: "Se connecter",
                    qrcode: "QR Code",
                    mobile: "Mobile",
                    copy_to_clipboard: "Copier",
                    copied_to_clipboard: "Copi\xe9!"
                },
                ko: {
                    choose_preferred_wallet: "\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694",
                    connect_mobile_wallet: "\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0",
                    scan_qrcode_with_wallet: "WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694",
                    connect: "\uc5f0\uacb0",
                    qrcode: "QR \ucf54\ub4dc",
                    mobile: "\ubaa8\ubc14\uc77c",
                    copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",
                    copied_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"
                },
                pt: {
                    choose_preferred_wallet: "Escolha sua carteira preferida",
                    connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
                    scan_qrcode_with_wallet: "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
                    connect: "Conectar",
                    qrcode: "C\xf3digo QR",
                    mobile: "M\xf3vel",
                    copy_to_clipboard: "Copiar",
                    copied_to_clipboard: "Copiado!"
                },
                zh: {
                    choose_preferred_wallet: "\u9009\u62e9\u4f60\u7684\u94b1\u5305",
                    connect_mobile_wallet: "\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305",
                    scan_qrcode_with_wallet: "\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801",
                    connect: "\u8fde\u63a5",
                    qrcode: "\u4e8c\u7ef4\u7801",
                    mobile: "\u79fb\u52a8",
                    copy_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f",
                    copied_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01"
                },
                fa: {
                    choose_preferred_wallet: "\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
                    connect_mobile_wallet: "\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f",
                    scan_qrcode_with_wallet: "\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f",
                    connect: "\u0627\u062a\u0635\u0627\u0644",
                    qrcode: "\u06a9\u062f QR",
                    mobile: "\u0633\u06cc\u0627\u0631",
                    copy_to_clipboard: "\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f",
                    copied_to_clipboard: "\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!"
                }
            };

            function w() {
                var e = i.getDocumentOrThrow(),
                    t = e.getElementById(c);
                t && (t.className = t.className.replace("fadeIn", "fadeOut"), setTimeout((function() {
                    var t = e.getElementById(s);
                    t && e.body.removeChild(t)
                }), 300))
            }

            function b(e) {
                return function() {
                    w(), e && e()
                }
            }

            function E() {
                var e = i.getNavigatorOrThrow().language.split("-")[0] || "en";
                return y[e] || y.en
            }

            function x(e, t, r) {
                ! function() {
                    var e = i.getDocumentOrThrow(),
                        t = e.getElementById(u);
                    t && e.head.removeChild(t);
                    var r = e.createElement("style");
                    r.setAttribute("id", u), r.innerText = ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 30px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 5vw;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n', e.head.appendChild(r)
                }();
                var n = function() {
                    var e = i.getDocumentOrThrow(),
                        t = e.createElement("div");
                    return t.setAttribute("id", s), e.body.appendChild(t), t
                }();
                a.render(a.createElement(m, {
                    text: E(),
                    uri: e,
                    onClose: b(t),
                    qrcodeModalOptions: r
                }), n)
            }
            var k = function() {
                return "undefined" !== typeof t && "undefined" !== typeof t.versions && "undefined" !== typeof t.versions.node
            };
            var S = {
                open: function(e, t, r) {
                    console.log(e), k() ? function(e) {
                        o.toString(e, {
                            type: "terminal"
                        }).then(console.log)
                    }(e) : x(e, t, r)
                },
                close: function() {
                    k() || w()
                }
            };
            e.exports = S
        }).call(this, r(111))
    }, function(e, t, r) {
        var n = r(1001),
            i = r(1002),
            o = r(1019),
            a = r(1020);

        function s(e, t, r, o, a) {
            var s = [].slice.call(arguments, 1),
                u = s.length,
                c = "function" === typeof s[u - 1];
            if (!c && !n()) throw new Error("Callback required as last argument");
            if (!c) {
                if (u < 1) throw new Error("Too few arguments provided");
                return 1 === u ? (r = t, t = o = void 0) : 2 !== u || t.getContext || (o = r, r = t, t = void 0), new Promise((function(n, a) {
                    try {
                        var s = i.create(r, o);
                        n(e(s, t, o))
                    } catch (u) {
                        a(u)
                    }
                }))
            }
            if (u < 2) throw new Error("Too few arguments provided");
            2 === u ? (a = r, r = t, t = o = void 0) : 3 === u && (t.getContext && "undefined" === typeof a ? (a = o, o = void 0) : (a = o, o = r, r = t, t = void 0));
            try {
                var f = i.create(r, o);
                a(null, e(f, t, o))
            } catch (l) {
                a(l)
            }
        }
        t.create = i.create, t.toCanvas = s.bind(null, o.render), t.toDataURL = s.bind(null, o.renderToDataURL), t.toString = s.bind(null, (function(e, t, r) {
            return a.render(e, r)
        }))
    }, function(e, t) {
        e.exports = function() {
            return "function" === typeof Promise && Promise.prototype && Promise.prototype.then
        }
    }, function(e, t, r) {
        var n = r(636),
            i = r(622),
            o = r(716),
            a = r(1003),
            s = r(1004),
            u = r(1005),
            c = r(1006),
            f = r(1007),
            l = r(820),
            h = r(1008),
            d = r(1011),
            p = r(1012),
            v = r(623),
            g = r(1013),
            _ = r(715);

        function m(e, t, r) {
            var n, i, o = e.size,
                a = p.getEncodedBits(t, r);
            for (n = 0; n < 15; n++) i = 1 === (a >> n & 1), n < 6 ? e.set(n, 8, i, !0) : n < 8 ? e.set(n + 1, 8, i, !0) : e.set(o - 15 + n, 8, i, !0), n < 8 ? e.set(8, o - n - 1, i, !0) : n < 9 ? e.set(8, 15 - n - 1 + 1, i, !0) : e.set(8, 15 - n - 1, i, !0);
            e.set(o - 8, 8, 1, !0)
        }

        function y(e, t, r) {
            var o = new a;
            r.forEach((function(t) {
                o.put(t.mode.bit, 4), o.put(t.getLength(), v.getCharCountIndicator(t.mode, e)), t.write(o)
            }));
            var s = 8 * (i.getSymbolTotalCodewords(e) - l.getTotalCodewordsCount(e, t));
            for (o.getLengthInBits() + 4 <= s && o.put(0, 4); o.getLengthInBits() % 8 !== 0;) o.putBit(0);
            for (var u = (s - o.getLengthInBits()) / 8, c = 0; c < u; c++) o.put(c % 2 ? 17 : 236, 8);
            return function(e, t, r) {
                for (var o = i.getSymbolTotalCodewords(t), a = l.getTotalCodewordsCount(t, r), s = o - a, u = l.getBlocksCount(t, r), c = u - o % u, f = Math.floor(o / u), d = Math.floor(s / u), p = d + 1, v = f - d, g = new h(v), _ = 0, m = new Array(u), y = new Array(u), w = 0, b = n.from(e.buffer), E = 0; E < u; E++) {
                    var x = E < c ? d : p;
                    m[E] = b.slice(_, _ + x), y[E] = g.encode(m[E]), _ += x, w = Math.max(w, x)
                }
                var k, S, R = n.alloc(o),
                    A = 0;
                for (k = 0; k < w; k++)
                    for (S = 0; S < u; S++) k < m[S].length && (R[A++] = m[S][k]);
                for (k = 0; k < v; k++)
                    for (S = 0; S < u; S++) R[A++] = y[S][k];
                return R
            }(o, e, t)
        }

        function w(e, t, r, n) {
            var o;
            if (_(e)) o = g.fromArray(e);
            else {
                if ("string" !== typeof e) throw new Error("Invalid data");
                var a = t;
                if (!a) {
                    var l = g.rawSplit(e);
                    a = d.getBestVersionForData(l, r)
                }
                o = g.fromString(e, a || 40)
            }
            var h = d.getBestVersionForData(o, r);
            if (!h) throw new Error("The amount of data is too big to be stored in a QR Code");
            if (t) {
                if (t < h) throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + h + ".\n")
            } else t = h;
            var p = y(t, r, o),
                v = i.getSymbolSize(t),
                w = new s(v);
            return function(e, t) {
                    for (var r = e.size, n = c.getPositions(t), i = 0; i < n.length; i++)
                        for (var o = n[i][0], a = n[i][1], s = -1; s <= 7; s++)
                            if (!(o + s <= -1 || r <= o + s))
                                for (var u = -1; u <= 7; u++) a + u <= -1 || r <= a + u || (s >= 0 && s <= 6 && (0 === u || 6 === u) || u >= 0 && u <= 6 && (0 === s || 6 === s) || s >= 2 && s <= 4 && u >= 2 && u <= 4 ? e.set(o + s, a + u, !0, !0) : e.set(o + s, a + u, !1, !0))
                }(w, t),
                function(e) {
                    for (var t = e.size, r = 8; r < t - 8; r++) {
                        var n = r % 2 === 0;
                        e.set(r, 6, n, !0), e.set(6, r, n, !0)
                    }
                }(w),
                function(e, t) {
                    for (var r = u.getPositions(t), n = 0; n < r.length; n++)
                        for (var i = r[n][0], o = r[n][1], a = -2; a <= 2; a++)
                            for (var s = -2; s <= 2; s++) - 2 === a || 2 === a || -2 === s || 2 === s || 0 === a && 0 === s ? e.set(i + a, o + s, !0, !0) : e.set(i + a, o + s, !1, !0)
                }(w, t), m(w, r, 0), t >= 7 && function(e, t) {
                    for (var r, n, i, o = e.size, a = d.getEncodedBits(t), s = 0; s < 18; s++) r = Math.floor(s / 3), n = s % 3 + o - 8 - 3, i = 1 === (a >> s & 1), e.set(r, n, i, !0), e.set(n, r, i, !0)
                }(w, t),
                function(e, t) {
                    for (var r = e.size, n = -1, i = r - 1, o = 7, a = 0, s = r - 1; s > 0; s -= 2)
                        for (6 === s && s--;;) {
                            for (var u = 0; u < 2; u++)
                                if (!e.isReserved(i, s - u)) {
                                    var c = !1;
                                    a < t.length && (c = 1 === (t[a] >>> o & 1)), e.set(i, s - u, c), -1 === --o && (a++, o = 7)
                                }
                            if ((i += n) < 0 || r <= i) {
                                i -= n, n = -n;
                                break
                            }
                        }
                }(w, p), isNaN(n) && (n = f.getBestMask(w, m.bind(null, w, r))), f.applyMask(n, w), m(w, r, n), {
                    modules: w,
                    version: t,
                    errorCorrectionLevel: r,
                    maskPattern: n,
                    segments: o
                }
        }
        t.create = function(e, t) {
            if ("undefined" === typeof e || "" === e) throw new Error("No input text");
            var r, n, a = o.M;
            return "undefined" !== typeof t && (a = o.from(t.errorCorrectionLevel, o.M), r = d.from(t.version), n = f.from(t.maskPattern), t.toSJISFunc && i.setToSJISFunction(t.toSJISFunc)), w(e, r, a, n)
        }
    }, function(e, t) {
        function r() {
            this.buffer = [], this.length = 0
        }
        r.prototype = {
            get: function(e) {
                var t = Math.floor(e / 8);
                return 1 === (this.buffer[t] >>> 7 - e % 8 & 1)
            },
            put: function(e, t) {
                for (var r = 0; r < t; r++) this.putBit(1 === (e >>> t - r - 1 & 1))
            },
            getLengthInBits: function() {
                return this.length
            },
            putBit: function(e) {
                var t = Math.floor(this.length / 8);
                this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
            }
        }, e.exports = r
    }, function(e, t, r) {
        var n = r(636);

        function i(e) {
            if (!e || e < 1) throw new Error("BitMatrix size must be defined and greater than 0");
            this.size = e, this.data = n.alloc(e * e), this.reservedBit = n.alloc(e * e)
        }
        i.prototype.set = function(e, t, r, n) {
            var i = e * this.size + t;
            this.data[i] = r, n && (this.reservedBit[i] = !0)
        }, i.prototype.get = function(e, t) {
            return this.data[e * this.size + t]
        }, i.prototype.xor = function(e, t, r) {
            this.data[e * this.size + t] ^= r
        }, i.prototype.isReserved = function(e, t) {
            return this.reservedBit[e * this.size + t]
        }, e.exports = i
    }, function(e, t, r) {
        var n = r(622).getSymbolSize;
        t.getRowColCoords = function(e) {
            if (1 === e) return [];
            for (var t = Math.floor(e / 7) + 2, r = n(e), i = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)), o = [r - 7], a = 1; a < t - 1; a++) o[a] = o[a - 1] - i;
            return o.push(6), o.reverse()
        }, t.getPositions = function(e) {
            for (var r = [], n = t.getRowColCoords(e), i = n.length, o = 0; o < i; o++)
                for (var a = 0; a < i; a++) 0 === o && 0 === a || 0 === o && a === i - 1 || o === i - 1 && 0 === a || r.push([n[o], n[a]]);
            return r
        }
    }, function(e, t, r) {
        var n = r(622).getSymbolSize;
        t.getPositions = function(e) {
            var t = n(e);
            return [
                [0, 0],
                [t - 7, 0],
                [0, t - 7]
            ]
        }
    }, function(e, t) {
        t.Patterns = {
            PATTERN000: 0,
            PATTERN001: 1,
            PATTERN010: 2,
            PATTERN011: 3,
            PATTERN100: 4,
            PATTERN101: 5,
            PATTERN110: 6,
            PATTERN111: 7
        };
        var r = 3,
            n = 3,
            i = 40,
            o = 10;

        function a(e, r, n) {
            switch (e) {
                case t.Patterns.PATTERN000:
                    return (r + n) % 2 === 0;
                case t.Patterns.PATTERN001:
                    return r % 2 === 0;
                case t.Patterns.PATTERN010:
                    return n % 3 === 0;
                case t.Patterns.PATTERN011:
                    return (r + n) % 3 === 0;
                case t.Patterns.PATTERN100:
                    return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 === 0;
                case t.Patterns.PATTERN101:
                    return r * n % 2 + r * n % 3 === 0;
                case t.Patterns.PATTERN110:
                    return (r * n % 2 + r * n % 3) % 2 === 0;
                case t.Patterns.PATTERN111:
                    return (r * n % 3 + (r + n) % 2) % 2 === 0;
                default:
                    throw new Error("bad maskPattern:" + e)
            }
        }
        t.isValid = function(e) {
            return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
        }, t.from = function(e) {
            return t.isValid(e) ? parseInt(e, 10) : void 0
        }, t.getPenaltyN1 = function(e) {
            for (var t = e.size, n = 0, i = 0, o = 0, a = null, s = null, u = 0; u < t; u++) {
                i = o = 0, a = s = null;
                for (var c = 0; c < t; c++) {
                    var f = e.get(u, c);
                    f === a ? i++ : (i >= 5 && (n += r + (i - 5)), a = f, i = 1), (f = e.get(c, u)) === s ? o++ : (o >= 5 && (n += r + (o - 5)), s = f, o = 1)
                }
                i >= 5 && (n += r + (i - 5)), o >= 5 && (n += r + (o - 5))
            }
            return n
        }, t.getPenaltyN2 = function(e) {
            for (var t = e.size, r = 0, i = 0; i < t - 1; i++)
                for (var o = 0; o < t - 1; o++) {
                    var a = e.get(i, o) + e.get(i, o + 1) + e.get(i + 1, o) + e.get(i + 1, o + 1);
                    4 !== a && 0 !== a || r++
                }
            return r * n
        }, t.getPenaltyN3 = function(e) {
            for (var t = e.size, r = 0, n = 0, o = 0, a = 0; a < t; a++) {
                n = o = 0;
                for (var s = 0; s < t; s++) n = n << 1 & 2047 | e.get(a, s), s >= 10 && (1488 === n || 93 === n) && r++, o = o << 1 & 2047 | e.get(s, a), s >= 10 && (1488 === o || 93 === o) && r++
            }
            return r * i
        }, t.getPenaltyN4 = function(e) {
            for (var t = 0, r = e.data.length, n = 0; n < r; n++) t += e.data[n];
            return Math.abs(Math.ceil(100 * t / r / 5) - 10) * o
        }, t.applyMask = function(e, t) {
            for (var r = t.size, n = 0; n < r; n++)
                for (var i = 0; i < r; i++) t.isReserved(i, n) || t.xor(i, n, a(e, i, n))
        }, t.getBestMask = function(e, r) {
            for (var n = Object.keys(t.Patterns).length, i = 0, o = 1 / 0, a = 0; a < n; a++) {
                r(a), t.applyMask(a, e);
                var s = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                t.applyMask(a, e), s < o && (o = s, i = a)
            }
            return i
        }
    }, function(e, t, r) {
        var n = r(636),
            i = r(1009),
            o = r(321).Buffer;

        function a(e) {
            this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
        }
        a.prototype.initialize = function(e) {
            this.degree = e, this.genPoly = i.generateECPolynomial(this.degree)
        }, a.prototype.encode = function(e) {
            if (!this.genPoly) throw new Error("Encoder not initialized");
            var t = n.alloc(this.degree),
                r = o.concat([e, t], e.length + this.degree),
                a = i.mod(r, this.genPoly),
                s = this.degree - a.length;
            if (s > 0) {
                var u = n.alloc(this.degree);
                return a.copy(u, s), u
            }
            return a
        }, e.exports = a
    }, function(e, t, r) {
        var n = r(636),
            i = r(1010);
        t.mul = function(e, t) {
            for (var r = n.alloc(e.length + t.length - 1), o = 0; o < e.length; o++)
                for (var a = 0; a < t.length; a++) r[o + a] ^= i.mul(e[o], t[a]);
            return r
        }, t.mod = function(e, t) {
            for (var r = n.from(e); r.length - t.length >= 0;) {
                for (var o = r[0], a = 0; a < t.length; a++) r[a] ^= i.mul(t[a], o);
                for (var s = 0; s < r.length && 0 === r[s];) s++;
                r = r.slice(s)
            }
            return r
        }, t.generateECPolynomial = function(e) {
            for (var r = n.from([1]), o = 0; o < e; o++) r = t.mul(r, [1, i.exp(o)]);
            return r
        }
    }, function(e, t, r) {
        var n = r(636),
            i = n.alloc(512),
            o = n.alloc(256);
        ! function() {
            for (var e = 1, t = 0; t < 255; t++) i[t] = e, o[e] = t, 256 & (e <<= 1) && (e ^= 285);
            for (t = 255; t < 512; t++) i[t] = i[t - 255]
        }(), t.log = function(e) {
            if (e < 1) throw new Error("log(" + e + ")");
            return o[e]
        }, t.exp = function(e) {
            return i[e]
        }, t.mul = function(e, t) {
            return 0 === e || 0 === t ? 0 : i[o[e] + o[t]]
        }
    }, function(e, t, r) {
        var n = r(622),
            i = r(820),
            o = r(716),
            a = r(623),
            s = r(821),
            u = r(715),
            c = n.getBCHDigit(7973);

        function f(e, t) {
            return a.getCharCountIndicator(e, t) + 4
        }

        function l(e, t) {
            var r = 0;
            return e.forEach((function(e) {
                var n = f(e.mode, t);
                r += n + e.getBitsLength()
            })), r
        }
        t.from = function(e, t) {
            return s.isValid(e) ? parseInt(e, 10) : t
        }, t.getCapacity = function(e, t, r) {
            if (!s.isValid(e)) throw new Error("Invalid QR Code version");
            "undefined" === typeof r && (r = a.BYTE);
            var o = 8 * (n.getSymbolTotalCodewords(e) - i.getTotalCodewordsCount(e, t));
            if (r === a.MIXED) return o;
            var u = o - f(r, e);
            switch (r) {
                case a.NUMERIC:
                    return Math.floor(u / 10 * 3);
                case a.ALPHANUMERIC:
                    return Math.floor(u / 11 * 2);
                case a.KANJI:
                    return Math.floor(u / 13);
                case a.BYTE:
                default:
                    return Math.floor(u / 8)
            }
        }, t.getBestVersionForData = function(e, r) {
            var n, i = o.from(r, o.M);
            if (u(e)) {
                if (e.length > 1) return function(e, r) {
                    for (var n = 1; n <= 40; n++)
                        if (l(e, n) <= t.getCapacity(n, r, a.MIXED)) return n
                }(e, i);
                if (0 === e.length) return 1;
                n = e[0]
            } else n = e;
            return function(e, r, n) {
                for (var i = 1; i <= 40; i++)
                    if (r <= t.getCapacity(i, n, e)) return i
            }(n.mode, n.getLength(), i)
        }, t.getEncodedBits = function(e) {
            if (!s.isValid(e) || e < 7) throw new Error("Invalid QR Code version");
            for (var t = e << 12; n.getBCHDigit(t) - c >= 0;) t ^= 7973 << n.getBCHDigit(t) - c;
            return e << 12 | t
        }
    }, function(e, t, r) {
        var n = r(622),
            i = n.getBCHDigit(1335);
        t.getEncodedBits = function(e, t) {
            for (var r = e.bit << 3 | t, o = r << 10; n.getBCHDigit(o) - i >= 0;) o ^= 1335 << n.getBCHDigit(o) - i;
            return 21522 ^ (r << 10 | o)
        }
    }, function(e, t, r) {
        var n = r(623),
            i = r(1014),
            o = r(1015),
            a = r(1016),
            s = r(1017),
            u = r(822),
            c = r(622),
            f = r(1018);

        function l(e) {
            return unescape(encodeURIComponent(e)).length
        }

        function h(e, t, r) {
            for (var n, i = []; null !== (n = e.exec(r));) i.push({
                data: n[0],
                index: n.index,
                mode: t,
                length: n[0].length
            });
            return i
        }

        function d(e) {
            var t, r, i = h(u.NUMERIC, n.NUMERIC, e),
                o = h(u.ALPHANUMERIC, n.ALPHANUMERIC, e);
            return c.isKanjiModeEnabled() ? (t = h(u.BYTE, n.BYTE, e), r = h(u.KANJI, n.KANJI, e)) : (t = h(u.BYTE_KANJI, n.BYTE, e), r = []), i.concat(o, t, r).sort((function(e, t) {
                return e.index - t.index
            })).map((function(e) {
                return {
                    data: e.data,
                    mode: e.mode,
                    length: e.length
                }
            }))
        }

        function p(e, t) {
            switch (t) {
                case n.NUMERIC:
                    return i.getBitsLength(e);
                case n.ALPHANUMERIC:
                    return o.getBitsLength(e);
                case n.KANJI:
                    return s.getBitsLength(e);
                case n.BYTE:
                    return a.getBitsLength(e)
            }
        }

        function v(e, t) {
            var r, u = n.getBestModeForData(e);
            if ((r = n.from(t, u)) !== n.BYTE && r.bit < u.bit) throw new Error('"' + e + '" cannot be encoded with mode ' + n.toString(r) + ".\n Suggested mode is: " + n.toString(u));
            switch (r !== n.KANJI || c.isKanjiModeEnabled() || (r = n.BYTE), r) {
                case n.NUMERIC:
                    return new i(e);
                case n.ALPHANUMERIC:
                    return new o(e);
                case n.KANJI:
                    return new s(e);
                case n.BYTE:
                    return new a(e)
            }
        }
        t.fromArray = function(e) {
            return e.reduce((function(e, t) {
                return "string" === typeof t ? e.push(v(t, null)) : t.data && e.push(v(t.data, t.mode)), e
            }), [])
        }, t.fromString = function(e, r) {
            for (var i = function(e, t) {
                    for (var r = {}, i = {
                            start: {}
                        }, o = ["start"], a = 0; a < e.length; a++) {
                        for (var s = e[a], u = [], c = 0; c < s.length; c++) {
                            var f = s[c],
                                l = "" + a + c;
                            u.push(l), r[l] = {
                                node: f,
                                lastCount: 0
                            }, i[l] = {};
                            for (var h = 0; h < o.length; h++) {
                                var d = o[h];
                                r[d] && r[d].node.mode === f.mode ? (i[d][l] = p(r[d].lastCount + f.length, f.mode) - p(r[d].lastCount, f.mode), r[d].lastCount += f.length) : (r[d] && (r[d].lastCount = f.length), i[d][l] = p(f.length, f.mode) + 4 + n.getCharCountIndicator(f.mode, t))
                            }
                        }
                        o = u
                    }
                    for (h = 0; h < o.length; h++) i[o[h]].end = 0;
                    return {
                        map: i,
                        table: r
                    }
                }(function(e) {
                    for (var t = [], r = 0; r < e.length; r++) {
                        var i = e[r];
                        switch (i.mode) {
                            case n.NUMERIC:
                                t.push([i, {
                                    data: i.data,
                                    mode: n.ALPHANUMERIC,
                                    length: i.length
                                }, {
                                    data: i.data,
                                    mode: n.BYTE,
                                    length: i.length
                                }]);
                                break;
                            case n.ALPHANUMERIC:
                                t.push([i, {
                                    data: i.data,
                                    mode: n.BYTE,
                                    length: i.length
                                }]);
                                break;
                            case n.KANJI:
                                t.push([i, {
                                    data: i.data,
                                    mode: n.BYTE,
                                    length: l(i.data)
                                }]);
                                break;
                            case n.BYTE:
                                t.push([{
                                    data: i.data,
                                    mode: n.BYTE,
                                    length: l(i.data)
                                }])
                        }
                    }
                    return t
                }(d(e, c.isKanjiModeEnabled())), r), o = f.find_path(i.map, "start", "end"), a = [], s = 1; s < o.length - 1; s++) a.push(i.table[o[s]].node);
            return t.fromArray(function(e) {
                return e.reduce((function(e, t) {
                    var r = e.length - 1 >= 0 ? e[e.length - 1] : null;
                    return r && r.mode === t.mode ? (e[e.length - 1].data += t.data, e) : (e.push(t), e)
                }), [])
            }(a))
        }, t.rawSplit = function(e) {
            return t.fromArray(d(e, c.isKanjiModeEnabled()))
        }
    }, function(e, t, r) {
        var n = r(623);

        function i(e) {
            this.mode = n.NUMERIC, this.data = e.toString()
        }
        i.getBitsLength = function(e) {
            return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
        }, i.prototype.getLength = function() {
            return this.data.length
        }, i.prototype.getBitsLength = function() {
            return i.getBitsLength(this.data.length)
        }, i.prototype.write = function(e) {
            var t, r, n;
            for (t = 0; t + 3 <= this.data.length; t += 3) r = this.data.substr(t, 3), n = parseInt(r, 10), e.put(n, 10);
            var i = this.data.length - t;
            i > 0 && (r = this.data.substr(t), n = parseInt(r, 10), e.put(n, 3 * i + 1))
        }, e.exports = i
    }, function(e, t, r) {
        var n = r(623),
            i = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

        function o(e) {
            this.mode = n.ALPHANUMERIC, this.data = e
        }
        o.getBitsLength = function(e) {
            return 11 * Math.floor(e / 2) + e % 2 * 6
        }, o.prototype.getLength = function() {
            return this.data.length
        }, o.prototype.getBitsLength = function() {
            return o.getBitsLength(this.data.length)
        }, o.prototype.write = function(e) {
            var t;
            for (t = 0; t + 2 <= this.data.length; t += 2) {
                var r = 45 * i.indexOf(this.data[t]);
                r += i.indexOf(this.data[t + 1]), e.put(r, 11)
            }
            this.data.length % 2 && e.put(i.indexOf(this.data[t]), 6)
        }, e.exports = o
    }, function(e, t, r) {
        var n = r(636),
            i = r(623);

        function o(e) {
            this.mode = i.BYTE, this.data = n.from(e)
        }
        o.getBitsLength = function(e) {
            return 8 * e
        }, o.prototype.getLength = function() {
            return this.data.length
        }, o.prototype.getBitsLength = function() {
            return o.getBitsLength(this.data.length)
        }, o.prototype.write = function(e) {
            for (var t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8)
        }, e.exports = o
    }, function(e, t, r) {
        var n = r(623),
            i = r(622);

        function o(e) {
            this.mode = n.KANJI, this.data = e
        }
        o.getBitsLength = function(e) {
            return 13 * e
        }, o.prototype.getLength = function() {
            return this.data.length
        }, o.prototype.getBitsLength = function() {
            return o.getBitsLength(this.data.length)
        }, o.prototype.write = function(e) {
            var t;
            for (t = 0; t < this.data.length; t++) {
                var r = i.toSJIS(this.data[t]);
                if (r >= 33088 && r <= 40956) r -= 33088;
                else {
                    if (!(r >= 57408 && r <= 60351)) throw new Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                    r -= 49472
                }
                r = 192 * (r >>> 8 & 255) + (255 & r), e.put(r, 13)
            }
        }, e.exports = o
    }, function(e, t, r) {
        "use strict";
        var n = {
            single_source_shortest_paths: function(e, t, r) {
                var i = {},
                    o = {};
                o[t] = 0;
                var a, s, u, c, f, l, h, d = n.PriorityQueue.make();
                for (d.push(t, 0); !d.empty();)
                    for (u in s = (a = d.pop()).value, c = a.cost, f = e[s] || {}) f.hasOwnProperty(u) && (l = c + f[u], h = o[u], ("undefined" === typeof o[u] || h > l) && (o[u] = l, d.push(u, l), i[u] = s));
                if ("undefined" !== typeof r && "undefined" === typeof o[r]) {
                    var p = ["Could not find a path from ", t, " to ", r, "."].join("");
                    throw new Error(p)
                }
                return i
            },
            extract_shortest_path_from_predecessor_list: function(e, t) {
                for (var r = [], n = t; n;) r.push(n), e[n], n = e[n];
                return r.reverse(), r
            },
            find_path: function(e, t, r) {
                var i = n.single_source_shortest_paths(e, t, r);
                return n.extract_shortest_path_from_predecessor_list(i, r)
            },
            PriorityQueue: {
                make: function(e) {
                    var t, r = n.PriorityQueue,
                        i = {};
                    for (t in e = e || {}, r) r.hasOwnProperty(t) && (i[t] = r[t]);
                    return i.queue = [], i.sorter = e.sorter || r.default_sorter, i
                },
                default_sorter: function(e, t) {
                    return e.cost - t.cost
                },
                push: function(e, t) {
                    var r = {
                        value: e,
                        cost: t
                    };
                    this.queue.push(r), this.queue.sort(this.sorter)
                },
                pop: function() {
                    return this.queue.shift()
                },
                empty: function() {
                    return 0 === this.queue.length
                }
            }
        };
        e.exports = n
    }, function(e, t, r) {
        var n = r(823);
        t.render = function(e, t, r) {
            var i = r,
                o = t;
            "undefined" !== typeof i || t && t.getContext || (i = t, t = void 0), t || (o = function() {
                try {
                    return document.createElement("canvas")
                } catch (e) {
                    throw new Error("You need to specify a canvas element")
                }
            }()), i = n.getOptions(i);
            var a = n.getImageWidth(e.modules.size, i),
                s = o.getContext("2d"),
                u = s.createImageData(a, a);
            return n.qrToImageData(u.data, e, i),
                function(e, t, r) {
                    e.clearRect(0, 0, t.width, t.height), t.style || (t.style = {}), t.height = r, t.width = r, t.style.height = r + "px", t.style.width = r + "px"
                }(s, o, a), s.putImageData(u, 0, 0), o
        }, t.renderToDataURL = function(e, r, n) {
            var i = n;
            "undefined" !== typeof i || r && r.getContext || (i = r, r = void 0), i || (i = {});
            var o = t.render(e, r, i),
                a = i.type || "image/png",
                s = i.rendererOpts || {};
            return o.toDataURL(a, s.quality)
        }
    }, function(e, t, r) {
        var n = r(823);

        function i(e, t) {
            var r = e.a / 255,
                n = t + '="' + e.hex + '"';
            return r < 1 ? n + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : n
        }

        function o(e, t, r) {
            var n = e + t;
            return "undefined" !== typeof r && (n += " " + r), n
        }
        t.render = function(e, t, r) {
            var a = n.getOptions(t),
                s = e.modules.size,
                u = e.modules.data,
                c = s + 2 * a.margin,
                f = a.color.light.a ? "<path " + i(a.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
                l = "<path " + i(a.color.dark, "stroke") + ' d="' + function(e, t, r) {
                    for (var n = "", i = 0, a = !1, s = 0, u = 0; u < e.length; u++) {
                        var c = Math.floor(u % t),
                            f = Math.floor(u / t);
                        c || a || (a = !0), e[u] ? (s++, u > 0 && c > 0 && e[u - 1] || (n += a ? o("M", c + r, .5 + f + r) : o("m", i, 0), i = 0, a = !1), c + 1 < t && e[u + 1] || (n += o("h", s), s = 0)) : i++
                    }
                    return n
                }(u, s, a.margin) + '"/>',
                h = 'viewBox="0 0 ' + c + " " + c + '"',
                d = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + h + ' shape-rendering="crispEdges">' + f + l + "</svg>\n";
            return "function" === typeof r && r(null, d), d
        }
    }, function(e, t, r) {
        "use strict";
        var n = r(35),
            i = r(36),
            o = r(46),
            a = r(47);
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = r(602).__importDefault(r(1022)),
            u = r(1023),
            c = r(617).getFromWindow("XMLHttpRequest") || u.XMLHttpRequest,
            f = function(e) {
                o(r, e);
                var t = a(r);

                function r(e) {
                    var i;
                    return n(this, r), (i = t.call(this)).url = e, i
                }
                return i(r, [{
                    key: "formatError",
                    value: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : -1;
                        return {
                            error: {
                                message: t,
                                code: r
                            },
                            id: e.id,
                            jsonrpc: e.jsonrpc
                        }
                    }
                }, {
                    key: "send",
                    value: function(e, t) {
                        var r = this;
                        return new Promise((function(n) {
                            if ("eth_subscribe" === e.method) {
                                var i = r.formatError(e, "Subscriptions are not supported by this HTTP endpoint");
                                return r.emit("error", i), n(i)
                            }
                            var o = new c,
                                a = !1,
                                s = function(i, s) {
                                    if (!a)
                                        if (o.abort(), a = !0, t) t(i, s);
                                        else {
                                            var u = e.id,
                                                c = e.jsonrpc,
                                                f = i ? {
                                                    id: u,
                                                    jsonrpc: c,
                                                    error: {
                                                        message: i.message,
                                                        code: i.code
                                                    }
                                                } : {
                                                    id: u,
                                                    jsonrpc: c,
                                                    result: s
                                                };
                                            r.emit("payload", f), n(f)
                                        }
                                };
                            o.open("POST", r.url, !0), o.setRequestHeader("Content-Type", "application/json"), o.timeout = 6e4, o.onerror = s, o.ontimeout = s, o.onreadystatechange = function() {
                                if (4 === o.readyState) try {
                                    var e = JSON.parse(o.responseText);
                                    s(e.error, e.result)
                                } catch (t) {
                                    s(t)
                                }
                            }, o.send(JSON.stringify(e))
                        }))
                    }
                }]), r
            }(s.default);
        t.default = f
    }, function(e, t, r) {
        "use strict";
        var n = Object.prototype.hasOwnProperty,
            i = "~";

        function o() {}

        function a(e, t, r) {
            this.fn = e, this.context = t, this.once = r || !1
        }

        function s(e, t, r, n, o) {
            if ("function" !== typeof r) throw new TypeError("The listener must be a function");
            var s = new a(r, n || e, o),
                u = i ? i + t : t;
            return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], s] : e._events[u].push(s) : (e._events[u] = s, e._eventsCount++), e
        }

        function u(e, t) {
            0 === --e._eventsCount ? e._events = new o : delete e._events[t]
        }

        function c() {
            this._events = new o, this._eventsCount = 0
        }
        Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (i = !1)), c.prototype.eventNames = function() {
            var e, t, r = [];
            if (0 === this._eventsCount) return r;
            for (t in e = this._events) n.call(e, t) && r.push(i ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
        }, c.prototype.listeners = function(e) {
            var t = i ? i + e : e,
                r = this._events[t];
            if (!r) return [];
            if (r.fn) return [r.fn];
            for (var n = 0, o = r.length, a = new Array(o); n < o; n++) a[n] = r[n].fn;
            return a
        }, c.prototype.listenerCount = function(e) {
            var t = i ? i + e : e,
                r = this._events[t];
            return r ? r.fn ? 1 : r.length : 0
        }, c.prototype.emit = function(e, t, r, n, o, a) {
            var s = i ? i + e : e;
            if (!this._events[s]) return !1;
            var u, c, f = this._events[s],
                l = arguments.length;
            if (f.fn) {
                switch (f.once && this.removeListener(e, f.fn, void 0, !0), l) {
                    case 1:
                        return f.fn.call(f.context), !0;
                    case 2:
                        return f.fn.call(f.context, t), !0;
                    case 3:
                        return f.fn.call(f.context, t, r), !0;
                    case 4:
                        return f.fn.call(f.context, t, r, n), !0;
                    case 5:
                        return f.fn.call(f.context, t, r, n, o), !0;
                    case 6:
                        return f.fn.call(f.context, t, r, n, o, a), !0
                }
                for (c = 1, u = new Array(l - 1); c < l; c++) u[c - 1] = arguments[c];
                f.fn.apply(f.context, u)
            } else {
                var h, d = f.length;
                for (c = 0; c < d; c++) switch (f[c].once && this.removeListener(e, f[c].fn, void 0, !0), l) {
                    case 1:
                        f[c].fn.call(f[c].context);
                        break;
                    case 2:
                        f[c].fn.call(f[c].context, t);
                        break;
                    case 3:
                        f[c].fn.call(f[c].context, t, r);
                        break;
                    case 4:
                        f[c].fn.call(f[c].context, t, r, n);
                        break;
                    default:
                        if (!u)
                            for (h = 1, u = new Array(l - 1); h < l; h++) u[h - 1] = arguments[h];
                        f[c].fn.apply(f[c].context, u)
                }
            }
            return !0
        }, c.prototype.on = function(e, t, r) {
            return s(this, e, t, r, !1)
        }, c.prototype.once = function(e, t, r) {
            return s(this, e, t, r, !0)
        }, c.prototype.removeListener = function(e, t, r, n) {
            var o = i ? i + e : e;
            if (!this._events[o]) return this;
            if (!t) return u(this, o), this;
            var a = this._events[o];
            if (a.fn) a.fn !== t || n && !a.once || r && a.context !== r || u(this, o);
            else {
                for (var s = 0, c = [], f = a.length; s < f; s++)(a[s].fn !== t || n && !a[s].once || r && a[s].context !== r) && c.push(a[s]);
                c.length ? this._events[o] = 1 === c.length ? c[0] : c : u(this, o)
            }
            return this
        }, c.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = i ? i + e : e, this._events[t] && u(this, t)) : (this._events = new o, this._eventsCount = 0), this
        }, c.prototype.off = c.prototype.removeListener, c.prototype.addListener = c.prototype.on, c.prefixed = i, c.EventEmitter = c, e.exports = c
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
                value: !0
            }),
            function(e) {
                for (var r in e) t.hasOwnProperty(r) || (t[r] = e[r])
            }(r(1024));
        var n = r(717);
        t.XMLHttpRequestEventTarget = n.XMLHttpRequestEventTarget
    }, function(e, t, r) {
        "use strict";
        (function(e, n) {
            var i = this && this.__extends || function() {
                    var e = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    };
                    return function(t, r) {
                        function n() {
                            this.constructor = t
                        }
                        e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                    }
                }(),
                o = this && this.__assign || Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = r(824),
                s = r(1033),
                u = r(1034),
                c = r(672),
                f = r(1035),
                l = r(1036),
                h = r(717),
                d = r(1037),
                p = r(1038),
                v = function(t) {
                    function r(n) {
                        void 0 === n && (n = {});
                        var i = t.call(this) || this;
                        return i.UNSENT = r.UNSENT, i.OPENED = r.OPENED, i.HEADERS_RECEIVED = r.HEADERS_RECEIVED, i.LOADING = r.LOADING, i.DONE = r.DONE, i.onreadystatechange = null, i.readyState = r.UNSENT, i.response = null, i.responseText = "", i.responseType = "", i.status = 0, i.statusText = "", i.timeout = 0, i.upload = new d.XMLHttpRequestUpload, i.responseUrl = "", i.withCredentials = !1, i._method = null, i._url = null, i._sync = !1, i._headers = {}, i._loweredHeaders = {}, i._mimeOverride = null, i._request = null, i._response = null, i._responseParts = null, i._responseHeaders = null, i._aborting = null, i._error = null, i._loadedBytes = 0, i._totalBytes = 0, i._lengthComputable = !1, i._restrictedMethods = {
                            CONNECT: !0,
                            TRACE: !0,
                            TRACK: !0
                        }, i._restrictedHeaders = {
                            "accept-charset": !0,
                            "accept-encoding": !0,
                            "access-control-request-headers": !0,
                            "access-control-request-method": !0,
                            connection: !0,
                            "content-length": !0,
                            cookie: !0,
                            cookie2: !0,
                            date: !0,
                            dnt: !0,
                            expect: !0,
                            host: !0,
                            "keep-alive": !0,
                            origin: !0,
                            referer: !0,
                            te: !0,
                            trailer: !0,
                            "transfer-encoding": !0,
                            upgrade: !0,
                            "user-agent": !0,
                            via: !0
                        }, i._privateHeaders = {
                            "set-cookie": !0,
                            "set-cookie2": !0
                        }, i._userAgent = "Mozilla/5.0 (" + u.type() + " " + u.arch() + ") node.js/" + e.versions.node + " v8/" + e.versions.v8, i._anonymous = n.anon || !1, i
                    }
                    return i(r, t), r.prototype.open = function(e, t, n, i, o) {
                        if (void 0 === n && (n = !0), e = e.toUpperCase(), this._restrictedMethods[e]) throw new r.SecurityError("HTTP method " + e + " is not allowed in XHR");
                        var a = this._parseUrl(t, i, o);
                        this.readyState === r.HEADERS_RECEIVED || (this.readyState, r.LOADING), this._method = e, this._url = a, this._sync = !n, this._headers = {}, this._loweredHeaders = {}, this._mimeOverride = null, this._setReadyState(r.OPENED), this._request = null, this._response = null, this.status = 0, this.statusText = "", this._responseParts = [], this._responseHeaders = null, this._loadedBytes = 0, this._totalBytes = 0, this._lengthComputable = !1
                    }, r.prototype.setRequestHeader = function(e, t) {
                        if (this.readyState !== r.OPENED) throw new r.InvalidStateError("XHR readyState must be OPENED");
                        var n = e.toLowerCase();
                        this._restrictedHeaders[n] || /^sec-/.test(n) || /^proxy-/.test(n) ? console.warn('Refused to set unsafe header "' + e + '"') : (t = t.toString(), null != this._loweredHeaders[n] ? (e = this._loweredHeaders[n], this._headers[e] = this._headers[e] + ", " + t) : (this._loweredHeaders[n] = e, this._headers[e] = t))
                    }, r.prototype.send = function(e) {
                        if (this.readyState !== r.OPENED) throw new r.InvalidStateError("XHR readyState must be OPENED");
                        if (this._request) throw new r.InvalidStateError("send() already called");
                        switch (this._url.protocol) {
                            case "file:":
                                return this._sendFile(e);
                            case "http:":
                            case "https:":
                                return this._sendHttp(e);
                            default:
                                throw new r.NetworkError("Unsupported protocol " + this._url.protocol)
                        }
                    }, r.prototype.abort = function() {
                        null != this._request && (this._request.abort(), this._setError(), this._dispatchProgress("abort"), this._dispatchProgress("loadend"))
                    }, r.prototype.getResponseHeader = function(e) {
                        if (null == this._responseHeaders || null == e) return null;
                        var t = e.toLowerCase();
                        return this._responseHeaders.hasOwnProperty(t) ? this._responseHeaders[e.toLowerCase()] : null
                    }, r.prototype.getAllResponseHeaders = function() {
                        var e = this;
                        return null == this._responseHeaders ? "" : Object.keys(this._responseHeaders).map((function(t) {
                            return t + ": " + e._responseHeaders[t]
                        })).join("\r\n")
                    }, r.prototype.overrideMimeType = function(e) {
                        if (this.readyState === r.LOADING || this.readyState === r.DONE) throw new r.InvalidStateError("overrideMimeType() not allowed in LOADING or DONE");
                        this._mimeOverride = e.toLowerCase()
                    }, r.prototype.nodejsSet = function(e) {
                        if (this.nodejsHttpAgent = e.httpAgent || this.nodejsHttpAgent, this.nodejsHttpsAgent = e.httpsAgent || this.nodejsHttpsAgent, e.hasOwnProperty("baseUrl")) {
                            if (null != e.baseUrl)
                                if (!c.parse(e.baseUrl, !1, !0).protocol) throw new r.SyntaxError("baseUrl must be an absolute URL");
                            this.nodejsBaseUrl = e.baseUrl
                        }
                    }, r.nodejsSet = function(e) {
                        r.prototype.nodejsSet(e)
                    }, r.prototype._setReadyState = function(e) {
                        this.readyState = e, this.dispatchEvent(new f.ProgressEvent("readystatechange"))
                    }, r.prototype._sendFile = function(e) {
                        throw new Error("Protocol file: not implemented")
                    }, r.prototype._sendHttp = function(e) {
                        if (this._sync) throw new Error("Synchronous XHR processing not implemented");
                        !e || "GET" !== this._method && "HEAD" !== this._method ? e = e || "" : (console.warn("Discarding entity body for " + this._method + " requests"), e = null), this.upload._setData(e), this._finalizeHeaders(), this._sendHxxpRequest()
                    }, r.prototype._sendHxxpRequest = function() {
                        var e = this;
                        if (this.withCredentials) {
                            var t = r.cookieJar.getCookies(p.CookieAccessInfo(this._url.hostname, this._url.pathname, "https:" === this._url.protocol)).toValueString();
                            this._headers.cookie = this._headers.cookie2 = t
                        }
                        var n = "http:" === this._url.protocol ? [a, this.nodejsHttpAgent] : [s, this.nodejsHttpsAgent],
                            i = n[0],
                            o = n[1],
                            u = i.request.bind(i)({
                                hostname: this._url.hostname,
                                port: +this._url.port,
                                path: this._url.path,
                                auth: this._url.auth,
                                method: this._method,
                                headers: this._headers,
                                agent: o
                            });
                        this._request = u, this.timeout && u.setTimeout(this.timeout, (function() {
                            return e._onHttpTimeout(u)
                        })), u.on("response", (function(t) {
                            return e._onHttpResponse(u, t)
                        })), u.on("error", (function(t) {
                            return e._onHttpRequestError(u, t)
                        })), this.upload._startUpload(u), this._request === u && this._dispatchProgress("loadstart")
                    }, r.prototype._finalizeHeaders = function() {
                        this._headers = o({}, this._headers, {
                            Connection: "keep-alive",
                            Host: this._url.host,
                            "User-Agent": this._userAgent
                        }, this._anonymous ? {
                            Referer: "about:blank"
                        } : {}), this.upload._finalizeHeaders(this._headers, this._loweredHeaders)
                    }, r.prototype._onHttpResponse = function(e, t) {
                        var n = this;
                        if (this._request === e) {
                            if (this.withCredentials && (t.headers["set-cookie"] || t.headers["set-cookie2"]) && r.cookieJar.setCookies(t.headers["set-cookie"] || t.headers["set-cookie2"]), [301, 302, 303, 307, 308].indexOf(t.statusCode) >= 0) return this._url = this._parseUrl(t.headers.location), this._method = "GET", this._loweredHeaders["content-type"] && (delete this._headers[this._loweredHeaders["content-type"]], delete this._loweredHeaders["content-type"]), null != this._headers["Content-Type"] && delete this._headers["Content-Type"], delete this._headers["Content-Length"], this.upload._reset(), this._finalizeHeaders(), void this._sendHxxpRequest();
                            this._response = t, this._response.on("data", (function(e) {
                                return n._onHttpResponseData(t, e)
                            })), this._response.on("end", (function() {
                                return n._onHttpResponseEnd(t)
                            })), this._response.on("close", (function() {
                                return n._onHttpResponseClose(t)
                            })), this.responseUrl = this._url.href.split("#")[0], this.status = t.statusCode, this.statusText = a.STATUS_CODES[this.status], this._parseResponseHeaders(t);
                            var i = this._responseHeaders["content-length"] || "";
                            this._totalBytes = +i, this._lengthComputable = !!i, this._setReadyState(r.HEADERS_RECEIVED)
                        }
                    }, r.prototype._onHttpResponseData = function(e, t) {
                        this._response === e && (this._responseParts.push(new n(t)), this._loadedBytes += t.length, this.readyState !== r.LOADING && this._setReadyState(r.LOADING), this._dispatchProgress("progress"))
                    }, r.prototype._onHttpResponseEnd = function(e) {
                        this._response === e && (this._parseResponse(), this._request = null, this._response = null, this._setReadyState(r.DONE), this._dispatchProgress("load"), this._dispatchProgress("loadend"))
                    }, r.prototype._onHttpResponseClose = function(e) {
                        if (this._response === e) {
                            var t = this._request;
                            this._setError(), t.abort(), this._setReadyState(r.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend")
                        }
                    }, r.prototype._onHttpTimeout = function(e) {
                        this._request === e && (this._setError(), e.abort(), this._setReadyState(r.DONE), this._dispatchProgress("timeout"), this._dispatchProgress("loadend"))
                    }, r.prototype._onHttpRequestError = function(e, t) {
                        this._request === e && (this._setError(), e.abort(), this._setReadyState(r.DONE), this._dispatchProgress("error"), this._dispatchProgress("loadend"))
                    }, r.prototype._dispatchProgress = function(e) {
                        var t = new r.ProgressEvent(e);
                        t.lengthComputable = this._lengthComputable, t.loaded = this._loadedBytes, t.total = this._totalBytes, this.dispatchEvent(t)
                    }, r.prototype._setError = function() {
                        this._request = null, this._response = null, this._responseHeaders = null, this._responseParts = null
                    }, r.prototype._parseUrl = function(e, t, r) {
                        var n = null == this.nodejsBaseUrl ? e : c.resolve(this.nodejsBaseUrl, e),
                            i = c.parse(n, !1, !0);
                        i.hash = null;
                        var o = (i.auth || "").split(":"),
                            a = o[0],
                            s = o[1];
                        return (a || s || t || r) && (i.auth = (t || a || "") + ":" + (r || s || "")), i
                    }, r.prototype._parseResponseHeaders = function(e) {
                        for (var t in this._responseHeaders = {}, e.headers) {
                            var r = t.toLowerCase();
                            this._privateHeaders[r] || (this._responseHeaders[r] = e.headers[t])
                        }
                        null != this._mimeOverride && (this._responseHeaders["content-type"] = this._mimeOverride)
                    }, r.prototype._parseResponse = function() {
                        var e = n.concat(this._responseParts);
                        switch (this._responseParts = null, this.responseType) {
                            case "json":
                                this.responseText = null;
                                try {
                                    this.response = JSON.parse(e.toString("utf-8"))
                                } catch (o) {
                                    this.response = null
                                }
                                return;
                            case "buffer":
                                return this.responseText = null, void(this.response = e);
                            case "arraybuffer":
                                this.responseText = null;
                                for (var t = new ArrayBuffer(e.length), r = new Uint8Array(t), i = 0; i < e.length; i++) r[i] = e[i];
                                return void(this.response = t);
                            case "text":
                            default:
                                try {
                                    this.responseText = e.toString(this._parseResponseEncoding())
                                } catch (a) {
                                    this.responseText = e.toString("binary")
                                }
                                this.response = this.responseText
                        }
                    }, r.prototype._parseResponseEncoding = function() {
                        return /;\s*charset=(.*)$/.exec(this._responseHeaders["content-type"] || "")[1] || "utf-8"
                    }, r.ProgressEvent = f.ProgressEvent, r.InvalidStateError = l.InvalidStateError, r.NetworkError = l.NetworkError, r.SecurityError = l.SecurityError, r.SyntaxError = l.SyntaxError, r.XMLHttpRequestUpload = d.XMLHttpRequestUpload, r.UNSENT = 0, r.OPENED = 1, r.HEADERS_RECEIVED = 2, r.LOADING = 3, r.DONE = 4, r.cookieJar = p.CookieJar(), r
                }(h.XMLHttpRequestEventTarget);
            t.XMLHttpRequest = v, v.prototype.nodejsHttpAgent = a.globalAgent, v.prototype.nodejsHttpsAgent = s.globalAgent, v.prototype.nodejsBaseUrl = null
        }).call(this, r(111), r(321).Buffer)
    }, function(e, t, r) {
        (function(t, n, i) {
            var o = r(825),
                a = r(210),
                s = r(826),
                u = r(644),
                c = r(1026),
                f = s.IncomingMessage,
                l = s.readyStates;
            var h = e.exports = function(e) {
                var r, n = this;
                u.Writable.call(n), n._opts = e, n._body = [], n._headers = {}, e.auth && n.setHeader("Authorization", "Basic " + new t(e.auth).toString("base64")), Object.keys(e.headers).forEach((function(t) {
                    n.setHeader(t, e.headers[t])
                }));
                var i = !0;
                if ("disable-fetch" === e.mode || "requestTimeout" in e && !o.abortController) i = !1, r = !0;
                else if ("prefer-streaming" === e.mode) r = !1;
                else if ("allow-wrong-content-type" === e.mode) r = !o.overrideMimeType;
                else {
                    if (e.mode && "default" !== e.mode && "prefer-fast" !== e.mode) throw new Error("Invalid value for opts.mode");
                    r = !0
                }
                n._mode = function(e, t) {
                    return o.fetch && t ? "fetch" : o.mozchunkedarraybuffer ? "moz-chunked-arraybuffer" : o.msstream ? "ms-stream" : o.arraybuffer && e ? "arraybuffer" : o.vbArray && e ? "text:vbarray" : "text"
                }(r, i), n._fetchTimer = null, n.on("finish", (function() {
                    n._onFinish()
                }))
            };
            a(h, u.Writable), h.prototype.setHeader = function(e, t) {
                var r = e.toLowerCase(); - 1 === d.indexOf(r) && (this._headers[r] = {
                    name: e,
                    value: t
                })
            }, h.prototype.getHeader = function(e) {
                var t = this._headers[e.toLowerCase()];
                return t ? t.value : null
            }, h.prototype.removeHeader = function(e) {
                delete this._headers[e.toLowerCase()]
            }, h.prototype._onFinish = function() {
                var e = this;
                if (!e._destroyed) {
                    var r = e._opts,
                        a = e._headers,
                        s = null;
                    "GET" !== r.method && "HEAD" !== r.method && (s = o.arraybuffer ? c(t.concat(e._body)) : o.blobConstructor ? new n.Blob(e._body.map((function(e) {
                        return c(e)
                    })), {
                        type: (a["content-type"] || {}).value || ""
                    }) : t.concat(e._body).toString());
                    var u = [];
                    if (Object.keys(a).forEach((function(e) {
                            var t = a[e].name,
                                r = a[e].value;
                            Array.isArray(r) ? r.forEach((function(e) {
                                u.push([t, e])
                            })) : u.push([t, r])
                        })), "fetch" === e._mode) {
                        var f = null;
                        if (o.abortController) {
                            var h = new AbortController;
                            f = h.signal, e._fetchAbortController = h, "requestTimeout" in r && 0 !== r.requestTimeout && (e._fetchTimer = n.setTimeout((function() {
                                e.emit("requestTimeout"), e._fetchAbortController && e._fetchAbortController.abort()
                            }), r.requestTimeout))
                        }
                        n.fetch(e._opts.url, {
                            method: e._opts.method,
                            headers: u,
                            body: s || void 0,
                            mode: "cors",
                            credentials: r.withCredentials ? "include" : "same-origin",
                            signal: f
                        }).then((function(t) {
                            e._fetchResponse = t, e._connect()
                        }), (function(t) {
                            n.clearTimeout(e._fetchTimer), e._destroyed || e.emit("error", t)
                        }))
                    } else {
                        var d = e._xhr = new n.XMLHttpRequest;
                        try {
                            d.open(e._opts.method, e._opts.url, !0)
                        } catch (p) {
                            return void i.nextTick((function() {
                                e.emit("error", p)
                            }))
                        }
                        "responseType" in d && (d.responseType = e._mode.split(":")[0]), "withCredentials" in d && (d.withCredentials = !!r.withCredentials), "text" === e._mode && "overrideMimeType" in d && d.overrideMimeType("text/plain; charset=x-user-defined"), "requestTimeout" in r && (d.timeout = r.requestTimeout, d.ontimeout = function() {
                            e.emit("requestTimeout")
                        }), u.forEach((function(e) {
                            d.setRequestHeader(e[0], e[1])
                        })), e._response = null, d.onreadystatechange = function() {
                            switch (d.readyState) {
                                case l.LOADING:
                                case l.DONE:
                                    e._onXHRProgress()
                            }
                        }, "moz-chunked-arraybuffer" === e._mode && (d.onprogress = function() {
                            e._onXHRProgress()
                        }), d.onerror = function() {
                            e._destroyed || e.emit("error", new Error("XHR error"))
                        };
                        try {
                            d.send(s)
                        } catch (p) {
                            return void i.nextTick((function() {
                                e.emit("error", p)
                            }))
                        }
                    }
                }
            }, h.prototype._onXHRProgress = function() {
                var e = this;
                (function(e) {
                    try {
                        var t = e.status;
                        return null !== t && 0 !== t
                    } catch (r) {
                        return !1
                    }
                })(e._xhr) && !e._destroyed && (e._response || e._connect(), e._response._onXHRProgress())
            }, h.prototype._connect = function() {
                var e = this;
                e._destroyed || (e._response = new f(e._xhr, e._fetchResponse, e._mode, e._fetchTimer), e._response.on("error", (function(t) {
                    e.emit("error", t)
                })), e.emit("response", e._response))
            }, h.prototype._write = function(e, t, r) {
                this._body.push(e), r()
            }, h.prototype.abort = h.prototype.destroy = function() {
                var e = this;
                e._destroyed = !0, n.clearTimeout(e._fetchTimer), e._response && (e._response._destroyed = !0), e._xhr ? e._xhr.abort() : e._fetchAbortController && e._fetchAbortController.abort()
            }, h.prototype.end = function(e, t, r) {
                "function" === typeof e && (r = e, e = void 0), u.Writable.prototype.end.call(this, e, t, r)
            }, h.prototype.flushHeaders = function() {}, h.prototype.setTimeout = function() {}, h.prototype.setNoDelay = function() {}, h.prototype.setSocketKeepAlive = function() {};
            var d = ["accept-charset", "accept-encoding", "access-control-request-headers", "access-control-request-method", "connection", "content-length", "cookie", "cookie2", "date", "dnt", "expect", "host", "keep-alive", "origin", "referer", "te", "trailer", "transfer-encoding", "upgrade", "via"]
        }).call(this, r(321).Buffer, r(67), r(111))
    }, function(e, t, r) {
        var n = r(321).Buffer;
        e.exports = function(e) {
            if (e instanceof Uint8Array) {
                if (0 === e.byteOffset && e.byteLength === e.buffer.byteLength) return e.buffer;
                if ("function" === typeof e.buffer.slice) return e.buffer.slice(e.byteOffset, e.byteOffset + e.byteLength)
            }
            if (n.isBuffer(e)) {
                for (var t = new Uint8Array(e.length), r = e.length, i = 0; i < r; i++) t[i] = e[i];
                return t.buffer
            }
            throw new Error("Argument must be a Buffer")
        }
    }, function(e, t) {
        e.exports = {
            100: "Continue",
            101: "Switching Protocols",
            102: "Processing",
            200: "OK",
            201: "Created",
            202: "Accepted",
            203: "Non-Authoritative Information",
            204: "No Content",
            205: "Reset Content",
            206: "Partial Content",
            207: "Multi-Status",
            208: "Already Reported",
            226: "IM Used",
            300: "Multiple Choices",
            301: "Moved Permanently",
            302: "Found",
            303: "See Other",
            304: "Not Modified",
            305: "Use Proxy",
            307: "Temporary Redirect",
            308: "Permanent Redirect",
            400: "Bad Request",
            401: "Unauthorized",
            402: "Payment Required",
            403: "Forbidden",
            404: "Not Found",
            405: "Method Not Allowed",
            406: "Not Acceptable",
            407: "Proxy Authentication Required",
            408: "Request Timeout",
            409: "Conflict",
            410: "Gone",
            411: "Length Required",
            412: "Precondition Failed",
            413: "Payload Too Large",
            414: "URI Too Long",
            415: "Unsupported Media Type",
            416: "Range Not Satisfiable",
            417: "Expectation Failed",
            418: "I'm a teapot",
            421: "Misdirected Request",
            422: "Unprocessable Entity",
            423: "Locked",
            424: "Failed Dependency",
            425: "Unordered Collection",
            426: "Upgrade Required",
            428: "Precondition Required",
            429: "Too Many Requests",
            431: "Request Header Fields Too Large",
            451: "Unavailable For Legal Reasons",
            500: "Internal Server Error",
            501: "Not Implemented",
            502: "Bad Gateway",
            503: "Service Unavailable",
            504: "Gateway Timeout",
            505: "HTTP Version Not Supported",
            506: "Variant Also Negotiates",
            507: "Insufficient Storage",
            508: "Loop Detected",
            509: "Bandwidth Limit Exceeded",
            510: "Not Extended",
            511: "Network Authentication Required"
        }
    }, , , , , , function(e, t, r) {
        var n = r(824),
            i = r(672),
            o = e.exports;
        for (var a in n) n.hasOwnProperty(a) && (o[a] = n[a]);

        function s(e) {
            if ("string" === typeof e && (e = i.parse(e)), e.protocol || (e.protocol = "https:"), "https:" !== e.protocol) throw new Error('Protocol "' + e.protocol + '" not supported. Expected "https:"');
            return e
        }
        o.request = function(e, t) {
            return e = s(e), n.request.call(this, e, t)
        }, o.get = function(e, t) {
            return e = s(e), n.get.call(this, e, t)
        }
    }, function(e, t) {
        t.endianness = function() {
            return "LE"
        }, t.hostname = function() {
            return "undefined" !== typeof location ? location.hostname : ""
        }, t.loadavg = function() {
            return []
        }, t.uptime = function() {
            return 0
        }, t.freemem = function() {
            return Number.MAX_VALUE
        }, t.totalmem = function() {
            return Number.MAX_VALUE
        }, t.cpus = function() {
            return []
        }, t.type = function() {
            return "Browser"
        }, t.release = function() {
            return "undefined" !== typeof navigator ? navigator.appVersion : ""
        }, t.networkInterfaces = t.getNetworkInterfaces = function() {
            return {}
        }, t.arch = function() {
            return "javascript"
        }, t.platform = function() {
            return "browser"
        }, t.tmpdir = t.tmpDir = function() {
            return "/tmp"
        }, t.EOL = "\n", t.homedir = function() {
            return "/"
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            this.type = e, this.bubbles = !1, this.cancelable = !1, this.loaded = 0, this.lengthComputable = !1, this.total = 0
        };
        t.ProgressEvent = n
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__extends || function() {
            var e = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            };
            return function(t, r) {
                function n() {
                    this.constructor = t
                }
                e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
            }
        }();
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t
        }(Error);
        t.SecurityError = i;
        var o = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t
        }(Error);
        t.InvalidStateError = o;
        var a = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t
        }(Error);
        t.NetworkError = a;
        var s = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n(t, e), t
        }(Error);
        t.SyntaxError = s
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                };
                return function(t, r) {
                    function n() {
                        this.constructor = t
                    }
                    e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
                }
            }();
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function(t) {
                function r() {
                    var e = t.call(this) || this;
                    return e._contentType = null, e._body = null, e._reset(), e
                }
                return n(r, t), r.prototype._reset = function() {
                    this._contentType = null, this._body = null
                }, r.prototype._setData = function(t) {
                    if (null != t)
                        if ("string" === typeof t) 0 !== t.length && (this._contentType = "text/plain;charset=UTF-8"), this._body = new e(t, "utf-8");
                        else if (e.isBuffer(t)) this._body = t;
                    else if (t instanceof ArrayBuffer) {
                        for (var r = new e(t.byteLength), n = new Uint8Array(t), i = 0; i < t.byteLength; i++) r[i] = n[i];
                        this._body = r
                    } else {
                        if (!(t.buffer && t.buffer instanceof ArrayBuffer)) throw new Error("Unsupported send() data " + t);
                        r = new e(t.byteLength);
                        var o = t.byteOffset;
                        for (n = new Uint8Array(t.buffer), i = 0; i < t.byteLength; i++) r[i] = n[i + o];
                        this._body = r
                    }
                }, r.prototype._finalizeHeaders = function(e, t) {
                    this._contentType && !t["content-type"] && (e["Content-Type"] = this._contentType), this._body && (e["Content-Length"] = this._body.length.toString())
                }, r.prototype._startUpload = function(e) {
                    this._body && e.write(this._body), e.end()
                }, r
            }(r(717).XMLHttpRequestEventTarget);
            t.XMLHttpRequestUpload = i
        }).call(this, r(321).Buffer)
    }, function(e, t) {
        ! function() {
            "use strict";

            function e(t, r, n, i) {
                return this instanceof e ? (this.domain = t || void 0, this.path = r || "/", this.secure = !!n, this.script = !!i, this) : new e(t, r, n, i)
            }

            function r(e, t, n) {
                return e instanceof r ? e : this instanceof r ? (this.name = null, this.value = null, this.expiration_date = 1 / 0, this.path = String(n || "/"), this.explicit_path = !1, this.domain = t || null, this.explicit_domain = !1, this.secure = !1, this.noscript = !1, e && this.parse(e, t, n), this) : new r(e, t, n)
            }
            e.All = Object.freeze(Object.create(null)), t.CookieAccessInfo = e, t.Cookie = r, r.prototype.toString = function() {
                var e = [this.name + "=" + this.value];
                return this.expiration_date !== 1 / 0 && e.push("expires=" + new Date(this.expiration_date).toGMTString()), this.domain && e.push("domain=" + this.domain), this.path && e.push("path=" + this.path), this.secure && e.push("secure"), this.noscript && e.push("httponly"), e.join("; ")
            }, r.prototype.toValueString = function() {
                return this.name + "=" + this.value
            };
            var n = /[:](?=\s*[a-zA-Z0-9_\-]+\s*[=])/g;

            function i() {
                var e, t;
                return this instanceof i ? (e = Object.create(null), this.setCookie = function(n, i, o) {
                    var a, s;
                    if (a = (n = new r(n, i, o)).expiration_date <= Date.now(), void 0 !== e[n.name]) {
                        for (t = e[n.name], s = 0; s < t.length; s += 1)
                            if (t[s].collidesWith(n)) return a ? (t.splice(s, 1), 0 === t.length && delete e[n.name], !1) : (t[s] = n, n);
                        return !a && (t.push(n), n)
                    }
                    return !a && (e[n.name] = [n], e[n.name])
                }, this.getCookie = function(r, n) {
                    var i, o;
                    if (t = e[r])
                        for (o = 0; o < t.length; o += 1)
                            if ((i = t[o]).expiration_date <= Date.now()) 0 === t.length && delete e[i.name];
                            else if (i.matches(n)) return i
                }, this.getCookies = function(t) {
                    var r, n, i = [];
                    for (r in e)(n = this.getCookie(r, t)) && i.push(n);
                    return i.toString = function() {
                        return i.join(":")
                    }, i.toValueString = function() {
                        return i.map((function(e) {
                            return e.toValueString()
                        })).join(";")
                    }, i
                }, this) : new i
            }
            r.prototype.parse = function(e, t, n) {
                if (this instanceof r) {
                    var i, o = e.split(";").filter((function(e) {
                            return !!e
                        })),
                        a = o[0].match(/([^=]+)=([\s\S]*)/);
                    if (!a) return void console.warn("Invalid cookie header encountered. Header: '" + e + "'");
                    var s = a[1],
                        u = a[2];
                    if ("string" !== typeof s || 0 === s.length || "string" !== typeof u) return void console.warn("Unable to extract values from cookie header. Cookie: '" + e + "'");
                    for (this.name = s, this.value = u, i = 1; i < o.length; i += 1) switch (s = (a = o[i].match(/([^=]+)(?:=([\s\S]*))?/))[1].trim().toLowerCase(), u = a[2], s) {
                        case "httponly":
                            this.noscript = !0;
                            break;
                        case "expires":
                            this.expiration_date = u ? Number(Date.parse(u)) : 1 / 0;
                            break;
                        case "path":
                            this.path = u ? u.trim() : "", this.explicit_path = !0;
                            break;
                        case "domain":
                            this.domain = u ? u.trim() : "", this.explicit_domain = !!this.domain;
                            break;
                        case "secure":
                            this.secure = !0
                    }
                    return this.explicit_path || (this.path = n || "/"), this.explicit_domain || (this.domain = t), this
                }
                return (new r).parse(e, t, n)
            }, r.prototype.matches = function(t) {
                return t === e.All || !(this.noscript && t.script || this.secure && !t.secure || !this.collidesWith(t))
            }, r.prototype.collidesWith = function(e) {
                if (this.path && !e.path || this.domain && !e.domain) return !1;
                if (this.path && 0 !== e.path.indexOf(this.path)) return !1;
                if (this.explicit_path && 0 !== e.path.indexOf(this.path)) return !1;
                var t = e.domain && e.domain.replace(/^[\.]/, ""),
                    r = this.domain && this.domain.replace(/^[\.]/, "");
                if (r === t) return !0;
                if (r) {
                    if (!this.explicit_domain) return !1;
                    var n = t.indexOf(r);
                    return -1 !== n && n === t.length - r.length
                }
                return !0
            }, t.CookieJar = i, i.prototype.setCookies = function(e, t, i) {
                var o, a, s = [];
                for (e = (e = Array.isArray(e) ? e : e.split(n)).map((function(e) {
                        return new r(e, t, i)
                    })), o = 0; o < e.length; o += 1) a = e[o], this.setCookie(a, t, i) && s.push(a);
                return s
            }
        }()
    }, function(e, t, r) {
        var n = r(211).EventEmitter,
            i = r(213).inherits,
            o = r(648),
            a = r(831),
            s = r(1058),
            u = r(1083),
            c = r(1086),
            f = (r(840), r(721));

        function l(e) {
            var t = this;
            n.call(t), t.setMaxListeners(30), e = e || {};
            var r = {
                    sendAsync: t._handleAsync.bind(t)
                },
                i = e.blockTrackerProvider || r;
            t._blockTracker = e.blockTracker || new a({
                provider: i,
                pollingInterval: e.pollingInterval || 4e3,
                setSkipCacheFlag: !0
            }), t._ready = new c, t.currentBlock = null, t._providers = []
        }

        function h(e) {
            return {
                number: o.toBuffer(e.number),
                hash: o.toBuffer(e.hash),
                parentHash: o.toBuffer(e.parentHash),
                nonce: o.toBuffer(e.nonce),
                mixHash: o.toBuffer(e.mixHash),
                sha3Uncles: o.toBuffer(e.sha3Uncles),
                logsBloom: o.toBuffer(e.logsBloom),
                transactionsRoot: o.toBuffer(e.transactionsRoot),
                stateRoot: o.toBuffer(e.stateRoot),
                receiptsRoot: o.toBuffer(e.receiptRoot || e.receiptsRoot),
                miner: o.toBuffer(e.miner),
                difficulty: o.toBuffer(e.difficulty),
                totalDifficulty: o.toBuffer(e.totalDifficulty),
                size: o.toBuffer(e.size),
                extraData: o.toBuffer(e.extraData),
                gasLimit: o.toBuffer(e.gasLimit),
                gasUsed: o.toBuffer(e.gasUsed),
                timestamp: o.toBuffer(e.timestamp),
                transactions: e.transactions
            }
        }
        e.exports = l, i(l, n), l.prototype.start = function() {
            var e = this,
                t = this;
            t._ready.go(), t._blockTracker.on("latest", (function(r) {
                t._getBlockByNumberWithRetry(r, (function(r, n) {
                    if (r) e.emit("error", r);
                    else {
                        if (!n) return console.log(n), void e.emit("error", new Error("Could not find block"));
                        var i = h(n);
                        t._setCurrentBlock(i), t.emit("rawBlock", n), t.emit("latest", n)
                    }
                }))
            })), t._blockTracker.on("sync", t.emit.bind(t, "sync")), t._blockTracker.on("error", t.emit.bind(t, "error")), t._running = !0, t.emit("start")
        }, l.prototype.stop = function() {
            var e = this;
            e._blockTracker.removeAllListeners(), e._running = !1, e.emit("stop")
        }, l.prototype.isRunning = function() {
            return this._running
        }, l.prototype.addProvider = function(e, t) {
            "number" === typeof t ? this._providers.splice(t, 0, e) : this._providers.push(e), e.setEngine(this)
        }, l.prototype.removeProvider = function(e) {
            var t = this._providers.indexOf(e);
            if (t < 0) throw new Error("Provider not found.");
            this._providers.splice(t, 1)
        }, l.prototype.send = function(e) {
            throw new Error("Web3ProviderEngine does not support synchronous requests.")
        }, l.prototype.sendAsync = function(e, t) {
            var r = this;
            r._ready.await((function() {
                Array.isArray(e) ? s(e, r._handleAsync.bind(r), t) : r._handleAsync(e, t)
            }))
        }, l.prototype._getBlockByNumberWithRetry = function(e, t) {
            var r = this,
                n = 5;
            return void i();

            function i() {
                r._getBlockByNumber(e, o)
            }

            function o(e, r) {
                return e ? t(e) : r ? void t(null, r) : n > 0 ? (n--, void setTimeout((function() {
                    i()
                }), 1e3)) : void t(null, null)
            }
        }, l.prototype._getBlockByNumber = function(e, t) {
            var r = f({
                method: "eth_getBlockByNumber",
                params: [e, !1],
                skipCache: !0
            });
            this._handleAsync(r, (function(e, r) {
                return e ? t(e) : t(null, r.result)
            }))
        }, l.prototype._handleAsync = function(e, t) {
            var r = this,
                n = -1,
                i = null,
                o = null,
                a = [];

            function s(r, n) {
                o = r, i = n, u(a, (function(e, t) {
                    e ? e(o, i, t) : t()
                }), (function() {
                    var r = {
                        id: e.id,
                        jsonrpc: e.jsonrpc,
                        result: i
                    };
                    null != o ? (r.error = {
                        message: o.stack || o.message || o,
                        code: -32e3
                    }, t(o, r)) : t(null, r)
                }))
            }! function t(i) {
                if (n += 1, a.unshift(i), n >= r._providers.length) s(new Error('Request for method "' + e.method + '" not handled by any subprovider. Please check your subprovider configuration to ensure this method is handled.'));
                else try {
                    r._providers[n].handleRequest(e, t, s)
                } catch (o) {
                    s(o)
                }
            }()
        }, l.prototype._setCurrentBlock = function(e) {
            this.currentBlock = e, this.emit("block", e)
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.createHashFunction = function(t) {
                return function(r) {
                    var n = t();
                    return n.update(r), e.from(n.digest())
                }
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        e.exports = r(1042)(r(1045))
    }, function(e, t, r) {
        var n = r(1043),
            i = r(1044);
        e.exports = function(e) {
            var t = n(e),
                r = i(e);
            return function(e, n) {
                switch ("string" === typeof e ? e.toLowerCase() : e) {
                    case "keccak224":
                        return new t(1152, 448, null, 224, n);
                    case "keccak256":
                        return new t(1088, 512, null, 256, n);
                    case "keccak384":
                        return new t(832, 768, null, 384, n);
                    case "keccak512":
                        return new t(576, 1024, null, 512, n);
                    case "sha3-224":
                        return new t(1152, 448, 6, 224, n);
                    case "sha3-256":
                        return new t(1088, 512, 6, 256, n);
                    case "sha3-384":
                        return new t(832, 768, 6, 384, n);
                    case "sha3-512":
                        return new t(576, 1024, 6, 512, n);
                    case "shake128":
                        return new r(1344, 256, 31, n);
                    case "shake256":
                        return new r(1088, 512, 31, n);
                    default:
                        throw new Error("Invald algorithm: " + e)
                }
            }
        }
    }, function(e, t, r) {
        (function(t) {
            var n = r(35),
                i = r(36),
                o = r(46),
                a = r(47),
                s = r(643).Transform;
            e.exports = function(e) {
                return function(r) {
                    "use strict";
                    o(u, r);
                    var s = a(u);

                    function u(t, r, i, o, a) {
                        var c;
                        return n(this, u), (c = s.call(this, a))._rate = t, c._capacity = r, c._delimitedSuffix = i, c._hashBitLength = o, c._options = a, c._state = new e, c._state.initialize(t, r), c._finalized = !1, c
                    }
                    return i(u, [{
                        key: "_transform",
                        value: function(e, t, r) {
                            var n = null;
                            try {
                                this.update(e, t)
                            } catch (i) {
                                n = i
                            }
                            r(n)
                        }
                    }, {
                        key: "_flush",
                        value: function(e) {
                            var t = null;
                            try {
                                this.push(this.digest())
                            } catch (r) {
                                t = r
                            }
                            e(t)
                        }
                    }, {
                        key: "update",
                        value: function(e, r) {
                            if (!t.isBuffer(e) && "string" !== typeof e) throw new TypeError("Data must be a string or a buffer");
                            if (this._finalized) throw new Error("Digest already called");
                            return t.isBuffer(e) || (e = t.from(e, r)), this._state.absorb(e), this
                        }
                    }, {
                        key: "digest",
                        value: function(e) {
                            if (this._finalized) throw new Error("Digest already called");
                            this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
                            var t = this._state.squeeze(this._hashBitLength / 8);
                            return void 0 !== e && (t = t.toString(e)), this._resetState(), t
                        }
                    }, {
                        key: "_resetState",
                        value: function() {
                            return this._state.initialize(this._rate, this._capacity), this
                        }
                    }, {
                        key: "_clone",
                        value: function() {
                            var e = new u(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
                            return this._state.copy(e._state), e._finalized = this._finalized, e
                        }
                    }]), u
                }(s)
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        (function(t) {
            var n = r(35),
                i = r(36),
                o = r(46),
                a = r(47),
                s = r(643).Transform;
            e.exports = function(e) {
                return function(r) {
                    "use strict";
                    o(u, r);
                    var s = a(u);

                    function u(t, r, i, o) {
                        var a;
                        return n(this, u), (a = s.call(this, o))._rate = t, a._capacity = r, a._delimitedSuffix = i, a._options = o, a._state = new e, a._state.initialize(t, r), a._finalized = !1, a
                    }
                    return i(u, [{
                        key: "_transform",
                        value: function(e, t, r) {
                            var n = null;
                            try {
                                this.update(e, t)
                            } catch (i) {
                                n = i
                            }
                            r(n)
                        }
                    }, {
                        key: "_flush",
                        value: function() {}
                    }, {
                        key: "_read",
                        value: function(e) {
                            this.push(this.squeeze(e))
                        }
                    }, {
                        key: "update",
                        value: function(e, r) {
                            if (!t.isBuffer(e) && "string" !== typeof e) throw new TypeError("Data must be a string or a buffer");
                            if (this._finalized) throw new Error("Squeeze already called");
                            return t.isBuffer(e) || (e = t.from(e, r)), this._state.absorb(e), this
                        }
                    }, {
                        key: "squeeze",
                        value: function(e, t) {
                            this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
                            var r = this._state.squeeze(e);
                            return void 0 !== t && (r = r.toString(t)), r
                        }
                    }, {
                        key: "_resetState",
                        value: function() {
                            return this._state.initialize(this._rate, this._capacity), this
                        }
                    }, {
                        key: "_clone",
                        value: function() {
                            var e = new u(this._rate, this._capacity, this._delimitedSuffix, this._options);
                            return this._state.copy(e._state), e._finalized = this._finalized, e
                        }
                    }]), u
                }(s)
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        (function(t) {
            var n = r(1046);

            function i() {
                this.state = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], this.blockSize = null, this.count = 0, this.squeezing = !1
            }
            i.prototype.initialize = function(e, t) {
                for (var r = 0; r < 50; ++r) this.state[r] = 0;
                this.blockSize = e / 8, this.count = 0, this.squeezing = !1
            }, i.prototype.absorb = function(e) {
                for (var t = 0; t < e.length; ++t) this.state[~~(this.count / 4)] ^= e[t] << this.count % 4 * 8, this.count += 1, this.count === this.blockSize && (n.p1600(this.state), this.count = 0)
            }, i.prototype.absorbLastFewBits = function(e) {
                this.state[~~(this.count / 4)] ^= e << this.count % 4 * 8, 0 !== (128 & e) && this.count === this.blockSize - 1 && n.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << (this.blockSize - 1) % 4 * 8, n.p1600(this.state), this.count = 0, this.squeezing = !0
            }, i.prototype.squeeze = function(e) {
                this.squeezing || this.absorbLastFewBits(1);
                for (var r = t.alloc(e), i = 0; i < e; ++i) r[i] = this.state[~~(this.count / 4)] >>> this.count % 4 * 8 & 255, this.count += 1, this.count === this.blockSize && (n.p1600(this.state), this.count = 0);
                return r
            }, i.prototype.copy = function(e) {
                for (var t = 0; t < 50; ++t) e.state[t] = this.state[t];
                e.blockSize = this.blockSize, e.count = this.count, e.squeezing = this.squeezing
            }, e.exports = i
        }).call(this, r(321).Buffer)
    }, function(e, t) {
        var r = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
        t.p1600 = function(e) {
            for (var t = 0; t < 24; ++t) {
                var n = e[0] ^ e[10] ^ e[20] ^ e[30] ^ e[40],
                    i = e[1] ^ e[11] ^ e[21] ^ e[31] ^ e[41],
                    o = e[2] ^ e[12] ^ e[22] ^ e[32] ^ e[42],
                    a = e[3] ^ e[13] ^ e[23] ^ e[33] ^ e[43],
                    s = e[4] ^ e[14] ^ e[24] ^ e[34] ^ e[44],
                    u = e[5] ^ e[15] ^ e[25] ^ e[35] ^ e[45],
                    c = e[6] ^ e[16] ^ e[26] ^ e[36] ^ e[46],
                    f = e[7] ^ e[17] ^ e[27] ^ e[37] ^ e[47],
                    l = e[8] ^ e[18] ^ e[28] ^ e[38] ^ e[48],
                    h = e[9] ^ e[19] ^ e[29] ^ e[39] ^ e[49],
                    d = l ^ (o << 1 | a >>> 31),
                    p = h ^ (a << 1 | o >>> 31),
                    v = e[0] ^ d,
                    g = e[1] ^ p,
                    _ = e[10] ^ d,
                    m = e[11] ^ p,
                    y = e[20] ^ d,
                    w = e[21] ^ p,
                    b = e[30] ^ d,
                    E = e[31] ^ p,
                    x = e[40] ^ d,
                    k = e[41] ^ p;
                d = n ^ (s << 1 | u >>> 31), p = i ^ (u << 1 | s >>> 31);
                var S = e[2] ^ d,
                    R = e[3] ^ p,
                    A = e[12] ^ d,
                    M = e[13] ^ p,
                    T = e[22] ^ d,
                    O = e[23] ^ p,
                    C = e[32] ^ d,
                    P = e[33] ^ p,
                    N = e[42] ^ d,
                    I = e[43] ^ p;
                d = o ^ (c << 1 | f >>> 31), p = a ^ (f << 1 | c >>> 31);
                var L = e[4] ^ d,
                    B = e[5] ^ p,
                    H = e[14] ^ d,
                    U = e[15] ^ p,
                    j = e[24] ^ d,
                    D = e[25] ^ p,
                    q = e[34] ^ d,
                    K = e[35] ^ p,
                    z = e[44] ^ d,
                    F = e[45] ^ p;
                d = s ^ (l << 1 | h >>> 31), p = u ^ (h << 1 | l >>> 31);
                var W = e[6] ^ d,
                    G = e[7] ^ p,
                    V = e[16] ^ d,
                    J = e[17] ^ p,
                    Y = e[26] ^ d,
                    Z = e[27] ^ p,
                    X = e[36] ^ d,
                    Q = e[37] ^ p,
                    $ = e[46] ^ d,
                    ee = e[47] ^ p;
                d = c ^ (n << 1 | i >>> 31), p = f ^ (i << 1 | n >>> 31);
                var te = e[8] ^ d,
                    re = e[9] ^ p,
                    ne = e[18] ^ d,
                    ie = e[19] ^ p,
                    oe = e[28] ^ d,
                    ae = e[29] ^ p,
                    se = e[38] ^ d,
                    ue = e[39] ^ p,
                    ce = e[48] ^ d,
                    fe = e[49] ^ p,
                    le = v,
                    he = g,
                    de = m << 4 | _ >>> 28,
                    pe = _ << 4 | m >>> 28,
                    ve = y << 3 | w >>> 29,
                    ge = w << 3 | y >>> 29,
                    _e = E << 9 | b >>> 23,
                    me = b << 9 | E >>> 23,
                    ye = x << 18 | k >>> 14,
                    we = k << 18 | x >>> 14,
                    be = S << 1 | R >>> 31,
                    Ee = R << 1 | S >>> 31,
                    xe = M << 12 | A >>> 20,
                    ke = A << 12 | M >>> 20,
                    Se = T << 10 | O >>> 22,
                    Re = O << 10 | T >>> 22,
                    Ae = P << 13 | C >>> 19,
                    Me = C << 13 | P >>> 19,
                    Te = N << 2 | I >>> 30,
                    Oe = I << 2 | N >>> 30,
                    Ce = B << 30 | L >>> 2,
                    Pe = L << 30 | B >>> 2,
                    Ne = H << 6 | U >>> 26,
                    Ie = U << 6 | H >>> 26,
                    Le = D << 11 | j >>> 21,
                    Be = j << 11 | D >>> 21,
                    He = q << 15 | K >>> 17,
                    Ue = K << 15 | q >>> 17,
                    je = F << 29 | z >>> 3,
                    De = z << 29 | F >>> 3,
                    qe = W << 28 | G >>> 4,
                    Ke = G << 28 | W >>> 4,
                    ze = J << 23 | V >>> 9,
                    Fe = V << 23 | J >>> 9,
                    We = Y << 25 | Z >>> 7,
                    Ge = Z << 25 | Y >>> 7,
                    Ve = X << 21 | Q >>> 11,
                    Je = Q << 21 | X >>> 11,
                    Ye = ee << 24 | $ >>> 8,
                    Ze = $ << 24 | ee >>> 8,
                    Xe = te << 27 | re >>> 5,
                    Qe = re << 27 | te >>> 5,
                    $e = ne << 20 | ie >>> 12,
                    et = ie << 20 | ne >>> 12,
                    tt = ae << 7 | oe >>> 25,
                    rt = oe << 7 | ae >>> 25,
                    nt = se << 8 | ue >>> 24,
                    it = ue << 8 | se >>> 24,
                    ot = ce << 14 | fe >>> 18,
                    at = fe << 14 | ce >>> 18;
                e[0] = le ^ ~xe & Le, e[1] = he ^ ~ke & Be, e[10] = qe ^ ~$e & ve, e[11] = Ke ^ ~et & ge, e[20] = be ^ ~Ne & We, e[21] = Ee ^ ~Ie & Ge, e[30] = Xe ^ ~de & Se, e[31] = Qe ^ ~pe & Re, e[40] = Ce ^ ~ze & tt, e[41] = Pe ^ ~Fe & rt, e[2] = xe ^ ~Le & Ve, e[3] = ke ^ ~Be & Je, e[12] = $e ^ ~ve & Ae, e[13] = et ^ ~ge & Me, e[22] = Ne ^ ~We & nt, e[23] = Ie ^ ~Ge & it, e[32] = de ^ ~Se & He, e[33] = pe ^ ~Re & Ue, e[42] = ze ^ ~tt & _e, e[43] = Fe ^ ~rt & me, e[4] = Le ^ ~Ve & ot, e[5] = Be ^ ~Je & at, e[14] = ve ^ ~Ae & je, e[15] = ge ^ ~Me & De, e[24] = We ^ ~nt & ye, e[25] = Ge ^ ~it & we, e[34] = Se ^ ~He & Ye, e[35] = Re ^ ~Ue & Ze, e[44] = tt ^ ~_e & Te, e[45] = rt ^ ~me & Oe, e[6] = Ve ^ ~ot & le, e[7] = Je ^ ~at & he, e[16] = Ae ^ ~je & qe, e[17] = Me ^ ~De & Ke, e[26] = nt ^ ~ye & be, e[27] = it ^ ~we & Ee, e[36] = He ^ ~Ye & Xe, e[37] = Ue ^ ~Ze & Qe, e[46] = _e ^ ~Te & Ce, e[47] = me ^ ~Oe & Pe, e[8] = ot ^ ~le & xe, e[9] = at ^ ~he & ke, e[18] = je ^ ~qe & $e, e[19] = De ^ ~Ke & et, e[28] = ye ^ ~be & Ne, e[29] = we ^ ~Ee & Ie, e[38] = Ye ^ ~Xe & de, e[39] = Ze ^ ~Qe & pe, e[48] = Te ^ ~Ce & ze, e[49] = Oe ^ ~Pe & Fe, e[0] ^= r[2 * t], e[1] ^= r[2 * t + 1]
            }
        }
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            var n = r(828),
                i = r(1051),
                o = r(1052),
                a = function(e) {
                    return 32 === e.length && n.privateKeyVerify(Uint8Array.from(e))
                };
            e.exports = {
                privateKeyVerify: a,
                privateKeyExport: function(e, t) {
                    if (32 !== e.length) throw new RangeError("private key length is invalid");
                    var r = i.privateKeyExport(e, t);
                    return o.privateKeyExport(e, r, t)
                },
                privateKeyImport: function(e) {
                    if (null !== (e = o.privateKeyImport(e)) && 32 === e.length && a(e)) return e;
                    throw new Error("couldn't import from DER format")
                },
                privateKeyNegate: function(e) {
                    return t.from(n.privateKeyNegate(Uint8Array.from(e)))
                },
                privateKeyModInverse: function(e) {
                    if (32 !== e.length) throw new Error("private key length is invalid");
                    return t.from(i.privateKeyModInverse(Uint8Array.from(e)))
                },
                privateKeyTweakAdd: function(e, r) {
                    return t.from(n.privateKeyTweakAdd(Uint8Array.from(e), r))
                },
                privateKeyTweakMul: function(e, r) {
                    return t.from(n.privateKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r)))
                },
                publicKeyCreate: function(e, r) {
                    return t.from(n.publicKeyCreate(Uint8Array.from(e), r))
                },
                publicKeyConvert: function(e, r) {
                    return t.from(n.publicKeyConvert(Uint8Array.from(e), r))
                },
                publicKeyVerify: function(e) {
                    return (33 === e.length || 65 === e.length) && n.publicKeyVerify(Uint8Array.from(e))
                },
                publicKeyTweakAdd: function(e, r, i) {
                    return t.from(n.publicKeyTweakAdd(Uint8Array.from(e), Uint8Array.from(r), i))
                },
                publicKeyTweakMul: function(e, r, i) {
                    return t.from(n.publicKeyTweakMul(Uint8Array.from(e), Uint8Array.from(r), i))
                },
                publicKeyCombine: function(e, r) {
                    var i = [];
                    return e.forEach((function(e) {
                        i.push(Uint8Array.from(e))
                    })), t.from(n.publicKeyCombine(i, r))
                },
                signatureNormalize: function(e) {
                    return t.from(n.signatureNormalize(Uint8Array.from(e)))
                },
                signatureExport: function(e) {
                    return t.from(n.signatureExport(Uint8Array.from(e)))
                },
                signatureImport: function(e) {
                    return t.from(n.signatureImport(Uint8Array.from(e)))
                },
                signatureImportLax: function(e) {
                    if (0 === e.length) throw new RangeError("signature length is invalid");
                    var t = o.signatureImportLax(e);
                    if (null === t) throw new Error("couldn't parse DER signature");
                    return i.signatureImport(t)
                },
                sign: function(e, r, i) {
                    if (null === i) throw new TypeError("options should be an Object");
                    var o = void 0;
                    if (i) {
                        if (o = {}, null === i.data) throw new TypeError("options.data should be a Buffer");
                        if (i.data) {
                            if (32 !== i.data.length) throw new RangeError("options.data length is invalid");
                            o.data = new Uint8Array(i.data)
                        }
                        if (null === i.noncefn) throw new TypeError("options.noncefn should be a Function");
                        i.noncefn && (o.noncefn = function(e, r, n, o, a) {
                            var s = null != n ? t.from(n) : null,
                                u = null != o ? t.from(o) : null,
                                c = t.from("");
                            return i.noncefn && (c = i.noncefn(t.from(e), t.from(r), s, u, a)), Uint8Array.from(c)
                        })
                    }
                    var a = n.ecdsaSign(Uint8Array.from(e), Uint8Array.from(r), o);
                    return {
                        signature: t.from(a.signature),
                        recovery: a.recid
                    }
                },
                verify: function(e, t, r) {
                    return n.ecdsaVerify(Uint8Array.from(t), Uint8Array.from(e), r)
                },
                recover: function(e, r, i, o) {
                    return t.from(n.ecdsaRecover(Uint8Array.from(r), i, Uint8Array.from(e), o))
                },
                ecdh: function(e, r) {
                    return t.from(n.ecdh(Uint8Array.from(e), Uint8Array.from(r), {}))
                },
                ecdhUnsafe: function(e, r, n) {
                    if (33 !== e.length && 65 !== e.length) throw new RangeError("public key length is invalid");
                    if (32 !== r.length) throw new RangeError("private key length is invalid");
                    return t.from(i.ecdhUnsafe(Uint8Array.from(e), Uint8Array.from(r), n))
                }
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        var n = r(95),
            i = "Impossible case. Please create issue.",
            o = "The tweak was out of range or the resulted private key is invalid",
            a = "The tweak was out of range or equal to zero",
            s = "Unknow error on context randomization",
            u = "Private Key is invalid",
            c = "Public Key could not be parsed",
            f = "Public Key serialization error",
            l = "The sum of the public keys is not valid",
            h = "Signature could not be parsed",
            d = "The nonce generation function failed, or the private key was invalid",
            p = "Public key could not be recover",
            v = "Scalar was invalid (zero or overflow)";

        function g(e, t) {
            if (!e) throw new Error(t)
        }

        function _(e, t, r) {
            if (g(t instanceof Uint8Array, "Expected ".concat(e, " to be an Uint8Array")), void 0 !== r)
                if (Array.isArray(r)) {
                    var n = r.join(", "),
                        i = "Expected ".concat(e, " to be an Uint8Array with length [").concat(n, "]");
                    g(r.includes(t.length), i)
                } else {
                    var o = "Expected ".concat(e, " to be an Uint8Array with length ").concat(r);
                    g(t.length === r, o)
                }
        }

        function m(e) {
            g("Boolean" === w(e), "Expected compressed to be a Boolean")
        }

        function y() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function(e) {
                    return new Uint8Array(e)
                },
                t = arguments.length > 1 ? arguments[1] : void 0;
            return "function" === typeof e && (e = e(t)), _("output", e, t), e
        }

        function w(e) {
            return Object.prototype.toString.call(e).slice(8, -1)
        }
        e.exports = function(e) {
            return {
                contextRandomize: function(t) {
                    switch (g(null === t || t instanceof Uint8Array, "Expected seed to be an Uint8Array or null"), null !== t && _("seed", t, 32), e.contextRandomize(t)) {
                        case 1:
                            throw new Error(s)
                    }
                },
                privateKeyVerify: function(t) {
                    return _("private key", t, 32), 0 === e.privateKeyVerify(t)
                },
                privateKeyNegate: function(t) {
                    switch (_("private key", t, 32), e.privateKeyNegate(t)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(i)
                    }
                },
                privateKeyTweakAdd: function(t, r) {
                    switch (_("private key", t, 32), _("tweak", r, 32), e.privateKeyTweakAdd(t, r)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(o)
                    }
                },
                privateKeyTweakMul: function(t, r) {
                    switch (_("private key", t, 32), _("tweak", r, 32), e.privateKeyTweakMul(t, r)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(a)
                    }
                },
                publicKeyVerify: function(t) {
                    return _("public key", t, [33, 65]), 0 === e.publicKeyVerify(t)
                },
                publicKeyCreate: function(t) {
                    var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    switch (_("private key", t, 32), m(r), n = y(n, r ? 33 : 65), e.publicKeyCreate(n, t)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(u);
                        case 2:
                            throw new Error(f)
                    }
                },
                publicKeyConvert: function(t) {
                    var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    switch (_("public key", t, [33, 65]), m(r), n = y(n, r ? 33 : 65), e.publicKeyConvert(n, t)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(f)
                    }
                },
                publicKeyNegate: function(t) {
                    var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    switch (_("public key", t, [33, 65]), m(r), n = y(n, r ? 33 : 65), e.publicKeyNegate(n, t)) {
                        case 0:
                            return n;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(i);
                        case 3:
                            throw new Error(f)
                    }
                },
                publicKeyCombine: function(t) {
                    var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 ? arguments[2] : void 0;
                    g(Array.isArray(t), "Expected public keys to be an Array"), g(t.length > 0, "Expected public keys array will have more than zero items");
                    var o, a = n(t);
                    try {
                        for (a.s(); !(o = a.n()).done;) {
                            var s = o.value;
                            _("public key", s, [33, 65])
                        }
                    } catch (u) {
                        a.e(u)
                    } finally {
                        a.f()
                    }
                    switch (m(r), i = y(i, r ? 33 : 65), e.publicKeyCombine(i, t)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(l);
                        case 3:
                            throw new Error(f)
                    }
                },
                publicKeyTweakAdd: function(t, r) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    switch (_("public key", t, [33, 65]), _("tweak", r, 32), m(n), i = y(i, n ? 33 : 65), e.publicKeyTweakAdd(i, t, r)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(o)
                    }
                },
                publicKeyTweakMul: function(t, r) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    switch (_("public key", t, [33, 65]), _("tweak", r, 32), m(n), i = y(i, n ? 33 : 65), e.publicKeyTweakMul(i, t, r)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(a)
                    }
                },
                signatureNormalize: function(t) {
                    switch (_("signature", t, 64), e.signatureNormalize(t)) {
                        case 0:
                            return t;
                        case 1:
                            throw new Error(h)
                    }
                },
                signatureExport: function(t, r) {
                    _("signature", t, 64);
                    var n = {
                        output: r = y(r, 72),
                        outputlen: 72
                    };
                    switch (e.signatureExport(n, t)) {
                        case 0:
                            return r.slice(0, n.outputlen);
                        case 1:
                            throw new Error(h);
                        case 2:
                            throw new Error(i)
                    }
                },
                signatureImport: function(t, r) {
                    switch (_("signature", t), r = y(r, 64), e.signatureImport(r, t)) {
                        case 0:
                            return r;
                        case 1:
                            throw new Error(h);
                        case 2:
                            throw new Error(i)
                    }
                },
                ecdsaSign: function(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = arguments.length > 3 ? arguments[3] : void 0;
                    _("message", t, 32), _("private key", r, 32), g("Object" === w(n), "Expected options to be an Object"), void 0 !== n.data && _("options.data", n.data), void 0 !== n.noncefn && g("Function" === w(n.noncefn), "Expected options.noncefn to be a Function");
                    var a = {
                        signature: o = y(o, 64),
                        recid: null
                    };
                    switch (e.ecdsaSign(a, t, r, n.data, n.noncefn)) {
                        case 0:
                            return a;
                        case 1:
                            throw new Error(d);
                        case 2:
                            throw new Error(i)
                    }
                },
                ecdsaVerify: function(t, r, n) {
                    switch (_("signature", t, 64), _("message", r, 32), _("public key", n, [33, 65]), e.ecdsaVerify(t, r, n)) {
                        case 0:
                            return !0;
                        case 3:
                            return !1;
                        case 1:
                            throw new Error(h);
                        case 2:
                            throw new Error(c)
                    }
                },
                ecdsaRecover: function(t, r, n) {
                    var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        a = arguments.length > 4 ? arguments[4] : void 0;
                    switch (_("signature", t, 64), g("Number" === w(r) && r >= 0 && r <= 3, "Expected recovery id to be a Number within interval [0, 3]"), _("message", n, 32), m(o), a = y(a, o ? 33 : 65), e.ecdsaRecover(a, t, r, n)) {
                        case 0:
                            return a;
                        case 1:
                            throw new Error(h);
                        case 2:
                            throw new Error(p);
                        case 3:
                            throw new Error(i)
                    }
                },
                ecdh: function(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    switch (_("public key", t, [33, 65]), _("private key", r, 32), g("Object" === w(n), "Expected options to be an Object"), void 0 !== n.data && _("options.data", n.data), void 0 !== n.hashfn ? (g("Function" === w(n.hashfn), "Expected options.hashfn to be a Function"), void 0 !== n.xbuf && _("options.xbuf", n.xbuf, 32), void 0 !== n.ybuf && _("options.ybuf", n.ybuf, 32), _("output", i)) : i = y(i, 32), e.ecdh(i, t, r, n.data, n.hashfn, n.xbuf, n.ybuf)) {
                        case 0:
                            return i;
                        case 1:
                            throw new Error(c);
                        case 2:
                            throw new Error(v)
                    }
                }
            }
        }
    }, function(e, t, r) {
        var n = new(0, r(635).ec)("secp256k1"),
            i = n.curve,
            o = i.n.constructor;

        function a(e) {
            var t = e[0];
            switch (t) {
                case 2:
                case 3:
                    return 33 !== e.length ? null : function(e, t) {
                        var r = new o(t);
                        if (r.cmp(i.p) >= 0) return null;
                        var a = (r = r.toRed(i.red)).redSqr().redIMul(r).redIAdd(i.b).redSqrt();
                        return 3 === e !== a.isOdd() && (a = a.redNeg()), n.keyPair({
                            pub: {
                                x: r,
                                y: a
                            }
                        })
                    }(t, e.subarray(1, 33));
                case 4:
                case 6:
                case 7:
                    return 65 !== e.length ? null : function(e, t, r) {
                        var a = new o(t),
                            s = new o(r);
                        if (a.cmp(i.p) >= 0 || s.cmp(i.p) >= 0) return null;
                        if (a = a.toRed(i.red), s = s.toRed(i.red), (6 === e || 7 === e) && s.isOdd() !== (7 === e)) return null;
                        var u = a.redSqr().redIMul(a);
                        return s.redSqr().redISub(u.redIAdd(i.b)).isZero() ? n.keyPair({
                            pub: {
                                x: a,
                                y: s
                            }
                        }) : null
                    }(t, e.subarray(1, 33), e.subarray(33, 65));
                default:
                    return null
            }
        }

        function s(e, t) {
            for (var r = t.encode(null, 33 === e.length), n = 0; n < e.length; ++n) e[n] = r[n]
        }
        e.exports = {
            contextRandomize: function() {
                return 0
            },
            privateKeyVerify: function(e) {
                var t = new o(e);
                return t.cmp(i.n) < 0 && !t.isZero() ? 0 : 1
            },
            privateKeyNegate: function(e) {
                var t = new o(e),
                    r = i.n.sub(t).umod(i.n).toArrayLike(Uint8Array, "be", 32);
                return e.set(r), 0
            },
            privateKeyTweakAdd: function(e, t) {
                var r = new o(t);
                if (r.cmp(i.n) >= 0) return 1;
                if (r.iadd(new o(e)), r.cmp(i.n) >= 0 && r.isub(i.n), r.isZero()) return 1;
                var n = r.toArrayLike(Uint8Array, "be", 32);
                return e.set(n), 0
            },
            privateKeyTweakMul: function(e, t) {
                var r = new o(t);
                if (r.cmp(i.n) >= 0 || r.isZero()) return 1;
                r.imul(new o(e)), r.cmp(i.n) >= 0 && (r = r.umod(i.n));
                var n = r.toArrayLike(Uint8Array, "be", 32);
                return e.set(n), 0
            },
            publicKeyVerify: function(e) {
                return null === a(e) ? 1 : 0
            },
            publicKeyCreate: function(e, t) {
                var r = new o(t);
                return r.cmp(i.n) >= 0 || r.isZero() ? 1 : (s(e, n.keyFromPrivate(t).getPublic()), 0)
            },
            publicKeyConvert: function(e, t) {
                var r = a(t);
                return null === r ? 1 : (s(e, r.getPublic()), 0)
            },
            publicKeyNegate: function(e, t) {
                var r = a(t);
                if (null === r) return 1;
                var n = r.getPublic();
                return n.y = n.y.redNeg(), s(e, n), 0
            },
            publicKeyCombine: function(e, t) {
                for (var r = new Array(t.length), n = 0; n < t.length; ++n)
                    if (r[n] = a(t[n]), null === r[n]) return 1;
                for (var i = r[0].getPublic(), o = 1; o < r.length; ++o) i = i.add(r[o].pub);
                return i.isInfinity() ? 2 : (s(e, i), 0)
            },
            publicKeyTweakAdd: function(e, t, r) {
                var n = a(t);
                if (null === n) return 1;
                if ((r = new o(r)).cmp(i.n) >= 0) return 2;
                var u = n.getPublic().add(i.g.mul(r));
                return u.isInfinity() ? 2 : (s(e, u), 0)
            },
            publicKeyTweakMul: function(e, t, r) {
                var n = a(t);
                return null === n ? 1 : (r = new o(r)).cmp(i.n) >= 0 || r.isZero() ? 2 : (s(e, n.getPublic().mul(r)), 0)
            },
            signatureNormalize: function(e) {
                var t = new o(e.subarray(0, 32)),
                    r = new o(e.subarray(32, 64));
                return t.cmp(i.n) >= 0 || r.cmp(i.n) >= 0 ? 1 : (1 === r.cmp(n.nh) && e.set(i.n.sub(r).toArrayLike(Uint8Array, "be", 32), 32), 0)
            },
            signatureExport: function(e, t) {
                var r = t.subarray(0, 32),
                    n = t.subarray(32, 64);
                if (new o(r).cmp(i.n) >= 0) return 1;
                if (new o(n).cmp(i.n) >= 0) return 1;
                var a = e.output,
                    s = a.subarray(4, 37);
                s[0] = 0, s.set(r, 1);
                for (var u = 33, c = 0; u > 1 && 0 === s[c] && !(128 & s[c + 1]); --u, ++c);
                if (128 & (s = s.subarray(c))[0]) return 1;
                if (u > 1 && 0 === s[0] && !(128 & s[1])) return 1;
                var f = a.subarray(39, 72);
                f[0] = 0, f.set(n, 1);
                for (var l = 33, h = 0; l > 1 && 0 === f[h] && !(128 & f[h + 1]); --l, ++h);
                return 128 & (f = f.subarray(h))[0] || l > 1 && 0 === f[0] && !(128 & f[1]) ? 1 : (e.outputlen = 6 + u + l, a[0] = 48, a[1] = e.outputlen - 2, a[2] = 2, a[3] = s.length, a.set(s, 4), a[4 + u] = 2, a[5 + u] = f.length, a.set(f, 6 + u), 0)
            },
            signatureImport: function(e, t) {
                if (t.length < 8) return 1;
                if (t.length > 72) return 1;
                if (48 !== t[0]) return 1;
                if (t[1] !== t.length - 2) return 1;
                if (2 !== t[2]) return 1;
                var r = t[3];
                if (0 === r) return 1;
                if (5 + r >= t.length) return 1;
                if (2 !== t[4 + r]) return 1;
                var n = t[5 + r];
                if (0 === n) return 1;
                if (6 + r + n !== t.length) return 1;
                if (128 & t[4]) return 1;
                if (r > 1 && 0 === t[4] && !(128 & t[5])) return 1;
                if (128 & t[r + 6]) return 1;
                if (n > 1 && 0 === t[r + 6] && !(128 & t[r + 7])) return 1;
                var a = t.subarray(4, 4 + r);
                if (33 === a.length && 0 === a[0] && (a = a.subarray(1)), a.length > 32) return 1;
                var s = t.subarray(6 + r);
                if (33 === s.length && 0 === s[0] && (s = s.slice(1)), s.length > 32) throw new Error("S length is too long");
                var u = new o(a);
                u.cmp(i.n) >= 0 && (u = new o(0));
                var c = new o(t.subarray(6 + r));
                return c.cmp(i.n) >= 0 && (c = new o(0)), e.set(u.toArrayLike(Uint8Array, "be", 32), 0), e.set(c.toArrayLike(Uint8Array, "be", 32), 32), 0
            },
            ecdsaSign: function(e, t, r, a, s) {
                if (s) {
                    var u = s;
                    s = function(e) {
                        var n = u(t, r, null, a, e);
                        if (!(n instanceof Uint8Array && 32 === n.length)) throw new Error("This is the way");
                        return new o(n)
                    }
                }
                var c, f = new o(r);
                if (f.cmp(i.n) >= 0 || f.isZero()) return 1;
                try {
                    c = n.sign(t, r, {
                        canonical: !0,
                        k: s,
                        pers: a
                    })
                } catch (l) {
                    return 1
                }
                return e.signature.set(c.r.toArrayLike(Uint8Array, "be", 32), 0), e.signature.set(c.s.toArrayLike(Uint8Array, "be", 32), 32), e.recid = c.recoveryParam, 0
            },
            ecdsaVerify: function(e, t, r) {
                var s = {
                        r: e.subarray(0, 32),
                        s: e.subarray(32, 64)
                    },
                    u = new o(s.r),
                    c = new o(s.s);
                if (u.cmp(i.n) >= 0 || c.cmp(i.n) >= 0) return 1;
                if (1 === c.cmp(n.nh) || u.isZero() || c.isZero()) return 3;
                var f = a(r);
                if (null === f) return 2;
                var l = f.getPublic();
                return n.verify(t, s, l) ? 0 : 3
            },
            ecdsaRecover: function(e, t, r, a) {
                var u, c = {
                        r: t.slice(0, 32),
                        s: t.slice(32, 64)
                    },
                    f = new o(c.r),
                    l = new o(c.s);
                if (f.cmp(i.n) >= 0 || l.cmp(i.n) >= 0) return 1;
                if (f.isZero() || l.isZero()) return 2;
                try {
                    u = n.recoverPubKey(a, c, r)
                } catch (h) {
                    return 2
                }
                return s(e, u), 0
            },
            ecdh: function(e, t, r, s, u, c, f) {
                var l = a(t);
                if (null === l) return 1;
                var h = new o(r);
                if (h.cmp(i.n) >= 0 || h.isZero()) return 2;
                var d = l.getPublic().mul(h);
                if (void 0 === u)
                    for (var p = d.encode(null, !0), v = n.hash().update(p).digest(), g = 0; g < 32; ++g) e[g] = v[g];
                else {
                    c || (c = new Uint8Array(32));
                    for (var _ = d.getX().toArray("be", 32), m = 0; m < 32; ++m) c[m] = _[m];
                    f || (f = new Uint8Array(32));
                    for (var y = d.getY().toArray("be", 32), w = 0; w < 32; ++w) f[w] = y[w];
                    var b = u(c, f, s);
                    if (!(b instanceof Uint8Array && b.length === e.length)) return 2;
                    e.set(b)
                }
                return 0
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = r(618);
        t.getRandomBytes = function(e) {
            return new Promise((function(t, r) {
                n(e, (function(e, n) {
                    e ? r(e) : t(n)
                }))
            }))
        }, t.getRandomBytesSync = function(e) {
            return n(e)
        }
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var n = r(25),
                i = new(0, r(635).ec)("secp256k1"),
                o = i.curve;
            t.privateKeyExport = function(e, t) {
                var r = new n(e);
                if (r.ucmp(o.n) >= 0) throw new Error("couldn't export to DER format");
                var s = i.g.mul(r);
                return a(s.getX(), s.getY(), t)
            }, t.privateKeyModInverse = function(t) {
                var r = new n(t);
                if (r.ucmp(o.n) >= 0 || r.isZero()) throw new Error("private key range is invalid");
                return r.invm(o.n).toArrayLike(e, "be", 32)
            }, t.signatureImport = function(t) {
                var r = new n(t.r);
                r.ucmp(o.n) >= 0 && (r = new n(0));
                var i = new n(t.s);
                return i.ucmp(o.n) >= 0 && (i = new n(0)), e.concat([r.toArrayLike(e, "be", 32), i.toArrayLike(e, "be", 32)])
            }, t.ecdhUnsafe = function(e, t, r) {
                var s = i.keyFromPublic(e),
                    u = new n(t);
                if (u.ucmp(o.n) >= 0 || u.isZero()) throw new Error("scalar was invalid (zero or overflow)");
                var c = s.pub.mul(u);
                return a(c.getX(), c.getY(), r)
            };
            var a = function(t, r, n) {
                var i = void 0;
                return n ? ((i = e.alloc(33))[0] = r.isOdd() ? 3 : 2, t.toArrayLike(e, "be", 32).copy(i, 1)) : ((i = e.alloc(65))[0] = 4, t.toArrayLike(e, "be", 32).copy(i, 1), r.toArrayLike(e, "be", 32).copy(i, 33)), i
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            var r = e.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                n = e.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            t.privateKeyExport = function(t, i, o) {
                var a = e.from(o ? r : n);
                return t.copy(a, o ? 8 : 9), i.copy(a, o ? 181 : 214), a
            }, t.privateKeyImport = function(e) {
                var t = e.length,
                    r = 0;
                if (t < r + 1 || 48 !== e[r]) return null;
                if (t < (r += 1) + 1 || !(128 & e[r])) return null;
                var n = 127 & e[r];
                if (n < 1 || n > 2) return null;
                if (t < (r += 1) + n) return null;
                var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
                return t < (r += n) + i || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1] ? null : e.slice(r + 2, r + 2 + e[r + 1])
            }, t.signatureImportLax = function(t) {
                var r = e.alloc(32, 0),
                    n = e.alloc(32, 0),
                    i = t.length,
                    o = 0;
                if (48 !== t[o++]) return null;
                var a = t[o++];
                if (128 & a && (o += a - 128) > i) return null;
                if (2 !== t[o++]) return null;
                var s = t[o++];
                if (128 & s) {
                    if (o + (a = s - 128) > i) return null;
                    for (; a > 0 && 0 === t[o]; o += 1, a -= 1);
                    for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + t[o]
                }
                if (s > i - o) return null;
                var u = o;
                if (o += s, 2 !== t[o++]) return null;
                var c = t[o++];
                if (128 & c) {
                    if (o + (a = c - 128) > i) return null;
                    for (; a > 0 && 0 === t[o]; o += 1, a -= 1);
                    for (c = 0; a > 0; o += 1, a -= 1) c = (c << 8) + t[o]
                }
                if (c > i - o) return null;
                var f = o;
                for (o += c; s > 0 && 0 === t[u]; s -= 1, u += 1);
                if (s > 32) return null;
                var l = t.slice(u, u + s);
                for (l.copy(r, 32 - l.length); c > 0 && 0 === t[f]; c -= 1, f += 1);
                if (c > 32) return null;
                var h = t.slice(f, f + c);
                return h.copy(n, 32 - h.length), {
                    r: r,
                    s: n
                }
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        var n = r(830);
        e.exports = function(e) {
            return "string" !== typeof e ? e : n(e) ? e.slice(2) : e
        }
    }, , , , , function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(r(1059)),
            i = o(r(1082));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = (0, n.default)(i.default), e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return function(t, r, o) {
                return e(n.default, t, (0, i.default)(r), o)
            }
        };
        var n = o(r(835)),
            i = o(r(624));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, r, o) {
            (0, n.default)(t)(e, (0, i.default)(r), o)
        };
        var n = o(r(838)),
            i = o(r(624));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            if ((0, n.default)(e)) return function(e) {
                var t = -1,
                    r = e.length;
                return function() {
                    return ++t < r ? {
                        value: e[t],
                        key: t
                    } : null
                }
            }(e);
            var t = (0, i.default)(e);
            return t ? function(e) {
                var t = -1;
                return function() {
                    var r = e.next();
                    return r.done ? null : (t++, {
                        value: r.value,
                        key: t
                    })
                }
            }(t) : function(e) {
                var t = (0, o.default)(e),
                    r = -1,
                    n = t.length;
                return function() {
                    var i = t[++r];
                    return r < n ? {
                        value: e[i],
                        key: i
                    } : null
                }
            }(e)
        };
        var n = a(r(674)),
            i = a(r(1062)),
            o = a(r(1063));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return n && e[n] && e[n]()
        };
        var n = "function" === typeof Symbol && Symbol.iterator;
        e.exports = t.default
    }, function(e, t, r) {
        var n = r(1064),
            i = r(1075),
            o = r(674);
        e.exports = function(e) {
            return o(e) ? n(e) : i(e)
        }
    }, function(e, t, r) {
        var n = r(1065),
            i = r(1066),
            o = r(172),
            a = r(1068),
            s = r(1070),
            u = r(1071),
            c = Object.prototype.hasOwnProperty;
        e.exports = function(e, t) {
            var r = o(e),
                f = !r && i(e),
                l = !r && !f && a(e),
                h = !r && !f && !l && u(e),
                d = r || f || l || h,
                p = d ? n(e.length, String) : [],
                v = p.length;
            for (var g in e) !t && !c.call(e, g) || d && ("length" == g || l && ("offset" == g || "parent" == g) || h && ("buffer" == g || "byteLength" == g || "byteOffset" == g) || s(g, v)) || p.push(g);
            return p
        }
    }, function(e, t) {
        e.exports = function(e, t) {
            for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
            return n
        }
    }, function(e, t, r) {
        var n = r(1067),
            i = r(323),
            o = Object.prototype,
            a = o.hasOwnProperty,
            s = o.propertyIsEnumerable,
            u = n(function() {
                return arguments
            }()) ? n : function(e) {
                return i(e) && a.call(e, "callee") && !s.call(e, "callee")
            };
        e.exports = u
    }, function(e, t, r) {
        var n = r(214),
            i = r(323);
        e.exports = function(e) {
            return i(e) && "[object Arguments]" == n(e)
        }
    }, function(e, t, r) {
        (function(e) {
            var n = r(145),
                i = r(1069),
                o = t && !t.nodeType && t,
                a = o && "object" == typeof e && e && !e.nodeType && e,
                s = a && a.exports === o ? n.Buffer : void 0,
                u = (s ? s.isBuffer : void 0) || i;
            e.exports = u
        }).call(this, r(144)(e))
    }, function(e, t) {
        e.exports = function() {
            return !1
        }
    }, function(e, t) {
        var r = /^(?:0|[1-9]\d*)$/;
        e.exports = function(e, t) {
            var n = typeof e;
            return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && r.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
    }, function(e, t, r) {
        var n = r(1072),
            i = r(1073),
            o = r(1074),
            a = o && o.isTypedArray,
            s = a ? i(a) : n;
        e.exports = s
    }, function(e, t, r) {
        var n = r(214),
            i = r(836),
            o = r(323),
            a = {};
        a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
            return o(e) && i(e.length) && !!a[n(e)]
        }
    }, function(e, t) {
        e.exports = function(e) {
            return function(t) {
                return e(t)
            }
        }
    }, function(e, t, r) {
        (function(e) {
            var n = r(328),
                i = t && !t.nodeType && t,
                o = i && "object" == typeof e && e && !e.nodeType && e,
                a = o && o.exports === i && n.process,
                s = function() {
                    try {
                        var e = o && o.require && o.require("util").types;
                        return e || a && a.binding && a.binding("util")
                    } catch (t) {}
                }();
            e.exports = s
        }).call(this, r(144)(e))
    }, function(e, t, r) {
        var n = r(1076),
            i = r(1077),
            o = Object.prototype.hasOwnProperty;
        e.exports = function(e) {
            if (!n(e)) return i(e);
            var t = [];
            for (var r in Object(e)) o.call(e, r) && "constructor" != r && t.push(r);
            return t
        }
    }, function(e, t) {
        var r = Object.prototype;
        e.exports = function(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || r)
        }
    }, function(e, t, r) {
        var n = r(1078)(Object.keys, Object);
        e.exports = n
    }, function(e, t) {
        e.exports = function(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return (0, i.default)((function(t, r) {
                var i;
                try {
                    i = e.apply(this, t)
                } catch (o) {
                    return r(o)
                }(0, n.default)(i) && "function" === typeof i.then ? i.then((function(e) {
                    s(r, null, e)
                }), (function(e) {
                    s(r, e.message ? e : new Error(e))
                })) : r(null, i)
            }))
        };
        var n = a(r(127)),
            i = a(r(1080)),
            o = a(r(1081));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }

        function s(e, t, r) {
            try {
                e(t, r)
            } catch (n) {
                (0, o.default)(u, n)
            }
        }

        function u(e) {
            throw e
        }
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return function() {
                var t = (0, o.default)(arguments),
                    r = t.pop();
                e.call(this, t, r)
            }
        };
        var n, i = r(675),
            o = (n = i) && n.__esModule ? n : {
                default: n
            };
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        (function(e, n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hasNextTick = t.hasSetImmediate = void 0, t.fallback = f, t.wrap = l;
            var i, o = r(675),
                a = (i = o) && i.__esModule ? i : {
                    default: i
                };
            var s, u = t.hasSetImmediate = "function" === typeof e && e,
                c = t.hasNextTick = "object" === typeof n && "function" === typeof n.nextTick;

            function f(e) {
                setTimeout(e, 0)
            }

            function l(e) {
                return function(t) {
                    var r = (0, a.default)(arguments, 1);
                    e((function() {
                        t.apply(null, r)
                    }))
                }
            }
            s = u ? e : c ? n.nextTick : f, t.default = l(s)
        }).call(this, r(327).setImmediate, r(111))
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, r, o) {
            o = o || n.default, t = t || [];
            var a = [],
                s = 0,
                u = (0, i.default)(r);
            e(t, (function(e, t, r) {
                var n = s++;
                u(e, (function(e, t) {
                    a[n] = t, r(e)
                }))
            }), (function(e) {
                o(e, a)
            }))
        };
        var n = o(r(171)),
            i = o(r(624));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = o(r(1084)),
            i = o(r(839));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.default = (0, i.default)(n.default, 1), e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, r, a) {
            (0, n.default)(t)(e, (0, i.default)((0, o.default)(r)), a)
        };
        var n = a(r(838)),
            i = a(r(1085)),
            o = a(r(624));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            return function(t, r, n) {
                return e(t, n)
            }
        }, e.exports = t.default
    }, function(e, t, r) {
        var n = r(211).EventEmitter,
            i = r(213).inherits;

        function o() {
            n.call(this), this.isLocked = !0
        }
        e.exports = o, i(o, n), o.prototype.go = function() {
            this.isLocked = !1, this.emit("unlock")
        }, o.prototype.stop = function() {
            this.isLocked = !0, this.emit("lock")
        }, o.prototype.await = function(e) {
            this.isLocked ? this.once("unlock", e) : setTimeout(e)
        }
    }, function(e, t, r) {
        t.parse = r(1088), t.stringify = r(1089)
    }, function(e, t) {
        var r, n, i, o, a = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t"
            },
            s = function(e) {
                throw {
                    name: "SyntaxError",
                    message: e,
                    at: r,
                    text: i
                }
            },
            u = function(e) {
                return e && e !== n && s("Expected '" + e + "' instead of '" + n + "'"), n = i.charAt(r), r += 1, n
            },
            c = function() {
                var e, t = "";
                for ("-" === n && (t = "-", u("-")); n >= "0" && n <= "9";) t += n, u();
                if ("." === n)
                    for (t += "."; u() && n >= "0" && n <= "9";) t += n;
                if ("e" === n || "E" === n)
                    for (t += n, u(), "-" !== n && "+" !== n || (t += n, u()); n >= "0" && n <= "9";) t += n, u();
                if (e = +t, isFinite(e)) return e;
                s("Bad number")
            },
            f = function() {
                var e, t, r, i = "";
                if ('"' === n)
                    for (; u();) {
                        if ('"' === n) return u(), i;
                        if ("\\" === n)
                            if (u(), "u" === n) {
                                for (r = 0, t = 0; t < 4 && (e = parseInt(u(), 16), isFinite(e)); t += 1) r = 16 * r + e;
                                i += String.fromCharCode(r)
                            } else {
                                if ("string" !== typeof a[n]) break;
                                i += a[n]
                            }
                        else i += n
                    }
                s("Bad string")
            },
            l = function() {
                for (; n && n <= " ";) u()
            },
            h = function() {
                var e = [];
                if ("[" === n) {
                    if (u("["), l(), "]" === n) return u("]"), e;
                    for (; n;) {
                        if (e.push(o()), l(), "]" === n) return u("]"), e;
                        u(","), l()
                    }
                }
                s("Bad array")
            },
            d = function() {
                var e, t = {};
                if ("{" === n) {
                    if (u("{"), l(), "}" === n) return u("}"), t;
                    for (; n;) {
                        if (e = f(), l(), u(":"), Object.hasOwnProperty.call(t, e) && s('Duplicate key "' + e + '"'), t[e] = o(), l(), "}" === n) return u("}"), t;
                        u(","), l()
                    }
                }
                s("Bad object")
            };
        o = function() {
            switch (l(), n) {
                case "{":
                    return d();
                case "[":
                    return h();
                case '"':
                    return f();
                case "-":
                    return c();
                default:
                    return n >= "0" && n <= "9" ? c() : function() {
                        switch (n) {
                            case "t":
                                return u("t"), u("r"), u("u"), u("e"), !0;
                            case "f":
                                return u("f"), u("a"), u("l"), u("s"), u("e"), !1;
                            case "n":
                                return u("n"), u("u"), u("l"), u("l"), null
                        }
                        s("Unexpected '" + n + "'")
                    }()
            }
        }, e.exports = function(e, t) {
            var a;
            return i = e, r = 0, n = " ", a = o(), l(), n && s("Syntax error"), "function" === typeof t ? function e(r, n) {
                var i, o, a = r[n];
                if (a && "object" === typeof a)
                    for (i in a) Object.prototype.hasOwnProperty.call(a, i) && (void 0 !== (o = e(a, i)) ? a[i] = o : delete a[i]);
                return t.call(r, n, a)
            }({
                "": a
            }, "") : a
        }
    }, function(e, t) {
        var r, n, i, o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            a = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            };

        function s(e) {
            return o.lastIndex = 0, o.test(e) ? '"' + e.replace(o, (function(e) {
                var t = a[e];
                return "string" === typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            })) + '"' : '"' + e + '"'
        }

        function u(e, t) {
            var o, a, c, f, l, h = r,
                d = t[e];
            switch (d && "object" === typeof d && "function" === typeof d.toJSON && (d = d.toJSON(e)), "function" === typeof i && (d = i.call(t, e, d)), typeof d) {
                case "string":
                    return s(d);
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "boolean":
                case "null":
                    return String(d);
                case "object":
                    if (!d) return "null";
                    if (r += n, l = [], "[object Array]" === Object.prototype.toString.apply(d)) {
                        for (f = d.length, o = 0; o < f; o += 1) l[o] = u(o, d) || "null";
                        return c = 0 === l.length ? "[]" : r ? "[\n" + r + l.join(",\n" + r) + "\n" + h + "]" : "[" + l.join(",") + "]", r = h, c
                    }
                    if (i && "object" === typeof i)
                        for (f = i.length, o = 0; o < f; o += 1) "string" === typeof(a = i[o]) && (c = u(a, d)) && l.push(s(a) + (r ? ": " : ":") + c);
                    else
                        for (a in d) Object.prototype.hasOwnProperty.call(d, a) && (c = u(a, d)) && l.push(s(a) + (r ? ": " : ":") + c);
                    return c = 0 === l.length ? "{}" : r ? "{\n" + r + l.join(",\n" + r) + "\n" + h + "}" : "{" + l.join(",") + "}", r = h, c
            }
        }
        e.exports = function(e, t, o) {
            var a;
            if (r = "", n = "", "number" === typeof o)
                for (a = 0; a < o; a += 1) n += " ";
            else "string" === typeof o && (n = o);
            if (i = t, t && "function" !== typeof t && ("object" !== typeof t || "number" !== typeof t.length)) throw new Error("JSON.stringify");
            return u("", {
                "": e
            })
        }
    }, function(e, t) {
        e.exports = function() {
            return Math.floor(Number.MAX_SAFE_INTEGER * Math.random())
        }
    }, function(e, t, r) {
        var n = r(35),
            i = r(46),
            o = r(47),
            a = r(722),
            s = r(1092),
            u = function(e) {
                "use strict";
                i(r, e);
                var t = o(r);

                function r(e) {
                    return n(this, r), t.call(this, (function(t) {
                        var r = t.blockTracker;
                        return s(Object.assign({
                            blockTracker: r
                        }, e))
                    }))
                }
                return r
            }(a);
        e.exports = u
    }, function(e, t, r) {
        var n = r(35),
            i = r(36),
            o = r(2),
            a = r(604),
            s = r(1093),
            u = r(1094),
            c = [void 0, null, "<nil>"];
        e.exports = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.blockTracker;
            if (!t) throw new Error("createBlockCacheMiddleware - No BlockTracker specified");
            var r = new f,
                n = {
                    perma: r,
                    block: r,
                    fork: r
                };
            return u(function() {
                var e = a(o.mark((function e(i, a, u) {
                    var c, f, l, h, d, p;
                    return o.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!i.skipCache) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", u());
                            case 2:
                                if (c = s.cacheTypeForPayload(i), f = n[c]) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", u());
                            case 6:
                                if (f.canCacheRequest(i)) {
                                    e.next = 8;
                                    break
                                }
                                return e.abrupt("return", u());
                            case 8:
                                if ((l = s.blockTagForPayload(i)) || (l = "latest"), "earliest" !== l) {
                                    e.next = 14;
                                    break
                                }
                                h = "0x00", e.next = 23;
                                break;
                            case 14:
                                if ("latest" !== l) {
                                    e.next = 22;
                                    break
                                }
                                return e.next = 17, t.getLatestBlock();
                            case 17:
                                d = e.sent, r.clearBefore(d), h = d, e.next = 23;
                                break;
                            case 22:
                                h = l;
                            case 23:
                                return e.next = 25, f.get(i, h);
                            case 25:
                                if (void 0 !== (p = e.sent)) {
                                    e.next = 33;
                                    break
                                }
                                return e.next = 29, u();
                            case 29:
                                return e.next = 31, f.set(i, h, a.result);
                            case 31:
                                e.next = 34;
                                break;
                            case 33:
                                a.result = p;
                            case 34:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(t, r, n) {
                    return e.apply(this, arguments)
                }
            }())
        };
        var f = function() {
            "use strict";

            function e() {
                n(this, e), this.cache = {}
            }
            return i(e, [{
                key: "getBlockCacheForPayload",
                value: function(e, t) {
                    var r = Number.parseInt(t, 16),
                        n = this.cache[r];
                    if (!n) {
                        var i = {};
                        this.cache[r] = i, n = i
                    }
                    return n
                }
            }, {
                key: "get",
                value: function() {
                    var e = a(o.mark((function e(t, r) {
                        var n, i, a;
                        return o.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = this.getBlockCacheForPayload(t, r)) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    return i = s.cacheIdentifierForPayload(t, !0), a = n[i], e.abrupt("return", a);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "set",
                value: function() {
                    var e = a(o.mark((function e(t, r, n) {
                        var i, a;
                        return o.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.canCacheResult(t, n)) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    i = this.getBlockCacheForPayload(t, r), a = s.cacheIdentifierForPayload(t, !0), i[a] = n;
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "canCacheRequest",
                value: function(e) {
                    return !!s.canCache(e) && "pending" !== s.blockTagForPayload(e)
                }
            }, {
                key: "canCacheResult",
                value: function(e, t) {
                    if (!c.includes(t)) return !!(!["eth_getTransactionByHash", "eth_getTransactionReceipt"].includes(e.method) || t && t.blockHash && "0x0000000000000000000000000000000000000000000000000000000000000000" !== t.blockHash)
                }
            }, {
                key: "clearBefore",
                value: function(e) {
                    var t = this,
                        r = Number.parseInt(e, 16);
                    Object.keys(t.cache).map(Number).filter((function(e) {
                        return e < r
                    })).forEach((function(e) {
                        return delete t.cache[e]
                    }))
                }
            }]), e
        }()
    }, function(e, t, r) {
        var n = r(841);

        function i(e) {
            return "never" !== s(e)
        }

        function o(e) {
            var t = a(e);
            return t >= e.params.length ? e.params : "eth_getBlockByNumber" === e.method ? e.params.slice(1) : e.params.slice(0, t)
        }

        function a(e) {
            switch (e.method) {
                case "eth_getStorageAt":
                    return 2;
                case "eth_getBalance":
                case "eth_getCode":
                case "eth_getTransactionCount":
                case "eth_call":
                    return 1;
                case "eth_getBlockByNumber":
                    return 0;
                default:
                    return
            }
        }

        function s(e) {
            switch (e.method) {
                case "web3_clientVersion":
                case "web3_sha3":
                case "eth_protocolVersion":
                case "eth_getBlockTransactionCountByHash":
                case "eth_getUncleCountByBlockHash":
                case "eth_getCode":
                case "eth_getBlockByHash":
                case "eth_getTransactionByHash":
                case "eth_getTransactionByBlockHashAndIndex":
                case "eth_getTransactionReceipt":
                case "eth_getUncleByBlockHashAndIndex":
                case "eth_getCompilers":
                case "eth_compileLLL":
                case "eth_compileSolidity":
                case "eth_compileSerpent":
                case "shh_version":
                case "test_permaCache":
                    return "perma";
                case "eth_getBlockByNumber":
                case "eth_getBlockTransactionCountByNumber":
                case "eth_getUncleCountByBlockNumber":
                case "eth_getTransactionByBlockNumberAndIndex":
                case "eth_getUncleByBlockNumberAndIndex":
                case "test_forkCache":
                    return "fork";
                case "eth_gasPrice":
                case "eth_blockNumber":
                case "eth_getBalance":
                case "eth_getStorageAt":
                case "eth_getTransactionCount":
                case "eth_call":
                case "eth_estimateGas":
                case "eth_getFilterLogs":
                case "eth_getLogs":
                case "test_blockCache":
                    return "block";
                case "net_version":
                case "net_peerCount":
                case "net_listening":
                case "eth_syncing":
                case "eth_sign":
                case "eth_coinbase":
                case "eth_mining":
                case "eth_hashrate":
                case "eth_accounts":
                case "eth_sendTransaction":
                case "eth_sendRawTransaction":
                case "eth_newFilter":
                case "eth_newBlockFilter":
                case "eth_newPendingTransactionFilter":
                case "eth_uninstallFilter":
                case "eth_getFilterChanges":
                case "eth_getWork":
                case "eth_submitWork":
                case "eth_submitHashrate":
                case "db_putString":
                case "db_getString":
                case "db_putHex":
                case "db_getHex":
                case "shh_post":
                case "shh_newIdentity":
                case "shh_hasIdentity":
                case "shh_newGroup":
                case "shh_addToGroup":
                case "shh_newFilter":
                case "shh_uninstallFilter":
                case "shh_getFilterChanges":
                case "shh_getMessages":
                case "test_neverCache":
                    return "never"
            }
        }
        e.exports = {
            cacheIdentifierForPayload: function(e, t) {
                var r = t ? o(e) : e.params;
                return i(e) ? e.method + ":" + n(r) : null
            },
            canCache: i,
            blockTagForPayload: function(e) {
                var t = a(e);
                if (t >= e.params.length) return null;
                return e.params[t]
            },
            paramsWithoutBlockTag: o,
            blockTagParamIndex: a,
            cacheTypeForPayload: s
        }
    }, function(e, t, r) {
        var n = r(2),
            i = r(604);
        e.exports = function(e) {
            return function(t, r, o, a) {
                var s, u, c, f = new Promise((function(e) {
                    s = e
                }));
                e(t, r, function() {
                    var e = i(n.mark((function e() {
                        return n.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return c = !0, o((function(e) {
                                        u = e, s()
                                    })), e.next = 4, f;
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()).then(i(n.mark((function e() {
                    return n.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!c) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 3, f;
                            case 3:
                                u(null), e.next = 7;
                                break;
                            case 6:
                                a(null);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).catch((function(e) {
                    u ? u(e) : a(e)
                }))
            }
        }
    }, function(e, t, r) {
        var n = r(213).inherits,
            i = r(676);

        function o(e) {
            e = e || {}, this.staticResponses = e
        }
        e.exports = o, n(o, i), o.prototype.handleRequest = function(e, t, r) {
            var n = this.staticResponses[e.method];
            "function" === typeof n ? n(e, t, r) : void 0 !== n ? setTimeout((function() {
                return r(null, n)
            })) : t()
        }
    }, function(e, t, r) {
        var n = r(35),
            i = r(46),
            o = r(47),
            a = r(722),
            s = r(842),
            u = function(e) {
                "use strict";
                i(r, e);
                var t = o(r);

                function r() {
                    return n(this, r), t.call(this, (function(e) {
                        var t = e.blockTracker,
                            r = e.provider;
                        e.engine;
                        return s({
                            blockTracker: t,
                            provider: r
                        })
                    }))
                }
                return r
            }(a);
        e.exports = u
    }, , , , , , , , , , , , , , , function(e, t, r) {
        var n = r(1112),
            i = r(1113),
            o = r(213).inherits,
            a = r(648),
            s = r(1115),
            u = r(671),
            c = r(1125),
            f = r(676),
            l = r(1126),
            h = /^[0-9A-Fa-f]+$/g;

        function d(e) {
            var t = this;
            t.nonceLock = c(1), e.getAccounts && (t.getAccounts = e.getAccounts), e.processTransaction && (t.processTransaction = e.processTransaction), e.processMessage && (t.processMessage = e.processMessage), e.processPersonalMessage && (t.processPersonalMessage = e.processPersonalMessage), e.processTypedMessage && (t.processTypedMessage = e.processTypedMessage), t.approveTransaction = e.approveTransaction || t.autoApprove, t.approveMessage = e.approveMessage || t.autoApprove, t.approvePersonalMessage = e.approvePersonalMessage || t.autoApprove, t.approveDecryptMessage = e.approveDecryptMessage || t.autoApprove, t.approveEncryptionPublicKey = e.approveEncryptionPublicKey || t.autoApprove, t.approveTypedMessage = e.approveTypedMessage || t.autoApprove, e.signTransaction && (t.signTransaction = e.signTransaction || m("signTransaction")), e.signMessage && (t.signMessage = e.signMessage || m("signMessage")), e.signPersonalMessage && (t.signPersonalMessage = e.signPersonalMessage || m("signPersonalMessage")), e.decryptMessage && (t.decryptMessage = e.decryptMessage || m("decryptMessage")), e.encryptionPublicKey && (t.encryptionPublicKey = e.encryptionPublicKey || m("encryptionPublicKey")), e.signTypedMessage && (t.signTypedMessage = e.signTypedMessage || m("signTypedMessage")), e.recoverPersonalSignature && (t.recoverPersonalSignature = e.recoverPersonalSignature), e.publishTransaction && (t.publishTransaction = e.publishTransaction), t.estimateGas = e.estimateGas || t.estimateGas, t.getGasPrice = e.getGasPrice || t.getGasPrice
        }

        function p(e) {
            return e.toLowerCase()
        }

        function v(e) {
            var t = a.addHexPrefix(e);
            return a.isValidAddress(t)
        }

        function g(e) {
            var t = a.addHexPrefix(e);
            return !a.isValidAddress(t) && _(e)
        }

        function _(e) {
            return "string" === typeof e && ("0x" === e.slice(0, 2) && e.slice(2).match(h))
        }

        function m(e) {
            return function(t, r) {
                r(new Error('ProviderEngine - HookedWalletSubprovider - Must provide "' + e + '" fn in constructor options'))
            }
        }
        e.exports = d, o(d, f), d.prototype.handleRequest = function(e, t, r) {
            var i, o, a, s, c, f = this;
            switch (f._parityRequests = {}, f._parityRequestCount = 0, e.method) {
                case "eth_coinbase":
                    return void f.getAccounts((function(e, t) {
                        if (e) return r(e);
                        var n = t[0] || null;
                        r(null, n)
                    }));
                case "eth_accounts":
                    return void f.getAccounts((function(e, t) {
                        if (e) return r(e);
                        r(null, t)
                    }));
                case "eth_sendTransaction":
                    return i = e.params[0], void n([function(e) {
                        return f.validateTransaction(i, e)
                    }, function(e) {
                        return f.processTransaction(i, e)
                    }], r);
                case "eth_signTransaction":
                    return i = e.params[0], void n([function(e) {
                        return f.validateTransaction(i, e)
                    }, function(e) {
                        return f.processSignTransaction(i, e)
                    }], r);
                case "eth_sign":
                    return c = e.params[0], s = e.params[1], a = e.params[2] || {}, o = u(a, {
                        from: c,
                        data: s
                    }), void n([function(e) {
                        return f.validateMessage(o, e)
                    }, function(e) {
                        return f.processMessage(o, e)
                    }], r);
                case "personal_sign":
                    return function() {
                        var t = e.params[0];
                        if (g(e.params[1]) && v(t)) {
                            "[message, address]. This was previously handled incorrectly, ",
                            "and has been corrected automatically. ",
                            "Please switch this param order for smooth behavior in the future.",
                            console.warn("The eth_personalSign method requires params ordered [message, address]. This was previously handled incorrectly, and has been corrected automatically. Please switch this param order for smooth behavior in the future."),
                            c = e.params[0],
                            s = e.params[1]
                        }
                        else s = e.params[0], c = e.params[1];
                        a = e.params[2] || {}, o = u(a, {
                            from: c,
                            data: s
                        }), n([function(e) {
                            return f.validatePersonalMessage(o, e)
                        }, function(e) {
                            return f.processPersonalMessage(o, e)
                        }], r)
                    }();
                case "eth_decryptMessage":
                    return function() {
                        var t = e.params[0];
                        if (g(e.params[1]) && v(t)) {
                            "[message, address]. This was previously handled incorrectly, ",
                            "and has been corrected automatically. ",
                            "Please switch this param order for smooth behavior in the future.",
                            console.warn("The eth_decryptMessage method requires params ordered [message, address]. This was previously handled incorrectly, and has been corrected automatically. Please switch this param order for smooth behavior in the future."),
                            c = e.params[0],
                            s = e.params[1]
                        }
                        else s = e.params[0], c = e.params[1];
                        a = e.params[2] || {}, o = u(a, {
                            from: c,
                            data: s
                        }), n([function(e) {
                            return f.validateDecryptMessage(o, e)
                        }, function(e) {
                            return f.processDecryptMessage(o, e)
                        }], r)
                    }();
                case "encryption_public_key":
                    return function() {
                        var t = e.params[0];
                        n([function(e) {
                            return f.validateEncryptionPublicKey(t, e)
                        }, function(e) {
                            return f.processEncryptionPublicKey(t, e)
                        }], r)
                    }();
                case "personal_ecRecover":
                    return function() {
                        s = e.params[0];
                        var t = e.params[1];
                        a = e.params[2] || {}, o = u(a, {
                            sig: t,
                            data: s
                        }), f.recoverPersonalSignature(o, r)
                    }();
                case "eth_signTypedData":
                case "eth_signTypedData_v3":
                case "eth_signTypedData_v4":
                    return function() {
                        var t = e.params[0],
                            i = e.params[1];
                        v(t) ? (c = t, s = i) : (s = t, c = i), a = e.params[2] || {}, o = u(a, {
                            from: c,
                            data: s
                        }), n([function(e) {
                            return f.validateTypedMessage(o, e)
                        }, function(e) {
                            return f.processTypedMessage(o, e)
                        }], r)
                    }();
                case "parity_postTransaction":
                    return i = e.params[0], void f.parityPostTransaction(i, r);
                case "parity_postSign":
                    return c = e.params[0], s = e.params[1], void f.parityPostSign(c, s, r);
                case "parity_checkRequest":
                    return function() {
                        var t = e.params[0];
                        f.parityCheckRequest(t, r)
                    }();
                case "parity_defaultAccount":
                    return void f.getAccounts((function(e, t) {
                        if (e) return r(e);
                        var n = t[0] || null;
                        r(null, n)
                    }));
                default:
                    return void t()
            }
        }, d.prototype.getAccounts = function(e) {
            e(null, [])
        }, d.prototype.processTransaction = function(e, t) {
            var r = this;
            n([function(t) {
                return r.approveTransaction(e, t)
            }, function(e, t) {
                return r.checkApproval("transaction", e, t)
            }, function(t) {
                return r.finalizeAndSubmitTx(e, t)
            }], t)
        }, d.prototype.processSignTransaction = function(e, t) {
            var r = this;
            n([function(t) {
                return r.approveTransaction(e, t)
            }, function(e, t) {
                return r.checkApproval("transaction", e, t)
            }, function(t) {
                return r.finalizeTx(e, t)
            }], t)
        }, d.prototype.processMessage = function(e, t) {
            var r = this;
            n([function(t) {
                return r.approveMessage(e, t)
            }, function(e, t) {
                return r.checkApproval("message", e, t)
            }, function(t) {
                return r.signMessage(e, t)
            }], t)
        }, d.prototype.processPersonalMessage = function(e, t) {
            var r = this;
            n([function(t) {
                return r.approvePersonalMessage(e, t)
            }, function(e, t) {
                return r.checkApproval("message", e, t)
            }, function(t) {
                return r.signPersonalMessage(e, t)
            }], t)
        }, d.prototype.processDecryptMessage = function(e, t) {
            var r = this;
            n([function(t) {
                return r.approveDecryptMessage(e, t)
            }, function(e, t) {
                return r.checkApproval("decryptMessage", e, t)
            }, function(t) {
                return r.decryptMessage(e, t)
            }], t)
        }, d.prototype.processEncryptionPublicKey = function(e, t) {
            var r = this;
            n([function(t) {
                return r.approveEncryptionPublicKey(e, t)
            }, function(e, t) {
                return r.checkApproval("encryptionPublicKey", e, t)
            }, function(t) {
                return r.encryptionPublicKey(e, t)
            }], t)
        }, d.prototype.processTypedMessage = function(e, t) {
            var r = this;
            n([function(t) {
                return r.approveTypedMessage(e, t)
            }, function(e, t) {
                return r.checkApproval("message", e, t)
            }, function(t) {
                return r.signTypedMessage(e, t)
            }], t)
        }, d.prototype.autoApprove = function(e, t) {
            t(null, !0)
        }, d.prototype.checkApproval = function(e, t, r) {
            r(t ? null : new Error("User denied " + e + " signature."))
        }, d.prototype.parityPostTransaction = function(e, t) {
            var r = this,
                n = r._parityRequestCount,
                i = "0x".concat(n.toString(16));
            r._parityRequestCount++, r.emitPayload({
                method: "eth_sendTransaction",
                params: [e]
            }, (function(e, t) {
                if (e) r._parityRequests[i] = {
                    error: e
                };
                else {
                    var n = t.result;
                    r._parityRequests[i] = n
                }
            })), t(null, i)
        }, d.prototype.parityPostSign = function(e, t, r) {
            var n = this,
                i = n._parityRequestCount,
                o = "0x".concat(i.toString(16));
            n._parityRequestCount++, n.emitPayload({
                method: "eth_sign",
                params: [e, t]
            }, (function(e, t) {
                if (e) n._parityRequests[o] = {
                    error: e
                };
                else {
                    var r = t.result;
                    n._parityRequests[o] = r
                }
            })), r(null, o)
        }, d.prototype.parityCheckRequest = function(e, t) {
            var r = this._parityRequests[e] || null;
            return r ? r.error ? t(r.error) : void t(null, r) : t(null, null)
        }, d.prototype.recoverPersonalSignature = function(e, t) {
            var r;
            try {
                r = s.recoverPersonalSignature(e)
            } catch (n) {
                return t(n)
            }
            t(null, r)
        }, d.prototype.validateTransaction = function(e, t) {
            if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign transaction."));
            this.validateSender(e.from, (function(r, n) {
                return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign transaction for this address: "'.concat(e.from, '"')))
            }))
        }, d.prototype.validateMessage = function(e, t) {
            if (void 0 === e.from) return t(new Error("Undefined address - from address required to sign message."));
            this.validateSender(e.from, (function(r, n) {
                return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from, '"')))
            }))
        }, d.prototype.validatePersonalMessage = function(e, t) {
            return void 0 === e.from ? t(new Error("Undefined address - from address required to sign personal message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to sign personal message.")) : _(e.data) ? void this.validateSender(e.from, (function(r, n) {
                return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from, '"')))
            })) : t(new Error("HookedWalletSubprovider - validateMessage - message was not encoded as hex."))
        }, d.prototype.validateDecryptMessage = function(e, t) {
            return void 0 === e.from ? t(new Error("Undefined address - from address required to decrypt message.")) : void 0 === e.data ? t(new Error("Undefined message - message required to decrypt message.")) : _(e.data) ? void this.validateSender(e.from, (function(r, n) {
                return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to decrypt message for this address: "'.concat(e.from, '"')))
            })) : t(new Error("HookedWalletSubprovider - validateDecryptMessage - message was not encoded as hex."))
        }, d.prototype.validateEncryptionPublicKey = function(e, t) {
            this.validateSender(e, (function(r, n) {
                return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to obtain encryption public key for this address: "'.concat(e, '"')))
            }))
        }, d.prototype.validateTypedMessage = function(e, t) {
            return void 0 === e.from ? t(new Error("Undefined address - from address required to sign typed data.")) : void 0 === e.data ? t(new Error("Undefined data - message required to sign typed data.")) : void this.validateSender(e.from, (function(r, n) {
                return r ? t(r) : n ? void t() : t(new Error('Unknown address - unable to sign message for this address: "'.concat(e.from, '"')))
            }))
        }, d.prototype.validateSender = function(e, t) {
            if (!e) return t(null, !1);
            this.getAccounts((function(r, n) {
                if (r) return t(r);
                var i = -1 !== n.map(p).indexOf(e.toLowerCase());
                t(null, i)
            }))
        }, d.prototype.finalizeAndSubmitTx = function(e, t) {
            var r = this;
            r.nonceLock.take((function() {
                n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r), r.publishTransaction.bind(r)], (function(e, n) {
                    if (r.nonceLock.leave(), e) return t(e);
                    t(null, n)
                }))
            }))
        }, d.prototype.finalizeTx = function(e, t) {
            var r = this;
            r.nonceLock.take((function() {
                n([r.fillInTxExtras.bind(r, e), r.signTransaction.bind(r)], (function(n, i) {
                    if (r.nonceLock.leave(), n) return t(n);
                    t(null, {
                        raw: i,
                        tx: e
                    })
                }))
            }))
        }, d.prototype.publishTransaction = function(e, t) {
            this.emitPayload({
                method: "eth_sendRawTransaction",
                params: [e]
            }, (function(e, r) {
                if (e) return t(e);
                t(null, r.result)
            }))
        }, d.prototype.estimateGas = function(e, t) {
            l(this.engine, e, t)
        }, d.prototype.getGasPrice = function(e) {
            this.emitPayload({
                method: "eth_gasPrice",
                params: []
            }, (function(t, r) {
                if (t) return e(t);
                e(null, r.result)
            }))
        }, d.prototype.fillInTxExtras = function(e, t) {
            var r = this,
                n = e.from,
                o = {};
            void 0 === e.gasPrice && (o.gasPrice = r.getGasPrice.bind(r)), void 0 === e.nonce && (o.nonce = r.emitPayload.bind(r, {
                method: "eth_getTransactionCount",
                params: [n, "pending"]
            })), void 0 === e.gas && (o.gas = r.estimateGas.bind(r, function(e) {
                return {
                    from: e.from,
                    to: e.to,
                    value: e.value,
                    data: e.data,
                    gas: e.gas,
                    gasPrice: e.gasPrice,
                    nonce: e.nonce
                }
            }(e))), i(o, (function(r, n) {
                if (r) return t(r);
                var i = {};
                n.gasPrice && (i.gasPrice = n.gasPrice), n.nonce && (i.nonce = n.nonce.result), n.gas && (i.gas = n.gas), t(null, u(e, i))
            }))
        }
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            if (t = (0, o.default)(t || i.default), !(0, n.default)(e)) return t(new Error("First argument to waterfall must be an array of functions"));
            if (!e.length) return t();
            var r = 0;

            function c(t) {
                var n = (0, u.default)(e[r++]);
                t.push((0, s.default)(f)), n.apply(null, t)
            }

            function f(n) {
                if (n || r === e.length) return t.apply(null, arguments);
                c((0, a.default)(arguments, 1))
            }
            c([])
        };
        var n = c(r(172)),
            i = c(r(171)),
            o = c(r(719)),
            a = c(r(675)),
            s = c(r(720)),
            u = c(r(624));

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t) {
            (0, i.default)(n.default, e, t)
        };
        var n = o(r(835)),
            i = o(r(1114));

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = t.default
    }, function(e, t, r) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e, t, r) {
            r = r || n.default;
            var s = (0, i.default)(t) ? [] : {};
            e(t, (function(e, t, r) {
                (0, a.default)(e)((function(e, n) {
                    arguments.length > 2 && (n = (0, o.default)(arguments, 1)), s[t] = n, r(e)
                }))
            }), (function(e) {
                r(e, s)
            }))
        };
        var n = s(r(171)),
            i = s(r(674)),
            o = s(r(675)),
            a = s(r(624));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        e.exports = t.default
    }, function(e, t, r) {
        var n = r(648),
            i = r(1116);

        function o(e) {
            var t = new Error("Expect argument to be non-empty array");
            if ("object" !== typeof e || !e.length) throw t;
            var r = e.map((function(e) {
                    return "bytes" === e.type ? n.toBuffer(e.value) : e.value
                })),
                o = e.map((function(e) {
                    return e.type
                })),
                a = e.map((function(e) {
                    if (!e.name) throw t;
                    return e.type + " " + e.name
                }));
            return i.soliditySHA3(["bytes32", "bytes32"], [i.soliditySHA3(new Array(e.length).fill("string"), a), i.soliditySHA3(o, r)])
        }

        function a(e, t) {
            var r = n.toBuffer(t),
                i = n.fromRpcSig(r);
            return n.ecrecover(e, i.v, i.r, i.s)
        }

        function s(e) {
            var t = n.toBuffer(e.data);
            return a(n.hashPersonalMessage(t), e.sig)
        }

        function u(e, t) {
            for (var r = "" + e; r.length < t;) r = "0" + r;
            return r
        }
        e.exports = {
            concatSig: function(e, t, r) {
                var i = n.fromSigned(t),
                    o = n.fromSigned(r),
                    a = n.bufferToInt(e),
                    s = u(n.toUnsigned(i).toString("hex"), 64),
                    c = u(n.toUnsigned(o).toString("hex"), 64),
                    f = n.stripHexPrefix(n.intToHex(a));
                return n.addHexPrefix(s.concat(c, f)).toString("hex")
            },
            normalize: function(e) {
                if (e) {
                    if ("number" === typeof e) {
                        var t = n.toBuffer(e);
                        e = n.bufferToHex(t)
                    }
                    if ("string" !== typeof e) {
                        var r = "eth-sig-util.normalize() requires hex string or integer input.";
                        throw new Error(r += " received " + typeof e + ": " + e)
                    }
                    return n.addHexPrefix(e.toLowerCase())
                }
            },
            personalSign: function(e, t) {
                var r = n.toBuffer(t.data),
                    i = n.hashPersonalMessage(r),
                    o = n.ecsign(i, e);
                return n.bufferToHex(this.concatSig(o.v, o.r, o.s))
            },
            recoverPersonalSignature: function(e) {
                var t = s(e),
                    r = n.publicToAddress(t);
                return n.bufferToHex(r)
            },
            extractPublicKey: function(e) {
                return "0x" + s(e).toString("hex")
            },
            typedSignatureHash: function(e) {
                var t = o(e);
                return n.bufferToHex(t)
            },
            signTypedData: function(e, t) {
                var r = o(t.data),
                    i = n.ecsign(r, e);
                return n.bufferToHex(this.concatSig(i.v, i.r, i.s))
            },
            recoverTypedSignature: function(e) {
                var t = a(o(e.data), e.sig),
                    r = n.publicToAddress(t);
                return n.bufferToHex(r)
            }
        }
    }, function(e, t, r) {
        e.exports = r(1117)
    }, function(e, t, r) {
        (function(t) {
            var n = r(1118),
                i = r(25),
                o = function() {};

            function a(e) {
                return e.startsWith("int[") ? "int256" + e.slice(3) : "int" === e ? "int256" : e.startsWith("uint[") ? "uint256" + e.slice(4) : "uint" === e ? "uint256" : e.startsWith("fixed[") ? "fixed128x128" + e.slice(5) : "fixed" === e ? "fixed128x128" : e.startsWith("ufixed[") ? "ufixed128x128" + e.slice(6) : "ufixed" === e ? "ufixed128x128" : e
            }

            function s(e) {
                return parseInt(/^\D+(\d+)$/.exec(e)[1], 10)
            }

            function u(e) {
                var t = /^\D+(\d+)x(\d+)$/.exec(e);
                return [parseInt(t[1], 10), parseInt(t[2], 10)]
            }

            function c(e) {
                var t = e.match(/(.*)\[(.*?)\]$/);
                return t ? "" === t[2] ? "dynamic" : parseInt(t[2], 10) : null
            }

            function f(e) {
                var t = typeof e;
                if ("string" === t) return n.isHexPrefixed(e) ? new i(n.stripHexPrefix(e), 16) : new i(e, 10);
                if ("number" === t) return new i(e);
                if (e.toArray) return e;
                throw new Error("Argument is not a number")
            }

            function l(e) {
                var t = /^(\w+)\((.*)\)$/.exec(e);
                if (3 !== t.length) throw new Error("Invalid method signature");
                var r = /^(.+)\):\((.+)$/.exec(t[2]);
                if (null !== r && 3 === r.length) return {
                    method: t[1],
                    args: r[1].split(","),
                    retargs: r[2].split(",")
                };
                var n = t[2].split(",");
                return 1 === n.length && "" === n[0] && (n = []), {
                    method: t[1],
                    args: n
                }
            }

            function h(e, r) {
                var o, a, l, d;
                if ("address" === e) return h("uint160", f(r));
                if ("bool" === e) return h("uint8", r ? 1 : 0);
                if ("string" === e) return h("bytes", t.from(r, "utf8"));
                if (g(e)) {
                    if ("undefined" === typeof r.length) throw new Error("Not an array?");
                    if ("dynamic" !== (o = c(e)) && 0 !== o && r.length > o) throw new Error("Elements exceed array size: " + o);
                    for (d in l = [], e = e.slice(0, e.lastIndexOf("[")), "string" === typeof r && (r = JSON.parse(r)), r) l.push(h(e, r[d]));
                    if ("dynamic" === o) {
                        var p = h("uint256", r.length);
                        l.unshift(p)
                    }
                    return t.concat(l)
                }
                if ("bytes" === e) return r = t.from(r), l = t.concat([h("uint256", r.length), r]), r.length % 32 !== 0 && (l = t.concat([l, n.zeros(32 - r.length % 32)])), l;
                if (e.startsWith("bytes")) {
                    if ((o = s(e)) < 1 || o > 32) throw new Error("Invalid bytes<N> width: " + o);
                    return n.setLengthRight(r, 32)
                }
                if (e.startsWith("uint")) {
                    if ((o = s(e)) % 8 || o < 8 || o > 256) throw new Error("Invalid uint<N> width: " + o);
                    if ((a = f(r)).bitLength() > o) throw new Error("Supplied uint exceeds width: " + o + " vs " + a.bitLength());
                    if (a < 0) throw new Error("Supplied uint is negative");
                    return a.toArrayLike(t, "be", 32)
                }
                if (e.startsWith("int")) {
                    if ((o = s(e)) % 8 || o < 8 || o > 256) throw new Error("Invalid int<N> width: " + o);
                    if ((a = f(r)).bitLength() > o) throw new Error("Supplied int exceeds width: " + o + " vs " + a.bitLength());
                    return a.toTwos(256).toArrayLike(t, "be", 32)
                }
                if (e.startsWith("ufixed")) {
                    if (o = u(e), (a = f(r)) < 0) throw new Error("Supplied ufixed is negative");
                    return h("uint256", a.mul(new i(2).pow(new i(o[1]))))
                }
                if (e.startsWith("fixed")) return o = u(e), h("int256", f(r).mul(new i(2).pow(new i(o[1]))));
                throw new Error("Unsupported or invalid type: " + e)
            }

            function d(e, r, n) {
                var o, a, s, u;
                if ("string" === typeof e && (e = p(e)), "address" === e.name) return d(e.rawType, r, n).toArrayLike(t, "be", 20).toString("hex");
                if ("bool" === e.name) return d(e.rawType, r, n).toString() === new i(1).toString();
                if ("string" === e.name) {
                    var c = d(e.rawType, r, n);
                    return t.from(c, "utf8").toString()
                }
                if (e.isArray) {
                    for (s = [], o = e.size, "dynamic" === e.size && (n = d("uint256", r, n).toNumber(), o = d("uint256", r, n).toNumber(), n += 32), u = 0; u < o; u++) {
                        var f = d(e.subArray, r, n);
                        s.push(f), n += e.subArray.memoryUsage
                    }
                    return s
                }
                if ("bytes" === e.name) return n = d("uint256", r, n).toNumber(), o = d("uint256", r, n).toNumber(), r.slice(n + 32, n + 32 + o);
                if (e.name.startsWith("bytes")) return r.slice(n, n + e.size);
                if (e.name.startsWith("uint")) {
                    if ((a = new i(r.slice(n, n + 32), 16, "be")).bitLength() > e.size) throw new Error("Decoded int exceeds width: " + e.size + " vs " + a.bitLength());
                    return a
                }
                if (e.name.startsWith("int")) {
                    if ((a = new i(r.slice(n, n + 32), 16, "be").fromTwos(256)).bitLength() > e.size) throw new Error("Decoded uint exceeds width: " + e.size + " vs " + a.bitLength());
                    return a
                }
                if (e.name.startsWith("ufixed")) {
                    if (o = new i(2).pow(new i(e.size[1])), !(a = d("uint256", r, n)).mod(o).isZero()) throw new Error("Decimals not supported yet");
                    return a.div(o)
                }
                if (e.name.startsWith("fixed")) {
                    if (o = new i(2).pow(new i(e.size[1])), !(a = d("int256", r, n)).mod(o).isZero()) throw new Error("Decimals not supported yet");
                    return a.div(o)
                }
                throw new Error("Unsupported or invalid type: " + e.name)
            }

            function p(e) {
                var t, r, n;
                if (g(e)) {
                    t = c(e);
                    var i = e.slice(0, e.lastIndexOf("["));
                    return i = p(i), r = {
                        isArray: !0,
                        name: e,
                        size: t,
                        memoryUsage: "dynamic" === t ? 32 : i.memoryUsage * t,
                        subArray: i
                    }
                }
                switch (e) {
                    case "address":
                        n = "uint160";
                        break;
                    case "bool":
                        n = "uint8";
                        break;
                    case "string":
                        n = "bytes"
                }
                if (r = {
                        rawType: n,
                        name: e,
                        memoryUsage: 32
                    }, e.startsWith("bytes") && "bytes" !== e || e.startsWith("uint") || e.startsWith("int") ? r.size = s(e) : (e.startsWith("ufixed") || e.startsWith("fixed")) && (r.size = u(e)), e.startsWith("bytes") && "bytes" !== e && (r.size < 1 || r.size > 32)) throw new Error("Invalid bytes<N> width: " + r.size);
                if ((e.startsWith("uint") || e.startsWith("int")) && (r.size % 8 || r.size < 8 || r.size > 256)) throw new Error("Invalid int/uint<N> width: " + r.size);
                return r
            }

            function v(e) {
                return "string" === e || "bytes" === e || "dynamic" === c(e)
            }

            function g(e) {
                return e.lastIndexOf("]") === e.length - 1
            }

            function _(e, t) {
                return e.startsWith("address") || e.startsWith("bytes") ? "0x" + t.toString("hex") : t.toString()
            }
            o.eventID = function(e, r) {
                var i = e + "(" + r.map(a).join(",") + ")";
                return n.keccak256(t.from(i))
            }, o.methodID = function(e, t) {
                return o.eventID(e, t).slice(0, 4)
            }, o.rawEncode = function(e, r) {
                var n = [],
                    i = [],
                    o = 0;
                e.forEach((function(e) {
                    if (g(e)) {
                        var t = c(e);
                        o += "dynamic" !== t ? 32 * t : 32
                    } else o += 32
                }));
                for (var s = 0; s < e.length; s++) {
                    var u = a(e[s]),
                        f = h(u, r[s]);
                    v(u) ? (n.push(h("uint256", o)), i.push(f), o += f.length) : n.push(f)
                }
                return t.concat(n.concat(i))
            }, o.rawDecode = function(e, r) {
                var n = [];
                r = t.from(r);
                for (var i = 0, o = 0; o < e.length; o++) {
                    var s = p(a(e[o])),
                        u = d(s, r, i);
                    i += s.memoryUsage, n.push(u)
                }
                return n
            }, o.simpleEncode = function(e) {
                var r = Array.prototype.slice.call(arguments).slice(1),
                    n = l(e);
                if (r.length !== n.args.length) throw new Error("Argument count mismatch");
                return t.concat([o.methodID(n.method, n.args), o.rawEncode(n.args, r)])
            }, o.simpleDecode = function(e, t) {
                var r = l(e);
                if (!r.retargs) throw new Error("No return values in method");
                return o.rawDecode(r.retargs, t)
            }, o.stringify = function(e, t) {
                var r = [];
                for (var n in e) {
                    var i = e[n],
                        o = t[n];
                    o = /^[^\[]+\[.*\]$/.test(i) ? o.map((function(e) {
                        return _(i, e)
                    })).join(", ") : _(i, o), r.push(o)
                }
                return r
            }, o.solidityHexValue = function(e, r, i) {
                var a, u;
                if (g(e)) {
                    var l = e.replace(/\[.*?\]/, "");
                    if (!g(l)) {
                        var h = c(e);
                        if ("dynamic" !== h && 0 !== h && r.length > h) throw new Error("Elements exceed array size: " + h)
                    }
                    var d = r.map((function(e) {
                        return o.solidityHexValue(l, e, 256)
                    }));
                    return t.concat(d)
                }
                if ("bytes" === e) return r;
                if ("string" === e) return t.from(r, "utf8");
                if ("bool" === e) {
                    i = i || 8;
                    var p = Array(i / 4).join("0");
                    return t.from(r ? p + "1" : p + "0", "hex")
                }
                if ("address" === e) {
                    var v = 20;
                    return i && (v = i / 8), n.setLengthLeft(r, v)
                }
                if (e.startsWith("bytes")) {
                    if ((a = s(e)) < 1 || a > 32) throw new Error("Invalid bytes<N> width: " + a);
                    return n.setLengthRight(r, a)
                }
                if (e.startsWith("uint")) {
                    if ((a = s(e)) % 8 || a < 8 || a > 256) throw new Error("Invalid uint<N> width: " + a);
                    if ((u = f(r)).bitLength() > a) throw new Error("Supplied uint exceeds width: " + a + " vs " + u.bitLength());
                    return i = i || a, u.toArrayLike(t, "be", i / 8)
                }
                if (e.startsWith("int")) {
                    if ((a = s(e)) % 8 || a < 8 || a > 256) throw new Error("Invalid int<N> width: " + a);
                    if ((u = f(r)).bitLength() > a) throw new Error("Supplied int exceeds width: " + a + " vs " + u.bitLength());
                    return i = i || a, u.toTwos(a).toArrayLike(t, "be", i / 8)
                }
                throw new Error("Unsupported or invalid type: " + e)
            }, o.solidityPack = function(e, r) {
                if (e.length !== r.length) throw new Error("Number of types are not matching the values");
                for (var n = [], i = 0; i < e.length; i++) {
                    var s = a(e[i]),
                        u = r[i];
                    n.push(o.solidityHexValue(s, u, null))
                }
                return t.concat(n)
            }, o.soliditySHA3 = function(e, t) {
                return n.keccak256(o.solidityPack(e, t))
            }, o.soliditySHA256 = function(e, t) {
                return n.sha256(o.solidityPack(e, t))
            }, o.solidityRIPEMD160 = function(e, t) {
                return n.ripemd160(o.solidityPack(e, t), !0)
            }, o.fromSerpent = function(e) {
                for (var t, r = [], n = 0; n < e.length; n++) {
                    var i = e[n];
                    if ("s" === i) r.push("bytes");
                    else if ("b" === i) {
                        for (var o = "bytes", a = n + 1; a < e.length && ((t = e[a]) >= "0" && t <= "9");) o += e[a] - "0", a++;
                        n = a - 1, r.push(o)
                    } else if ("i" === i) r.push("int256");
                    else {
                        if ("a" !== i) throw new Error("Unsupported or invalid type: " + i);
                        r.push("int256[]")
                    }
                }
                return r
            }, o.toSerpent = function(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var n = e[r];
                    if ("bytes" === n) t.push("s");
                    else if (n.startsWith("bytes")) t.push("b" + s(n));
                    else if ("int256" === n) t.push("i");
                    else {
                        if ("int256[]" !== n) throw new Error("Unsupported or invalid type: " + n);
                        t.push("a")
                    }
                }
                return t.join("")
            }, e.exports = o
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                void 0 === n && (n = r), Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: function() {
                        return t[r]
                    }
                })
            } : function(e, t, r, n) {
                void 0 === n && (n = r), e[n] = t[r]
            }),
            i = this && this.__exportStar || function(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || n(t, e, r)
            };
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.secp256k1 = t.rlp = t.BN = void 0;
        var o = r(727);
        t.secp256k1 = o;
        var a = r(637),
            s = r(25);
        t.BN = s;
        var u = r(673);
        t.rlp = u, Object.assign(t, a), i(r(1121), t), i(r(1122), t), i(r(728), t), i(r(1123), t), i(r(650), t), i(r(1124), t)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = r(25),
                i = new(0, r(635).ec)("secp256k1"),
                o = i.curve;
            t.privateKeyExport = function(e, t) {
                void 0 === t && (t = !0);
                var r = new n(e);
                if (r.ucmp(o.n) >= 0) throw new Error("couldn't export to DER format");
                var s = i.g.mul(r);
                return a(s.getX(), s.getY(), t)
            }, t.privateKeyModInverse = function(t) {
                var r = new n(t);
                if (r.ucmp(o.n) >= 0 || r.isZero()) throw new Error("private key range is invalid");
                return r.invm(o.n).toArrayLike(e, "be", 32)
            }, t.signatureImport = function(t) {
                var r = new n(t.r);
                r.ucmp(o.n) >= 0 && (r = new n(0));
                var i = new n(t.s);
                return i.ucmp(o.n) >= 0 && (i = new n(0)), e.concat([r.toArrayLike(e, "be", 32), i.toArrayLike(e, "be", 32)])
            }, t.ecdhUnsafe = function(e, t, r) {
                void 0 === r && (r = !0);
                var s = i.keyFromPublic(e),
                    u = new n(t);
                if (u.ucmp(o.n) >= 0 || u.isZero()) throw new Error("scalar was invalid (zero or overflow)");
                var c = s.pub.mul(u);
                return a(c.getX(), c.getY(), r)
            };
            var a = function(t, r, n) {
                var i;
                return n ? ((i = e.alloc(33))[0] = r.isOdd() ? 3 : 2, t.toArrayLike(e, "be", 32).copy(i, 1)) : ((i = e.alloc(65))[0] = 4, t.toArrayLike(e, "be", 32).copy(i, 1), r.toArrayLike(e, "be", 32).copy(i, 33)), i
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = e.from([48, 129, 211, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 133, 48, 129, 130, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 33, 2, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 36, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                n = e.from([48, 130, 1, 19, 2, 1, 1, 4, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 160, 129, 165, 48, 129, 162, 2, 1, 1, 48, 44, 6, 7, 42, 134, 72, 206, 61, 1, 1, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 255, 255, 252, 47, 48, 6, 4, 1, 0, 4, 1, 7, 4, 65, 4, 121, 190, 102, 126, 249, 220, 187, 172, 85, 160, 98, 149, 206, 135, 11, 7, 2, 155, 252, 219, 45, 206, 40, 217, 89, 242, 129, 91, 22, 248, 23, 152, 72, 58, 218, 119, 38, 163, 196, 101, 93, 164, 251, 252, 14, 17, 8, 168, 253, 23, 180, 72, 166, 133, 84, 25, 156, 71, 208, 143, 251, 16, 212, 184, 2, 33, 0, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 65, 2, 1, 1, 161, 68, 3, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            t.privateKeyExport = function(t, i, o) {
                void 0 === o && (o = !0);
                var a = e.from(o ? r : n);
                return t.copy(a, o ? 8 : 9), i.copy(a, o ? 181 : 214), a
            }, t.privateKeyImport = function(e) {
                var t = e.length,
                    r = 0;
                if (t < r + 1 || 48 !== e[r]) return null;
                if (t < (r += 1) + 1 || !(128 & e[r])) return null;
                var n = 127 & e[r];
                if (n < 1 || n > 2) return null;
                if (t < (r += 1) + n) return null;
                var i = e[r + n - 1] | (n > 1 ? e[r + n - 2] << 8 : 0);
                return t < (r += n) + i || t < r + 3 || 2 !== e[r] || 1 !== e[r + 1] || 1 !== e[r + 2] || t < (r += 3) + 2 || 4 !== e[r] || e[r + 1] > 32 || t < r + 2 + e[r + 1] ? null : e.slice(r + 2, r + 2 + e[r + 1])
            }, t.signatureImportLax = function(t) {
                var r = e.alloc(32, 0),
                    n = e.alloc(32, 0),
                    i = t.length,
                    o = 0;
                if (48 !== t[o++]) return null;
                var a = t[o++];
                if (128 & a && (o += a - 128) > i) return null;
                if (2 !== t[o++]) return null;
                var s = t[o++];
                if (128 & s) {
                    if (o + (a = s - 128) > i) return null;
                    for (; a > 0 && 0 === t[o]; o += 1, a -= 1);
                    for (s = 0; a > 0; o += 1, a -= 1) s = (s << 8) + t[o]
                }
                if (s > i - o) return null;
                var u = o;
                if (o += s, 2 !== t[o++]) return null;
                var c = t[o++];
                if (128 & c) {
                    if (o + (a = c - 128) > i) return null;
                    for (; a > 0 && 0 === t[o]; o += 1, a -= 1);
                    for (c = 0; a > 0; o += 1, a -= 1) c = (c << 8) + t[o]
                }
                if (c > i - o) return null;
                var f = o;
                for (o += c; s > 0 && 0 === t[u]; s -= 1, u += 1);
                if (s > 32) return null;
                var l = t.slice(u, u + s);
                for (l.copy(r, 32 - l.length); c > 0 && 0 === t[f]; c -= 1, f += 1);
                if (c > 32) return null;
                var h = t.slice(f, f + c);
                return h.copy(n, 32 - h.length), {
                    r: r,
                    s: n
                }
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.KECCAK256_RLP = t.KECCAK256_RLP_S = t.KECCAK256_RLP_ARRAY = t.KECCAK256_RLP_ARRAY_S = t.KECCAK256_NULL = t.KECCAK256_NULL_S = t.TWO_POW256 = t.MAX_INTEGER = void 0;
            var n = r(25);
            t.MAX_INTEGER = new n("ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", 16), t.TWO_POW256 = new n("10000000000000000000000000000000000000000000000000000000000000000", 16), t.KECCAK256_NULL_S = "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470", t.KECCAK256_NULL = e.from(t.KECCAK256_NULL_S, "hex"), t.KECCAK256_RLP_ARRAY_S = "1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347", t.KECCAK256_RLP_ARRAY = e.from(t.KECCAK256_RLP_ARRAY_S, "hex"), t.KECCAK256_RLP_S = "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421", t.KECCAK256_RLP = e.from(t.KECCAK256_RLP_S, "hex")
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.importPublic = t.privateToPublic = t.privateToAddress = t.publicToAddress = t.pubToAddress = t.isValidPublic = t.isValidPrivate = t.isPrecompiled = t.generateAddress2 = t.generateAddress = t.isValidChecksumAddress = t.toChecksumAddress = t.isZeroAddress = t.isValidAddress = t.zeroAddress = void 0;
            var n = r(718),
                i = r(637),
                o = r(727),
                a = r(25),
                s = r(650),
                u = r(728);
            t.zeroAddress = function() {
                var e = s.zeros(20);
                return s.bufferToHex(e)
            }, t.isValidAddress = function(e) {
                return /^0x[0-9a-fA-F]{40}$/.test(e)
            }, t.isZeroAddress = function(e) {
                return t.zeroAddress() === s.addHexPrefix(e)
            }, t.toChecksumAddress = function(e, t) {
                e = i.stripHexPrefix(e).toLowerCase();
                for (var r = void 0 !== t ? t.toString() + "0x" : "", n = u.keccak(r + e).toString("hex"), o = "0x", a = 0; a < e.length; a++) parseInt(n[a], 16) >= 8 ? o += e[a].toUpperCase() : o += e[a];
                return o
            }, t.isValidChecksumAddress = function(e, r) {
                return t.isValidAddress(e) && t.toChecksumAddress(e, r) === e
            }, t.generateAddress = function(t, r) {
                t = s.toBuffer(t);
                var n = new a(r);
                return n.isZero() ? u.rlphash([t, null]).slice(-20) : u.rlphash([t, e.from(n.toArray())]).slice(-20)
            }, t.generateAddress2 = function(t, r, i) {
                var o = s.toBuffer(t),
                    a = s.toBuffer(r),
                    c = s.toBuffer(i);
                return n(20 === o.length), n(32 === a.length), u.keccak256(e.concat([e.from("ff", "hex"), o, a, u.keccak256(c)])).slice(-20)
            }, t.isPrecompiled = function(e) {
                var t = s.unpad(e);
                return 1 === t.length && t[0] >= 1 && t[0] <= 8
            }, t.isValidPrivate = function(e) {
                return o.privateKeyVerify(e)
            }, t.isValidPublic = function(t, r) {
                return void 0 === r && (r = !1), 64 === t.length ? o.publicKeyVerify(e.concat([e.from([4]), t])) : !!r && o.publicKeyVerify(t)
            }, t.pubToAddress = function(e, t) {
                return void 0 === t && (t = !1), e = s.toBuffer(e), t && 64 !== e.length && (e = o.publicKeyConvert(e, !1).slice(1)), n(64 === e.length), u.keccak(e).slice(-20)
            }, t.publicToAddress = t.pubToAddress, t.privateToAddress = function(e) {
                return t.publicToAddress(t.privateToPublic(e))
            }, t.privateToPublic = function(e) {
                return e = s.toBuffer(e), o.publicKeyCreate(e, !1).slice(1)
            }, t.importPublic = function(e) {
                return 64 !== (e = s.toBuffer(e)).length && (e = o.publicKeyConvert(e, !1).slice(1)), e
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hashPersonalMessage = t.isValidSignature = t.fromRpcSig = t.toRpcSig = t.ecrecover = t.ecsign = void 0;
            var n = r(727),
                i = r(25),
                o = r(650),
                a = r(728);

            function s(e, t) {
                return t ? e - (2 * t + 35) : e - 27
            }

            function u(e) {
                return 0 === e || 1 === e
            }
            t.ecsign = function(e, t, r) {
                var i = n.sign(e, t),
                    o = i.recovery;
                return {
                    r: i.signature.slice(0, 32),
                    s: i.signature.slice(32, 64),
                    v: r ? o + (2 * r + 35) : o + 27
                }
            }, t.ecrecover = function(t, r, i, a, c) {
                var f = e.concat([o.setLength(i, 32), o.setLength(a, 32)], 64),
                    l = s(r, c);
                if (!u(l)) throw new Error("Invalid signature v value");
                var h = n.recover(t, f, l);
                return n.publicKeyConvert(h, !1).slice(1)
            }, t.toRpcSig = function(t, r, n, i) {
                if (!u(s(t, i))) throw new Error("Invalid signature v value");
                return o.bufferToHex(e.concat([o.setLengthLeft(r, 32), o.setLengthLeft(n, 32), o.toBuffer(t)]))
            }, t.fromRpcSig = function(e) {
                var t = o.toBuffer(e);
                if (65 !== t.length) throw new Error("Invalid signature length");
                var r = t[64];
                return r < 27 && (r += 27), {
                    v: r,
                    r: t.slice(0, 32),
                    s: t.slice(32, 64)
                }
            }, t.isValidSignature = function(e, t, r, n, o) {
                void 0 === n && (n = !0);
                var a = new i("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                    c = new i("fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141", 16);
                if (32 !== t.length || 32 !== r.length) return !1;
                if (!u(s(e, o))) return !1;
                var f = new i(t),
                    l = new i(r);
                return !(f.isZero() || f.gt(c) || l.isZero() || l.gt(c)) && (!n || 1 !== l.cmp(a))
            }, t.hashPersonalMessage = function(t) {
                var r = e.from("\x19Ethereum Signed Message:\n" + t.length.toString(), "utf-8");
                return a.keccak(e.concat([r, t]))
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.defineProperties = void 0;
            var n = r(718),
                i = r(637),
                o = r(673),
                a = r(650);
            t.defineProperties = function(t, r, s) {
                if (t.raw = [], t._fields = [], t.toJSON = function(e) {
                        if (void 0 === e && (e = !1), e) {
                            var r = {};
                            return t._fields.forEach((function(e) {
                                r[e] = "0x" + t[e].toString("hex")
                            })), r
                        }
                        return a.baToJSON(t.raw)
                    }, t.serialize = function() {
                        return o.encode(t.raw)
                    }, r.forEach((function(r, i) {
                        function o() {
                            return t.raw[i]
                        }

                        function s(o) {
                            "00" !== (o = a.toBuffer(o)).toString("hex") || r.allowZero || (o = e.allocUnsafe(0)), r.allowLess && r.length ? (o = a.stripZeros(o), n(r.length >= o.length, "The field " + r.name + " must not have more " + r.length + " bytes")) : r.allowZero && 0 === o.length || !r.length || n(r.length === o.length, "The field " + r.name + " must have byte length of " + r.length), t.raw[i] = o
                        }
                        t._fields.push(r.name), Object.defineProperty(t, r.name, {
                            enumerable: !0,
                            configurable: !0,
                            get: o,
                            set: s
                        }), r.default && (t[r.name] = r.default), r.alias && Object.defineProperty(t, r.alias, {
                            enumerable: !1,
                            configurable: !0,
                            set: s,
                            get: o
                        })
                    })), s)
                    if ("string" === typeof s && (s = e.from(i.stripHexPrefix(s), "hex")), e.isBuffer(s) && (s = o.decode(s)), Array.isArray(s)) {
                        if (s.length > t._fields.length) throw new Error("wrong number of fields in data");
                        s.forEach((function(e, r) {
                            t[t._fields[r]] = a.toBuffer(e)
                        }))
                    } else {
                        if ("object" !== typeof s) throw new Error("invalid data");
                        var u = Object.keys(s);
                        r.forEach((function(e) {
                            -1 !== u.indexOf(e.name) && (t[e.name] = s[e.name]), -1 !== u.indexOf(e.alias) && (t[e.alias] = s[e.alias])
                        }))
                    }
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        (function(t) {
            ! function(r) {
                "use strict";
                var n = function(e) {
                    setTimeout(e, 0)
                };
                "undefined" != typeof t && t && "function" == typeof t.nextTick && (n = t.nextTick), e.exports = function(e) {
                    var t = {
                        capacity: e || 1,
                        current: 0,
                        queue: [],
                        firstHere: !1,
                        take: function() {
                            if (!1 === t.firstHere) {
                                t.current++, t.firstHere = !0;
                                var e = 1
                            } else e = 0;
                            var r = {
                                n: 1
                            };
                            "function" == typeof arguments[0] ? r.task = arguments[0] : r.n = arguments[0], arguments.length >= 2 && ("function" == typeof arguments[1] ? r.task = arguments[1] : r.n = arguments[1]);
                            var n = r.task;
                            if (r.task = function() {
                                    n(t.leave)
                                }, t.current + r.n - e > t.capacity) return 1 === e && (t.current--, t.firstHere = !1), t.queue.push(r);
                            t.current += r.n - e, r.task(t.leave), 1 === e && (t.firstHere = !1)
                        },
                        leave: function(e) {
                            if (e = e || 1, t.current -= e, t.queue.length) {
                                var r = t.queue[0];
                                r.n + t.current > t.capacity || (t.queue.shift(), t.current += r.n, n(r.task))
                            } else if (t.current < 0) throw new Error("leave called too many times.")
                        },
                        available: function(e) {
                            return e = e || 1, t.current + e <= t.capacity
                        }
                    };
                    return t
                }
            }()
        }).call(this, r(111))
    }, function(e, t, r) {
        var n = r(721);
        e.exports = function(e, t, r) {
            e.sendAsync(n({
                method: "eth_estimateGas",
                params: [t]
            }), (function(e, t) {
                if (e) return "no contract code at given address" === e.message ? r(null, "0xcf08") : r(e);
                r(null, t.result)
            }))
        }
    }, function(e, t, r) {
        (function(t) {
            var n = r(213).inherits,
                i = r(1128),
                o = r(648),
                a = r(676),
                s = r(840).blockTagForPayload;

            function u(e) {
                this.nonceCache = {}
            }
            e.exports = u, n(u, a), u.prototype.handleRequest = function(e, r, n) {
                var a = this;
                switch (e.method) {
                    case "eth_getTransactionCount":
                        var u = s(e),
                            c = e.params[0].toLowerCase(),
                            f = a.nonceCache[c];
                        return void("pending" === u ? f ? n(null, f) : r((function(e, t, r) {
                            if (e) return r();
                            void 0 === a.nonceCache[c] && (a.nonceCache[c] = t), r()
                        })) : r());
                    case "eth_sendRawTransaction":
                        return void r((function(r, n, s) {
                            if (r) return s();
                            var u = e.params[0],
                                c = (o.stripHexPrefix(u), t.from(o.stripHexPrefix(u), "hex"), new i(t.from(o.stripHexPrefix(u), "hex"))),
                                f = "0x" + c.getSenderAddress().toString("hex").toLowerCase(),
                                l = o.bufferToInt(c.nonce),
                                h = (++l).toString(16);
                            h.length % 2 && (h = "0" + h), h = "0x" + h, a.nonceCache[f] = h, s()
                        }));
                    case "evm_revert":
                        return a.nonceCache = {}, void r();
                    default:
                        return void r()
                }
            }
        }).call(this, r(321).Buffer)
    }, function(e, t, r) {
        "use strict";
        (function(t) {
            var n = r(648),
                i = r(1129),
                o = n.BN,
                a = new o("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0", 16),
                s = function() {
                    function e(r) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), r = r || {};
                        var i = [{
                            name: "nonce",
                            length: 32,
                            allowLess: !0,
                            default: new t([])
                        }, {
                            name: "gasPrice",
                            length: 32,
                            allowLess: !0,
                            default: new t([])
                        }, {
                            name: "gasLimit",
                            alias: "gas",
                            length: 32,
                            allowLess: !0,
                            default: new t([])
                        }, {
                            name: "to",
                            allowZero: !0,
                            length: 20,
                            default: new t([])
                        }, {
                            name: "value",
                            length: 32,
                            allowLess: !0,
                            default: new t([])
                        }, {
                            name: "data",
                            alias: "input",
                            allowZero: !0,
                            default: new t([])
                        }, {
                            name: "v",
                            allowZero: !0,
                            default: new t([28])
                        }, {
                            name: "r",
                            length: 32,
                            allowZero: !0,
                            allowLess: !0,
                            default: new t([])
                        }, {
                            name: "s",
                            length: 32,
                            allowZero: !0,
                            allowLess: !0,
                            default: new t([])
                        }];
                        n.defineProperties(this, i, r), Object.defineProperty(this, "from", {
                            enumerable: !0,
                            configurable: !0,
                            get: this.getSenderAddress.bind(this)
                        });
                        var o = n.bufferToInt(this.v),
                            a = Math.floor((o - 35) / 2);
                        a < 0 && (a = 0), this._chainId = a || r.chainId || 0, this._homestead = !0
                    }
                    return e.prototype.toCreationAddress = function() {
                        return "" === this.to.toString("hex")
                    }, e.prototype.hash = function(e) {
                        void 0 === e && (e = !0);
                        var t = void 0;
                        if (e) t = this.raw;
                        else if (this._chainId > 0) {
                            var r = this.raw.slice();
                            this.v = this._chainId, this.r = 0, this.s = 0, t = this.raw, this.raw = r
                        } else t = this.raw.slice(0, 6);
                        return n.rlphash(t)
                    }, e.prototype.getChainId = function() {
                        return this._chainId
                    }, e.prototype.getSenderAddress = function() {
                        if (this._from) return this._from;
                        var e = this.getSenderPublicKey();
                        return this._from = n.publicToAddress(e), this._from
                    }, e.prototype.getSenderPublicKey = function() {
                        if ((!this._senderPubKey || !this._senderPubKey.length) && !this.verifySignature()) throw new Error("Invalid Signature");
                        return this._senderPubKey
                    }, e.prototype.verifySignature = function() {
                        var e = this.hash(!1);
                        if (this._homestead && 1 === new o(this.s).cmp(a)) return !1;
                        try {
                            var t = n.bufferToInt(this.v);
                            this._chainId > 0 && (t -= 2 * this._chainId + 8), this._senderPubKey = n.ecrecover(e, t, this.r, this.s)
                        } catch (r) {
                            return !1
                        }
                        return !!this._senderPubKey
                    }, e.prototype.sign = function(e) {
                        var t = this.hash(!1),
                            r = n.ecsign(t, e);
                        this._chainId > 0 && (r.v += 2 * this._chainId + 8), Object.assign(this, r)
                    }, e.prototype.getDataFee = function() {
                        for (var e = this.raw[5], t = new o(0), r = 0; r < e.length; r++) 0 === e[r] ? t.iaddn(i.txDataZeroGas.v) : t.iaddn(i.txDataNonZeroGas.v);
                        return t
                    }, e.prototype.getBaseFee = function() {
                        var e = this.getDataFee().iaddn(i.txGas.v);
                        return this._homestead && this.toCreationAddress() && e.iaddn(i.txCreation.v), e
                    }, e.prototype.getUpfrontCost = function() {
                        return new o(this.gasLimit).imul(new o(this.gasPrice)).iadd(new o(this.value))
                    }, e.prototype.validate = function(e) {
                        var t = [];
                        return this.verifySignature() || t.push("Invalid Signature"), this.getBaseFee().cmp(new o(this.gasLimit)) > 0 && t.push(["gas limit is too low. Need at least " + this.getBaseFee()]), void 0 === e || !1 === e ? 0 === t.length : t.join(" ")
                    }, e
                }();
            e.exports = s
        }).call(this, r(321).Buffer)
    }, function(e) {
        e.exports = JSON.parse('{"genesisGasLimit":{"v":5000,"d":"Gas limit of the Genesis block."},"genesisDifficulty":{"v":17179869184,"d":"Difficulty of the Genesis block."},"genesisNonce":{"v":"0x0000000000000042","d":"the geneis nonce"},"genesisExtraData":{"v":"0x11bbe8db4e347b4e8c937c1c8370e4b5ed33adb3db69cbdb7a38e1e50b1b82fa","d":"extra data "},"genesisHash":{"v":"0xd4e56740f876aef8c010b86a40d5f56745a118d0906a34e69aec8c0db1cb8fa3","d":"genesis hash"},"genesisStateRoot":{"v":"0xd7f8974fb5ac78d9ac099b9ad5018bedc2ce0a72dad1827a1709da30580f0544","d":"the genesis state root"},"minGasLimit":{"v":5000,"d":"Minimum the gas limit may ever be."},"gasLimitBoundDivisor":{"v":1024,"d":"The bound divisor of the gas limit, used in update calculations."},"minimumDifficulty":{"v":131072,"d":"The minimum that the difficulty may ever be."},"difficultyBoundDivisor":{"v":2048,"d":"The bound divisor of the difficulty, used in the update calculations."},"durationLimit":{"v":13,"d":"The decision boundary on the blocktime duration used to determine whether difficulty should go up or not."},"maximumExtraDataSize":{"v":32,"d":"Maximum size extra data may be after Genesis."},"epochDuration":{"v":30000,"d":"Duration between proof-of-work epochs."},"stackLimit":{"v":1024,"d":"Maximum size of VM stack allowed."},"callCreateDepth":{"v":1024,"d":"Maximum depth of call/create stack."},"tierStepGas":{"v":[0,2,3,5,8,10,20],"d":"Once per operation, for a selection of them."},"expGas":{"v":10,"d":"Once per EXP instuction."},"expByteGas":{"v":10,"d":"Times ceil(log256(exponent)) for the EXP instruction."},"sha3Gas":{"v":30,"d":"Once per SHA3 operation."},"sha3WordGas":{"v":6,"d":"Once per word of the SHA3 operation\'s data."},"sloadGas":{"v":50,"d":"Once per SLOAD operation."},"sstoreSetGas":{"v":20000,"d":"Once per SSTORE operation if the zeroness changes from zero."},"sstoreResetGas":{"v":5000,"d":"Once per SSTORE operation if the zeroness does not change from zero."},"sstoreRefundGas":{"v":15000,"d":"Once per SSTORE operation if the zeroness changes to zero."},"jumpdestGas":{"v":1,"d":"Refunded gas, once per SSTORE operation if the zeroness changes to zero."},"logGas":{"v":375,"d":"Per LOG* operation."},"logDataGas":{"v":8,"d":"Per byte in a LOG* operation\'s data."},"logTopicGas":{"v":375,"d":"Multiplied by the * of the LOG*, per LOG transaction. e.g. LOG0 incurs 0 * c_txLogTopicGas, LOG4 incurs 4 * c_txLogTopicGas."},"createGas":{"v":32000,"d":"Once per CREATE operation & contract-creation transaction."},"callGas":{"v":40,"d":"Once per CALL operation & message call transaction."},"callStipend":{"v":2300,"d":"Free gas given at beginning of call."},"callValueTransferGas":{"v":9000,"d":"Paid for CALL when the value transfor is non-zero."},"callNewAccountGas":{"v":25000,"d":"Paid for CALL when the destination address didn\'t exist prior."},"suicideRefundGas":{"v":24000,"d":"Refunded following a suicide operation."},"memoryGas":{"v":3,"d":"Times the address of the (highest referenced byte in memory + 1). NOTE: referencing happens on read, write and in instructions such as RETURN and CALL."},"quadCoeffDiv":{"v":512,"d":"Divisor for the quadratic particle of the memory cost equation."},"createDataGas":{"v":200,"d":""},"txGas":{"v":21000,"d":"Per transaction. NOTE: Not payable on data of calls between transactions."},"txCreation":{"v":32000,"d":"the cost of creating a contract via tx"},"txDataZeroGas":{"v":4,"d":"Per byte of data attached to a transaction that equals zero. NOTE: Not payable on data of calls between transactions."},"txDataNonZeroGas":{"v":68,"d":"Per byte of data attached to a transaction that is not equal to zero. NOTE: Not payable on data of calls between transactions."},"copyGas":{"v":3,"d":"Multiplied by the number of 32-byte words that are copied (round up) for any *COPY operation and added."},"ecrecoverGas":{"v":3000,"d":""},"sha256Gas":{"v":60,"d":""},"sha256WordGas":{"v":12,"d":""},"ripemd160Gas":{"v":600,"d":""},"ripemd160WordGas":{"v":120,"d":""},"identityGas":{"v":15,"d":""},"identityWordGas":{"v":3,"d":""},"minerReward":{"v":"5000000000000000000","d":"the amount a miner get rewarded for mining a block"},"ommerReward":{"v":"625000000000000000","d":"The amount of wei a miner of an uncle block gets for being inculded in the blockchain"},"niblingReward":{"v":"156250000000000000","d":"the amount a miner gets for inculding a uncle"},"homeSteadForkNumber":{"v":1150000,"d":"the block that the Homestead fork started at"},"homesteadRepriceForkNumber":{"v":2463000,"d":"the block that the Homestead Reprice (EIP150) fork started at"},"timebombPeriod":{"v":100000,"d":"Exponential difficulty timebomb period"},"freeBlockPeriod":{"v":2}}')
    }, function(e, t, r) {
        var n = r(35),
            i = r(46),
            o = r(47),
            a = r(722),
            s = r(850),
            u = function(e) {
                "use strict";
                i(r, e);
                var t = o(r);

                function r() {
                    return n(this, r), t.call(this, (function(e) {
                        var t = e.blockTracker,
                            r = e.provider,
                            n = e.engine,
                            i = s({
                                blockTracker: t,
                                provider: r
                            }),
                            o = i.events,
                            a = i.middleware;
                        return o.on("notification", (function(e) {
                            return n.emit("data", null, e)
                        })), a
                    }))
                }
                return r
            }(a);
        e.exports = u
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
        "use strict";
        r.r(t), r.d(t, "useState", (function() {
            return Y
        })), r.d(t, "useReducer", (function() {
            return Z
        })), r.d(t, "useEffect", (function() {
            return X
        })), r.d(t, "useLayoutEffect", (function() {
            return Q
        })), r.d(t, "useRef", (function() {
            return $
        })), r.d(t, "useImperativeHandle", (function() {
            return ee
        })), r.d(t, "useMemo", (function() {
            return te
        })), r.d(t, "useCallback", (function() {
            return re
        })), r.d(t, "useContext", (function() {
            return ne
        })), r.d(t, "useDebugValue", (function() {
            return ie
        })), r.d(t, "useErrorBoundary", (function() {
            return oe
        })), r.d(t, "createElement", (function() {
            return v
        })), r.d(t, "createContext", (function() {
            return U
        })), r.d(t, "createRef", (function() {
            return _
        })), r.d(t, "Fragment", (function() {
            return m
        })), r.d(t, "Component", (function() {
            return y
        })), r.d(t, "version", (function() {
            return He
        })), r.d(t, "Children", (function() {
            return me
        })), r.d(t, "render", (function() {
            return Ce
        })), r.d(t, "hydrate", (function() {
            return Pe
        })), r.d(t, "unmountComponentAtNode", (function() {
            return qe
        })), r.d(t, "createPortal", (function() {
            return Me
        })), r.d(t, "createFactory", (function() {
            return Ue
        })), r.d(t, "cloneElement", (function() {
            return De
        })), r.d(t, "isValidElement", (function() {
            return je
        })), r.d(t, "findDOMNode", (function() {
            return Ke
        })), r.d(t, "PureComponent", (function() {
            return de
        })), r.d(t, "memo", (function() {
            return pe
        })), r.d(t, "forwardRef", (function() {
            return ge
        })), r.d(t, "unstable_batchedUpdates", (function() {
            return ze
        })), r.d(t, "Suspense", (function() {
            return be
        })), r.d(t, "SuspenseList", (function() {
            return ke
        })), r.d(t, "lazy", (function() {
            return xe
        }));
        var n, i, o, a, s, u, c, f = {},
            l = [],
            h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

        function d(e, t) {
            for (var r in t) e[r] = t[r];
            return e
        }

        function p(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function v(e, t, r) {
            var n, i = arguments,
                o = {};
            for (n in t) "key" !== n && "ref" !== n && (o[n] = t[n]);
            if (arguments.length > 3)
                for (r = [r], n = 3; n < arguments.length; n++) r.push(i[n]);
            if (null != r && (o.children = r), "function" == typeof e && null != e.defaultProps)
                for (n in e.defaultProps) void 0 === o[n] && (o[n] = e.defaultProps[n]);
            return g(e, o, t && t.key, t && t.ref, null)
        }

        function g(e, t, r, i, o) {
            var a = {
                type: e,
                props: t,
                key: r,
                ref: i,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                constructor: void 0,
                __v: o
            };
            return null == o && (a.__v = a), n.vnode && n.vnode(a), a
        }

        function _() {
            return {}
        }

        function m(e) {
            return e.children
        }

        function y(e, t) {
            this.props = e, this.context = t
        }

        function w(e, t) {
            if (null == t) return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var r; t < e.__k.length; t++)
                if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
            return "function" == typeof e.type ? w(e) : null
        }

        function b(e) {
            var t, r;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                    if (null != (r = e.__k[t]) && null != r.__e) {
                        e.__e = e.__c.base = r.__e;
                        break
                    }
                return b(e)
            }
        }

        function E(e) {
            (!e.__d && (e.__d = !0) && i.push(e) && !o++ || s !== n.debounceRendering) && ((s = n.debounceRendering) || a)(x)
        }

        function x() {
            for (var e; o = i.length;) e = i.sort((function(e, t) {
                return e.__v.__b - t.__v.__b
            })), i = [], e.some((function(e) {
                var t, r, n, i, o, a, s;
                e.__d && (a = (o = (t = e).__v).__e, (s = t.__P) && (r = [], (n = d({}, o)).__v = n, i = T(s, o, n, t.__n, void 0 !== s.ownerSVGElement, null, r, null == a ? w(o) : a), O(r, o), i != a && b(o)))
            }))
        }

        function k(e, t, r, n, i, o, a, s, u) {
            var c, h, d, v, g, _, m, y = r && r.__k || l,
                b = y.length;
            if (s == f && (s = null != o ? o[0] : b ? w(r, 0) : null), c = 0, t.__k = S(t.__k, (function(r) {
                    if (null != r) {
                        if (r.__ = t, r.__b = t.__b + 1, null === (d = y[c]) || d && r.key == d.key && r.type === d.type) y[c] = void 0;
                        else
                            for (h = 0; h < b; h++) {
                                if ((d = y[h]) && r.key == d.key && r.type === d.type) {
                                    y[h] = void 0;
                                    break
                                }
                                d = null
                            }
                        if (v = T(e, r, d = d || f, n, i, o, a, s, u), (h = r.ref) && d.ref != h && (m || (m = []), d.ref && m.push(d.ref, null, r), m.push(h, r.__c || v, r)), null != v) {
                            var l;
                            if (null == _ && (_ = v), void 0 !== r.__d) l = r.__d, r.__d = void 0;
                            else if (o == d || v != s || null == v.parentNode) {
                                e: if (null == s || s.parentNode !== e) e.appendChild(v), l = null;
                                    else {
                                        for (g = s, h = 0;
                                            (g = g.nextSibling) && h < b; h += 2)
                                            if (g == v) break e;
                                        e.insertBefore(v, s), l = s
                                    }
                                "option" == t.type && (e.value = "")
                            }
                            s = void 0 !== l ? l : v.nextSibling, "function" == typeof t.type && (t.__d = s)
                        } else s && d.__e == s && s.parentNode != e && (s = w(d))
                    }
                    return c++, r
                })), t.__e = _, null != o && "function" != typeof t.type)
                for (c = o.length; c--;) null != o[c] && p(o[c]);
            for (c = b; c--;) null != y[c] && N(y[c], y[c]);
            if (m)
                for (c = 0; c < m.length; c++) P(m[c], m[++c], m[++c])
        }

        function S(e, t, r) {
            if (null == r && (r = []), null == e || "boolean" == typeof e) t && r.push(t(null));
            else if (Array.isArray(e))
                for (var n = 0; n < e.length; n++) S(e[n], t, r);
            else r.push(t ? t("string" == typeof e || "number" == typeof e ? g(null, e, null, null, e) : null != e.__e || null != e.__c ? g(e.type, e.props, e.key, null, e.__v) : e) : e);
            return r
        }

        function R(e, t, r) {
            "-" === t[0] ? e.setProperty(t, r) : e[t] = "number" == typeof r && !1 === h.test(t) ? r + "px" : null == r ? "" : r
        }

        function A(e, t, r, n, i) {
            var o, a, s, u, c;
            if (i ? "className" === t && (t = "class") : "class" === t && (t = "className"), "style" === t)
                if (o = e.style, "string" == typeof r) o.cssText = r;
                else {
                    if ("string" == typeof n && (o.cssText = "", n = null), n)
                        for (u in n) r && u in r || R(o, u, "");
                    if (r)
                        for (c in r) n && r[c] === n[c] || R(o, c, r[c])
                }
            else "o" === t[0] && "n" === t[1] ? (a = t !== (t = t.replace(/Capture$/, "")), s = t.toLowerCase(), t = (s in e ? s : t).slice(2), r ? (n || e.addEventListener(t, M, a), (e.l || (e.l = {}))[t] = r) : e.removeEventListener(t, M, a)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && !i && t in e ? e[t] = null == r ? "" : r : "function" != typeof r && "dangerouslySetInnerHTML" !== t && (t !== (t = t.replace(/^xlink:?/, "")) ? null == r || !1 === r ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : null == r || !1 === r && !/^ar/.test(t) ? e.removeAttribute(t) : e.setAttribute(t, r))
        }

        function M(e) {
            this.l[e.type](n.event ? n.event(e) : e)
        }

        function T(e, t, r, i, o, a, s, u, c) {
            var f, l, h, p, v, g, _, w, b, E, x = t.type;
            if (void 0 !== t.constructor) return null;
            (f = n.__b) && f(t);
            try {
                e: if ("function" == typeof x) {
                    if (w = t.props, b = (f = x.contextType) && i[f.__c], E = f ? b ? b.props.value : f.__ : i, r.__c ? _ = (l = t.__c = r.__c).__ = l.__E : ("prototype" in x && x.prototype.render ? t.__c = l = new x(w, E) : (t.__c = l = new y(w, E), l.constructor = x, l.render = I), b && b.sub(l), l.props = w, l.state || (l.state = {}), l.context = E, l.__n = i, h = l.__d = !0, l.__h = []), null == l.__s && (l.__s = l.state), null != x.getDerivedStateFromProps && (l.__s == l.state && (l.__s = d({}, l.__s)), d(l.__s, x.getDerivedStateFromProps(w, l.__s))), p = l.props, v = l.state, h) null == x.getDerivedStateFromProps && null != l.componentWillMount && l.componentWillMount(), null != l.componentDidMount && l.__h.push(l.componentDidMount);
                    else {
                        if (null == x.getDerivedStateFromProps && w !== p && null != l.componentWillReceiveProps && l.componentWillReceiveProps(w, E), !l.__e && null != l.shouldComponentUpdate && !1 === l.shouldComponentUpdate(w, l.__s, E) || t.__v === r.__v && !l.__) {
                            for (l.props = w, l.state = l.__s, t.__v !== r.__v && (l.__d = !1), l.__v = t, t.__e = r.__e, t.__k = r.__k, l.__h.length && s.push(l), f = 0; f < t.__k.length; f++) t.__k[f] && (t.__k[f].__ = t);
                            break e
                        }
                        null != l.componentWillUpdate && l.componentWillUpdate(w, l.__s, E), null != l.componentDidUpdate && l.__h.push((function() {
                            l.componentDidUpdate(p, v, g)
                        }))
                    }
                    l.context = E, l.props = w, l.state = l.__s, (f = n.__r) && f(t), l.__d = !1, l.__v = t, l.__P = e, f = l.render(l.props, l.state, l.context), t.__k = null != f && f.type == m && null == f.key ? f.props.children : Array.isArray(f) ? f : [f], null != l.getChildContext && (i = d(d({}, i), l.getChildContext())), h || null == l.getSnapshotBeforeUpdate || (g = l.getSnapshotBeforeUpdate(p, v)), k(e, t, r, i, o, a, s, u, c), l.base = t.__e, l.__h.length && s.push(l), _ && (l.__E = l.__ = null), l.__e = !1
                } else null == a && t.__v === r.__v ? (t.__k = r.__k, t.__e = r.__e) : t.__e = C(r.__e, t, r, i, o, a, s, c);
                (f = n.diffed) && f(t)
            }
            catch (e) {
                t.__v = null, n.__e(e, t, r)
            }
            return t.__e
        }

        function O(e, t) {
            n.__c && n.__c(t, e), e.some((function(t) {
                try {
                    e = t.__h, t.__h = [], e.some((function(e) {
                        e.call(t)
                    }))
                } catch (e) {
                    n.__e(e, t.__v)
                }
            }))
        }

        function C(e, t, r, n, i, o, a, s) {
            var u, c, h, d, p, v = r.props,
                g = t.props;
            if (i = "svg" === t.type || i, null != o)
                for (u = 0; u < o.length; u++)
                    if (null != (c = o[u]) && ((null === t.type ? 3 === c.nodeType : c.localName === t.type) || e == c)) {
                        e = c, o[u] = null;
                        break
                    }
            if (null == e) {
                if (null === t.type) return document.createTextNode(g);
                e = i ? document.createElementNS("http://www.w3.org/2000/svg", t.type) : document.createElement(t.type, g.is && {
                    is: g.is
                }), o = null, s = !1
            }
            if (null === t.type) v !== g && e.data != g && (e.data = g);
            else {
                if (null != o && (o = l.slice.call(e.childNodes)), h = (v = r.props || f).dangerouslySetInnerHTML, d = g.dangerouslySetInnerHTML, !s) {
                    if (v === f)
                        for (v = {}, p = 0; p < e.attributes.length; p++) v[e.attributes[p].name] = e.attributes[p].value;
                    (d || h) && (d && h && d.__html == h.__html || (e.innerHTML = d && d.__html || ""))
                }(function(e, t, r, n, i) {
                    var o;
                    for (o in r) "children" === o || "key" === o || o in t || A(e, o, null, r[o], n);
                    for (o in t) i && "function" != typeof t[o] || "children" === o || "key" === o || "value" === o || "checked" === o || r[o] === t[o] || A(e, o, t[o], r[o], n)
                })(e, g, v, i, s), d ? t.__k = [] : (t.__k = t.props.children, k(e, t, r, n, "foreignObject" !== t.type && i, o, a, f, s)), s || ("value" in g && void 0 !== (u = g.value) && u !== e.value && A(e, "value", u, v.value, !1), "checked" in g && void 0 !== (u = g.checked) && u !== e.checked && A(e, "checked", u, v.checked, !1))
            }
            return e
        }

        function P(e, t, r) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                n.__e(e, r)
            }
        }

        function N(e, t, r) {
            var i, o, a;
            if (n.unmount && n.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || P(i, null, t)), r || "function" == typeof e.type || (r = null != (o = e.__e)), e.__e = e.__d = void 0, null != (i = e.__c)) {
                if (i.componentWillUnmount) try {
                    i.componentWillUnmount()
                } catch (e) {
                    n.__e(e, t)
                }
                i.base = i.__P = null
            }
            if (i = e.__k)
                for (a = 0; a < i.length; a++) i[a] && N(i[a], t, r);
            null != o && p(o)
        }

        function I(e, t, r) {
            return this.constructor(e, r)
        }

        function L(e, t, r) {
            var i, o, a;
            n.__ && n.__(e, t), o = (i = r === u) ? null : r && r.__k || t.__k, e = v(m, null, [e]), a = [], T(t, (i ? t : r || t).__k = e, o || f, f, void 0 !== t.ownerSVGElement, r && !i ? [r] : o ? null : l.slice.call(t.childNodes), a, r || f, i), O(a, e)
        }

        function B(e, t) {
            L(e, t, u)
        }

        function H(e, t) {
            var r, n;
            for (n in t = d(d({}, e.props), t), arguments.length > 2 && (t.children = l.slice.call(arguments, 2)), r = {}, t) "key" !== n && "ref" !== n && (r[n] = t[n]);
            return g(e.type, r, t.key || e.key, t.ref || e.ref, null)
        }

        function U(e) {
            var t = {},
                r = {
                    __c: "__cC" + c++,
                    __: e,
                    Consumer: function(e, t) {
                        return e.children(t)
                    },
                    Provider: function(e) {
                        var n, i = this;
                        return this.getChildContext || (n = [], this.getChildContext = function() {
                            return t[r.__c] = i, t
                        }, this.shouldComponentUpdate = function(e) {
                            i.props.value !== e.value && n.some((function(t) {
                                t.context = e.value, E(t)
                            }))
                        }, this.sub = function(e) {
                            n.push(e);
                            var t = e.componentWillUnmount;
                            e.componentWillUnmount = function() {
                                n.splice(n.indexOf(e), 1), t && t.call(e)
                            }
                        }), e.children
                    }
                };
            return r.Consumer.contextType = r, r.Provider.__ = r, r
        }
        n = {
            __e: function(e, t) {
                for (var r, n; t = t.__;)
                    if ((r = t.__c) && !r.__) try {
                        if (r.constructor && null != r.constructor.getDerivedStateFromError && (n = !0, r.setState(r.constructor.getDerivedStateFromError(e))), null != r.componentDidCatch && (n = !0, r.componentDidCatch(e)), n) return E(r.__E = r)
                    } catch (t) {
                        e = t
                    }
                throw e
            }
        }, y.prototype.setState = function(e, t) {
            var r;
            r = this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof e && (e = e(r, this.props)), e && d(r, e), null != e && this.__v && (t && this.__h.push(t), E(this))
        }, y.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), E(this))
        }, y.prototype.render = m, i = [], o = 0, a = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = f, c = 0;
        var j, D, q, K = 0,
            z = [],
            F = n.__r,
            W = n.diffed,
            G = n.__c,
            V = n.unmount;

        function J(e, t) {
            n.__h && n.__h(D, e, K || t), K = 0;
            var r = D.__H || (D.__H = {
                __: [],
                __h: []
            });
            return e >= r.__.length && r.__.push({}), r.__[e]
        }

        function Y(e) {
            return K = 1, Z(fe, e)
        }

        function Z(e, t, r) {
            var n = J(j++, 2);
            return n.__c || (n.__c = D, n.__ = [r ? r(t) : fe(void 0, t), function(t) {
                var r = e(n.__[0], t);
                n.__[0] !== r && (n.__[0] = r, n.__c.setState({}))
            }]), n.__
        }

        function X(e, t) {
            var r = J(j++, 3);
            !n.__s && ce(r.__H, t) && (r.__ = e, r.__H = t, D.__H.__h.push(r))
        }

        function Q(e, t) {
            var r = J(j++, 4);
            !n.__s && ce(r.__H, t) && (r.__ = e, r.__H = t, D.__h.push(r))
        }

        function $(e) {
            return K = 5, te((function() {
                return {
                    current: e
                }
            }), [])
        }

        function ee(e, t, r) {
            K = 6, Q((function() {
                "function" == typeof e ? e(t()) : e && (e.current = t())
            }), null == r ? r : r.concat(e))
        }

        function te(e, t) {
            var r = J(j++, 7);
            return ce(r.__H, t) ? (r.__H = t, r.__h = e, r.__ = e()) : r.__
        }

        function re(e, t) {
            return K = 8, te((function() {
                return e
            }), t)
        }

        function ne(e) {
            var t = D.context[e.__c],
                r = J(j++, 9);
            return r.__c = e, t ? (null == r.__ && (r.__ = !0, t.sub(D)), t.props.value) : e.__
        }

        function ie(e, t) {
            n.useDebugValue && n.useDebugValue(t ? t(e) : e)
        }

        function oe(e) {
            var t = J(j++, 10),
                r = Y();
            return t.__ = e, D.componentDidCatch || (D.componentDidCatch = function(e) {
                t.__ && t.__(e), r[1](e)
            }), [r[0], function() {
                r[1](void 0)
            }]
        }

        function ae() {
            z.some((function(e) {
                if (e.__P) try {
                    e.__H.__h.forEach(se), e.__H.__h.forEach(ue), e.__H.__h = []
                } catch (t) {
                    return e.__H.__h = [], n.__e(t, e.__v), !0
                }
            })), z = []
        }

        function se(e) {
            e.t && e.t()
        }

        function ue(e) {
            var t = e.__();
            "function" == typeof t && (e.t = t)
        }

        function ce(e, t) {
            return !e || t.some((function(t, r) {
                return t !== e[r]
            }))
        }

        function fe(e, t) {
            return "function" == typeof t ? t(e) : t
        }

        function le(e, t) {
            for (var r in t) e[r] = t[r];
            return e
        }

        function he(e, t) {
            for (var r in e)
                if ("__source" !== r && !(r in t)) return !0;
            for (var n in t)
                if ("__source" !== n && e[n] !== t[n]) return !0;
            return !1
        }
        n.__r = function(e) {
            F && F(e), j = 0, (D = e.__c).__H && (D.__H.__h.forEach(se), D.__H.__h.forEach(ue), D.__H.__h = [])
        }, n.diffed = function(e) {
            W && W(e);
            var t = e.__c;
            if (t) {
                var r = t.__H;
                r && r.__h.length && (1 !== z.push(t) && q === n.requestAnimationFrame || ((q = n.requestAnimationFrame) || function(e) {
                    var t, r = function() {
                            clearTimeout(n), cancelAnimationFrame(t), setTimeout(e)
                        },
                        n = setTimeout(r, 100);
                    "undefined" != typeof window && (t = requestAnimationFrame(r))
                })(ae))
            }
        }, n.__c = function(e, t) {
            t.some((function(e) {
                try {
                    e.__h.forEach(se), e.__h = e.__h.filter((function(e) {
                        return !e.__ || ue(e)
                    }))
                } catch (r) {
                    t.some((function(e) {
                        e.__h && (e.__h = [])
                    })), t = [], n.__e(r, e.__v)
                }
            })), G && G(e, t)
        }, n.unmount = function(e) {
            V && V(e);
            var t = e.__c;
            if (t) {
                var r = t.__H;
                if (r) try {
                    r.__.forEach((function(e) {
                        return e.t && e.t()
                    }))
                } catch (e) {
                    n.__e(e, t.__v)
                }
            }
        };
        var de = function(e) {
            var t, r;

            function n(t) {
                var r;
                return (r = e.call(this, t) || this).isPureReactComponent = !0, r
            }
            return r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, n.prototype.shouldComponentUpdate = function(e, t) {
                return he(this.props, e) || he(this.state, t)
            }, n
        }(y);

        function pe(e, t) {
            function r(e) {
                var r = this.props.ref,
                    n = r == e.ref;
                return !n && r && (r.call ? r(null) : r.current = null), t ? !t(this.props, e) || !n : he(this.props, e)
            }

            function n(t) {
                return this.shouldComponentUpdate = r, v(e, le({}, t))
            }
            return n.prototype.isReactComponent = !0, n.displayName = "Memo(" + (e.displayName || e.name) + ")", n.t = !0, n
        }
        var ve = n.__b;

        function ge(e) {
            function t(t) {
                var r = le({}, t);
                return delete r.ref, e(r, t.ref)
            }
            return t.prototype.isReactComponent = t.t = !0, t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t
        }
        n.__b = function(e) {
            e.type && e.type.t && e.ref && (e.props.ref = e.ref, e.ref = null), ve && ve(e)
        };
        var _e = function(e, t) {
                return e ? S(e).reduce((function(e, r, n) {
                    return e.concat(t(r, n))
                }), []) : null
            },
            me = {
                map: _e,
                forEach: _e,
                count: function(e) {
                    return e ? S(e).length : 0
                },
                only: function(e) {
                    if (1 !== (e = S(e)).length) throw new Error("Children.only() expects only one child.");
                    return e[0]
                },
                toArray: S
            },
            ye = n.__e;

        function we(e) {
            return e && ((e = le({}, e)).__c = null, e.__k = e.__k && e.__k.map(we)), e
        }

        function be() {
            this.__u = 0, this.o = null, this.__b = null
        }

        function Ee(e) {
            var t = e.__.__c;
            return t && t.u && t.u(e)
        }

        function xe(e) {
            var t, r, n;

            function i(i) {
                if (t || (t = e()).then((function(e) {
                        r = e.default || e
                    }), (function(e) {
                        n = e
                    })), n) throw n;
                if (!r) throw t;
                return v(r, i)
            }
            return i.displayName = "Lazy", i.t = !0, i
        }

        function ke() {
            this.i = null, this.l = null
        }
        n.__e = function(e, t, r) {
            if (e.then)
                for (var n, i = t; i = i.__;)
                    if ((n = i.__c) && n.__c) return n.__c(e, t.__c);
            ye(e, t, r)
        }, (be.prototype = new y).__c = function(e, t) {
            var r = this;
            null == r.o && (r.o = []), r.o.push(t);
            var n = Ee(r.__v),
                i = !1,
                o = function() {
                    i || (i = !0, n ? n(a) : a())
                };
            t.__c = t.componentWillUnmount, t.componentWillUnmount = function() {
                o(), t.__c && t.__c()
            };
            var a = function() {
                var e;
                if (!--r.__u)
                    for (r.__v.__k[0] = r.state.u, r.setState({
                            u: r.__b = null
                        }); e = r.o.pop();) e.forceUpdate()
            };
            r.__u++ || r.setState({
                u: r.__b = r.__v.__k[0]
            }), e.then(o, o)
        }, be.prototype.render = function(e, t) {
            return this.__b && (this.__v.__k[0] = we(this.__b), this.__b = null), [v(y, null, t.u ? null : e.children), t.u && e.fallback]
        };
        var Se = function(e, t, r) {
            if (++r[1] === r[0] && e.l.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.l.size))
                for (r = e.i; r;) {
                    for (; r.length > 3;) r.pop()();
                    if (r[1] < r[0]) break;
                    e.i = r = r[2]
                }
        };
        (ke.prototype = new y).u = function(e) {
            var t = this,
                r = Ee(t.__v),
                n = t.l.get(e);
            return n[0]++,
                function(i) {
                    var o = function() {
                        t.props.revealOrder ? (n.push(i), Se(t, e, n)) : i()
                    };
                    r ? r(o) : o()
                }
        }, ke.prototype.render = function(e) {
            this.i = null, this.l = new Map;
            var t = S(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var r = t.length; r--;) this.l.set(t[r], this.i = [1, 0, this.i]);
            return e.children
        }, ke.prototype.componentDidUpdate = ke.prototype.componentDidMount = function() {
            var e = this;
            e.l.forEach((function(t, r) {
                Se(e, r, t)
            }))
        };
        var Re = function() {
            function e() {}
            var t = e.prototype;
            return t.getChildContext = function() {
                return this.props.context
            }, t.render = function(e) {
                return e.children
            }, e
        }();

        function Ae(e) {
            var t = this,
                r = e.container,
                n = v(Re, {
                    context: t.context
                }, e.vnode);
            return t.s && t.s !== r && (t.v.parentNode && t.s.removeChild(t.v), N(t.h), t.p = !1), e.vnode ? t.p ? (r.__k = t.__k, L(n, r), t.__k = r.__k) : (t.v = document.createTextNode(""), B("", r), r.appendChild(t.v), t.p = !0, t.s = r, L(n, r, t.v), t.__k = t.v.__k) : t.p && (t.v.parentNode && t.s.removeChild(t.v), N(t.h)), t.h = n, t.componentWillUnmount = function() {
                t.v.parentNode && t.s.removeChild(t.v), N(t.h)
            }, null
        }

        function Me(e, t) {
            return v(Ae, {
                vnode: e,
                container: t
            })
        }
        var Te = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
        y.prototype.isReactComponent = {};
        var Oe = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;

        function Ce(e, t, r) {
            if (null == t.__k)
                for (; t.firstChild;) t.removeChild(t.firstChild);
            return L(e, t), "function" == typeof r && r(), e ? e.__c : null
        }

        function Pe(e, t, r) {
            return B(e, t), "function" == typeof r && r(), e ? e.__c : null
        }
        var Ne = n.event;

        function Ie(e, t) {
            e["UNSAFE_" + t] && !e[t] && Object.defineProperty(e, t, {
                configurable: !1,
                get: function() {
                    return this["UNSAFE_" + t]
                },
                set: function(e) {
                    this["UNSAFE_" + t] = e
                }
            })
        }
        n.event = function(e) {
            Ne && (e = Ne(e)), e.persist = function() {};
            var t = !1,
                r = !1,
                n = e.stopPropagation;
            e.stopPropagation = function() {
                n.call(e), t = !0
            };
            var i = e.preventDefault;
            return e.preventDefault = function() {
                i.call(e), r = !0
            }, e.isPropagationStopped = function() {
                return t
            }, e.isDefaultPrevented = function() {
                return r
            }, e.nativeEvent = e
        };
        var Le = {
                configurable: !0,
                get: function() {
                    return this.class
                }
            },
            Be = n.vnode;
        n.vnode = function(e) {
            e.$$typeof = Oe;
            var t = e.type,
                r = e.props;
            if (t) {
                if (r.class != r.className && (Le.enumerable = "className" in r, null != r.className && (r.class = r.className), Object.defineProperty(r, "className", Le)), "function" != typeof t) {
                    var n, i, o;
                    for (o in r.defaultValue && void 0 !== r.value && (r.value || 0 === r.value || (r.value = r.defaultValue), delete r.defaultValue), Array.isArray(r.value) && r.multiple && "select" === t && (S(r.children).forEach((function(e) {
                            -1 != r.value.indexOf(e.props.value) && (e.props.selected = !0)
                        })), delete r.value), r)
                        if (n = Te.test(o)) break;
                    if (n)
                        for (o in i = e.props = {}, r) i[Te.test(o) ? o.replace(/[A-Z0-9]/, "-$&").toLowerCase() : o] = r[o]
                }! function(t) {
                    var r = e.type,
                        n = e.props;
                    if (n && "string" == typeof r) {
                        var i = {};
                        for (var o in n) /^on(Ani|Tra|Tou)/.test(o) && (n[o.toLowerCase()] = n[o], delete n[o]), i[o.toLowerCase()] = o;
                        if (i.ondoubleclick && (n.ondblclick = n[i.ondoubleclick], delete n[i.ondoubleclick]), i.onbeforeinput && (n.onbeforeinput = n[i.onbeforeinput], delete n[i.onbeforeinput]), i.onchange && ("textarea" === r || "input" === r.toLowerCase() && !/^fil|che|ra/i.test(n.type))) {
                            var a = i.oninput || "oninput";
                            n[a] || (n[a] = n[i.onchange], delete n[i.onchange])
                        }
                    }
                }(), "function" == typeof t && !t.m && t.prototype && (Ie(t.prototype, "componentWillMount"), Ie(t.prototype, "componentWillReceiveProps"), Ie(t.prototype, "componentWillUpdate"), t.m = !0)
            }
            Be && Be(e)
        };
        var He = "16.8.0";

        function Ue(e) {
            return v.bind(null, e)
        }

        function je(e) {
            return !!e && e.$$typeof === Oe
        }

        function De(e) {
            return je(e) ? H.apply(null, arguments) : e
        }

        function qe(e) {
            return !!e.__k && (L(null, e), !0)
        }

        function Ke(e) {
            return e && (e.base || 1 === e.nodeType && e) || null
        }
        var ze = function(e, t) {
            return e(t)
        };
        t.default = {
            useState: Y,
            useReducer: Z,
            useEffect: X,
            useLayoutEffect: Q,
            useRef: $,
            useImperativeHandle: ee,
            useMemo: te,
            useCallback: re,
            useContext: ne,
            useDebugValue: ie,
            version: "16.8.0",
            Children: me,
            render: Ce,
            hydrate: Ce,
            unmountComponentAtNode: qe,
            createPortal: Me,
            createElement: v,
            createContext: U,
            createFactory: Ue,
            cloneElement: De,
            createRef: _,
            Fragment: m,
            isValidElement: je,
            findDOMNode: Ke,
            Component: y,
            PureComponent: de,
            memo: pe,
            forwardRef: ge,
            unstable_batchedUpdates: ze,
            Suspense: be,
            SuspenseList: ke,
            lazy: xe
        }
    }])
]);