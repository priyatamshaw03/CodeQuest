import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function CommunityHelpSection() {
  return (
    <div className='flex items-center flex-col p-5 border-4 rounded-2xl mt-6'>
      
      <h2 className='text-3xl font-game'>Need Help ?</h2>
      <p className='font-game text-gray-500 text-xl text-center'>Ask Question in our community</p>
      <Link href={'https://discord.com'}>
        <Button className='font-game cursor-pointer text-lg' variant={'pixel'}>Go to Community</Button>
      </Link>
    
    </div>
  );
}

export default CommunityHelpSection;
