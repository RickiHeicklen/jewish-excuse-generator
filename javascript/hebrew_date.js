// Modified from https://www.hebcal.com/etc/hdate-en.js
// /* 2023-03-19T06:34:59.599Z */
// /*! @hebcal/core v3.50.3 */

function getHebrewDate(){
    var hebcal=function(r){"use strict";function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},t(r)}var n=[0,31,28,31,30,31,30,31,31,30,31,30,31];function e(r,t){return r-t*Math.floor(r/t)}function o(r,t){return Math.floor(r/t)}function a(r){return!(r%4||!(r%100)&&r%400)}function u(r,t,n){var e=r-1;return 365*e+o(e,4)-o(e,100)+o(e,400)+o(367*t-362,12)+(t<=2?0:a(r)?-1:-2)+n}[n,n.slice()][1][2]=29;var c=["","Nisan","Iyyar","Sivan","Tamuz","Av","Elul","Tishrei","Cheshvan","Kislev","Tevet","Sh'vat"],f=[c.concat(["Adar","Nisan"]),c.concat(["Adar I","Adar II","Nisan"])],i=Object.create(null),h=-1373428;function s(r,t,n){if(r<1)throw new RangeError("hebrew2abs: invalid year ".concat(r));var e=n;if(t<7){for(var o=7;o<=y(r);o++)e+=v(o,r);for(var a=1;a<t;a++)e+=v(a,r)}else for(var u=7;u<t;u++)e+=v(u,r);return h+m(r)+e-1}function l(r){return h+m(r)}function b(r){return(1+7*r)%19<7}function y(r){return 12+b(r)}function v(r,t){switch(r){case 2:case 4:case 6:case 10:case 13:return 29}return 12===r&&!b(t)||8===r&&!w(t)||9===r&&A(t)?29:30}function m(r){var t=i[r]=i[r]||function(r){var t=r-1,n=235*Math.floor(t/19)+t%19*12+Math.floor((t%19*7+1)/19),e=204+n%1080*793,o=5+12*n+793*Math.floor(n/1080)+Math.floor(e/1080),a=e%1080+o%24*1080,u=1+29*n+Math.floor(o/24),c=u+(a>=19440||2==u%7&&a>=9924&&!b(r)||1==u%7&&a>=16789&&b(t));return c+(c%7==0||c%7==3||c%7==5)}(r);return t}function p(r){return m(r+1)-m(r)}function w(r){return p(r)%10==5}function A(r){return p(r)%10==3}var I={abs2hebrew:function(r){if("number"!=typeof r||isNaN(r))throw new TypeError("invalid parameter to abs2hebrew ".concat(r));if((r=Math.trunc(r))<=h)throw new RangeError("abs2hebrew: ".concat(r," is before epoch"));for(var t=Math.floor((r-h)/365.24682220597794);l(t)<=r;)++t;for(var n=r<s(--t,1,1)?7:1;r>s(t,n,v(n,t));)++n;return{yy:t,mm:n,dd:1+r-s(t,n,1)}},daysInMonth:v,daysInYear:p,getMonthName:function(r,t){if("number"!=typeof r||isNaN(r)||r<1||r>14)throw new TypeError("bad month argument ".concat(r));return f[+b(t)][r]},hebrew2abs:s,isLeapYear:b,longCheshvan:w,months:{NISAN:1,IYYAR:2,SIVAN:3,TAMUZ:4,AV:5,ELUL:6,TISHREI:7,CHESHVAN:8,KISLEV:9,TEVET:10,SHVAT:11,ADAR_I:12,ADAR_II:13},monthsInYear:y,shortKislev:A};return r.abs2greg=function(r){if("number"!=typeof r)throw new TypeError("Argument not a Number: ".concat(r));var t=function(r){var t=r-1,n=o(t,146097),a=e(t,146097),u=o(a,36524),c=e(a,36524),f=o(c,1461),i=o(e(c,1461),365),h=400*n+100*u+4*f+i;return 4!=u&&4!=i?h+1:h}(r=Math.trunc(r)),n=o(12*(r-u(t,1,1)+(r<u(t,3,1)?0:a(t)?1:2))+373,367),c=r-u(t,n,1)+1,f=new Date(t,n-1,c);return t<100&&t>=0&&f.setFullYear(t),f},r.greg2abs=function(r){if("object"!==t(n=r)||Date.prototype!==n.__proto__)throw new TypeError("Argument not a Date: ".concat(r));var n;return u(r.getFullYear(),r.getMonth()+1,r.getDate())},r.hdate=I,r}({});

    function ordinal(n) {
        var s = ['th', 'st', 'nd', 'rd'];
        var v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    var dt = new Date();
    var abs = hebcal.greg2abs(dt);
    if (dt.getHours() > 19) {
        abs++;
    }

    var hdt = hebcal.hdate.abs2hebrew(abs);
    var mname = hebcal.hdate.getMonthName(hdt.mm, hdt.yy);

    const gematria = ["N/A", "aleph", "bet", "gimmel", "daled", "hey", "vav", "zayin", "chet", "tet", "yud", 
    "yud aleph", "yud bet", "yud gimmel", "yud daled", "tu", "tet zayin", "yud zayin", "yud chet", "yud tet", "kaf", 
    "kaf aleph", "kaf bet", "kaf gimmel", "kaf daled", "kaf hey", "kaf vav", "kaf zayin", "kaf chet", "kaf tet", "lamed"];

    // var dateStr = ordinal(hdt.dd) + ' b\'' + mname + ', ' + hdt.yy;
    var dateStr = gematria[hdt.dd] + ' b\'' + mname.toLowerCase(); // + ', ' + hdt.yy;

    // document.write(dateStr);
    return dateStr;
}
document.getElementById("hebrew_date").innerHTML = getHebrewDate();