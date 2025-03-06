<?php

declare(strict_types=1);

namespace SPC\builder\unix\library;

trait pkgconfig
{
    protected function build(): void
    {
        $cflags = PHP_OS_FAMILY !== 'Linux' ? "{$this->builder->arch_c_flags} -Wimplicit-function-declaration -Wno-int-conversion" : '';
        $ldflags = PHP_OS_FAMILY !== 'Linux' ? '' : '--static';

        shell()->cd($this->source_dir)
            ->setEnv([
                'CC' => '/usr/bin/gcc',  // 强制使用系统 GCC
                'CXX' => '/usr/bin/g++', // 强制使用系统 G++
                'LD' => '/usr/bin/ld',   // 强制使用系统 LD
                'AR' => '/usr/bin/ar',   // 强制使用系统 AR
                'CFLAGS' => '-static',
                'LDFLAGS' => '-static',
                'LIBS' => $this->getLibExtraLibs()
            ])
            ->execWithEnv(
                './configure ' .
                '--disable-shared ' .
                '--enable-static ' .
                '--with-internal-glib ' .
                '--disable-host-tool ' .
                '--with-pic ' .
                '--prefix=' . BUILD_ROOT_PATH . ' ' .
                '--without-sysroot ' .
                '--without-system-include-path ' .
                '--without-system-library-path ' .
                '--without-pc-path'
            )
            ->exec('make clean')
            ->execWithEnv("make -j{$this->builder->concurrency}")
            ->execWithEnv('make install-exec');
    }
}
