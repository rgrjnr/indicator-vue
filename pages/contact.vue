<template>
    <div class="content">
        <div class="panel panel-stretch overflow-y-scroll scrollable panel-main">
            <h1 class="mt-14">{{ $t("contact.h1") }}</h1>
            <form @submit.prevent="onSubmit">
                <div :class="{ invalid: validation.name.touched && !formData.name, 'my-8': true }">
                    <label>{{ $t("contact.form.name") }}</label>
                    <Input v-model="formData.name" @blur="validation.name.touched = true" />
                </div>
                <div
                    :class="{ invalid: validation.email.touched && !formData.email, 'my-8': true }">
                    <label>{{ $t("contact.form.email") }}</label>
                    <Input v-model="formData.email" @blur="validation.email.touched = true" />
                </div>
                <div
                    :class="{
                        invalid: validation.subject.touched && !formData.subject,
                        'my-8': true,
                    }">
                    <label>{{ $t("contact.form.subject") }}</label>
                    <Input v-model="formData.subject" @blur="validation.subject.touched = true" />
                </div>
                <div
                    :class="{
                        invalid: validation.message.touched && !formData.message,
                        'my-8': true,
                    }">
                    <label>{{ $t("contact.form.message") }}</label>
                    <Textarea
                        v-model="formData.message"
                        @blur="validation.message.touched = true" />
                </div>

                <div
                    class="my-8 card bg-red-900 text-red-50 p-4"
                    v-if="
                        ((validation.name.touched && !formData.name) ||
                            (validation.email.touched && !formData.email) ||
                            (validation.subject.touched && !formData.subject) ||
                            (validation.message.touched && !formData.message)) &&
                        triedOnce
                    ">
                    {{ $t("contact.form.please_fill_in_all_fields") }}
                </div>

                <div class="my-8 card bg-green-900 text-green-50 p-4" v-if="success">
                    {{ $t("contact.form.success") }}
                </div>

                <div class="my-8 card bg-red-900 text-red-50 p-4" v-if="error">
                    {{ $t("contact.form.error") }}
                </div>

                <button type="submit" class="btn" :disabled="loading" @click="onSubmit">
                    <span v-if="!loading">{{ $t("contact.form.submit") }}</span>
                    <span v-else>{{ $t("contact.form.waiting_for_confirmation") }}...</span>
                </button>
            </form>
        </div>
    </div>
</template>
<script setup>
const loading = ref(false);
const validation = reactive({
    name: { touched: false },
    email: { touched: false },
    subject: { touched: false },
    message: { touched: false },
});

const triedOnce = ref(false);

const formData = reactive({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const siteKey = "6LdeGIUqAAAAAGYiAYRSrzU7NkKEDuJ6nJjPNPZ2"; // Replace with your actual reCAPTCHA site key
const recaptchaToken = ref(null);

const executeRecaptcha = async () => {
    try {
        const token = await window.grecaptcha.execute(siteKey, { action: "submit" });
        recaptchaToken.value = token;
        return token;
    } catch (error) {
        console.error("reCAPTCHA error:", error);
        return null;
    }
};

onMounted(() => {
    const recaptchaScript = document.createElement("script");
    recaptchaScript.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    document.head.appendChild(recaptchaScript);
});

setSeo("contact");

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

const error = ref(false);
const success = ref(false);

const onSubmit = async () => {
    if (loading.value) return;

    loading.value = true;
    triedOnce.value = true;
    validation.name.touched = true;
    validation.email.touched = true;
    validation.subject.touched = true;
    validation.message.touched = true;

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        loading.value = false;
        return;
    }
    try {
        recaptchaToken.value = await executeRecaptcha();

        const { data: submission } = await $useFetch("/contact-form", {
            method: "POST",
            body: {
                name: formData.name,
                email: formData.email,
                subject: formData.subject,
                message: formData.message,
                recaptchaToken: recaptchaToken.value,
            },
        });

        success.value = true;

        formData.name = "";
        formData.email = "";
        formData.subject = "";
        formData.message = "";

        validation.name.touched = false;
        validation.email.touched = false;
        validation.subject.touched = false;
        validation.message.touched = false;
    } catch (error) {
        console.error(error);
        error.value = true;
    } finally {
        loading.value = false;
    }
};
</script>
