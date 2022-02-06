var popup = window.open(
    'https://microsoft.com',
    'Microsoft',
    'width=1200, height=400, resizable=yes'
)

document.write("В истории " + history.length + " страниц.")
history.back()
history.go(-2)
