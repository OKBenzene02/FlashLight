class FlashLight {
    constructor (
        name,
        days,
        lightToggle
    )
    {
        this.name = name
        this.days = days
        this.lightToggle = lightToggle
    }
        DaysAcquired()
        {
            let today = new Date()
            let then = new Date(this.days)
            let substract = today - then
            let elapsed = Math.floor(substract / (1000 * 24 * 60 * 60))
            return elapsed
        }
}

export default FlashLight;
