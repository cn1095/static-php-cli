import{d as oe,s as g,h as j,v as X,o as b,c as w,j as e,t as l,F as U,E as _,e as q,a2 as m,a3 as F,a4 as f,a5 as ae,a as de,a6 as M,p as ue,l as pe,_ as ce}from"./framework.CszIUXhs.js";const re={support:{BSD:"wip"},type:"external","arg-type":"custom",source:"amqp","lib-depends":["librabbitmq"],"ext-depends-windows":["openssl"]},be={type:"external",source:"apcu"},we={type:"builtin"},ge={type:"builtin","arg-type-unix":"with-prefix","arg-type-windows":"with","lib-depends":["bzip2"]},xe={type:"builtin"},me={type:"builtin"},ye={notes:!0,type:"builtin","arg-type":"with","lib-depends":["curl"],"ext-depends-windows":["zlib","openssl"]},he={type:"builtin","arg-type":"custom","lib-suggests":["qdbm"]},ve={support:{BSD:"wip"},type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["libxml2","zlib"],"ext-depends-windows":["xml"]},fe={type:"external",source:"ext-ds"},ze={support:{Windows:"wip",BSD:"wip",Darwin:"wip",Linux:"wip"},type:"wip"},Se={support:{Windows:"wip",BSD:"wip"},notes:!0,type:"external",source:"ext-event","arg-type":"custom","lib-depends":["libevent"],"ext-depends":["openssl"],"ext-suggests":["sockets"]},De={type:"builtin"},Be={support:{Linux:"no",BSD:"wip"},notes:!0,"arg-type":"custom",type:"builtin","lib-depends-unix":["libffi"],"lib-depends-windows":["libffi-win"]},ke={type:"builtin"},qe={type:"builtin"},Ee={type:"builtin","lib-suggests":["openssl"]},We={support:{BSD:"wip"},notes:!0,type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["zlib","libpng"],"ext-depends":["zlib"],"lib-suggests":["libavif","libwebp","libjpeg","freetype"]},Ce={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["gettext"]},Ie={support:{Windows:"wip",BSD:"no",Linux:"no"},notes:!0,type:"external","arg-type":"custom",source:"ext-glfw","lib-depends":["glfw"],"lib-depends-windows":[]},Pe={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["gmp"]},Le={support:{BSD:"wip"},type:"builtin","arg-type":"with-prefix","arg-type-windows":"with","lib-depends-unix":["libiconv"],"lib-depends-windows":["libiconv-win"]},Ue={support:{BSD:"wip"},type:"external",source:"igbinary","ext-suggests":["session","apcu"]},_e={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-imagick","arg-type":"custom","lib-depends":["imagemagick"]},Ne={support:{Windows:"wip",BSD:"wip"},notes:!0,type:"builtin","arg-type":"custom","lib-depends":["imap"],"ext-suggests":["openssl"]},Oe={support:{Windows:"no",BSD:"wip",Darwin:"no"},type:"external",source:"inotify"},Ve={support:{Windows:"no",BSD:"wip"},type:"builtin","lib-depends":["icu"]},Ae={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["ldap"],"lib-suggests":["gmp","libsodium"],"ext-suggests":["openssl"]},Te={support:{BSD:"wip"},type:"builtin","arg-type":"none","ext-depends":["xml"]},je={type:"builtin","arg-type":"custom","ext-depends":["mbstring"],"lib-depends":["onig"]},$e={type:"builtin","arg-type":"custom"},Ge={type:"wip",support:{Windows:"no",BSD:"no",Darwin:"no",Linux:"no"},notes:!0},Xe={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-memcache","arg-type":"custom","lib-depends":["zlib"],"ext-depends":["session"]},Me={support:{Windows:"wip",BSD:"wip",Linux:"no"},type:"external",source:"memcached","arg-type":"custom","cpp-extension":!0,"lib-depends":["libmemcached"],"ext-depends":["session","zlib"]},Re={support:{BSD:"wip",Windows:"wip"},type:"external",source:"mongodb","arg-type":"custom","lib-suggests":["icu","openssl","zstd","zlib"]},He={type:"builtin","arg-type":"with","ext-depends":["mysqlnd"]},Fe={type:"builtin","arg-type-windows":"with","lib-depends":["zlib"]},Ze={type:"wip",support:{Windows:"wip",BSD:"no",Darwin:"no",Linux:"no"},notes:!0},Qe={type:"builtin","arg-type-unix":"custom"},Ke={notes:!0,type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["openssl","zlib"],"ext-depends":["zlib"]},Ye={support:{BSD:"wip"},notes:!0,type:"external",source:"parallel","arg-type-windows":"with","lib-depends-windows":["pthreads4w"]},Je={support:{Windows:"no"},type:"builtin","unix-only":!0},ei={type:"builtin"},ii={type:"builtin","arg-type":"with","ext-depends":["pdo","mysqlnd"]},si={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","ext-depends":["pdo","pgsql"],"lib-depends":["postgresql"]},li={support:{BSD:"wip"},type:"builtin","arg-type":"with","ext-depends":["pdo","sqlite3"],"lib-depends":["sqlite"]},ti={support:{BSD:"wip"},type:"external",source:"pdo_sqlsrv","arg-type":"with","ext-depends":["pdo","sqlsrv"]},ni={support:{Windows:"wip",BSD:"wip"},notes:!0,type:"builtin","arg-type":"with-prefix","lib-depends":["postgresql"]},oi={type:"builtin","ext-depends":["zlib"]},ai={support:{Windows:"no"},type:"builtin","unix-only":!0},di={support:{Windows:"wip",BSD:"wip"},type:"external",source:"protobuf"},ui={support:{BSD:"wip",Darwin:"partial"},notes:!0,type:"external",source:"rar","cpp-extension":!0},pi={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["readline"]},ci={support:{BSD:"wip"},type:"external",source:"redis","arg-type":"custom","ext-suggests":["session","igbinary"],"lib-suggests-unix":["zstd","liblz4"]},ri={type:"builtin"},bi={type:"builtin"},wi={type:"external",source:"ext-simdjson","cpp-extension":!0},gi={support:{BSD:"wip"},type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},xi={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-snappy","cpp-extension":!0,"arg-type":"custom","lib-depends":["snappy"],"ext-suggest":["apcu"]},mi={support:{BSD:"wip"},type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},yi={type:"builtin"},hi={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with","lib-depends":["libsodium"]},vi={support:{BSD:"wip",Windows:"no"},notes:!0,type:"external",source:"spx","arg-type":"custom","lib-depends":["zlib"]},fi={support:{BSD:"wip"},type:"builtin","arg-type":"with-prefix","arg-type-windows":"with","lib-depends":["sqlite"]},zi={support:{BSD:"wip"},type:"external",source:"sqlsrv","lib-depends-unix":["unixodbc"],"ext-depends-linux":["pcntl"],"cpp-extension":!0},Si={support:{BSD:"wip"},type:"external",source:"ext-ssh2","arg-type":"with-prefix","arg-type-windows":"with","lib-depends":["libssh2"],"ext-depends-windows":["openssl","zlib"]},Di={support:{Windows:"no",BSD:"wip"},notes:!0,type:"external",source:"swoole","arg-type":"custom","cpp-extension":!0,"unix-only":!0,"lib-depends":["libcares","brotli","nghttp2","zlib"],"ext-depends":["openssl","curl"],"ext-suggests":["swoole-hook-pgsql","swoole-hook-mysql","swoole-hook-sqlite"]},Bi={support:{BSD:"wip"},notes:!0,type:"external",source:"swow","arg-type":"custom","lib-suggests":["openssl","curl"],"ext-suggests":["openssl","curl"]},ki={support:{Windows:"no",BSD:"wip"},type:"builtin","unix-only":!0},qi={support:{Windows:"no",BSD:"wip"},type:"builtin","unix-only":!0},Ei={support:{BSD:"wip"},type:"builtin"},Wi={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["tidy"]},Ci={type:"builtin"},Ii={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-uuid","arg-type":"with-prefix","lib-depends":["libuuid"]},Pi={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-uv","arg-type":"with-prefix","lib-depends":["libuv"],"ext-depends":["sockets"]},Li={type:"builtin",support:{Windows:"wip",BSD:"no",Darwin:"no",Linux:"no"},notes:!0},Ui={support:{Windows:"wip",BSD:"wip"},notes:!0,type:"external",source:"xhprof","ext-depends":["ctype"]},_i={support:{Windows:"wip",BSD:"wip"},type:"external",source:"xlswriter","arg-type":"custom","ext-depends":["zlib","zip"],"lib-suggests":["openssl"]},Ni={support:{BSD:"wip"},notes:!0,type:"builtin","arg-type":"custom","arg-type-windows":"with","lib-depends":["libxml2"],"ext-depends-windows":["iconv"]},Oi={support:{BSD:"wip"},type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml","dom"]},Vi={support:{BSD:"wip"},type:"builtin","arg-type":"custom","lib-depends":["libxml2"],"ext-depends-windows":["xml"]},Ai={support:{Windows:"wip",BSD:"wip"},type:"builtin","arg-type":"with-prefix","lib-depends":["libxslt"],"ext-depends":["xml","dom"]},Ti={support:{BSD:"wip"},type:"external",source:"yac","arg-type-unix":"custom","ext-depends-unix":["igbinary"]},ji={support:{BSD:"wip"},type:"external",source:"yaml","arg-type-unix":"with-prefix","arg-type-windows":"with","lib-depends":["libyaml"]},$i={support:{BSD:"wip"},type:"builtin","arg-type":"with-prefix","arg-type-windows":"enable","lib-depends-unix":["libzip"],"ext-depends-windows":["zlib","bz2"],"lib-depends-windows":["libzip","zlib","bzip2","xz"]},Gi={type:"builtin","arg-type":"custom","arg-type-windows":"enable","lib-depends":["zlib"]},Xi={support:{Windows:"wip",BSD:"wip"},type:"external",source:"ext-zstd","arg-type":"custom","lib-depends":["zstd"]},Mi={amqp:re,apcu:be,bcmath:we,bz2:ge,calendar:xe,ctype:me,curl:ye,dba:he,dom:ve,ds:fe,enchant:ze,event:Se,exif:De,ffi:Be,fileinfo:ke,filter:qe,ftp:Ee,gd:We,gettext:Ce,glfw:Ie,gmp:Pe,iconv:Le,igbinary:Ue,imagick:_e,imap:Ne,inotify:Oe,intl:Ve,ldap:Ae,libxml:Te,mbregex:je,mbstring:$e,mcrypt:Ge,memcache:Xe,memcached:Me,mongodb:Re,mysqli:He,mysqlnd:Fe,oci8:Ze,opcache:Qe,openssl:Ke,parallel:Ye,"password-argon2":{support:{Windows:"wip",BSD:"wip"},notes:!0,type:"builtin","arg-type":"with-prefix","lib-depends":["libargon2"]},pcntl:Je,pdo:ei,pdo_mysql:ii,pdo_pgsql:si,pdo_sqlite:li,pdo_sqlsrv:ti,pgsql:ni,phar:oi,posix:ai,protobuf:di,rar:ui,readline:pi,redis:ci,session:ri,shmop:bi,simdjson:wi,simplexml:gi,snappy:xi,soap:mi,sockets:yi,sodium:hi,spx:vi,sqlite3:fi,sqlsrv:zi,ssh2:Si,swoole:Di,"swoole-hook-mysql":{support:{Windows:"no",BSD:"wip"},notes:!0,type:"addon","arg-type":"custom","ext-depends":["mysqlnd","pdo","pdo_mysql"],"ext-suggests":["mysqli"]},"swoole-hook-pgsql":{support:{Windows:"no",BSD:"wip",Darwin:"partial"},notes:!0,type:"addon","arg-type":"custom","ext-depends":["pgsql","pdo"]},"swoole-hook-sqlite":{support:{Windows:"no",BSD:"wip"},notes:!0,type:"addon","arg-type":"custom","ext-depends":["sqlite3","pdo"]},swow:Bi,sysvmsg:ki,sysvsem:qi,sysvshm:Ei,tidy:Wi,tokenizer:Ci,uuid:Ii,uv:Pi,xdebug:Li,xhprof:Ui,xlswriter:_i,xml:Ni,xmlreader:Oi,xmlwriter:Vi,xsl:Ai,yac:Ti,yaml:ji,zip:$i,zlib:Gi,zstd:Xi},Ri={source:"brotli","static-libs-unix":["libbrotlidec.a","libbrotlienc.a","libbrotlicommon.a"],"static-libs-windows":["brotlicommon.lib","brotlienc.lib","brotlidec.lib"],headers:["brotli"]},Hi={source:"bzip2","static-libs-unix":["libbz2.a"],"static-libs-windows":["libbz2.lib","libbz2_a.lib"],headers:["bzlib.h"]},Fi={source:"curl","static-libs-unix":["libcurl.a"],"static-libs-windows":["libcurl_a.lib"],headers:["curl"],"lib-depends-unix":["openssl","zlib"],"lib-depends-windows":["openssl","zlib","libssh2","nghttp2"],"lib-suggests-unix":["libssh2","brotli","nghttp2","zstd","libcares"],"lib-suggests-windows":["brotli","zstd"],frameworks:["CoreFoundation","CoreServices","SystemConfiguration"]},Zi={source:"freetype","static-libs-unix":["libfreetype.a"],"static-libs-windows":["libfreetype_a.lib"],"headers-unix":["freetype2/freetype/freetype.h","freetype2/ft2build.h"],"lib-depends":["zlib"],"lib-suggests":["libpng","bzip2","brotli"]},Qi={source:"gettext","static-libs-unix":["libintl.a"],"lib-depends":["libiconv"],"lib-suggests":["ncurses","libxml2"],frameworks:["CoreFoundation"]},Ki={source:"ext-glfw","static-libs-unix":["libglfw3.a"],frameworks:["CoreVideo","OpenGL","Cocoa","IOKit"]},Yi={source:"gmp","static-libs-unix":["libgmp.a"],"static-libs-windows":["libgmp.lib"],headers:["gmp.h"]},Ji={source:"icu","cpp-library":!0,"static-libs-unix":["libicui18n.a","libicuio.a","libicuuc.a","libicudata.a"]},es={source:"imagemagick","static-libs-unix":["libMagick++-7.Q16HDRI.a","libMagickWand-7.Q16HDRI.a","libMagickCore-7.Q16HDRI.a"],"lib-depends":["zlib","libpng","libjpeg","libwebp","freetype","libtiff"],"lib-suggests":["zstd","xz","bzip2","libzip","libxml2"]},is={source:"imap","static-libs-unix":["libc-client.a"],"lib-suggests":["openssl"]},ss={source:"ldap","static-libs-unix":["liblber.a","libldap.a"],"lib-depends":["openssl","zlib","gmp","libsodium"]},ls={source:"libargon2","static-libs-unix":["libargon2.a"]},ts={source:"libavif","static-libs-unix":["libavif.a"],"static-libs-windows":["avif.lib"]},ns={source:"libcares","static-libs-unix":["libcares.a"],"headers-unix":["ares.h","ares_dns.h","ares_nameser.h","ares_rules.h"]},os={source:"libevent","static-libs-unix":["libevent.a","libevent_core.a","libevent_extra.a","libevent_openssl.a"],"lib-depends":["openssl"]},as={source:"libffi","static-libs-unix":["libffi.a"],"static-libs-windows":["libffi.lib"],"headers-unix":["ffi.h","ffitarget.h"],"headers-windows":["ffi.h","fficonfig.h","ffitarget.h"]},ds={source:"libiconv","static-libs-unix":["libiconv.a","libcharset.a"],headers:["iconv.h","libcharset.h","localcharset.h"]},us={source:"libjpeg","static-libs-unix":["libjpeg.a","libturbojpeg.a"],"static-libs-windows":["libjpeg_a.lib"],"lib-suggests-windows":["zlib"]},ps={source:"liblz4","static-libs-unix":["liblz4.a"]},cs={source:"libmemcached","static-libs-unix":["libmemcached.a","libmemcachedutil.a"]},rs={source:"libpng","static-libs-unix":["libpng16.a"],"static-libs-windows":["libpng16_static.lib","libpng_a.lib"],"headers-unix":["png.h","pngconf.h","pnglibconf.h"],"headers-windows":["png.h","pngconf.h"],"lib-depends":["zlib"]},bs={source:"librabbitmq","static-libs-unix":["librabbitmq.a"],"static-libs-windows":["rabbitmq.4.lib"],"lib-depends":["openssl"]},ws={source:"libsodium","static-libs-unix":["libsodium.a"]},gs={source:"libssh2","static-libs-unix":["libssh2.a"],"static-libs-windows":["libssh2.lib"],headers:["libssh2.h","libssh2_publickey.h","libssh2_sftp.h"],"lib-depends":["openssl"],"lib-suggests":["zlib"]},xs={source:"libtiff","static-libs-unix":["libtiff.a"]},ms={source:"libuuid","static-libs-unix":["libuuid.a"],headers:["uuid/uuid.h"]},ys={source:"libuv","static-libs-unix":["libuv.a"]},hs={source:"libwebp","static-libs-unix":["libwebp.a","libwebpdecoder.a","libwebpdemux.a","libwebpmux.a","libsharpyuv.a"],"static-libs-windows":["libwebp.lib","libwebpdecoder.lib","libwebpdemux.lib","libsharpyuv.lib"]},vs={source:"libxml2","static-libs-unix":["libxml2.a"],"static-libs-windows":["libxml2s.lib","libxml2_a.lib"],headers:["libxml2"],"lib-depends-unix":["libiconv"],"lib-suggests-unix":["xz","icu","zlib"],"lib-depends-windows":["libiconv-win"],"lib-suggests-windows":["zlib"]},fs={source:"libxslt","static-libs-unix":["libxslt.a","libexslt.a"],"lib-depends":["libxml2"]},zs={source:"libyaml","static-libs-unix":["libyaml.a"],"static-libs-windows":["yaml.lib"],headers:["yaml.h"]},Ss={source:"libzip","static-libs-unix":["libzip.a"],"static-libs-windows":["zip.lib","libzip_a.lib"],headers:["zip.h","zipconf.h"],"lib-depends-unix":["zlib"],"lib-suggests-unix":["bzip2","xz","zstd","openssl"],"lib-depends-windows":["zlib","bzip2","xz"],"lib-suggests-windows":["zstd","openssl"]},Ds={source:"ncurses","static-libs-unix":["libncurses.a"]},Bs={source:"nghttp2","static-libs-unix":["libnghttp2.a"],"static-libs-windows":["nghttp2.lib"],headers:["nghttp2"],"lib-depends":["zlib","openssl"],"lib-suggests":["libxml2"]},ks={source:"onig","static-libs-unix":["libonig.a"],"static-libs-windows":["onig.lib","onig_a.lib"],headers:["oniggnu.h","oniguruma.h"]},qs={source:"openssl","static-libs-unix":["libssl.a","libcrypto.a"],"static-libs-windows":["libssl.lib","libcrypto.lib"],headers:["openssl"],"lib-depends":["zlib"]},Es={source:"postgresql","static-libs-unix":["libpq.a","libpgport.a","libpgcommon.a"],"lib-depends":["libiconv","libxml2","openssl","zlib","readline"],"lib-suggests":["icu","libxslt","ldap","zstd"]},Ws={source:"pthreads4w","static-libs-windows":["libpthreadVC3.lib"]},Cs={source:"qdbm","static-libs-unix":["libqdbm.a"],"static-libs-windows":["qdbm_a.lib"],"headers-windows":["depot.h"]},Is={source:"readline","static-libs-unix":["libreadline.a"],"lib-depends":["ncurses"]},Ps={source:"snappy","static-libs-unix":["libsnappy.a"],"headers-unix":["snappy.h","snappy-c.h","snappy-sinksource.h","snappy-stubs-public.h"],"lib-depends":["zlib"]},Ls={source:"sqlite","static-libs-unix":["libsqlite3.a"],"static-libs-windows":["libsqlite3_a.lib"],headers:["sqlite3.h","sqlite3ext.h"]},Us={source:"tidy","static-libs-unix":["libtidy.a"]},_s={source:"unixodbc","static-libs-unix":["libodbc.a","libodbccr.a","libodbcinst.a"],"lib-depends":["libiconv"]},Ns={source:"xz","static-libs-unix":["liblzma.a"],"static-libs-windows":["liblzma.lib","liblzma_a.lib"],"headers-unix":["lzma"],"headers-windows":["lzma","lzma.h"],"lib-depends-unix":["libiconv"]},Os={source:"zlib","static-libs-unix":["libz.a"],"static-libs-windows":["zlib_a.lib"],headers:["zlib.h","zconf.h"]},Vs={source:"zstd","static-libs-unix":["libzstd.a"],"static-libs-windows":[["zstd.lib","zstd_static.lib"]],"headers-unix":["zdict.h","zstd.h","zstd_errors.h"],"headers-windows":["zstd.h","zstd_errors.h"]},As={brotli:Ri,bzip2:Hi,curl:Fi,freetype:Zi,gettext:Qi,glfw:Ki,gmp:Yi,icu:Ji,imagemagick:es,imap:is,ldap:ss,libargon2:ls,libavif:ts,libcares:ns,libevent:os,libffi:as,"libffi-win":{source:"libffi-win","static-libs-windows":["libffi.lib"],"headers-windows":["ffi.h","ffitarget.h","fficonfig.h"]},libiconv:ds,"libiconv-win":{source:"libiconv-win","static-libs-windows":["libiconv.lib","libiconv_a.lib"]},libjpeg:us,liblz4:ps,libmemcached:cs,libpng:rs,librabbitmq:bs,libsodium:ws,libssh2:gs,libtiff:xs,libuuid:ms,libuv:ys,libwebp:hs,libxml2:vs,libxslt:fs,libyaml:zs,libzip:Ss,ncurses:Ds,nghttp2:Bs,onig:ks,openssl:qs,"pkg-config":{source:"pkg-config"},postgresql:Es,pthreads4w:Ws,qdbm:Cs,readline:Is,snappy:Ps,sqlite:Ls,tidy:Us,unixodbc:_s,xz:Ns,zlib:Os,zstd:Vs};function C(i,s,o,u){return i.os==="linux"?i[s][o][u+"-linux"]??i[s][o][u+"-unix"]??i[s][o][u]??[]:i.os==="macos"?i[s][o][u+"-macos"]??i[s][o][u+"-unix"]??i[s][o][u]??[]:i.os==="windows"?i[s][o][u+"-windows"]??i[s][o][u]??[]:[]}function Z(i,s){return C(i,"ext",s,"ext-depends")}function Ts(i,s){return C(i,"ext",s,"ext-suggests")}function js(i,s){return C(i,"ext",s,"lib-depends")}function $s(i,s){return C(i,"ext",s,"lib-suggests")}function Q(i,s){return C(i,"lib",s,"lib-depends")}function Gs(i,s){return C(i,"lib",s,"lib-suggests")}function Xs(i,s){const o=[],u=new Set,y=[];s.forEach(S=>{u.has(S)||Hs(i,S,u,o)});const z=[];return o.forEach(S=>{s.indexOf(S)===-1&&y.push(S),[...js(i,S),...$s(i,S)].forEach(O=>{z.indexOf(O)===-1&&z.push(O)})}),{exts:o,libs:Ms(i,z),notIncludedExts:y}}function Ms(i,s){const o=[],u=new Set;return s.forEach(y=>{u.has(y)||(console.log("before visited"),console.log(u),Rs(i,y,u,o),console.log("after visited"),console.log(u))}),o}function Rs(i,s,o,u){if(o.has(s))return;o.add(s),[...Q(i,s),...Gs(i,s)].forEach(z=>{K(i,z,o,u)}),u.push(s)}function K(i,s,o,u){o.has(s)||(o.add(s),Q(i,s).forEach(y=>{K(i,y,o,u)}),u.push(s))}function Y(i,s,o,u){o.has(o)||(o.add(s),Z(i,s).forEach(y=>{Y(i,y,o,u)}),u.push(s))}function Hs(i,s,o,u){if(o.has(s))return;o.add(s),[...Z(i,s),...Ts(i,s)].forEach(z=>{Y(i,z,o,u)}),u.push(s)}const N=i=>(ue("data-v-c44ab356"),i=i(),pe(),i),Fs={class:"option-line"},Zs=["id","value","disabled"],Qs=["for"],Ks={class:"box"},Ys={class:"ext-item"},Js={key:0},el=["id","value","disabled"],il=["for"],sl={class:"details custom-block"},ll={class:"box"},tl={class:"ext-item"},nl=["id","value","disabled"],ol=["for"],al={class:"tip custom-block"},dl=N(()=>e("p",{class:"custom-block-title"},"TIP",-1)),ul={class:"box"},pl={class:"ext-item"},cl=["id","value"],rl=["for"],bl={key:1,class:"warning custom-block"},wl=N(()=>e("p",{class:"custom-block-title"},"WARNING",-1)),gl={key:2,class:"warning custom-block"},xl=N(()=>e("p",{class:"custom-block-title"},"WARNING",-1)),ml={value:"native"},yl={value:"spc"},hl={key:0,value:"docker"},vl=["value"],fl={for:"debug-yes"},zl={for:"debug-no"},Sl={for:"zts-yes"},Dl={for:"zts-no"},Bl={for:"show-download-yes"},kl={for:"show-download-no"},ql={for:"pre-built-yes"},El={for:"pre-built-no"},Wl={key:0},Cl={for:"upx-yes"},Il={for:"upx-no"},Pl=["placeholder"],Ll={key:3,class:"command-container"},Ul={key:0,class:"command-preview"},_l=N(()=>e("br",null,null,-1)),Nl={key:1},Ol={class:"warning custom-block"},Vl=N(()=>e("p",{class:"custom-block-title"},"WARNING",-1)),Al={key:4,class:"command-container"},Tl={class:"command-preview"},jl={key:5,class:"command-container"},$l={class:"command-preview"},Gl={key:6,class:"command-container"},Xl={class:"command-preview"},Ml={class:"command-container"},Rl={class:"command-preview"},Hl={name:"CliGenerator"},Fl=oe({...Hl,props:{lang:{type:String,default:"zh"}},setup(i){const s=g(Mi),o=g(As),u=g([]),y=[{os:"linux",label:"Linux",disabled:!1},{os:"macos",label:"macOS",disabled:!1},{os:"windows",label:"Windows",disabled:!1}],z=(x,n)=>{var r,k;const p=new Map([["linux","Linux"],["macos","Darwin"],["windows","Windows"]]).get(n),d=((k=(r=s.value[x])==null?void 0:r.support)==null?void 0:k[p])??"yes";return d==="yes"||d==="partial"},S=["7.4","8.0","8.1","8.2","8.3"],a={zh:{selectExt:"选择扩展",buildTarget:"选择编译目标",buildOptions:"编译选项",buildEnvironment:"编译环境",buildEnvNative:"本地构建（Git 源码）",buildEnvSpc:"本地构建（独立 spc 二进制）",buildEnvDocker:"Alpine Docker 构建",useDebug:"是否开启调试输出",yes:"是",no:"否",resultShow:"结果展示",selectCommon:"选择常用扩展",selectNone:"全部取消选择",useZTS:"是否编译线程安全版",hardcodedINI:"硬编码 INI 选项",hardcodedINIPlacehoder:"如需要硬编码 ini，每行写一个，例如：memory_limit=2G",resultShowDownload:"是否展示仅下载对应扩展依赖的命令",downloadExtOnlyCommand:"只下载对应扩展的依赖包命令",downloadAllCommand:"下载所有依赖包命令",downloadUPXCommand:"下载 UPX 命令",compileCommand:"编译命令",downloadPhpVersion:"下载 PHP 版本",downloadSPCBinaryCommand:"下载 spc 二进制命令",selectedArch:"选择系统架构",selectedSystem:"选择操作系统",buildLibs:"要构建的库",depTips:"选择扩展后，不可选中的项目为必需的依赖，编译的依赖库列表中可选的为现有扩展和依赖库的可选依赖。选择可选依赖后，将生成 --with-libs 参数。",microUnavailable:"micro 不支持 PHP 7.4 及更早版本！",windowsSAPIUnavailable:"Windows 目前不支持 fpm、embed 构建！",useUPX:"是否开启 UPX 压缩（减小二进制体积）",windowsDownSPCWarning:"Windows 下请手动下载 spc.exe 二进制文件并解压到当前目录！",usePreBuilt:"如果可能，下载预编译的依赖库（减少编译时间）"},en:{selectExt:"Select Extensions",buildTarget:"Build Target",buildOptions:"Build Options",buildEnvironment:"Build Environment",buildEnvNative:"Native build (Git source code)",buildEnvSpc:"Native build (standalone spc binary)",buildEnvDocker:"Alpine docker build",useDebug:"Enable debug message",yes:"Yes",no:"No",resultShow:"Result",selectCommon:"Select common extensions",selectNone:"Unselect all",useZTS:"Enable ZTS",hardcodedINI:"Hardcoded INI options",hardcodedINIPlacehoder:"If you need to hardcode ini, write one per line, for example: memory_limit=2G",resultShowDownload:"Download with corresponding extension dependencies",downloadExtOnlyCommand:"Download sources by extensions command",downloadAllCommand:"Download all sources command",downloadUPXCommand:"Download UPX command",compileCommand:"Compile command",downloadPhpVersion:"Download PHP version",downloadSPCBinaryCommand:"Download spc binary command",selectedArch:"Select build architecture",selectedSystem:"Select Build OS",buildLibs:"Select Dependencies",depTips:"After selecting the extensions, the unselectable items are essential dependencies. In the compiled dependencies list, optional dependencies consist of existing extensions and optional dependencies of libraries. Optional dependencies will be added in --with-libs parameter.",microUnavailable:"Micro does not support PHP 7.4 and earlier versions!",windowsSAPIUnavailable:"Windows does not support fpm and embed build!",useUPX:"Enable UPX compression (reduce binary size)",windowsDownSPCWarning:"Please download the spc.exe binary file manually and extract it to the current directory on Windows!",usePreBuilt:"Download pre-built dependencies if possible (reduce compile time)"}},O=["cli","fpm","micro","embed","all"],J=()=>{h.value=["apcu","bcmath","calendar","ctype","curl","dba","dom","exif","filter","fileinfo","gd","iconv","intl","mbstring","mbregex","mysqli","mysqlnd","openssl","opcache","pcntl","pdo","pdo_mysql","pdo_sqlite","pdo_pgsql","pgsql","phar","posix","readline","redis","session","simplexml","sockets","sodium","sqlite3","tokenizer","xml","xmlreader","xmlwriter","xsl","zip","zlib"]},R=j(()=>h.value.join(",")),ee=j(()=>{const x=D.value.filter(n=>V.value.indexOf(n)===-1);return x.length>0?' --with-libs="'+x.join(",")+'"':""}),h=g([]),D=g([]),$=g([]),V=g([]),v=g(["cli"]),A=g("native"),I=g("8.2"),B=g(0),P=g(0),L=g(1),W=g(1),E=g(0),G=g(""),c=g("linux"),ie=g("x86_64"),T=j(()=>{switch(A.value){case"native":return"bin/spc";case"spc":return c.value==="windows"?".\\spc.exe":"./spc";case"docker":return"bin/spc-alpine-docker";default:return""}}),H=g("--build-cli"),se=j(()=>{const x=G.value.split(`
`);let n=[];return x.forEach(t=>{t.indexOf("=")>=1&&n.push(t)})," "+n.map(t=>'-I "'+t+'"').join(" ")}),le=x=>{let n;v.value.indexOf("all")!==-1&&x.target.value==="all"?v.value=["all"]:(n=v.value.indexOf("all"))!==-1&&x.target.value!=="all"&&v.value.splice(n,1),H.value=v.value.map(t=>"--build-"+t).join(" ")},te=x=>{const n=new Set,t=p=>{let d=[];if(c.value==="linux"){if(d=s.value[p]["ext-depends-linux"]??s.value[p]["ext-depends-unix"]??s.value[p]["ext-depends"]??[],d.length===0)return}else if(c.value==="macos"){if(d=s.value[p]["ext-depends-macos"]??s.value[p]["ext-depends-unix"]??s.value[p]["ext-depends"]??[],d.length===0)return}else if(c.value==="windows"&&(d=s.value[p]["ext-depends-windows"]??s.value[p]["ext-depends"]??[],d.length===0))return;d.forEach(r=>{n.add(r),t(r)})};return x.forEach(p=>{t(p)}),Array.from(n)},ne=x=>{const n=new Set,t=d=>{let r=[];if(c.value==="linux"){if(r=o.value[d]["lib-depends-linux"]??o.value[d]["lib-depends-unix"]??o.value[d]["lib-depends"]??[],r.length===0)return}else if(c.value==="macos"){if(r=o.value[d]["lib-depends-macos"]??o.value[d]["lib-depends-unix"]??o.value[d]["lib-depends"]??[],r.length===0)return}else if(c.value==="windows"&&(r=o.value[d]["lib-depends-windows"]??o.value[d]["lib-depends"]??[],r.length===0))return;r.forEach(k=>{n.add(k),t(k)})},p=d=>{let r=[];if(c.value==="linux"){if(r=s.value[d]["lib-depends-linux"]??s.value[d]["lib-depends-unix"]??s.value[d]["lib-depends"]??[],r.length===0)return}else if(c.value==="macos"){if(r=s.value[d]["lib-depends-macos"]??s.value[d]["lib-depends-unix"]??s.value[d]["lib-depends"]??[],r.length===0)return}else if(c.value==="windows"&&(r=s.value[d]["lib-depends-windows"]??s.value[d]["lib-depends"]??[],r.length===0))return;r.forEach(k=>{n.add(k),t(k)})};return x.forEach(d=>{p(d)}),Array.from(n)};return X(c,()=>h.value=[]),X(c,()=>E.value=0),X(h,x=>{$.value=te(x),$.value.forEach(t=>{h.value.indexOf(t)===-1&&h.value.push(t)}),h.value.sort(),console.log("检测到变化！"),console.log(x);const n=Xs({ext:s.value,lib:o.value,os:c.value},h.value);u.value=n.libs.sort(),D.value=[],V.value=ne(n.exts),V.value.forEach(t=>{D.value.indexOf(t)===-1&&D.value.push(t)})}),(x,n)=>(b(),w("div",null,[e("h2",null,l(a[i.lang].selectedSystem),1),e("div",Fs,[(b(),w(U,null,_(y,(t,p)=>e("span",{key:p,style:{"margin-right":"4px"}},[m(e("input",{type:"radio",id:"os-"+t.os,value:t.os,disabled:t.disabled===!0,"onUpdate:modelValue":n[0]||(n[0]=d=>c.value=d)},null,8,Zs),[[f,c.value]]),e("label",{for:"os-"+t.os},l(t.label),9,Qs)])),64))]),e("h2",null,l(a[i.lang].selectExt)+l(h.value.length>0?" ("+h.value.length+")":""),1),e("div",Ks,[(b(!0),w(U,null,_(s.value,(t,p)=>(b(),w("div",Ys,[z(p,c.value)?(b(),w("span",Js,[m(e("input",{type:"checkbox",id:p,value:p,"onUpdate:modelValue":n[1]||(n[1]=d=>h.value=d),disabled:$.value.indexOf(p)!==-1},null,8,el),[[M,h.value]]),e("label",{for:p},l(p),9,il)])):q("",!0)]))),256))]),c.value!=="windows"?(b(),w("div",{key:0,class:"my-btn",onClick:J},l(a[i.lang].selectCommon),1)):q("",!0),e("div",{class:"my-btn",onClick:n[2]||(n[2]=t=>h.value=[])},l(a[i.lang].selectNone),1),e("details",sl,[e("summary",null,l(a[i.lang].buildLibs)+l(D.value.length>0?" ("+D.value.length+")":""),1),e("div",ll,[(b(!0),w(U,null,_(u.value,(t,p)=>(b(),w("div",tl,[m(e("input",{type:"checkbox",id:p,value:t,"onUpdate:modelValue":n[3]||(n[3]=d=>D.value=d),disabled:V.value.indexOf(t)!==-1},null,8,nl),[[M,D.value]]),e("label",{for:p},l(t),9,ol)]))),256))])]),e("div",al,[dl,e("p",null,l(a[i.lang].depTips),1)]),e("h2",null,l(a[i.lang].buildTarget),1),e("div",ul,[(b(),w(U,null,_(O,t=>e("div",pl,[m(e("input",{type:"checkbox",id:"build_"+t,value:t,"onUpdate:modelValue":n[4]||(n[4]=p=>v.value=p),onChange:le},null,40,cl),[[M,v.value]]),e("label",{for:"build_"+t},l(t),9,rl)])),64))]),I.value==="7.4"&&(v.value.indexOf("micro")!==-1||v.value.indexOf("all")!==-1)?(b(),w("div",bl,[wl,e("p",null,l(a[i.lang].microUnavailable),1)])):q("",!0),c.value==="windows"&&(v.value.indexOf("fpm")!==-1||v.value.indexOf("embed")!==-1)?(b(),w("div",gl,[xl,e("p",null,l(a[i.lang].windowsSAPIUnavailable),1)])):q("",!0),e("h2",null,l(a[i.lang].buildOptions),1),e("table",null,[e("tr",null,[e("td",null,l(a[i.lang].buildEnvironment),1),e("td",null,[m(e("select",{"onUpdate:modelValue":n[5]||(n[5]=t=>A.value=t)},[e("option",ml,l(a[i.lang].buildEnvNative),1),e("option",yl,l(a[i.lang].buildEnvSpc),1),c.value!=="windows"?(b(),w("option",hl,l(a[i.lang].buildEnvDocker),1)):q("",!0)],512),[[F,A.value]])])]),e("tr",null,[e("td",null,l(a[i.lang].downloadPhpVersion),1),e("td",null,[m(e("select",{"onUpdate:modelValue":n[6]||(n[6]=t=>I.value=t)},[(b(),w(U,null,_(S,t=>e("option",{value:t},l(t),9,vl)),64))],512),[[F,I.value]])])]),e("tr",null,[e("td",null,l(a[i.lang].useDebug),1),e("td",null,[m(e("input",{type:"radio",id:"debug-yes",value:1,"onUpdate:modelValue":n[7]||(n[7]=t=>B.value=t)},null,512),[[f,B.value]]),e("label",fl,l(a[i.lang].yes),1),m(e("input",{type:"radio",id:"debug-no",value:0,"onUpdate:modelValue":n[8]||(n[8]=t=>B.value=t)},null,512),[[f,B.value]]),e("label",zl,l(a[i.lang].no),1)])]),e("tr",null,[e("td",null,l(a[i.lang].useZTS),1),e("td",null,[m(e("input",{type:"radio",id:"zts-yes",value:1,"onUpdate:modelValue":n[9]||(n[9]=t=>P.value=t)},null,512),[[f,P.value]]),e("label",Sl,l(a[i.lang].yes),1),m(e("input",{type:"radio",id:"zts-no",value:0,"onUpdate:modelValue":n[10]||(n[10]=t=>P.value=t)},null,512),[[f,P.value]]),e("label",Dl,l(a[i.lang].no),1)])]),e("tr",null,[e("td",null,l(a[i.lang].resultShowDownload),1),e("td",null,[m(e("input",{type:"radio",id:"show-download-yes",value:1,"onUpdate:modelValue":n[11]||(n[11]=t=>L.value=t)},null,512),[[f,L.value]]),e("label",Bl,l(a[i.lang].yes),1),m(e("input",{type:"radio",id:"show-download-no",value:0,"onUpdate:modelValue":n[12]||(n[12]=t=>L.value=t)},null,512),[[f,L.value]]),e("label",kl,l(a[i.lang].no),1)])]),e("tr",null,[e("td",null,l(a[i.lang].usePreBuilt),1),e("td",null,[m(e("input",{type:"radio",id:"pre-built-yes",value:1,"onUpdate:modelValue":n[13]||(n[13]=t=>W.value=t)},null,512),[[f,W.value]]),e("label",ql,l(a[i.lang].yes),1),m(e("input",{type:"radio",id:"pre-built-no",value:0,"onUpdate:modelValue":n[14]||(n[14]=t=>W.value=t)},null,512),[[f,W.value]]),e("label",El,l(a[i.lang].no),1)])]),c.value!=="macos"?(b(),w("tr",Wl,[e("td",null,l(a[i.lang].useUPX),1),e("td",null,[m(e("input",{type:"radio",id:"upx-yes",value:1,"onUpdate:modelValue":n[15]||(n[15]=t=>E.value=t)},null,512),[[f,E.value]]),e("label",Cl,l(a[i.lang].yes),1),m(e("input",{type:"radio",id:"upx-no",value:0,"onUpdate:modelValue":n[16]||(n[16]=t=>E.value=t)},null,512),[[f,E.value]]),e("label",Il,l(a[i.lang].no),1)])])):q("",!0)]),e("h2",null,l(a[i.lang].hardcodedINI),1),m(e("textarea",{class:"textarea",placeholder:a[i.lang].hardcodedINIPlacehoder,"onUpdate:modelValue":n[17]||(n[17]=t=>G.value=t),rows:"5"},null,8,Pl),[[ae,G.value]]),e("h2",null,l(a[i.lang].resultShow),1),A.value==="spc"?(b(),w("div",Ll,[e("b",null,l(a[i.lang].downloadSPCBinaryCommand),1),c.value!=="windows"?(b(),w("div",Ul,[de(" curl -fsSL -o spc.tgz https://dl.static-php.dev/static-php-cli/spc-bin/nightly/spc-"+l(c.value)+"-"+l(ie.value)+".tar.gz && tar -zxvf spc.tgz && rm spc.tgz",1),_l])):(b(),w("div",Nl,[e("div",Ol,[Vl,e("p",null,l(a[i.lang].windowsDownSPCWarning),1)])]))])):q("",!0),L.value?(b(),w("div",Al,[e("b",null,l(a[i.lang].downloadExtOnlyCommand),1),e("div",Tl,l(T.value)+" download --with-php="+l(I.value)+' --for-extensions "'+l(R.value)+'"'+l(W.value?" --prefer-pre-built":"")+l(B.value?" --debug":""),1)])):(b(),w("div",jl,[e("b",null,l(a[i.lang].downloadAllCommand),1),e("div",$l,l(T.value)+" download --all --with-php="+l(I.value)+l(W.value?" --prefer-pre-built":"")+l(B.value?" --debug":""),1)])),E.value?(b(),w("div",Gl,[e("b",null,l(a[i.lang].downloadUPXCommand),1),e("div",Xl,l(T.value)+" install-pkg upx"+l(B.value?" --debug":""),1)])):q("",!0),e("div",Ml,[e("b",null,l(a[i.lang].compileCommand),1),e("div",Rl,l(T.value)+" build "+l(H.value)+' "'+l(R.value)+'"'+l(ee.value)+l(B.value?" --debug":"")+l(P.value?" --enable-zts":"")+l(E.value?" --with-upx-pack":"")+l(se.value),1)])]))}}),Ql=ce(Fl,[["__scopeId","data-v-c44ab356"]]);export{Ql as C};
