/**
 * @param {{ quote: string; author: string; }} props
 */
import { motion } from "framer-motion";

export function Quote(props: { quote: string; author: string }): JSX.Element {
  return (
    <div className="bg-gray-200 p-24">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 5 }}
        className="m-auto text-xl italic font-light text-center text-gray-800 sm:text-4xl"
      >
        {props.quote}
      </motion.div>
      <p className="mt-4 text-center font-bold capitalize sm:text-2xl">
        - {props.author}
      </p>
    </div>
  );
}
