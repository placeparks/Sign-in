import Link from 'next/link'
import Image from "next/image"

export default function main(){
return(
<div>
<div class="page">
    <h1>Wecome To Mirac.eth App</h1>
    <h3>Choose Your Desired Page</h3>
<a target="_blank" href="https://ipfs-dapp-wine.vercel.app/mint" rel="noopener noreferrer"><button class="btn-mint">Go to Mint page</button></a> 

<a target="_blank" href="https://gallery-gamma-bay.vercel.app/" rel="noreferrer"><button class="btn-gallery" rel="noopener noreferrer" >Nft Gallery</button></a> 

<a target="_blank" href="https://ipfs-dapp-wine.vercel.app/" rel="noopener noreferrer"><button class="btn-ipfs" >Ipfs Drop</button></a>

</div>
<div class="footer"><a target="_blank" href="https://bio.link/099" rel="noreferrer"><Image src="/mail.png" height={22} width={20} alt="contact"/></a>
Developed by Mirac.eth</div>
</div>
);
}
