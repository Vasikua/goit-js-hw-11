import{i as f,S as d}from"./assets/vendor-7659544d.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g=document.querySelector(".loader"),h="42549902-185aac32f1223c9241b6c0bc7",y="https://pixabay.com/api/";function b(i){g.style.display="flex";const s=`${y}?key=${h}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{console.log(r),r.hits.lenght===0&&f.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(r=>{console.log(r)})}function L(i){const r=i.hits.map(({webformatURL:a,largeImageURL:e,tags:t,likes:l,views:m,comments:u,downloads:p})=>`<li class="list-link">
                       
                        <a href="${e}">
                        <img class="gallery-links" src="${a}" alt="${t}"></a>
                      
                        <div class="parameters">
                            <ul class="parameters-list">
                                <li class="parameters-list-item">likes:</li>
                                <li class="parameters-list-item">${l}</li>
                            </ul>
                            <ul class="parameters-list">
                                <li class="parameters-list-item">views:</li>
                                <li class="parameters-list-item">${m}</li>
                            </ul>
                            <ul class="parameters-list">
                                <li class="parameters-list-item">comments:</li>
                                <li class="parameters-list-item">${u}</li>
                            </ul>
                            <ul class="parameters-list">
                                <li class="parameters-list-item">downloads:</li>
                                <li class="parameters-list-item">${p}</li>
                            </ul>
                    </div>
                    </li>`).join("");n.innerHTML=r,$.refresh("https://github.com/andreknieriem/simplelightbox#public-methods")}const n=document.querySelector(".gallery"),$=new d(".gallery a",{captionPosition:"bottom",captionDelay:"250",captionsData:"alt",close:!0,animationSpeed:200,preloading:!0,loop:!0,scaleImageToRatio:!0,scrollZoomFactor:.9,overlay:!0,overlayOpacity:1,spinner:!0}),o=document.querySelector("form");let c;o.addEventListener("submit",i=>{i.preventDefault(),n.innerHTML="",c=i.target.elements.serchfield.value.trim(),b(c).then(s=>L(s)),o.reset()});
//# sourceMappingURL=commonHelpers.js.map
