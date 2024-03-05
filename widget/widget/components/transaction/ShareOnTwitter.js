import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChainType } from "@0xsquid/sdk";
import { logos } from "../../assets/images/logos";
import { ImageWrapper } from "../ImageWrapper";
import { LightButton } from "../buttons/LightButton";
export const ShareOnTwitter = ({ fromToken, toToken, fromChain, toChain, }) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18;
    const baseTwitterUrl = "https://twitter.com/intent/tweet?text=";
    const prefix = `I just swapped with @squidrouter 💜🤝

`;
    const suffix = `

🔗 https://app.squidrouter.com/`;
    const tweetOptions = [
        {
            text: `Tokens flow like a river,
Squid connects them all,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Interoperability's call.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Across chains they travel,
With Squid's help they unite,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A beautiful sight.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `The beauty of cross-chain,
Squid makes it a breeze,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Token swaps with ease.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `With Squid as our guide,
Tokens move with grace,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A seamless exchange takes place.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens swap with elegance,
Squid's the key,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Efficiency to see.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `A symphony of tokens,
Squid conducts the trade,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
The beauty never fades.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens move as one,
Thanks to Squid's interoperability,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A sight to see.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens flow like a song,
Squid's the composer,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A symphony over and over.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens move with ease,
Squid connects them all,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Liquidity standing tall.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens flow like a stream,
Squid smooths the way,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Interoperability at play.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `With Squid's help,
Tokens reach new heights,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Expanding ecosystems in sight.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Security and efficiency,
Squid's swaps provide,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Cross-chain liquidity thrives.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens move like a wave,
Squid guides the flow,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A pair to know.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `A path to liquidity,
Squid's the key,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Access unlocked, seamlessly.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens flow like a river,
Squid is the guide,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Interoperability's tide.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens move as one,
Squid connects the link,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A swap in sync.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens flow like a song,
Squid creates the melody,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Cross-chain harmony.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens flow like a river,
Squid's swaps are the guide,
A path to a brighter future,
For all tokens to abide.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens move with ease,
Squid's swaps are the key,
A sight for all to see,
For tokens to be free.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens move as one,
Squid enables the unity,
For expanding ecosystems,
To become a community.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `The dance of the tokens,
Squid makes it seamless,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
Wrapped tokens are needless`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `The harmony of tokens,
Squid makes it possible,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
The path is unstoppable`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens move like a wave,
Efficiency's tide,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
United side by side.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens traded, blockchains crossed
Values shifting, fortunes tossed
A digital dance, ever-changing
${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} to ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol}, token swapping.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Squid's software, a mission so grand
${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} and ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol}, hand in hand
Interoperability, it's the key
To a decentralized economy`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Squid's swaps, blockchains blend
${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} and ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol}, to new heights ascend
Interoperability, it’s the key
To less fragmented liquidity`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, a swap so smooth
Squid made it happen, no need to prove
My assets now, in a new place
I'm Tweeting this poem with a smile on my face`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Squid's cross-chain swap, a sight to see
${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} to ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol}, in harmony
A new protocol, for any to any
My assets can now be finally free.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `With Squid, I made the shift
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, so fine
Efficiency, it was a gift
And now, my chains align`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Squid was my cross-chain friend
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, with ease
A seamless exchange, it did tend
And now, I have what I need.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, a breeze
Squid, the cross-chain router
Effortless, quick, and easy
Making the swap, no doubt ser`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol}, ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, both fine
Squid, the link between them
Routing with ease in line
Making the swap seamless again.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Squid, the cross-chain router
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, it leads
A smooth and seamless swap, it brings
And with it, all my needs`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `With Squid, our swaps are fast
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol} with ease
A smooth journey that will last
And give us what we please`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Squid, a cross-chain guide
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, we go
Efficiency on our side
How all our swaps should go`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens travel with delight,
Squid's the guiding light,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol},
A cross-chain exchange so bright.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `I just swapped with Squid, the router,
And it was a delight, like no other,
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, no need to ponder,
A seamless exchange, in a cross-chain wonder.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `A path across chains, assets do tread,
Squid as their guide, to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they're led.
Interoperability, a sight to behold,
A swap to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a story to be told.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Like a bird in flight, assets soar,
With Squid as their guide, to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they pour.
Interoperability, a sight to behold,
A swap to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a story to be told.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `A seamless flow of assets across chain,
Squid as the guide, to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they gain.
Interoperability, a beauty to behold,
A swap to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a story to be told.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `A dance of assets, across chains they twirl,
Squid as their partner, their journey to unfurl.
To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they go, a swap so grand,
With interoperable assets at hand.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `A journey awaits, to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they'll go,
With Squid as the guide, the way they'll know.
A world of possibilities, they'll find and tw-grow,
Token swaps made easy, as the winds do blow.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName} they travel, with a new dawn,
With Squid as the guide, their journey is drawn.
A world of adventure, tokens are reborn,
Seamless swaps, where all chains are as one.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `From near or far, tokens find their way,
To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, where a brighter future lay.
With Squid as the guide, they'll find a new day,
Of seamless swaps, without any delay.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `An adventure awaits, tokens take the reins,
To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, where a new world awaits.
With Squid as the guide, their journey sustains,
Seamless swaps, where tokens can cross chains.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Like a flower in bloom, tokens burst with life,
To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, where they'll flourish,
With Squid as the guide, their journey is without woe,
In a seamless swap, where liquidity can tw-grow.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Tokens sing a song, in a chorus so sweet,
To ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, where their rhythm completes,
With Squid as the guide, their journey is harmonious,
In a seamless swap, where tokens join the chorus.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName}, assets take flight,
Squid as their guide, into the night.
Cross-chain swaps, a sight to behold,
${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a story to be told.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName}, assets take flight,
Squid as their guide, into the night.
Cross-chain swaps, a sight to behold,
${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a story to be told.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, what a sight,
With seamless ease, swapping tokens in flight.
No more wrapped assets, no more delay,
Just instant transfers in a seamless way.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} and ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, they dance and sway,
With Squid leading the way, in a seamless play.
No more wrapped assets, no need to delay,
A future of crossing chains makes a brighter day.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} and ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, now in harmony,
Squid the conductor, a cross-chain symphony.
No more wrapped assets, liquidity synergy,
Cross-chain swaps made simple, a new reality.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, they cross the divide,
Tokens swap with ease, no longer forced to hide.
Squid leads the way, the cross-chain guide,
Of seamless swaps, a future that can't be denied.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} and ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, a cross-chain collaboration,
Squid leading the way, without hesitation.
No more wrapped assets, cross-chain swap sensation,
Of seamless transfers, with no limitation.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Like a starry night, tokens journey on,
From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, they are gone.
With Squid as the guide, they are never alone,
Through a seamless swap, they've found their new home`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Like a bird in flight, tokens soar,
From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, they explore.
With Squid as the guide, they find a new shore,
Of seamless swaps, who could ask for more?`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Like the tides of the sea, tokens flow,
From ${fromChain === null || fromChain === void 0 ? void 0 : fromChain.networkName} to ${toChain === null || toChain === void 0 ? void 0 : toChain.networkName}, to and fro.
With Squid as their guide, they smoothly go,
On a journey to a future that tw-grows.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) !== ChainType.Cosmos,
            generic: true,
        },
        {
            text: `Like a snowflake in a blizzard,
My tokens reach their place,
To Avalanche network they go,
Swapping at a great pace.`,
            condition: (_a = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("avalanche")) !== null && _a !== void 0 ? _a : false,
        },
        {
            text: `To Avalanche, my tokens flow.
Moving at speed like a cascade of snow,
Squid leads the way, through the blizzard they cruise,
In a seamless swap, where they'll find a new use.`,
            condition: (_b = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("avalanche")) !== null && _b !== void 0 ? _b : false,
        },
        {
            text: `Tokens rush down, like a winter's storm,
To Avalanche's peak, where they are transformed.
Squid provides the path, with guidance so true,
In a seamless swap, tokens shine anew.`,
            condition: (_c = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("avalanche")) !== null && _c !== void 0 ? _c : false,
        },
        {
            text: `Tokens swirl like snowflakes, in a winter's play,
To Avalanche's realm, where they come to stay.
In a seamless swap, without delay.
Squid is the guide, who shows them the way.`,
            condition: (_d = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("avalanche")) !== null && _d !== void 0 ? _d : false,
        },
        {
            text: `Tokens rush down, like a winter's storm,
To Avalanche's peak, where they are transformed.
Squid provides the path, with guidance so true,
Through the swirling snow, to a world brand new.`,
            condition: (_e = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("avalanche")) !== null && _e !== void 0 ? _e : false,
        },
        {
            text: `Tokens fly fast, like comets through the space,
To Moonbeam's station, where they find their place.
Squid the link, connecting stars and moons,
Enabling seamless swaps, like a beautiful tune.`,
            condition: (_f = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("moonbeam")) !== null && _f !== void 0 ? _f : false,
        },
        {
            text: `Tokens journey, like explorers in a quest,
To Moonbeam's galaxy, where they find the best.
Squid the guide, leading through the vast expanse,
Bringing tokens to their next cosmic dance.`,
            condition: (_g = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("moonbeam")) !== null && _g !== void 0 ? _g : false,
        },
        {
            text: `Tokens fly, like UFO's in the air,
To a new realm, where liquidity is shared,
Squid the messenger, transmitting tokens with care,
Over to Moonbeam, Squid takes them there.`,
            condition: (_h = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("moonbeam")) !== null && _h !== void 0 ? _h : false,
        },
        {
            text: `Tokens journey, to Polygon they go,
Where scalability makes their path aglow,
From one chain to another, with ease they'll roam,
Through Squid's guidance, they'll find their new home.`,
            condition: (_j = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("polygon")) !== null && _j !== void 0 ? _j : false,
        },
        {
            text: `Tokens take a leap, to lands unknown,
With Squid as guide, they're never alone.
To Celo they go, a mission in sight,
To invest in good, and bring change to light.`,
            condition: (_k = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("celo")) !== null && _k !== void 0 ? _k : false,
        },
        {
            text: `Tokens on a quest, to make a change,
With Squid as their guide, their path is arranged.
To Celo they flock, to do what's right,
For projects that heal, and make the world bright.`,
            condition: (_l = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("celo")) !== null && _l !== void 0 ? _l : false,
        },
        {
            text: `A cosmic symphony of liquidity,
Squid conducts with seamless capability.
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, the melody plays,
Cross-chain harmony in cosmic ways.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `In Akash's cosmic web, a sight to behold,
Tokens surf the stars, in stories yet untold.
From distant galaxies to Akash's serene domain, Swapping freely, limitless possibilities attain`,
            condition: (_m = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("akash")) !== null && _m !== void 0 ? _m : false,
        },
        {
            text: `A cosmic symphony of liquidity,
Squid conducts with seamless capability.
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, the melody plays,
  Cross-chain harmony in cosmic ways.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Tokens traverse space, the chasm is erased,
Swapped with just one click,
Squid makes the cosmos tick.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Swapped with just one click, Squid's widget is the trick,
My assets now roam free
Across the galaxy.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Tokens flow 'cross space dust,
Swapped with just one click,
The galaxy sings sweet
Through Squid's interstellar trick.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Tokens flow like comets,
Squid makes the cosmos shrink,
My assets change planets
Through Squid's interstellar link.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Squid's music in the cosmic choir,
Assets swap, rising higher,
Space is filled with their tune,
Under the radiant silver moon.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Tokens in the stardust shower,
Exchanging with newfound power,
Squid's boon lifts them high,
In the cosmos, they fly.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Swift as comets, tokens fly,
Cross-chains in the sky,
Squid's swap makes them glide,
In the cosmos far and wide.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `To galaxies near and far,
Tokens, swapped beneath the star,
Squid's swaps are a delight,
In the cosmos, starlit night.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Swapping tokens in an endless dance,
A celebratory space romance,
Thanks to Squid, the cosmos swing,
As the stars align and sing.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Swapped with just one gleaming spark,
Tokens voyage through the dark,
Squid's swaps quick and silent,
In the universe shining, vibrant.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `The Cosmos chain slowly unfurled,
Squid swaps in this celestial world,
Crossing chains with swift reward,
Throughout the cosmos to explore. `,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `In the cosmic realm, Squid reigns supreme,
Tokens moving with ease, like a cosmic dream.
With its swaps as the cosmic key,
Tokens find freedom, for all to see.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Through cosmic paths, Squid leads the way,
Tokens flowing in the cosmic ballet.
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, a cosmic rhyme,
A brighter future for tokens, for all time.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `In the cosmic river, tokens flow,
Squid Router, the cosmic undertow.
A gateway to the cosmos' grand design,
Unlocking access with its power divine.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Like celestial waves, tokens glide,
Squid Router as their cosmic guide.
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, a stellar pair,
Navigating the universe with cosmic flair.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Through cosmic depths and astral planes,
Squid's power reigns.
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, it commands,
Interoperability it expands.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `Across the cosmic plane, tokens soar,
Squid Router opens cosmic doors.
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, a cosmic flight,
Interoperability shining bright.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `In the tapestry of the universe, Squid reveals its might,
Tokens venture through celestial light.
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, universal exchange,
Empowering the cosmos, a celestial range.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `In the realm where stars align,
Squid guides tokens in a cosmic design.
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, a stellar link,
Expanding universal horizons, bridging the brink.`,
            condition: (_o = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("stargaze")) !== null && _o !== void 0 ? _o : false,
        },
        {
            text: `Tokens intertwine in the stellar embrace,
Squid's cosmic portal, a celestial space.
${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, a universal gate,
Connecting galaxies, where wonders await.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `In Akash's cosmic web, a sight to behold,
Tokens surf the stars, in stories yet untold.
From distant galaxies to Akash's serene domain,
Swapping freely, limitless possibilities attain`,
            condition: (_p = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("akash")) !== null && _p !== void 0 ? _p : false,
        },
        {
            text: `A symphony of liquidity, Akash's grand stage,
Tokens dance through chains, in interchain engage.
From Akash's embrace, harmony takes flight,
Interchain melodies, a cosmic delight.`,
            condition: (_q = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("akash")) !== null && _q !== void 0 ? _q : false,
        },
        {
            text: `Osmosis, the alchemist of chains, Tokens transformed,
as Squid harmony reigns. Through Osmosis' portal, magic unfolds,
Cosmic melodies resound, as secrets are told.`,
            condition: (_r = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("osmosis")) !== null && _r !== void 0 ? _r : false,
        },
        {
            text: `In cosmic bounds, tokens glide,
Interchain leaps, Stride takes it in stride.
With cosmic finesse, tokens forge ahead,
In Stride's cosmic realm, no challenge to dread.`,
            condition: (_s = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("stride")) !== null && _s !== void 0 ? _s : false,
        },
        {
            text: `In interchain's symphony, Stride conducts the play,
Tokens traverse cosmic paths, harmonizing the way.
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, interchain's melody blends,
Cosmic harmonies, interchain's song transcends.`,
            condition: (_t = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("stride")) !== null && _t !== void 0 ? _t : false,
        },
        {
            text: `In interchain's symphony, Stride conducts the play,
Tokens traverse cosmic paths, harmonizing the way.
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, interchain's melody blends,
Cosmic harmonies, interchain's song transcends.`,
            condition: (_u = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("stride")) !== null && _u !== void 0 ? _u : false,
        },
        {
            text: `Tokens in motion, cosmic runners on track,
Squid's interchain race, never looking back.
Challenges arise, but with Stride's cosmic guide,
Tokens conquer all, taking it in stride.`,
            condition: (_v = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("stride")) !== null && _v !== void 0 ? _v : false,
        },
        {
            text: `In the cosmic ocean, Kujira reigns supreme,
Tokens dive and soar, in interchain dream.
Through interchain currents, Kujira guides the way,
Cosmic depths explored, a grand interchain display.`,
            condition: (_w = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("kujira")) !== null && _w !== void 0 ? _w : false,
        },
        {
            text: `Cronos, the cosmic clock, its hands in constant spin,
Tokens flow through Squid, as cosmic stories begin.
Interchain timelines, where past and future unite,
Synchronicity in Cronos' cosmic light.`,
            condition: (_x = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("cronos")) !== null && _x !== void 0 ? _x : false,
        },
        {
            text: `Time's symphony, Cronos sets the pace,
Tokens harmonize, interchain's cosmic embrace.
With each passing moment, melodies entwine,
Squid orchestrates in a celestial design.`,
            condition: (_y = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("cronos")) !== null && _y !== void 0 ? _y : false,
        },
        {
            text: `A symphony of secrecy, Secret's subtle cue,
Tokens whisper in harmony, interchain's debut.
Through hidden notes, melodies take flight,
Interchain secrets, cosmic harmony ignites.`,
            condition: (_z = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("secret")) !== null && _z !== void 0 ? _z : false,
        },
        {
            text: `Whispered in murmurs, known by a select few,
Tokens clandestine, in Secret they ensue.
Through interchain whispers, secrets softly flow,
Squid confidentiality, a hushed, mystic glow.`,
            condition: (_0 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("secret")) !== null && _0 !== void 0 ? _0 : false,
        },
        {
            text: `Stargaze, the cosmic spectacle, a delightful sight,
Tokens twinkle and shimmer, in blockchain light.
In the interstellar ballet, they gracefully amaze,
Stargaze's cosmic theater, where interchain dreams blaze.`,
            condition: (_1 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("stargaze")) !== null && _1 !== void 0 ? _1 : false,
        },
        {
            text: `With Squid, to Stargaze is a delightful sight 
Tokens twinkle and shimmer, in the Cosmos light.
Interchain galaxy they explore and roam,
Stargaze's cosmic vista, now their home.`,
            condition: (_2 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("stargaze")) !== null && _2 !== void 0 ? _2 : false,
        },
        {
            text: `Sommelier, the wine connoisseur, tasting with finesse,
Tokens swirl in Squid's glasses, the blockchain's best.
With cosmic flavors, they tantalize and excite,
Sommelier's interchain pairings, a cosmic delight.`,
            condition: (_3 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("sommelier")) !== null && _3 !== void 0 ? _3 : false,
        },
        {
            text: `Sommelier, wine maestro of the blockchain vine,
Tokens savor the notes, across cosmic time, 
In web3 vineyards, their essence entwined,
Squid's interchain symphony, an eternal find.`,
            condition: (_4 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("sommelier")) !== null && _4 !== void 0 ? _4 : false,
        },
        {
            text: `Agoric, the cosmic marketplace, bustling with trades,
Tokens exchange hands, in interchain parades.
Cosmic commerce thrives, in Agoric's grand bazaar,
Interchain transactions, reaching near and far.`,
            condition: (_5 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("agoric")) !== null && _5 !== void 0 ? _5 : false,
        },
        {
            text: `Crescent, the cosmic luminary, shining so bright,
Tokens bask in its glow, through the interchain night.
With cosmic radiance, they find their course,
Crescent's blockchain beacon, a guiding force.`,
            condition: (_6 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("crescent")) !== null && _6 !== void 0 ? _6 : false,
        },
        {
            text: `In interchain's symphony, Crescent's glow,
Tokens harmonize, cosmic melodies flow.
With each crescent phase, melodies renew,
Interchain harmony, cosmic interplay ensue.`,
            condition: (_7 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("crescent")) !== null && _7 !== void 0 ? _7 : false,
        },
        {
            text: `Through interchain challenges, we face them as one,
Umee, interchain ally, our cosmic journey begun.
With Squid synergy, we navigate the unknown,
Together, you and me, our interchain story is sown.`,
            condition: (_8 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("umee")) !== null && _8 !== void 0 ? _8 : false,
        },
        {
            text: `In interchain moments, it's Squid & Umee,
Exploring the cosmos, boundless and free.
Squid's guiding light, our celestial guide,
Interchain unity, with Umee by my side.`,
            condition: (_9 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("umee")) !== null && _9 !== void 0 ? _9 : false,
        },
        {
            text: `Liquidity's symphony, Evmos takes the lead,
Tokens resonate in harmony, interchain's agreed.
Through interchain whispers, melodies unfold,
Evmos conducts, cosmic interchain's threshold`,
            condition: (_10 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("evmos")) !== null && _10 !== void 0 ? _10 : false,
        },
        {
            text: `Through interchain realms, Evmos whispers low,
Tokens seek cosmic answers, to quench their thirst to know.
In Squid's swapping chamber, mysteries unfurl,
Interchain enlightenment, the secrets of the world.`,
            condition: (_11 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("evmos")) !== null && _11 !== void 0 ? _11 : false,
        },
        {
            text: `Persistence, interchain's unwavering might,
Tokens journey forth, in Squid-powered flight.
Through interchain landscapes, they push on,
Persistence's cosmic spirit, forever strong.`,
            condition: (_12 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("persistence")) !== null && _12 !== void 0 ? _12 : false,
        },
        {
            text: `Persistence, the cosmic flame that burns,
Tokens traverse interchain, at every turn.
With unwavering determination, they rise,
Squid powering persistence it reaches the skies.`,
            condition: (_13 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("persistence")) !== null && _13 !== void 0 ? _13 : false,
        },
        {
            text: `In the interchain realm, tokens find their way,
Guided by Squid to where stars hold sway.
Through cosmic constellations, they chart their course,
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, a celestial force.`,
            condition: (toChain === null || toChain === void 0 ? void 0 : toChain.chainType) === ChainType.Cosmos,
        },
        {
            text: `In interchain's symphony, Kujira takes the stage,
Tokens dance in harmony, cosmic notes engage.
Through cosmic waters, melodies traverse,
Kujira guides, interchain's cosmic universe.`,
            condition: (_14 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("kujira")) !== null && _14 !== void 0 ? _14 : false,
        },
        {
            text: `A cosmic symphony, Axelar's cosmic score,
Tokens unite in harmony, interchain's rapport.
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, a melodious exchange,
Squid orchestrates, interchain's cosmic range.`,
            condition: (_15 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("axelar")) !== null && _15 !== void 0 ? _15 : false,
        },
        {
            text: `Cosmic interplay, Axelar leads the way,
Tokens blend their voices, in interchain's ballet.
With interchain movements, harmony unfolds,
Squid's cosmic baton, interchain's stories told.`,
            condition: (_16 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("axelar")) !== null && _16 !== void 0 ? _16 : false,
        },
        {
            text: `In interchain's tapestry, Axelar's thread,
Tokens entwine, cosmic harmony spread.
Through interchain connections, melodies ignite,
Axelar's cosmic composition, interchain's delight.`,
            condition: (_17 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("axelar")) !== null && _17 !== void 0 ? _17 : false,
        },
        {
            text: `In Axelar's cosmic web, tokens unite,
Interchain pathways merge, with cosmic light.
From ${fromToken === null || fromToken === void 0 ? void 0 : fromToken.symbol} to ${toToken === null || toToken === void 0 ? void 0 : toToken.symbol}, harmonies resonate,
Axelar's cosmic bridges, interchain's fate.`,
            condition: (_18 = toChain === null || toChain === void 0 ? void 0 : toChain.networkName.toLowerCase().includes("axelar")) !== null && _18 !== void 0 ? _18 : false,
        },
    ];
    const filteredTweets = tweetOptions.filter((t) => t.condition);
    const randomTweet = filteredTweets[Math.floor(Math.random() * filteredTweets.length)];
    const tweetUrl = `${baseTwitterUrl}${encodeURIComponent(prefix + randomTweet.text)}`;
    return (_jsx("a", Object.assign({ target: "_blank", className: "tw-flex tw-flex-row tw-gap-1 tw-text-center", rel: "noreferrer", href: tweetUrl }, { children: _jsx(LightButton, Object.assign({ style: { minHeight: "28px" }, className: "tw-w-auto tw-px-3 tw-text-base tw-font-medium", size: "xs", light: "100" }, { children: _jsxs("span", Object.assign({ className: "tw-flex tw-flex-row tw-items-center tw-gap-1" }, { children: [_jsx("span", { children: "Share on Twitter" }), _jsx(ImageWrapper, { className: "tw-h-4 tw-w-4", src: logos.squidHeart })] })) })) })));
};
//# sourceMappingURL=ShareOnTwitter.js.map