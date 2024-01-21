(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[525],{942:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard/customers",function(){return n(2197)}])},3110:function(e,t,n){"use strict";n.d(t,{h8:function(){return l},Ll:function(){return c},KF:function(){return o},Rf:function(){return a},Ib:function(){return i},Db:function(){return d}});let r=n(5121).Z.create({baseURL:"https://admin.urbanchat.ai"});r.interceptors.request.use(async function(e){let t=localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e},function(e){return Promise.reject(e)}),r.interceptors.response.use(e=>({data:e.data,code:e.status,message:""}),e=>{console.log({error:e});let t={data:null,code:0,message:""};return e.response?((401==e.response.status||403==e.response.status)&&(localStorage.removeItem("access_token"),window.location.href="/login"),t.code=e.response.status,t.message=e.response.data.message):e.request?(t.code=408,t.message="No response received from the server"):(t.code=500,t.message=e.message),t});let s={headers:{"Content-Type":"application/json"}};async function i(e,t){return await r.post("/api/login",{email:e,password:t},s)}async function c(e,t,n){return await r.get("/api/dashboard?type=".concat(e,"&startTime=").concat(t,"&endTime=").concat(n),s)}async function a(e){return await r.get("/api/user-details?page=".concat(e,"&per_page=",10),s)}async function o(){return await r.get("/api/fetch-price-models",s)}async function l(e){return await r.post("/api/delete-user?user_id=".concat(e),{},s)}async function d(e,t){return await r.post("/api/edit-price-model?pricePlanId=".concat(t),e,s)}},3482:function(e,t,n){"use strict";function r(e){let t=new Date(e);return"".concat(t.getDate()," ").concat(t.toLocaleDateString("en-US",{month:"short"})," ").concat(t.getFullYear())}function s(e){return e.toISOString().split("T")[0]}function i(e,t){return Math.floor(Math.abs(t.getTime()-e.getTime())/864e5)}n.d(t,{b:function(){return i},ie:function(){return r},p6:function(){return s}})},2197:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(5893),s=n(2742),i=n(3110),c=n(1163),a=n(7294),o=n(6501),l={src:"/_next/static/media/no-image.9271706e.png"},d=n(3482);function u(){let e=(0,c.useRouter)(),t=(0,a.useRef)(1),[n,u]=(0,a.useState)([]),[h,f]=(0,a.useState)(!1),m=(0,a.useRef)(null),p=(0,a.useRef)(!1);async function g(e){if(p.current||h)return;let n=e?t.current+1:t.current;f(!0);let r=await (0,i.Rf)(n);if(f(!1),r.data){let s=Object.values(r.data.response);s.length<10&&(p.current=!0),e?(t.current=n,u(e=>[...e.slice(),...s])):u(s)}else o.ZP.error(r.message);window.addEventListener("scroll",j)}function j(){null!=m.current&&m.current.getBoundingClientRect().top<=window.innerHeight&&(console.log("Scrolled over the element!"),g(!0),window.removeEventListener("scroll",j))}(0,a.useEffect)(()=>{let{start:t,end:n}=e.query;return g(!1),window.addEventListener("scroll",j),()=>{window.removeEventListener("scroll",j)}},[]);let[x,_]=(0,a.useState)("");async function w(e){if(x){o.ZP.error("Please wait, deleting...");return}if(!1==confirm("Are you really wants to delete *".concat(e,"*?. This action can't be undone!")))return;_(e);let t=await (0,i.h8)(e);_(""),t.data?(o.ZP.success("Deleted"),u(t=>t.filter(t=>t._id!=e))):o.ZP.error(t.message)}return(0,r.jsx)(s.Z,{children:(0,r.jsxs)("div",{className:"main-content",ref:m,children:[(0,r.jsx)("h1",{children:"Customers"}),(0,r.jsx)("div",{className:"table-holder",children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"#"}),(0,r.jsx)("th",{children:"Profile"}),(0,r.jsx)("th",{children:"Customer Name"}),(0,r.jsx)("th",{children:"Email"}),(0,r.jsx)("th",{children:"Country Code"}),(0,r.jsx)("th",{children:"Phone"}),(0,r.jsx)("th",{children:"Chatbot"}),(0,r.jsx)("th",{children:"Active"}),(0,r.jsx)("th",{children:"Whatsapp"}),(0,r.jsx)("th",{children:"Facebook"}),(0,r.jsx)("th",{children:"Shopify"}),(0,r.jsx)("th",{children:"Wordpress"}),(0,r.jsx)("th",{children:"Joined At"}),(0,r.jsx)("th",{children:"Delete"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsx)("tr",{children:(0,r.jsx)("td",{})}),n.map((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:t+1}),(0,r.jsx)("td",{children:(0,r.jsx)("img",{className:"profile",src:e.profile_image?e.profile_image:l.src})}),(0,r.jsx)("td",{children:e.full_name?e.full_name:"No Name"}),(0,r.jsx)("td",{children:e.email}),(0,r.jsx)("td",{children:e.country_code}),(0,r.jsx)("td",{children:e.phone_number}),(0,r.jsx)("td",{children:e.chatbot_count}),(0,r.jsx)("td",{children:String(e.is_active)}),(0,r.jsx)("td",{children:String(e.is_whatsapp_integrated)}),(0,r.jsx)("td",{children:String(e.is_facebook_integrated)}),(0,r.jsx)("td",{children:String(e.is_shopify_integrated)}),(0,r.jsx)("td",{children:String(e.is_wordpress_integrated)}),(0,r.jsx)("td",{children:(0,d.ie)(e.created_time)}),(0,r.jsx)("td",{children:(0,r.jsxs)("button",{onClick:()=>w(e._id),className:"btn danger hover",children:[x==e._id&&(0,r.jsx)("div",{className:"loading mini"}),"Delete"]})})]},t))]})]})}),h&&(0,r.jsx)("div",{style:{margin:"50px auto",display:"flex",justifyContent:"center"},className:"loading-container",children:(0,r.jsx)("div",{className:"loading"})})]})})}}},function(e){e.O(0,[640,121,742,774,888,179],function(){return e(e.s=942)}),_N_E=e.O()}]);