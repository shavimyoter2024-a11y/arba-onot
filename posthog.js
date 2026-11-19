/* PostHog: הקלטות גלישה (ניסוי בדף ארבע עונות, 19/11/2026).
   - שרת אירופה. כל שדות הטופס מוסתרים בהקלטה (maskAllInputs), שם/טלפון/מייל לא נשמרים.
   - מי שלחץ "סירוב" בבאנר העוגיות (sy_consent=no) לא מוקלט, וגם לחיצה על סירוב באמצע הביקור עוצרת מיד. */
(function () {
  var KEY = "phc_ATNiAxNXsD4caCJXDTkTKa4N5tbgfdeHgTsWWVjoBm4g";
  try { if (localStorage.getItem("sy_consent") === "no") return; } catch (e) {}

  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset identify setPersonProperties group getFeatureFlag isFeatureEnabled onFeatureFlags startSessionRecording stopSessionRecording".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);

  window.posthog.init(KEY, {
    api_host: "https://eu.i.posthog.com",
    person_profiles: "identified_only",
    autocapture: true,
    capture_pageview: true,
    session_recording: { maskAllInputs: true }
  });
  window.posthog.register({ page_id: "arba-onot" });

  document.addEventListener("click", function (e) {
    if (e.target && e.target.closest && e.target.closest("#sy-consent .sy-no")) {
      try { window.posthog.stopSessionRecording(); window.posthog.opt_out_capturing(); } catch (x) {}
    }
  }, true);
})();
