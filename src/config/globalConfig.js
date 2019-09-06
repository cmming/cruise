export default {
    //提示框的时间
    notificationDuration: 3000,
    //所有input 最长支持输入
    inputMaxLength: 255,
    // 文件权限配置文件
    USER_FILE_PREMISSION_CONFIG: {
        BE_MOVED: 1,
        BE_COPIED: 2,
        NEW_FOLDER: 4,
        DELETE: 8,
        COPY: 16,
        MOVE: 32,
        RENAME: 64,
        DOWNLOAD: 128,
        UPLOAD: 256,
        PUBLIC_PREMISSION: parseInt('000000000',2),
        PERSONAL_PREMISSION: parseInt('101111111',2),
        DOWNLOAD_PREMISSION: parseInt('010001011',2),
    },
    CHUNK_MIN_SIZE:5
}