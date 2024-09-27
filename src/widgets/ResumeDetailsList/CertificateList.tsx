"use client"

import React from "react"
import toast from "react-hot-toast"

import { DraggableItem } from "./DraggableItem"
import { useAppDispatch } from "@/app/store"
import { deleteResumeItem, selectItem, toggleStatus } from "@/entities/resume"
import type { ICertificate } from "@/shared/lib/types"

const CertificateList = React.memo(function List({
  certificates = []
}: {
  certificates: ICertificate[]
}) {
  const dispatch = useAppDispatch()

  const onEditChange = (educationId: string) => {
    dispatch(selectItem({ id: educationId, key: "certificates" }))
    dispatch(toggleStatus({ key: "isEditing", content: "certificates" }))
  }

  const onRemove = (certificateId: string) => {
    dispatch(deleteResumeItem({ key: "certificates", id: certificateId }))
    toast.success("Successfully deleted!")
  }

  return certificates.map((certificate: ICertificate, index: number) => (
    <DraggableItem
      key={certificate.id}
      index={index}
      item={certificate}
      onEditChange={() => onEditChange(certificate.id)}
      onRemove={() => onRemove(certificate.id)}
      render={(item) => (
        <>
          <p>{item.certificate}</p>
          <p className="text-xs">{item.information}</p>
        </>
      )}
    />
  ))
})

export { CertificateList }
