/**
 * @param {{ quote: string; author: string; }} props
 */
import { motion } from "framer-motion";
export function Quote(props: { quote: string; author: string }): JSX.Element {
  return (
    <div className="bg-gray-200">
      <p className="p-24 m-auto text-xl italic font-light text-center text-gray-800 sm:text-4xl">
      <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 5 }}
      
    >
      {props.quote}
    </motion.div>
        <span className="ml-4 font-bold text-center capitalize sm:text-2xl">
          - {props.author}
        </span>
      </p>
    </div>
  );
}
