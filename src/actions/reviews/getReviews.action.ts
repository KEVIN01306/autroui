import { defineAction } from "astro:actions"
import type { Review } from "../../components/common/Reviews.astro"
import content from "../../data/reviews/reviews.json"






export const getReviews = defineAction({
    handler: async (): Promise<{message: string, data: Review[]}> => {
        const data =  content.reviews as Review[]
        return { message: "Reviews retrieved successfully", data }
    }
})