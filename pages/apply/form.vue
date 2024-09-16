<script setup>
import * as z from "zod";

import {
    NumberField,
    NumberFieldContent,
    NumberFieldDecrement,
    NumberFieldIncrement,
    NumberFieldInput,
} from "@/components/ui/number-field";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Switch } from "@/components/ui/switch";

import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";

const sections = [
    {
        name: "The Company",
        items: [
            {
                label: "Company Name",
                name: "name",
                validation: z.string().max(100),
                required: true,
                type: "text",
            },
            {
                label: "Company Website",
                name: "website",
                required: true,
                validation: z.string().url(),
                type: "url",
            },
            {
                label: "Contact Email",
                name: "email",
                required: true,
                validation: z.string().email(),
                type: "email",
                helperText: "Founder's email address",
            },

            {
                label: "Pitch Deck (in PDF Format)",
                name: "pitchdeck",
                type: "file",
                helperText:
                    "Please note that the maximum file size is 5MB. If you have problems uploading, just submit the form without the deck and send it over e-mail (jacobo.decal@indicatorcapital.com).",
            },
            {
                label: "Business Description",
                name: "description",
                required: true,
                validation: z.string().min(10).max(100),
                limit: 100,
                type: "textarea",
                helperText: "Keep it short, this should be your pitch phrase.",
            },
            {
                label: "Milestones",
                name: "milestones",
                required: true,
                validation: z.string().min(10).max(300),
                limit: 300,
                type: "textarea",
                helperText:
                    "Please list the key milestones. Ex: Founded in 2018, secured $10M Series A in 2020, launched flagship product in 2021, reached $5M annual revenue in 2022, expanded to international markets in 2022, acquired 50+ major clients by 2023, obtained 3 patents in 2023, and achieved profitability in 2024.",
            },
            {
                label: "Client Relationship",
                name: "relationship",
                required: true,
                type: "select",
                options: [
                    { label: "B2B", value: "B2B" },
                    { label: "B2C", value: "B2C" },
                    { label: "B2B2C", value: "B2B2C" },
                    { label: "B2G", value: "B2G" },
                ],
            },
            {
                label: "Core Technology",
                name: "technology",
                required: true,
                type: "select",
                options: [
                    {
                        label: "Artificial Intelligence (DL/ML/NLP)",
                        value: "Artificial Intelligence (DL/ML/NLP)",
                    },
                    { label: "Big Data/Analytics", value: "Big Data/Analytics" },
                    { label: "Blockchain", value: "Blockchain" },
                    { label: "Connectivity/5G", value: "Connectivity/5G" },
                    { label: "CRM/ERP", value: "CRM/ERP" },
                    { label: "Devices/Equipment/Hardware", value: "Devices/Equipment/Hardware" },
                    { label: "eCommerce", value: "eCommerce" },
                    { label: "Extended Reality (AR/VR/MR)", value: "Extended Reality (AR/VR/MR)" },
                    { label: "Internet of Things", value: "Internet of Things" },
                    { label: "Marketplace", value: "Marketplace" },
                    { label: "Messaging", value: "Messaging" },
                    { label: "PaaS", value: "PaaS" },
                    { label: "Platform", value: "Platform" },
                    { label: "Product", value: "Product" },
                    { label: "Robotics", value: "Robotics" },
                    { label: "SaaS", value: "SaaS" },
                    { label: "Other", value: "Other" },
                ],
            },
            {
                label: "Sector",
                name: "sector",
                required: true,
                type: "select",
                options: [
                    { label: "Energy", value: "Energy" },
                    { label: "Events", value: "Events" },
                    { label: "Fin Tech", value: "Fin Tech" },
                    { label: "Food and Beverage", value: "Food and Beverage" },
                    { label: "Gaming", value: "Gaming" },
                    { label: "Government and Military", value: "Government and Military" },
                    { label: "Health Care", value: "Health Care" },
                    { label: "Human Resources", value: "Human Resources" },
                    { label: "Industry", value: "Industry" },
                    { label: "Information Technology", value: "Information Technology" },
                    { label: "Insurance", value: "Insurance" },
                    { label: "Legal", value: "Legal" },
                    { label: "Logistics", value: "Logistics" },
                    { label: "Media and Entertainment", value: "Media and Entertainment" },
                    { label: "Mobility and Smart Cities", value: "Mobility and Smart Cities" },
                    { label: "Real Estate", value: "Real Estate" },
                    { label: "Retail", value: "Retail" },
                    { label: "Sales and Marketing", value: "Sales and Marketing" },
                    { label: "Security", value: "Security" },
                    { label: "Services", value: "Services" },
                    { label: "Telecom and Messaging", value: "Telecom and Messaging" },
                    { label: "Travel and Tourism", value: "Travel and Tourism" },
                    { label: "Wellness and Fitness", value: "Wellness and Fitness" },
                ],
            },
        ],
    },
    {
        name: "The Team",
        items: [
            {
                label: "How many founders?",
                name: "foundercount",
                required: true,
                type: "number",
                min: 0,
                max: 5,
            },
            {
                label: "How many founders belong to minority or excluded groups?",
                name: "minoritycount",
                required: true,
                type: "number",
                min: 0,
                max: 5,
                helperText:
                    "The term minorities encompass ethnic, racial, religious, physical and sexual orientation aspects.",
            },
            {
                label: "Tell us more about the founding team",
                name: "aboutteam",
                required: true,
                validation: z.string().min(10).max(100),
                limit: 300,
                type: "text",
                helperText:
                    "Please describe in less than 300 characters 's founders. Ex: Jane Doe, former Google AI lead with 10 years of experience in machine learning, and John Smith, a healthcare tech innovator with 15 years of industry expertise. Together, they hold 5 patents and have successfully launched 3 startups, driving innovation and growth in health tech.",
            },
            {
                label: "Does at least one founder have prior entrepreneurial experience?",
                name: "entrepreneurialexperience",
                type: "switch",
                value: false,
            },
            {
                label: "Does at least one founder have international experience?",
                name: "internationalexperience",
                type: "switch",
                value: false,
            },
            {
                label: "Has any founder previously raised a funding round backed by a venture capital firm?",
                name: "raisingexperience",
                type: "switch",
                value: false,
            },
        ],
    },
    {
        name: "The Financials",
        items: [
            {
                label: "Last Month Recurring Revenue | MRR",
                name: "mrr",
                type: "number",
                formatOptions: {
                    style: "currency",
                    currency: "USD",
                    currencyDisplay: "code",
                    currencySign: "accounting",
                },
                min: 0,
                step: 10000,
            },

            {
                label: "Last Twelve Months Revenue | LTM",
                name: "ltm",
                type: "number",
                formatOptions: {
                    style: "currency",
                    currency: "USD",
                    currencyDisplay: "code",
                    currencySign: "accounting",
                },
                min: 0,
                step: 10000,
            },

            {
                label: "Next Twelve Months Revenue | NTM",
                name: "ntm",
                type: "number",
                formatOptions: {
                    style: "currency",
                    currency: "USD",
                    currencyDisplay: "code",
                    currencySign: "accounting",
                },
                min: 0,
                step: 10000,
            },
            {
                label: "Have you ever raised capital?",
                name: "raised",
                type: "switch",
                value: false,
                helperText:
                    "Omitting information may negatively impact the investment analysis process for your company.",
            },

            {
                label: "Total capital raised until today",
                name: "capitalraised",
                type: "number",
                if: "raised",
                min: 0,
                formatOptions: {
                    style: "currency",
                    currency: "USD",
                    currencyDisplay: "code",
                    currencySign: "accounting",
                },
                step: 10000,
            },

            {
                label: "For how much equity? (%)",
                name: "equityraised",
                type: "number",
                if: "raised",
                formatOptions: {
                    style: "percent",
                    minimumFractionDigits: 1,
                },
                step: 0.005,
                min: 0,
                max: 1,
            },
        ],
    },
    {
        name: "The Deal",
        items: [
            {
                label: "Are you currently fundraising?",
                name: "raising",
                type: "switch",
                value: false,
            },
            {
                label: "How much capital are you currently raising?",
                name: "capital",
                type: "number",
                if: "raising",
                min: 0,
                formatOptions: {
                    style: "currency",
                    currency: "USD",
                    currencyDisplay: "code",
                    currencySign: "accounting",
                },
                step: 10000,
            },

            {
                label: "For how much equity? (%)",
                name: "equity",
                type: "number",
                if: "raising",
                formatOptions: {
                    style: "percent",
                    minimumFractionDigits: 1,
                },
                step: 0.005,
                min: 0,
                max: 1,
                helperText:
                    "If you are rasing a Convertible Note or SAFE, consider your Post-Money Valuation Cap to calculate the expected dilution.",
            },
        ],
    },
];

const currentSection = ref(0);
const file = ref();
const panel = ref();

const createSchema = (sections) => {
    const shape = {};
    sections.forEach((section) => {
        section.items.forEach((item) => {
            if (item.validation) {
                shape[item.name] = item.validation;
            }
        });
    });
    return z.object(shape);
};

const schema = createSchema(sections);

const formData = reactive(
    sections.reduce((acc, section, i) => {
        section.items.forEach((item) => {
            if (item.type === "file") {
                acc[item.name] = {
                    value: null,
                    errors: [],
                    blurred: false,
                    section: i,
                };
            } else {
                acc[item.name] = {
                    value: item.type == "switch" ? false : "",
                    errors: [],
                    blurred: false,
                    section: i,
                };
            }
        });
        return acc;
    }, {})
);

// Validate a specific field
const validateField = (fieldName) => {
    if (!formData[fieldName].blurred) return;

    const fieldSchema = schema.shape[fieldName];
    if (fieldSchema) {
        try {
            fieldSchema.parse(formData[fieldName].value);
            formData[fieldName].errors = [];
        } catch (error) {
            if (error instanceof z.ZodError) {
                formData[fieldName].errors = error.errors.map((e) => e.message);
            }
        }
    }
};

// Validate a specific field
const verifyURL = (fieldName) => {
    if (!formData[fieldName].value.includes("http")) {
        formData[fieldName].value = "https://" + formData[fieldName].value;
    }
};

const onSubmit = async () => {
    try {
        const body = {};
        for (var key in formData) {
            body[key] = formData[key]?.value;
        }
        const fd = new FormData();

        // Append the JSON body as a string (you can stringify the JSON)
        fd.append("json", JSON.stringify(body));

        // Append the file
        fd.append("file", file.value); // Assuming `file` is a File object (e.g., from an input element)

        // Validate form data using Zod schema
        schema.parse(body);
        const { data: submission } = await $useFetch("/form/v1/submit", {
            method: "POST",
            body: fd,
            baseURL: "https://api.indicator.capital/wp-json",
        });

        // navigateTo("/apply/response/" + submission.value.post_id);
        // Handle successful validation (e.g., submit the form data to an API)
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Handle validation errors
            console.error("Validation errors:", error.errors);
        } else {
            console.error("Unknown error:", error);
        }
    }
};
const sectionErrorCount = ref([0, 0, 0, 0]);

const review = async () => {
    try {
        const data = {};
        for (var key in formData) {
            data[key] = formData[key]?.value;
        }

        schema.parse(data);
        sectionErrorCount.value = [0, 0, 0, 0];
        // Handle successful validation (e.g., submit the form data to an API)
        //
    } catch (error) {
        if (error instanceof z.ZodError) {
            // Handle validation errors
            // console.error("Validation errors:", error.errors);

            error.errors.forEach((e) => {
                if (formData[e.path[0]].section < currentSection.value) {
                    formData[e.path[0]].errors = [e.message];
                }
            });
            sectionErrorCount.value = [0, 0, 0, 0];
            sections.forEach((section, i) => {
                sectionErrorCount.value[i] = 0;
                section.items.forEach((item) => {
                    if (formData[item.name]?.errors?.length > 0) {
                        sectionErrorCount.value[i] += 1;
                    }
                });
            });
        } else {
            console.error("Unknown error:", error);
        }
    }
};

watch(
    () => Object.keys(formData),
    () => {
        Object.keys(formData).forEach(validateField);
    },
    { deep: true }
);

// Handle file input change
const handleFileChange = (event) => {
    event.preventDefault();
    const input = event.target;
    if (input.files && input.files.length > 0) {
        file.value = input.files[0];
    }
};

const updateSwitch = (name) => {
    formData[name].value = !formData[name].value;
};

const updateSection = (index) => {
    currentSection.value = index;
    review();
    panel.value.scrollTo({
        top: 0,
    });
};
</script>

<template>
    <div class="content">
        <div class="relative hidden sm:block">
            <div class="panel-border"></div>
            <div class="form-sections-menu">
                <ul class="form-section-menu-list">
                    <li
                        v-for="(section, i) in sections"
                        @click="updateSection(i)"
                        :class="{ active: currentSection == i }">
                        <span>{{ section.name }}</span>
                    </li>
                    <li
                        @click="updateSection(sections.length)"
                        :class="{ active: currentSection == sections.length }">
                        <span>Review</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="panel panel-stretch overflow-y-scroll scrollable panel-main p-4" ref="panel">
            <form @submit.prevent="onSubmit">
                <template v-for="(section, i) in sections">
                    <section v-if="i === currentSection" class="form-section">
                        <h2 class="text-xl">{{ section.name }}</h2>
                        <template v-for="item in section.items">
                            <FormField
                                :name="item.name || ''"
                                v-if="!item.if || (item.if && formData[item.if].value)">
                                <FormItem
                                    :class="{ invalid: formData[item.name]?.errors?.length > 0 }">
                                    <FormLabel>{{ item.label }}</FormLabel>
                                    <FormControl>
                                        <Input
                                            v-if="item.type === 'file'"
                                            type="file"
                                            :name="item.name"
                                            @change="handleFileChange" />

                                        <Select
                                            v-else-if="item.type === 'select'"
                                            v-model="formData[item.name].value">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Choose an option" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectItem
                                                        v-for="option in item.options"
                                                        :value="option.value">
                                                        {{ option.label }}
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                        <div v-else-if="item.type === 'switch'">
                                            <label class="flex align-center switch-wrapper">
                                                <span class="no">No</span>
                                                <Switch
                                                    v-model="formData[item.name].value"
                                                    :checked="formData[item.name].value"
                                                    @update:checked="updateSwitch(item.name)" />
                                                <span class="yes">Yes</span>
                                            </label>
                                        </div>
                                        <div v-else-if="item.type === 'textarea'">
                                            <Textarea
                                                v-model="formData[item.name].value"
                                                @input="validateField(item.name)"
                                                @blur="
                                                    if (item.type == 'url') verifyURL(item.name);
                                                    formData[item.name].blurred = true;
                                                    validateField(item.name);
                                                "></Textarea>
                                            <span
                                                v-if="item.limit"
                                                :class="{
                                                    invalid:
                                                        formData[item.name].value.length >
                                                        item.limit,
                                                    counter: true,
                                                }">
                                                {{ formData[item.name].value.length }}/{{
                                                    item.limit
                                                }}
                                            </span>
                                        </div>
                                        <NumberField
                                            v-else-if="item.type === 'number'"
                                            v-model="formData[item.name].value"
                                            :min="item.min"
                                            :max="item.max"
                                            :step="item.step"
                                            :default-value="item.default"
                                            :format-options="item.formatOptions">
                                            <NumberFieldContent>
                                                <NumberFieldDecrement />
                                                <NumberFieldInput />
                                                <NumberFieldIncrement />
                                            </NumberFieldContent>
                                        </NumberField>
                                        <Input
                                            v-else
                                            :type="item.type"
                                            v-model="formData[item.name].value"
                                            :name="item.name"
                                            @input="validateField(item.name)"
                                            @blur="
                                                if (item.type == 'url') verifyURL(item.name);
                                                formData[item.name].blurred = true;
                                                validateField(item.name);
                                            " />
                                    </FormControl>
                                    <FormDescription v-if="item.helperText">
                                        {{ item.helperText }}
                                    </FormDescription>
                                    <template v-if="formData[item.name]?.errors?.length > 0">
                                        {{ formData[item.name]?.errors[0] }}
                                    </template>
                                </FormItem>
                            </FormField>
                        </template>

                        <hr class="mb-4" />
                        <footer class="flex align-center justify-between">
                            <div>
                                <button
                                    @click="
                                        currentSection--;
                                        review();
                                    "
                                    class="btn btn-secondary"
                                    :disabled="currentSection == 0">
                                    Back
                                </button>
                            </div>
                            <div>
                                <button
                                    @click="
                                        currentSection++;
                                        review();
                                    "
                                    class="btn">
                                    Next
                                </button>
                            </div>
                        </footer>
                    </section>
                </template>
                <section v-if="currentSection === sections.length" class="form-section">
                    <li
                        v-for="(section, i) in sections"
                        @click="currentSection = i"
                        :class="{
                            active: currentSection == i,
                            card: true,
                            'section-overview': true,
                            invalid: sectionErrorCount[i] > 0,
                            valid: sectionErrorCount[i] == 0,
                        }">
                        <span>{{ section.name }}</span>
                        <div v-if="sectionErrorCount[i] > 0" class="text-sm">
                            <svg
                                width="179"
                                height="81"
                                class="flicker error-icon"
                                viewBox="0 0 179 81"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_507_750)">
                                    <path
                                        d="M156.17 59.2002C160.04 60.5902 163.7 62.4202 167.11 64.6102C172.54 58.0502 175.8 49.6302 175.8 40.4502H159.51C159.51 47.0402 158.33 53.3602 156.17 59.2102V59.2002Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M159.51 40.45H175.8C175.8 31.27 172.54 22.85 167.11 16.29C163.7 18.48 160.04 20.31 156.17 21.7C158.33 27.54 159.51 33.86 159.51 40.46V40.45Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M144.55 3.1001C149.59 8.3901 153.58 14.7001 156.16 21.6901C160.03 20.3001 163.69 18.4701 167.1 16.2801C161.49 9.5001 153.57 4.7101 144.55 3.1001Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M119.52 21.6898C115.65 20.2998 111.99 18.4698 108.58 16.2798C103.15 22.8398 99.8896 31.2598 99.8896 40.4398H116.18C116.18 33.8498 117.36 27.5298 119.52 21.6798V21.6898Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M116.18 40.4499H99.8896C99.8896 49.6299 103.15 58.0499 108.58 64.6099C111.99 62.4199 115.65 60.5899 119.52 59.1999C117.36 53.3599 116.18 47.0399 116.18 40.4399V40.4499Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M137.84 24.8799C131.41 24.8799 125.24 23.7499 119.51 21.6899C117.35 27.5299 116.17 33.8499 116.17 40.4499H137.83V24.8799H137.84Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M116.18 40.4502C116.18 47.0402 117.36 53.3602 119.52 59.2102C125.24 57.1502 131.41 56.0202 137.85 56.0202V40.4502H116.19H116.18Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M137.84 56.0202C144.27 56.0202 150.44 57.1502 156.17 59.2102C158.33 53.3702 159.51 47.0502 159.51 40.4502H137.85V56.0202H137.84Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M137.84 40.4499H159.5C159.5 33.8599 158.32 27.5399 156.16 21.6899C150.44 23.7499 144.27 24.8799 137.83 24.8799V40.4499H137.84Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M131.13 3.1001C122.11 4.7101 114.19 9.5001 108.58 16.2801C111.99 18.4701 115.65 20.3001 119.52 21.6901C122.1 14.7001 126.09 8.3901 131.13 3.1001Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M137.84 24.88V2.5C135.55 2.5 133.31 2.71 131.13 3.1C126.09 8.39 122.1 14.7 119.52 21.69C125.24 23.75 131.41 24.88 137.85 24.88H137.84Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M137.84 24.88C144.27 24.88 150.44 23.75 156.17 21.69C153.59 14.7 149.6 8.39 144.56 3.1C142.38 2.71 140.14 2.5 137.85 2.5V24.88H137.84Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M144.55 77.7902C153.57 76.1802 161.49 71.3902 167.1 64.6102C163.69 62.4202 160.03 60.5902 156.16 59.2002C153.58 66.1902 149.59 72.5002 144.55 77.7902Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M108.58 64.6102C114.19 71.3902 122.11 76.1802 131.13 77.7902C126.09 72.5002 122.1 66.1902 119.52 59.2002C115.65 60.5902 111.99 62.4202 108.58 64.6102Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M137.84 56.02V78.4C140.13 78.4 142.37 78.19 144.55 77.8C149.59 72.51 153.58 66.2 156.16 59.21C150.44 57.15 144.27 56.02 137.83 56.02H137.84Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M137.84 56.02C131.41 56.02 125.24 57.15 119.51 59.21C122.09 66.2 126.08 72.51 131.12 77.8C133.3 78.19 135.54 78.4 137.83 78.4V56.02H137.84Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M8.39023 72.5H64.9902C69.5302 72.5 72.3602 67.57 70.0802 63.65L41.7802 15.09C39.5102 11.19 33.8802 11.19 31.6102 15.09L3.31023 63.65C1.02023 67.57 3.85023 72.5 8.40023 72.5H8.39023Z"
                                        stroke="#FFAEAE"
                                        stroke-width="5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path
                                        d="M36.7002 27.5801V52.5301"
                                        stroke="#FFAEAE"
                                        stroke-width="7"
                                        stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <circle cx="36.7002" cy="61.96" r="3.5" fill="#FFAEAE" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_507_750">
                                        <rect width="178.29" height="80.9" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            {{ sectionErrorCount[i] }} problem{{
                                sectionErrorCount[i] > 1 ? "s" : ""
                            }}
                            in this section
                        </div>
                    </li>

                    <button
                        type="submit"
                        class="btn"
                        :disabled="
                            sectionErrorCount.reduce((accumulator, currentValue) => {
                                return accumulator + currentValue;
                            }, 0) > 0
                        ">
                        Submit
                    </button>
                </section>
            </form>
        </div>
    </div>
</template>

<style lang="scss">
.panel-border {
    border-image-slice: 116 125 303 31;
    border-image-width: 116px 125px 303px 31px;
    border-image-outset: 0px 0px 0px 0px;
    border-image-repeat: stretch stretch;
    border-image-source: url("/images/apply-border.svg");
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;
}

.form-sections-menu {
    padding: 0 4rem;
}

.form-section-menu-list {
    border-left: 1px solid var(--color-white);
    padding-top: 4rem;

    li {
        padding-block: 0.25rem;
        position: relative;
        text-transform: uppercase;
        opacity: 0.5;
        cursor: pointer;
        white-space: nowrap;

        span {
            display: block;
            margin-left: 1rem;
        }

        &:hover {
            color: var(--color-primary);
            opacity: 1;
        }
    }
    li.active {
        opacity: 1;
    }

    li.active::before {
        content: "";
        display: inline-block;
        width: 0px;
        height: 0px;
        border-style: solid;
        border-width: 0.4em 0 0.4em 0.7em;
        border-color: transparent transparent transparent var(--color-white);
        transform: rotate(0deg);
        position: absolute;
        top: 50%;
        transform: translateY(-70%);
    }
}

.form-section {
    padding-inline: 4rem;
    animation-name: flicker-on;
    animation-duration: 300ms;
    animation-fill-mode: forwards;
}

.section-overview {
    list-style-type: none;
    padding: 1rem;
    border: 1px solid var(--color-white);
    position: relative;
    margin-bottom: 1rem;
    cursor: pointer;

    &.valid {
        text-decoration: line-through;
        opacity: 0.5;
    }

    &.invalid {
        color: var(--color-red);
        border-color: var(--color-red);
    }

    &.invalid:hover {
        background-color: var(--color-red);
        border-color: var(--color-red);
        color: var(--color-black);
    }

    &:hover {
        background-color: var(--color-white);
        border-color: var(--color-white);
        color: var(--color-black);

        animation-name: flicker-on;
        animation-duration: 300ms;
        animation-fill-mode: forwards;
    }
}

.flicker {
    animation: flicker 1s linear infinite;
}

.error-icon {
    height: 1.5em;
    width: auto;
    position: absolute;
    top: 1rem;
    right: 1rem;
}

@media screen and (max-width: 40rem) {
    .form-section {
        padding-inline: 0rem;
    }
}
</style>
