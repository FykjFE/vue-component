import UcButton from './button'
UcButton.install=function (app:any):any {
    app.component(UcButton.name,UcButton)
}
export default UcButton
