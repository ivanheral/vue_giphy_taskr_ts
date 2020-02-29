import bs from 'taskr-build/fw/servor';
let mode = "dev";
let dest = "dist";

export async function ts(task) {
    await task.source('src/vue/app.ts').build({
            fw: 'vue',
            env: mode,
    }).target(dest);
}

export async function html(task) {
    await task.source('src/html/index.html').target(dest)
}

// mode production
export async function prod(task) {
    mode = 'prod';
    //dest = 'bundle';
    await task.parallel(['html', 'ts']);
    bs.start({
            root: 'dist',
            port: "2000",
        });
}

export async function dev(task) {
    await task.parallel(['html', 'ts']);
    await task.watch('src/html/index.html', 'html');
    await task.watch('src/vue/**/*.*', 'ts');
    //mode == 'dev' && 
    bs.start({
            root: 'dist',
            port: "2000",
        });
}
