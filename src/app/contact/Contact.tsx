import { FormEvent, ChangeEvent, useState } from 'react'

type STATUSES = 'IDLE' | 'LOADING' | 'COMPLETE' | 'ERROR'
interface FormState {
    firstName: string
    lastName: string
    email: string
    business?: string
}

export const ContactForm = () => {
    const [status, setStatus] = useState<STATUSES>('IDLE')
    const [form, setForm] = useState<FormState>({
        firstName: '',
        lastName: '',
        email: '',
    })

    const fakePromise = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('done')
            }, 2000)
        })
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fakePromise().then(() => {
            setStatus('COMPLETE')
        })
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const key = e.target.id
        const value = e.target.value
        console.log({ key })
        console.log({ value })
        setForm((current) => {
            return {
                ...current,
                [key]: value,
            }
        })
    }

    return (
        <>
            {status === 'COMPLETE' && <div className="text-4xl p-20">COMPLETE!</div>}
            {status === 'ERROR' && <div className="text-4xl p-20">ERROR!</div>}
            <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit}>
                <div className="flex flex-col">
                    <label htmlFor="firstName" className="required">
                        First Name
                    </label>
                    <input
                        type="text"
                        value={form.firstName}
                        onChange={handleChange}
                        id="firstName"
                        className="border p-1"
                        placeholder="John"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="lastName" className="required">
                        Last Name
                    </label>
                    <input
                        type="text"
                        value={form.lastName}
                        onChange={handleChange}
                        id="lastName"
                        className="border p-1"
                        placeholder="Doe"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="required">
                        Email Address
                    </label>
                    <input
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        id="email"
                        className="border p-1"
                        placeholder="john@example.com"
                        required
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="business">Business</label>
                    <input
                        type="text"
                        value={form.business}
                        onChange={handleChange}
                        id="business"
                        className="border p-1"
                        placeholder="Acme Company"
                    />
                </div>
                <div className="bg-red-100 col-span-2">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}
