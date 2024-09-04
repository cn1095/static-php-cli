import{_ as e,c as t,o as d,a1 as o}from"./chunks/framework.CszIUXhs.js";const b=JSON.parse('{"title":"Environment variables","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"en/guide/env-vars.md","filePath":"en/guide/env-vars.md"}'),a={name:"en/guide/env-vars.md"},r=o(`<h1 id="environment-variables" tabindex="-1">Environment variables <a class="header-anchor" href="#environment-variables" aria-label="Permalink to &quot;Environment variables&quot;">​</a></h1><p>All environment variables mentioned in the list on this page have default values unless otherwise noted. You can override the default values by setting these environment variables.</p><p>Generally, you don&#39;t need to modify any of the following environment variables as they are already set to optimal values. However, if you have special needs, you can set these environment variables to meet your needs (for example, you need to debug PHP performance under different compilation parameters).</p><p>If you want to use custom environment variables, you can use the <code>export</code> command in the terminal or set the environment variables directly before the command, for example:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># export first</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SPC_CONCURRENCY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bin/spc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mbstring,pcntl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --build-cli</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># or direct use</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SPC_CONCURRENCY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">4</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> bin/spc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mbstring,pcntl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --build-cli</span></span></code></pre></div><h2 id="general-environment-variables" tabindex="-1">General environment variables <a class="header-anchor" href="#general-environment-variables" aria-label="Permalink to &quot;General environment variables&quot;">​</a></h2><p>General environment variables can be used by all build targets.</p><table tabindex="0"><thead><tr><th>var name</th><th>default value</th><th>comment</th></tr></thead><tbody><tr><td><code>BUILD_ROOT_PATH</code></td><td><code>{pwd}/buildroot</code></td><td>The root directory of the build target</td></tr><tr><td><code>BUILD_LIB_PATH</code></td><td><code>{pwd}/buildroot/lib</code></td><td>The root directory of compilation libraries</td></tr><tr><td><code>BUILD_INCLUDE_PATH</code></td><td><code>{pwd}/buildroot/include</code></td><td>Header file directory for compiling libraries</td></tr><tr><td><code>BUILD_BIN_PATH</code></td><td><code>{pwd}/buildroot/bin</code></td><td>Compiled binary file directory</td></tr><tr><td><code>PKG_ROOT_PATH</code></td><td><code>{pwd}/pkgroot</code></td><td>Directory where precompiled tools are installed</td></tr><tr><td><code>SOURCE_PATH</code></td><td><code>{pwd}/source</code></td><td>The source code extract directory</td></tr><tr><td><code>DOWNLOAD_PATH</code></td><td><code>{pwd}/downloads</code></td><td>Downloaded file directory</td></tr><tr><td><code>SPC_CONCURRENCY</code></td><td>Depends on CPU cores</td><td>Number of parallel compilations</td></tr><tr><td><code>SPC_SKIP_PHP_VERSION_CHECK</code></td><td>empty</td><td>Skip PHP version check when set to <code>yes</code></td></tr></tbody></table><h2 id="os-specific-variables" tabindex="-1">OS specific variables <a class="header-anchor" href="#os-specific-variables" aria-label="Permalink to &quot;OS specific variables&quot;">​</a></h2><p>These environment variables are system-specific and will only take effect on a specific OS.</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><table tabindex="0"><thead><tr><th>var name</th><th>default value</th><th>comment</th></tr></thead><tbody><tr><td><code>PHP_SDK_PATH</code></td><td><code>{pwd}\\php-sdk-binary-tools</code></td><td>PHP SDK tools path</td></tr><tr><td><code>UPX_EXEC</code></td><td><code>$PKG_ROOT_PATH\\bin\\upx.exe</code></td><td>UPX compression tool path</td></tr><tr><td><code>SPC_MICRO_PATCHES</code></td><td><code>static_extensions_win32,cli_checks,disable_huge_page,vcruntime140,win32,zend_stream,cli_static</code></td><td>Used phpmicro <a href="https://github.com/easysoft/phpmicro/blob/master/patches/Readme.md" target="_blank" rel="noreferrer">patches</a></td></tr></tbody></table><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><table tabindex="0"><thead><tr><th>var name</th><th>default value</th><th>comment</th></tr></thead><tbody><tr><td><code>CC</code></td><td><code>clang</code></td><td>C Compiler</td></tr><tr><td><code>CXX</code></td><td><code>clang++</code></td><td>C++ Compiler</td></tr><tr><td><code>SPC_DEFAULT_C_FLAGS</code></td><td><code>--target=arm64-apple-darwin</code> or <code>--target=x86_64-apple-darwin</code></td><td>Default C flags (not the same as <code>CFLAGS</code>)</td></tr><tr><td><code>SPC_DEFAULT_CXX_FLAGS</code></td><td><code>--target=arm64-apple-darwin</code> or <code>--target=x86_64-apple-darwin</code></td><td>Default C flags (not the same as <code>CPPFLAGS</code>)</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_BUILDCONF</code></td><td><code>./buildconf --force</code></td><td>PHP <code>buildconf</code> command prefix</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_CONFIGURE</code></td><td><code>./configure --prefix= --with-valgrind=no --enable-shared=no --enable-static=yes --disable-all --disable-cgi --disable-phpdbg</code></td><td>PHP <code>configure</code> command prefix</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_MAKE</code></td><td><code>make -j$SPC_CONCURRENCY</code></td><td>PHP <code>make</code> command prefix</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_CFLAGS</code></td><td><code>$SPC_DEFAULT_C_FLAGS -Werror=unknown-warning-option</code></td><td><code>CFLAGS</code> variable of PHP <code>configure</code> command</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_CPPFLAGS</code></td><td><code>-I$BUILD_INCLUDE_PATH</code></td><td><code>CPPFLAGS</code> variable of PHP <code>configure</code> command</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_LDFLAGS</code></td><td><code>-L$BUILD_LIB_PATH</code></td><td><code>LDFLAGS</code> variable of PHP <code>configure</code> command</td></tr><tr><td><code>SPC_CMD_VAR_PHP_MAKE_EXTRA_CFLAGS</code></td><td><code>-g0 -Os</code> or <code>-g -O0</code> (the latter when using <code>--no-strip</code>)</td><td><code>EXTRA_CFLAGS</code> variable of PHP <code>make</code> command</td></tr><tr><td><code>SPC_CMD_VAR_PHP_MAKE_EXTRA_LIBS</code></td><td><code>-lresolv</code></td><td>Extra <code>EXTRA_LIBS</code> variables for PHP <code>make</code> command</td></tr><tr><td><code>SPC_MICRO_PATCHES</code></td><td><code>static_extensions_win32,cli_checks,disable_huge_page,vcruntime140,win32,zend_stream,macos_iconv</code></td><td>Used phpmicro <a href="https://github.com/easysoft/phpmicro/blob/master/patches/Readme.md" target="_blank" rel="noreferrer">patches</a></td></tr></tbody></table><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><table tabindex="0"><thead><tr><th>var name</th><th>default value</th><th>comment</th></tr></thead><tbody><tr><td><code>UPX_EXEC</code></td><td><code>$PKG_ROOT_PATH/bin/upx</code></td><td>UPX compression tool path</td></tr><tr><td><code>GNU_ARCH</code></td><td><code>x86_64</code> or <code>aarch64</code></td><td>CPU architecture</td></tr><tr><td><code>CC</code></td><td>Alpine: <code>gcc</code>, Other: <code>$GNU_ARCH-linux-musl-gcc</code></td><td>C Compiler</td></tr><tr><td><code>CXX</code></td><td>Alpine: <code>g++</code>, Other: <code>$GNU_ARCH-linux-musl-g++</code></td><td>C++ Compiler</td></tr><tr><td><code>AR</code></td><td>Alpine: <code>ar</code>, Other: <code>$GNU_ARCH-linux-musl-ar</code></td><td>Static library tools</td></tr><tr><td><code>LD</code></td><td><code>ld.gold</code></td><td>Linker</td></tr><tr><td><code>PATH</code></td><td><code>/usr/local/musl/bin:/usr/local/musl/$GNU_ARCH-linux-musl/bin:$PATH</code></td><td>System PATH</td></tr><tr><td><code>SPC_DEFAULT_C_FLAGS</code></td><td>empty</td><td>Default C flags</td></tr><tr><td><code>SPC_DEFAULT_CXX_FLAGS</code></td><td>empty</td><td>Default C++ flags</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_BUILDCONF</code></td><td><code>./buildconf --force</code></td><td>PHP <code>buildconf</code> command prefix</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_CONFIGURE</code></td><td><code>LD_LIBRARY_PATH={ld_lib_path} ./configure --prefix= --with-valgrind=no --enable-shared=no --enable-static=yes --disable-all --disable-cgi --disable-phpdbg</code></td><td>PHP <code>configure</code> command prefix</td></tr><tr><td><code>SPC_CMD_PREFIX_PHP_MAKE</code></td><td><code>make -j$SPC_CONCURRENCY</code></td><td>PHP <code>make</code> command prefix</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_CFLAGS</code></td><td><code>$SPC_DEFAULT_C_FLAGS</code></td><td><code>CFLAGS</code> variable of PHP <code>configure</code> command</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_CPPFLAGS</code></td><td><code>-I$BUILD_INCLUDE_PATH</code></td><td><code>CPPFLAGS</code> variable of PHP <code>configure</code> command</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_LDFLAGS</code></td><td><code>-L$BUILD_LIB_PATH</code></td><td><code>LDFLAGS</code> variable of PHP <code>configure</code> command</td></tr><tr><td><code>SPC_CMD_VAR_PHP_CONFIGURE_LIBS</code></td><td><code>-ldl -lpthread</code></td><td><code>LIBS</code> variable of PHP <code>configure</code> command</td></tr><tr><td><code>SPC_CMD_VAR_PHP_MAKE_EXTRA_CFLAGS</code></td><td><code>-g0 -Os -fno-ident -fPIE</code> or <code>-g -O0 -fno-ident -fPIE</code> (the latter when using <code>--no-strip</code>)</td><td><code>EXTRA_CFLAGS</code> variable of PHP <code>make</code> command</td></tr><tr><td><code>SPC_CMD_VAR_PHP_MAKE_EXTRA_LIBS</code></td><td>empty</td><td>Extra <code>EXTRA_LIBS</code> variables for PHP <code>make</code> command</td></tr><tr><td><code>SPC_CMD_VAR_PHP_MAKE_EXTRA_LDFLAGS_PROGRAM</code></td><td><code>-all-static</code> (when using <code>clang</code>: <code>-Xcompiler -fuse-ld=lld -all-static</code>)</td><td>Additional <code>LDFLAGS</code> variable for <code>make</code> command</td></tr><tr><td><code>SPC_NO_MUSL_PATH</code></td><td>empty</td><td>Whether to not insert the PATH of the musl toolchain (not inserted when the value is <code>yes</code>)</td></tr><tr><td><code>SPC_MICRO_PATCHES</code></td><td><code>static_extensions_win32,cli_checks,disable_huge_page,vcruntime140,win32,zend_stream</code></td><td>Used phpmicro <a href="https://github.com/easysoft/phpmicro/blob/master/patches/Readme.md" target="_blank" rel="noreferrer">patches</a></td></tr></tbody></table><blockquote><p><code>{ld_lib_path}</code> value is <code>/usr/local/musl/$GNU_ARCH-linux-musl/lib</code>。</p></blockquote><h3 id="freebsd" tabindex="-1">FreeBSD <a class="header-anchor" href="#freebsd" aria-label="Permalink to &quot;FreeBSD&quot;">​</a></h3><p>Due to the small number of users of the FreeBSD system, we do not provide environment variables for the FreeBSD system for the time being.</p><h3 id="unix" tabindex="-1">Unix <a class="header-anchor" href="#unix" aria-label="Permalink to &quot;Unix&quot;">​</a></h3><p>For Unix systems such as macOS, Linux, FreeBSD, etc., the following environment variables are common.</p><table tabindex="0"><thead><tr><th>var name</th><th>default value</th><th>comment</th></tr></thead><tbody><tr><td><code>PATH</code></td><td><code>$BUILD_BIN_PATH:$PATH</code></td><td>System PATH</td></tr><tr><td><code>PKG_CONFIG_PATH</code></td><td><code>$BUILD_LIB_PATH/pkgconfig</code></td><td>pkg-config search path</td></tr><tr><td><code>PKG_CONFIG</code></td><td><code>$BUILD_BIN_PATH/pkg-config</code></td><td>pkg-config executable path</td></tr></tbody></table><h2 id="library-environment-variables-unix-only" tabindex="-1">Library Environment variables (Unix only) <a class="header-anchor" href="#library-environment-variables-unix-only" aria-label="Permalink to &quot;Library Environment variables (Unix only)&quot;">​</a></h2><p>Starting from 2.2.0, static-php-cli supports custom environment variables for all compilation dependent library commands of macOS, Linux, FreeBSD and other Unix systems.</p><p>In this way, you can adjust the behavior of compiling dependent libraries through environment variables at any time. For example, you can set the optimization parameters for compiling the xxx library through <code>xxx_CFLAGS=-O0</code>.</p><p>Of course, not every library supports the injection of environment variables. We currently provide three wildcard environment variables with the suffixes:</p><ul><li><code>_CFLAGS</code>: CFLAGS for the compiler</li><li><code>_LDFLAGS</code>: LDFLAGS for the linker</li><li><code>_LIBS</code>: LIBS for the linker</li></ul><p>The prefix is the name of the dependent library, and the specific name of the library is subject to <code>lib.json</code>. Among them, the library name with <code>-</code> needs to replace <code>-</code> with <code>_</code>.</p><p>Here is an example of an optimization option that replaces the openssl library compilation:</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">openssl_CFLAGS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-O0&quot;</span></span></code></pre></div><p>The library name uses the same name listed in <code>lib.json</code> and is case-sensitive.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>When no relevant environment variables are specified, except for the following variables, the remaining values are empty by default:</p><table tabindex="0"><thead><tr><th>var name</th><th>var default value</th></tr></thead><tbody><tr><td><code>pkg_config_CFLAGS</code></td><td>macOS: <code>$SPC_DEFAULT_C_FLAGS -Wimplicit-function-declaration -Wno-int-conversion</code>, Other: empty</td></tr><tr><td><code>pkg_config_LDFLAGS</code></td><td>Linux: <code>--static</code>, Other: empty</td></tr><tr><td><code>imagemagick_LDFLAGS</code></td><td>Linux: <code>-static</code>, Other: empty</td></tr><tr><td><code>imagemagick_LIBS</code></td><td>macOS: <code>-liconv</code>, Other: empty</td></tr><tr><td><code>ldap_LDFLAGS</code></td><td><code>-L$BUILD_LIB_PATH</code></td></tr><tr><td><code>openssl_CFLAGS</code></td><td>Linux: <code>$SPC_DEFAULT_C_FLAGS</code>, Other: empty</td></tr><tr><td>others...</td><td>empty</td></tr></tbody></table></div><p>The following table is a list of library names that support customizing the above three variables:</p><table tabindex="0"><thead><tr><th>lib name</th></tr></thead><tbody><tr><td>brotli</td></tr><tr><td>bzip</td></tr><tr><td>curl</td></tr><tr><td>freetype</td></tr><tr><td>gettext</td></tr><tr><td>gmp</td></tr><tr><td>imagemagick</td></tr><tr><td>ldap</td></tr><tr><td>libargon2</td></tr><tr><td>libavif</td></tr><tr><td>libcares</td></tr><tr><td>libevent</td></tr><tr><td>openssl</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Because adapting custom environment variables to each library is a particularly tedious task, and in most cases you do not need custom environment variables for these libraries, so we currently only support custom environment variables for some libraries.</p><p>If the library you need to customize environment variables is not listed above, you can submit your request through <a href="https://github.com/crazywhalecc/static-php-cli/issues" target="_blank" rel="noreferrer">GitHub Issue</a>.</p></div>`,35),i=[r];function c(n,s,l,h,p,m){return d(),t("div",null,i)}const u=e(a,[["render",c]]);export{b as __pageData,u as default};
