import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai'
export default function header() {
  return (
    <div>

        <div className="">
          <MenuItem
           title='HOME'
           address='/'
           icon={AiFillHome}
           />

        </div>

        <div className=""></div>


    </div>
  )
}
