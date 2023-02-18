import Image from 'next/image'

const styles = {
    wrapper: 'bg-animate flex-1 rounded-3xl flex lg:flex-col items-center relative',
}

const NFTDisplay = () => {
    const nfts = ['/1.png', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg', '/7.jpg', '/8.jpg', '/9.jpg', '/10.png']

    return (
        <div className={styles.wrapper}>
            <div className="absolute inset-0 flex snap-x items-center gap-4 overflow-x-scroll px-20">
                {nfts.map((nft, index) => (
                    <div key={index} className="relative h-[200px] w-[200px] flex-shrink-0 snap-center lg:h-[400px] lg:w-[400px]">
                        <Image src={nft} layout="fill" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NFTDisplay
