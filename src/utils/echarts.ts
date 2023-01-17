export function exportChart(chart, fileName = '导出', imageType = 'png') {
    if (chart) {
        fileName = `${fileName}.${imageType}`;
        const img = new Image();
        img.src = chart.getDataURL({
            type: imageType,
            pixelRatio: 1, // 放大2倍
            backgroundColor: 'rgba(0,80,80,0.6)', // 设置背景颜色，否则是透明的
        });

        img.onload = () => {
            const canvas: any = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            const dataURL = canvas.toDataURL('image/png');

            const a = document.createElement('a');
            // 创建一个单击事件
            const event = new MouseEvent('click');
            // 将a的download属性设置为我们想要下载的图片名称
            a.download = fileName;
            // 将生成的URL设置为a.href属性
            a.href = dataURL;
            // 触发a的单击事件
            a.dispatchEvent(event);

            this.$notification.success({
                message: `导出“${fileName}”`,
                description: '',
            });
        };
    } else {
        this.$notification.error({
            message: `无法导出“${fileName}”`,
            description: '',
        });
    }
}