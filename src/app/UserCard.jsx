import { GoKebabHorizontal } from 'react-icons/go'
import { FaRegCircleUser } from 'react-icons/fa6'
import { LiaClock } from 'react-icons/lia'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

function UserCard() {
  return (
    // <div className=' w-[537px] h-[220] bg-[#E9F3FE] border-[1px] rounded-3xl p-4 flex gap-2 items-center font-Montserrat'>
    //   <Image
    //     src='/Card.png'
    //     alt='card image'
    //     width='155'
    //     height='181'
    //     className=' mr-4'
    //   />
    //   <section>
    //     <h3 className=' text-[#E58158] bg-white text-center w-28 text-xs rounded font-bold py-[2px] mb-2'>
    //       After Effects
    //     </h3>
    //     <h1 className='text-[#2B62CF] font-bold text-3xl  mb-6 leading-7 tracking-tight '>
    //       Animation in UI Design (Part 2)
    //     </h1>
    //     <section className='text-[#699BF7] font-bold text-xs flex gap-5'>
    //       <h3 className='flex items-center gap-1'>
    //         <span className='text-base'>
    //           <FaRegCircleUser />
    //         </span>
    //         Vishal Pulikottil
    //       </h3>
    //       <h3 className='flex items-center gap-1'>
    //         <span className='text-base text'>
    //           <LiaClock />
    //         </span>
    //         15 minutes
    //       </h3>
    //     </section>
    //   </section>
    //   <section className='text-[#699BF7] text-2xl mr-2 -mt-40'>
    //     <GoKebabHorizontal />
    //   </section>
    // </div>
    <Card className=' w-[537px] h-[220] bg-[#E9F3FE] rounded-3xl p-4 flex gap-2 items-center font-Montserrat drop-shadow-md'>
      <Image
        src='/Card.png'
        alt='card image'
        width='155'
        height='181'
        className=' mr-4'
      />
      <section>
        <h3 className=' text-[#E58158] bg-white text-center w-28 text-xs rounded font-bold py-[2px] mb-2'>
          After Effects
        </h3>
        <h1 className='text-[#2B62CF] font-bold text-3xl  mb-6 leading-7 tracking-tight '>
          Animation in UI Design (Part 2)
        </h1>
        <section className='text-[#699BF7] font-bold text-xs flex gap-5'>
          <h3 className='flex items-center gap-1'>
            <span className='text-base'>
              <FaRegCircleUser />
            </span>
            Vishal Pulikottil
          </h3>
          <h3 className='flex items-center gap-1'>
            <span className='text-base text'>
              <LiaClock />
            </span>
            15 minutes
          </h3>
        </section>
      </section>
      <section className='text-[#699BF7] text-2xl mr-2 -mt-40'>
        <GoKebabHorizontal />
      </section>
    </Card>
  )
}

export default UserCard
