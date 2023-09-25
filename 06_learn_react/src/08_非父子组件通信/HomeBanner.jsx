import ThemeContext from "./theme-context"
function HomeBanner(){
    return (
        <div>
            HomeBanner
            <ThemeContext.Consumer>
                {
                    value=>{
                        console.log(value)
                        return (<h2>{value.color}</h2>)
                    }
                }
            </ThemeContext.Consumer>
        </div>
    )
}
export default HomeBanner