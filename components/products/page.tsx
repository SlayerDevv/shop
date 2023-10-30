import React from 'react'
import { Separator } from '../ui/separator'
import { cn } from '@/lib/utils'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card'
import Image from 'next/image'
import img from '@/public/2728107f3caf1a245a04ddc6f5cb04c8.jpg'
const ProductSection = () => {
  return (
    <section className='w-full  py-10'>
        <div className='flex justify-center py-3'>
            <h1 className='text-black block text-5xl font-[poppins] font-extrabold font-black'>Check Our Products 📦</h1>
        </div>
        <div className='flex justify-center '>
        <Separator className={cn('flex items-center justify-center w-52 h-[3px] bg-white')} />
        </div>
        <div className='w-full mt-20 flex justify-between flex-wrap'>
            <Card className={cn('w-[300px] mb-4 ')}>

                <CardContent className=' pt-3 '><Image src={img} className='w-[300px] h-[300px] rounded-md mb-3' alt='product'/>
                <Separator className={cn('flex items-center justify-center w-max h-[1px] bg-zinc-400 ')} />
                <h1 className='text-lg font-extrabold pt-2'>ORIGINAL CAT</h1>
                </CardContent>
                <CardFooter className='flex items-center justify-end pt-6 text-green-300 text-md font-semibold'>2500.00دج</CardFooter>
            </Card>

            <Card className={cn('w-[300px] mb-4')}>

                <CardContent className=' pt-3 '><Image src={img} className='w-[300px] h-[300px] rounded-md mb-3' alt='product'/>
                <Separator className={cn('flex items-center justify-center w-max h-[1px] bg-zinc-400 ')} />
                <h1 className='text-lg font-extrabold pt-2'>ORIGINAL CAT</h1>
                </CardContent>
                <CardFooter className='flex items-center justify-end pt-6 text-green-300 text-md font-semibold'>2500.00دج</CardFooter>
            </Card>
            <Card className={cn('w-[300px] mb-4')}>

<CardContent className=' pt-3 '><Image src={img} className='w-[300px] h-[300px] rounded-md mb-3' alt='product'/>
<Separator className={cn('flex items-center justify-center w-max h-[1px] bg-zinc-400 ')} />
<h1 className='text-lg font-extrabold pt-2'>ORIGINAL CAT</h1>
</CardContent>
<CardFooter className='flex items-center justify-end pt-6 text-green-300 text-md font-semibold'>2500.00دج</CardFooter>
</Card>
<Card className={cn('w-[300px] mb-4')}>

                <CardContent className=' pt-3 '><Image src={img} className='w-[300px] h-[300px] rounded-md mb-3' alt='product'/>
                <Separator className={cn('flex items-center justify-center w-max h-[1px] bg-zinc-400 ')} />
                <h1 className='text-lg font-extrabold pt-2'>ORIGINAL CAT</h1>
                </CardContent>
                <CardFooter className='flex items-center justify-end pt-6 text-green-300 text-md font-semibold'>2500.00دج</CardFooter>
            </Card>
            <Card className={cn('w-[300px] mb-4')}>

                <CardContent className=' pt-3 '><Image src={img} className='w-[300px] h-[300px] rounded-md mb-3' alt='product'/>
                <Separator className={cn('flex items-center justify-center w-max h-[1px] bg-zinc-400 ')} />
                <h1 className='text-lg font-extrabold pt-2'>ORIGINAL CAT</h1>
                </CardContent>
                <CardFooter className='flex items-center justify-end pt-6 text-green-300 text-md font-semibold'>2500.00دج</CardFooter>
            </Card>
            <Card className={cn('w-[300px] mb-4')}>

                <CardContent className=' pt-3 '><Image src={img} className='w-[300px] h-[300px] rounded-md mb-3' alt='product'/>
                <Separator className={cn('flex items-center justify-center w-max h-[1px] bg-zinc-400 ')} />
                <h1 className='text-lg font-extrabold pt-2'>ORIGINAL CAT</h1>
                </CardContent>
                <CardFooter className='flex items-center justify-end pt-6 text-green-300 text-md font-semibold'>2500.00دج</CardFooter>
            </Card>
        </div>
    </section>
  )
}

export default ProductSection