function SomeFunc1() { console.log('Функция SomeFunc()') }

try {
    SomeFunc()
    console.log('Конец блока try.')
}
catch (error) {
    console.log('Возникла ошибка: ', error)
}
finally {
    console.log('Блок finally.')
}
