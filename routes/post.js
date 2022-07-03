const express = require('express')
const router = express.Router()

router.get('/post', async (req, res) => {
    const topics = [
            {
                id: 1, wdate: "05.14(금)", wtext: "흐리고 비", tem:"17", img:"/img/weather_006.png",
                RainpercentText: "강수확률", Rainpercent: "100", Tem2: "29"
            },
            {
                id: 2, wdate: "05.15(토)", wtext: "구름많음", tem:"17", img:"/img/weather_003.png",
                RainpercentText: "강수확률", Rainpercent: "0", Tem2: "29"
            },
            {
                id: 3, wdate: "05.16(일)", wtext: "흐리고 비", tem:"18", img:"/img/weather_006.png",
                RainpercentText: "강수확률", Rainpercent: "70", Tem2: "29"
            }
        ]
    res.status(200).json({ topics })
})

router.get('/event', async (req, res) => {
    const topics = [
        {
            id: 1, etext: "과전류", edate: "2021.05.14 16:24:30", eaddress:"범안로 15길 (주)마블리스 Food 앞"
        },
        {
            id: 2, etext: "물감지", edate: "2021.05.14 16:24:30", eaddress:"범안로 15길 (주)마블리스 Food 앞"
        },
        {
            id: 3, etext: "과전류", edate: "2021.05.14 16:24:30", eaddress:"범안로 15길 (주)마블리스 Food 앞"
        },
        {
            id: 4, etext: "접근센서", edate: "2021.05.14 16:24:30", eaddress:"범안로 15길 (주)마블리스 Food 앞"
        },
        {
            id: 5, etext: "과전류", edate: "2021.05.14 16:24:30", eaddress:"범안로 15길 (주)마블리스 Food 앞"
        },
        {
            id: 6, etext: "함체충격", edate: "2021.05.14 16:24:30", eaddress:"범안로 15길 (주)마블리스 Food 앞"
        },
    ]
    res.status(200).json({ topics })
})

module.exports = router;