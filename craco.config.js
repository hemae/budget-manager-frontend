const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@app': path.resolve(__dirname, 'src/app/index'),
            '@processes': path.resolve(__dirname, 'src/processes/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@widgets': path.resolve(__dirname, 'src/widgets/'),
            '@features': path.resolve(__dirname, 'src/features'),
            '@entities': path.resolve(__dirname, 'src/entities/'),
            '@shared': path.resolve(__dirname, 'src/shared/'),
        },
    },
};
