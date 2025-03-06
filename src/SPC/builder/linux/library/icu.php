<?php

declare(strict_types=1);

namespace SPC\builder\linux\library;

use SPC\store\FileSystem;

class icu extends LinuxLibraryBase
{
    use \SPC\builder\unix\library\icu;

    public const NAME = 'icu';

    protected function build(): void
    {
        // 本机编译环境
        $native_cc = 'CC=gcc';
        $native_cxx = 'CXX=g++';
        $native_ld = 'LD=ld.gold';
        $native_ar = 'AR=ar';
        $native_cflags = 'CFLAGS="-O2 -fPIC"';
        $native_cxxflags = 'CXXFLAGS="-O2 -fPIC -std=c++17"';
        $native_ldflags = 'LDFLAGS="-static"';
        
        // 进入 ICU 源码目录并进行本机编译
        shell()->cd($this->source_dir . '/source')
            ->exec(
                "{$native_cc} {$native_cxx} {$native_ld} {$native_ar} " .
                "{$native_cflags} {$native_cxxflags} {$native_ldflags} " .
                './runConfigureICU Linux ' .
                '--prefix=' . BUILD_ROOT_PATH . '/native-icu ' .
                '--enable-static ' .
                '--disable-shared ' .
                '--with-data-packaging=static ' .
                '--enable-release=yes ' .
                '--enable-extras=no ' .
                '--enable-icuio=yes ' .
                '--enable-dyload=no ' .
                '--enable-tools=yes ' .
                '--enable-tests=no ' .
                '--enable-samples=no'
            )
            ->exec('make clean')
            ->exec("make -j{$this->builder->concurrency}")
            ->exec('make install')
            ->exec('ls')
            ->exec('cp -r bin ' . BUILD_ROOT_PATH . '/native-icu')
            ->exec('cp -r config ' . BUILD_ROOT_PATH . '/native-icu');
        
        // 交叉编译环境
        $cppflags = 'CPPFLAGS="-DU_CHARSET_IS_UTF8=1  -DU_USING_ICU_NAMESPACE=1 -DU_STATIC_IMPLEMENTATION=1"';
        $cxxflags = 'CXXFLAGS="-std=c++17"';
        $ldflags = 'LDFLAGS="-static"';

        shell()->cd($this->source_dir . '/source')
            ->exec(
                "{$cppflags} {$cxxflags} {$ldflags} " .
                './runConfigureICU Linux ' .
                '--host=mipsel-linux-muslsf ' .
                '--enable-static ' .
                '--disable-shared ' .
                '--with-data-packaging=static ' .
                '--enable-release=yes ' .
                '--enable-extras=no ' .
                '--enable-icuio=yes ' .
                '--enable-dyload=no ' .
                '--enable-tools=yes ' .
                '--enable-tests=no ' .
                '--enable-samples=no ' .
                '--prefix=' . BUILD_ROOT_PATH . ' ' .
                '--with-cross-build=' . BUILD_ROOT_PATH . '/native-icu'
            )
            ->exec('make clean')
            ->exec("make -j{$this->builder->concurrency}")
            ->exec('make install');

        $this->patchPkgconfPrefix(['icu-i18n.pc', 'icu-io.pc', 'icu-uc.pc'], PKGCONF_PATCH_PREFIX);
        FileSystem::removeDir(BUILD_LIB_PATH . '/icu');
    }
}
