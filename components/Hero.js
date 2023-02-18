import { CheckIcon, ClockIcon } from '@heroicons/react/outline'
import Timeline from './Timeline'

const styles = {
    wrapper: 'flex w-full items-center justify-center pt-16 lg:pt-20',
    container: 'space-y-10',
    heroTitle: 'xl:pr-40 text-6xl font-bold',
    heroParagraph: 'xl:pr-40',
    heroCta: 'flex items-center space-x-10',
    mintButton: 'rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]',
}

const Hero = ({ mintNFT, claimedSupply, totalSupply, inAllowlist, nftPrice, claimPhases }) => {
    const timelines = claimPhases.map((phase) => {
        const now = new Date().getTime()
        const hasPast = now > phase.startTime

        return {
            ...phase,
            icon: hasPast ? CheckIcon : ClockIcon,
            iconBackground: hasPast ? 'bg-green-500' : 'bg-gray-400',
        }
    })

    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.heroTitle}>The NFT Otaku Club</h1>

                <p className={styles.heroParagraph}>
                Welcome to our homepage where we're excited to announce our upcoming NFT drop featuring exclusive anime artwork!

Our NFT drop will showcase stunning digital art pieces featuring characters and scenes from popular anime series. Each NFT will be a unique and limited edition collectible that fans and collectors alike will love.

Anime fans will appreciate the attention to detail and artistry in each piece, which will be available in a variety of styles and sizes. Whether you're a fan of action-packed series, romantic dramas, or fantasy adventures, our NFT drop will have something for everyone.

Don't miss out on this opportunity to own a piece of anime history. Stay tuned for more information on our upcoming NFT drop and be sure to mark your calendar so you don't miss your chance to add these exclusive pieces to your collection.
                </p>

                <ul>
                    {timelines.map((timeline, index) => (
                        <Timeline key={index} index={index} timeline={timeline} isLastTimeline={timelines.length === index + 1} />
                    ))}
                </ul>

                <div className={styles.heroCta}>
                    {inAllowlist && (
                        <button onClick={mintNFT} className={styles.mintButton}>
                            Mint Your NFT ({nftPrice} ETH)
                        </button>
                    )}
                    <p>
                        {claimedSupply} / {totalSupply} claimed
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Hero