function notify(e="Welcome"){var t=document.getElementById("snackbar");t.className="show",t.innerHTML=e,new Audio("./sounds/1.mp3").play(),setTimeout((function(){t.className=t.className.replace("show","")}),5e3)}function elem(e){return document.getElementById(e)}var itConsultValueSelected=null;function signIn(){dialog.open({accept:"Sign In",dialogClass:"custom",message:"Sign In",soundAccept:"./sounds/1.mp3",soundOpen:"./sounds/2.mp3",target:null,template:'\n        <input type="button" value="Not registered? Sign Up" onclick="joinUs()">\n        <input type="email" name="email" placeholder="Enter  Email">\n        <input type="password" name="password" placeholder="Enter  password">'}),dialog.waitForUser().then((e=>{var t=new FormData;t.append("email",e.email),e.password=function __(e){let t=0;for(let s=0;s<e.length;s++)t=Math.imul(31,t)+e.charCodeAt(s)|0;return t}(e.password),t.append("password",e.password);var s=new XMLHttpRequest;s.open("POST","./sign-in.php",!0),s.send(t),s.onload=function(e){if(200===s.status){let e="Welcome "+this.responseText;notify(e),display(e),localStorage.setItem("signedIn",this.responseText)}else console.log(s.response)}}))}function itConsultStats(e,t){var s=new FormData;s.append("choice",t),s.append("email",e);var n=new XMLHttpRequest;n.open("POST","./it-consult-stats.php",!0),n.send(s),n.onload=function(e){if(200===n.status){
//console.log(JSON.parse(this.responseText));
var t=JSON.parse(this.responseText),s="",a="";if(t.length>0){elem("itconsult-stats").innerHTML="";for(var o=0;o<t.length;o++){s=t[o].choice.split(";;;")[1].split(":::")[1],a=t[o].total;
//console.log(item);
//console.log(itemTotal);
elem("itconsult-stats").innerHTML+=s+" : "+a+"<br>"}}else console.log("no results")}else console.log(n.response)}}function save(e,t){localStorage.setItem(e,JSON.stringify(t))}function itConsult(){var e=JSON.parse(localStorage.getItem("ablUser"));if(e){e.quotation.items["it-consult-discount"]={"item-description":elem("display").innerHTML,discount:"10%"},save("ablUser",e),itConsultStats(e.email,"item-title:::it-consult-discount;;;item-description:::"+elem("display").innerHTML+";;;discount:::10%"),notify("Thanks "+e.firstName+" "+e.lastName+", you just saved yourself 10% on ABL Tech fees. ")}else joinUs()}function facebookShare(e){itConsultValueSelected=e.value,elem("display").innerHTML="I prefer "+itConsultValueSelected}function display(e){elem("display").innerHTML=e}function myFunction(){document.getElementById("toggle-nav").classList.toggle("active")}window.addEventListener("DOMContentLoaded",(e=>{JSON.parse(localStorage.getItem("ablUser"))&&(emailDiv.style.display="none"),localStorage.getItem("signedIn")&&display(localStorage.getItem("signedIn"))}));var emailDiv=elem("id-join-us-div");function joinUs(){dialog.open({accept:"Sign Up",dialogClass:"custom",message:"Please enter your credentials",soundAccept:"https://assets.stoumann.dk/audio/accept.mp3",soundOpen:"https://assets.stoumann.dk/audio/open.mp3",target:null,template:'\n        <input type="text" name="username"  placeholder="Enter Username">\n        <input type="text" name="lastName"  placeholder="Enter Last Name">\n        <input type="text" name="firstName" placeholder="Enter  First Name">\n        <input type="email" name="email" placeholder="Enter  Email">\n        <input type="text" name="mobileNo" placeholder="Enter  Mobile Phone">\n        <input type="password" name="password" placeholder="Enter  password">\n        <input type="password" name="confirmPassword" placeholder="Confirm Password">'}),dialog.waitForUser().then((e=>{var t=new FormData;t.append("firstName",e.firstName),t.append("lastName",e.lastName),t.append("username",e.username),t.append("email",e.email),t.append("mobileNo",e.mobileNo),e.password=function __(e){let t=0;for(let s=0;s<e.length;s++)t=Math.imul(31,t)+e.charCodeAt(s)|0;return t}(e.password),t.append("password",e.password),e.quotation={"quote-title":e.firstName+" "+e.lastName,items:{}},localStorage.setItem("ablUser",JSON.stringify(e));var s=new XMLHttpRequest;s.open("POST","./register-user.php",!0),s.send(t),s.onload=function(t){200===s.status?(emailDiv.style.display="none",notify("Thanks "+e.firstName+" "+e.lastName+". You have been successfully subscribed to ABL Tech")):console.log(s.response)}}))}function emailValid(e){return e.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)}
/**
 * Dialog module.
 * @module dialog.js
 * @version 1.0.0
 * @summary 02-01-2022
 * @author Mads Stoumann
 * @description Custom versions of `alert`, `confirm` and `prompt`, using `<dialog>`
 */
class Dialog {
    constructor(e = {}) {
        this.settings = Object.assign({
            accept: "OK",
            bodyClass: "dialog-open",
            cancel: "Cancel",
            dialogClass: "",
            message: "",
            soundAccept: "",
            soundOpen: "",
            template: ""
        }, e), this.init()
    }
    collectFormData(e) {
        const t = {};
        return e.forEach(((e, s) => {
            Reflect.has(t, s) ? (Array.isArray(t[s]) || (t[s] = [t[s]]), t[s].push(e)) : t[s] = e
        })), t
    }
    getFocusable() {
        return [...this.dialog.querySelectorAll('button,[href],select,textarea,input:not([type="hidden"]),[tabindex]:not([tabindex="-1"])')]
    }
    init() {
        this.dialogSupported = "function" == typeof HTMLDialogElement, this.dialog = document.createElement("dialog"), this.dialog.role = "dialog", this.dialog.dataset.component = this.dialogSupported ? "dialog" : "no-dialog", this.dialog.innerHTML = `\n    <form method="dialog" data-ref="form">\n      <fieldset data-ref="fieldset" role="document">\n        <legend data-ref="message" id="${Math.round(Date.now()).toString(36)}"></legend>\n        <div data-ref="template"></div>\n      </fieldset>\n      <menu>\n        <button${this.dialogSupported?"":' type="button"'} data-ref="cancel" value="cancel"></button>\n        <button${this.dialogSupported?"":' type="button"'} data-ref="accept" value="default"></button>\n      </menu>\n      <audio data-ref="soundAccept"></audio>\n      <audio data-ref="soundOpen"></audio>\n    </form>`, document.body.appendChild(this.dialog), this.elements = {}, this.focusable = [], this.dialog.querySelectorAll("[data-ref]").forEach((e => this.elements[e.dataset.ref] = e)), this.dialog.setAttribute("aria-labelledby", this.elements.message.id), this.elements.cancel.addEventListener("click", (() => {
            this.dialog.dispatchEvent(new Event("cancel"))
        })), this.dialog.addEventListener("keydown", (e => {
            if ("Enter" === e.key && (this.dialogSupported || e.preventDefault(), this.elements.accept.dispatchEvent(new Event("click"))), "Escape" === e.key && this.dialog.dispatchEvent(new Event("cancel")), "Tab" === e.key) {
                e.preventDefault();
                const t = this.focusable.length - 1;
                let s = this.focusable.indexOf(e.target);
                s = e.shiftKey ? s - 1 : s + 1, s < 0 && (s = t), s > t && (s = 0), this.focusable[s].focus()
            }
        })), this.toggle()
    }
    openNoCancelButton(e = {}) {
        const t = Object.assign({}, this.settings, e);
        this.dialog.className = t.dialogClass || "", this.elements.accept.innerText = t.accept, this.elements.message.innerText = t.message, this.elements.soundAccept.src = t.soundAccept || "", this.elements.soundOpen.src = t.soundOpen || "", this.elements.target = t.target || "", this.elements.template.innerHTML = t.template || "", this.focusable = this.getFocusable(), this.hasFormData = this.elements.fieldset.elements.length > 0, t.soundOpen && this.elements.soundOpen.play(), this.toggle(!0), this.hasFormData ? (this.focusable[0].focus(), this.focusable[0].select()) : this.elements.accept.focus()
    }
    open(e = {}) {
        const t = Object.assign({}, this.settings, e);
        this.dialog.className = t.dialogClass || "", this.elements.accept.innerText = t.accept, this.elements.cancel.innerText = t.cancel, this.elements.cancel.hidden = "" === t.cancel, this.elements.message.innerText = t.message, this.elements.soundAccept.src = t.soundAccept || "", this.elements.soundOpen.src = t.soundOpen || "", this.elements.target = t.target || "", this.elements.template.innerHTML = t.template || "", this.focusable = this.getFocusable(), this.hasFormData = this.elements.fieldset.elements.length > 0, t.soundOpen && this.elements.soundOpen.play(), this.toggle(!0), this.hasFormData ? (this.focusable[0].focus(), this.focusable[0].select()) : this.elements.accept.focus()
    }
    toggle(e = !1) {
        this.dialogSupported && e && this.dialog.showModal(), this.dialogSupported || (document.body.classList.toggle(this.settings.bodyClass, e), this.dialog.hidden = !e, this.elements.target && !e && this.elements.target.focus())
    }
    waitForUser() {
        return new Promise((e => {
            this.dialog.addEventListener("cancel", (() => {
                this.toggle(), e(!1)
            }), {
                once: !0
            }), this.elements.accept.addEventListener("click", (() => {
                let t = !this.hasFormData || this.collectFormData(new FormData(this.elements.form));
                this.elements.soundAccept.getAttribute("src").length > 0 && this.elements.soundAccept.play(), this.toggle(), e(t)
            }), {
                once: !0
            })
        }))
    }
    alert(e, t = {
        target: event.target
    }) {
        const s = Object.assign({}, t, {
            cancel: "",
            message: e,
            template: ""
        });
        return this.open(s), this.waitForUser()
    }
    confirm(e, t = {
        target: event.target
    }) {
        const s = Object.assign({}, t, {
            message: e,
            template: ""
        });
        return this.open(s), this.waitForUser()
    }
    prompt(e, t, s = {
        target: event.target
    }) {
        const n = `<label aria-label="${e}"><input type="text" name="prompt" value="${t}"></label>`,
            a = Object.assign({}, s, {
                message: e,
                template: n
            });
        return this.open(a), this.waitForUser()
    }
}
const dialog = new Dialog;

function alert(e) {
    dialog.alert(e).then((t => {
        console.log("message received" + e)
    }))
}

function confirm(e) {
    dialog.confirm(e).then((t => {
        console.log(e)
    }))
}

function prompt(e, t = "ABL Tech") {
    dialog.prompt(e, t).then((s => {
        console.log(e + " " + t)
    }))
}

function soundAlert(e) {
    dialog.openNoCancelButton({
        accept: "Ok",
        dialogClass: "custom",
        message: e,
        soundAccept: "./sounds/1.mp3",
        soundOpen: "./sounds/2.mp3",
        target: null,
        template: ""
    }), dialog.waitForUser().then((e => {
        console.log(e)
    }))
}
if(document.getElementById("btnCustom"))
{
    document.getElementById("btnCustom").addEventListener("click", (e => {
        dialog.open({
            accept: "Sign in",
            dialogClass: "custom",
            message: "Please enter your credentials",
            soundAccept: "./sounds/1.mp3",
            soundOpen: "./sounds/2.mp3",
            target: e.target,
            template: '\n    <label>Username<input type="text" name="username" value="admin"></label>\n    <label>Password<input type="password" name="password" value="password"></label>'
        }), dialog.waitForUser().then((e => {
            console.log(e)
        }))
    }));
}