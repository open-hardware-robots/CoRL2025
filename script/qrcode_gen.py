import qrcode

# QRコードにしたいデータ
data = "https://open-hardware-robots.github.io/CoRL2025/"

# QRコードを生成
qr = qrcode.QRCode(
    version=1,  # QRコードのサイズ（1〜40）。数字が大きいほど情報量が多くなる。
    error_correction=qrcode.constants.ERROR_CORRECT_M,  # 誤り訂正レベル
    box_size=10,  # 各マスのピクセル数（サイズ）
    border=4,  # 周囲の空白のマス数（最低4が推奨）
)

qr.add_data(data)  # データを追加
qr.make(fit=True)  # データに応じて自動調整

# 画像として生成
img = qr.make_image(fill_color="black", back_color="white")

# 保存
img.save("qrcode.png")
img.show()
