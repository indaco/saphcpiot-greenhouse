_.mixin({sum:function(r,n,t){if(!n&&_.isEmpty(r))return 0;var e=0;if(!n&&_.isArray(r)){for(var i=r.length-1;i>-1;i-=1)e+=r[i];return e}return each(r,function(r,i,a){var u=n?n.call(t,r,i,a):r;e+=u}),e},mean:function(r,n,t){return!n&&_.isEmpty(r)?1/0:!n&&_.isArray(r)?_.sum(r)/r.length:_.isArray(r)&&!_.isEmpty(r)?_.sum(r,n,t)/r.length:void 0},median:function(r,n,t){if(_.isEmpty(r))return 1/0;var e=[];return!n&&_.isArray(r)?(e=_.clone(r),e.sort(function(r,n){return r-n})):_.isArray(r)&&each(r,function(r,i,a){e.push(n?n.call(t,r,i,a):r),e.sort()}),e.length%2?e[Math.floor(e.length/2)]:_.isNumber(e[e.length/2-1])&&_.isNumber(e[e.length/2])?(e[e.length/2-1]+e[e.length/2])/2:e[e.length/2-1]},nrange:function(r,n,t){if(arguments.length<=1){if(0===r)return[];n=r||0,r=0}t=arguments[2]||1*(n>r)||-1;var e=Math.max(Math.ceil((n-r)/t),0),i=0,a=new Array(e);do a[i]=r,r+=t;while((i+=1)<e);return a}});
