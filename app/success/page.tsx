'use client'

import { CheckCircle, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function SuccessContent() {
    const searchParams = useSearchParams()
    const sessionId = searchParams.get('session_id')

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="max-w-md w-full text-center">
                <div className="mb-8">
                    <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Payment Successful!
                    </h1>
                    <p className="text-gray-600">
                        Thank you for your purchase. Your order has been confirmed.
                    </p>
                </div>

                {sessionId && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-8">
                        <p className="text-sm text-gray-500">Order Reference:</p>
                        <p className="text-xs text-gray-400 font-mono break-all">
                            {sessionId}
                        </p>
                    </div>
                )}

                <div className="space-y-4">
                    <Link
                        href="/"
                        className="w-full inline-flex items-center justify-center gap-2 bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    >
                        <ShoppingBag className="h-5 w-5" />
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function SuccessPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen bg-white flex items-center justify-center">
                    <div className="animate-spin h-8 w-8 border-4 border-black border-t-transparent rounded-full"></div>
                </div>
            }
        >
            <SuccessContent />
        </Suspense>
    )
}
